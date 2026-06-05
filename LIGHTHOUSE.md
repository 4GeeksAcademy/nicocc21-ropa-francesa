# Lighthouse antes/despues para Desordre

Este flujo genera metricas comparables para:
- index.html
- catalog.html
- cart.html
- checkout.html
- product.html

Incluye:
- FCP
- LCP
- CLS
- TBT
- INP (cuando este disponible en el JSON del navegador/version)
- Performance Score

## 1) Requisitos

Instala Node.js 18+ y Google Chrome/Chromium.

Verifica:

```bash
node -v
npm -v
google-chrome --version || chromium --version
```

## 2) Ejecutar auditoria completa

Desde la raiz del repo:

```bash
chmod +x scripts/run-lighthouse.sh
./scripts/run-lighthouse.sh
```

Esto crea:
- reports/lighthouse/raw/*.json
- reports/lighthouse/summary.md

## 3) Flujo recomendado de medicion

1. Ejecuta el script en el estado actual y guarda el archivo summary como baseline.
2. Aplica cambios de rendimiento.
3. Ejecuta otra vez el script.
4. Compara las tablas de summary.

## 4) Notas de consistencia

- Cierra apps pesadas antes de medir.
- Ejecuta al menos 2 o 3 veces y toma mediana.
- Usa la misma maquina y mismas condiciones para comparar.

## 5) Plantilla de reporte final

Copia esta tabla y rellena con los valores de reports/lighthouse/summary.md:

| Pagina | Modo | FCP | LCP | CLS | TBT | INP | Score |
|---|---|---:|---:|---:|---:|---:|---:|
| Home | Mobile |  |  |  |  |  |  |
| Home | Desktop |  |  |  |  |  |  |
| Catalog | Mobile |  |  |  |  |  |  |
| Catalog | Desktop |  |  |  |  |  |  |
| Cart | Mobile |  |  |  |  |  |  |
| Cart | Desktop |  |  |  |  |  |  |
| Checkout | Mobile |  |  |  |  |  |  |
| Checkout | Desktop |  |  |  |  |  |  |
| Product | Mobile |  |  |  |  |  |  |
| Product | Desktop |  |  |  |  |  |  |
