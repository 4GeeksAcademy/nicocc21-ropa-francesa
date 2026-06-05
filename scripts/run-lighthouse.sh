#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
REPORT_DIR="$ROOT_DIR/reports/lighthouse"
RAW_DIR="$REPORT_DIR/raw"

PAGES=("index.html" "catalog.html" "cart.html" "checkout.html" "product.html")
MODES=("mobile" "desktop")

mkdir -p "$RAW_DIR"

if ! command -v node >/dev/null 2>&1; then
  echo "Error: node no esta instalado"
  exit 1
fi

if ! command -v npx >/dev/null 2>&1; then
  echo "Error: npx no esta disponible"
  exit 1
fi

if command -v google-chrome >/dev/null 2>&1; then
  CHROME_BIN="google-chrome"
elif command -v chromium >/dev/null 2>&1; then
  CHROME_BIN="chromium"
else
  echo "Error: no se encontro google-chrome ni chromium"
  exit 1
fi

cleanup() {
  if [[ -n "${SERVER_PID:-}" ]]; then
    kill "$SERVER_PID" >/dev/null 2>&1 || true
  fi
}
trap cleanup EXIT

cd "$ROOT_DIR"
python3 -m http.server 4173 >/tmp/desordre_lighthouse_server.log 2>&1 &
SERVER_PID=$!

sleep 1

for page in "${PAGES[@]}"; do
  name="${page%.html}"
  url="http://127.0.0.1:4173/$page"

  for mode in "${MODES[@]}"; do
    out="$RAW_DIR/${name}_${mode}.json"

    if [[ "$mode" == "mobile" ]]; then
      preset="mobile"
    else
      preset="desktop"
    fi

    echo "Auditando $url ($mode)..."
    npx --yes lighthouse "$url" \
      --preset="$preset" \
      --output=json \
      --output-path="$out" \
      --quiet \
      --chrome-flags="--headless=new --no-sandbox" \
      --chrome-path="$CHROME_BIN"
  done
done

SUMMARY_FILE="$REPORT_DIR/summary.md"
{
  echo "# Lighthouse Summary"
  echo
  echo "| Pagina | Modo | FCP | LCP | CLS | TBT | INP | Score |"
  echo "|---|---|---:|---:|---:|---:|---:|---:|"

  for page in "${PAGES[@]}"; do
    name="${page%.html}"
    label="${name^}"

    for mode in "${MODES[@]}"; do
      file="$RAW_DIR/${name}_${mode}.json"

      fcp=$(node -e 'const fs=require("fs");const j=JSON.parse(fs.readFileSync(process.argv[1],"utf8"));const v=j.audits["first-contentful-paint"]?.displayValue||"n/a";console.log(v);' "$file")
      lcp=$(node -e 'const fs=require("fs");const j=JSON.parse(fs.readFileSync(process.argv[1],"utf8"));const v=j.audits["largest-contentful-paint"]?.displayValue||"n/a";console.log(v);' "$file")
      cls=$(node -e 'const fs=require("fs");const j=JSON.parse(fs.readFileSync(process.argv[1],"utf8"));const v=j.audits["cumulative-layout-shift"]?.displayValue||"n/a";console.log(v);' "$file")
      tbt=$(node -e 'const fs=require("fs");const j=JSON.parse(fs.readFileSync(process.argv[1],"utf8"));const v=j.audits["total-blocking-time"]?.displayValue||"n/a";console.log(v);' "$file")
      inp=$(node -e 'const fs=require("fs");const j=JSON.parse(fs.readFileSync(process.argv[1],"utf8"));const a=j.audits["interaction-to-next-paint"]||j.audits["experimental-interaction-to-next-paint"];const v=a?.displayValue||"n/a";console.log(v);' "$file")
      score=$(node -e 'const fs=require("fs");const j=JSON.parse(fs.readFileSync(process.argv[1],"utf8"));const v=j.categories.performance?.score;console.log(typeof v==="number"?Math.round(v*100):"n/a");' "$file")

      echo "| $label | ${mode^} | $fcp | $lcp | $cls | $tbt | $inp | $score |"
    done
  done
} > "$SUMMARY_FILE"

echo
echo "Listo. Revisa: $SUMMARY_FILE"
