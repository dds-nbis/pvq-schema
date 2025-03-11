# PVQ Viewer

Herein lies a script to translate PVQ JSON Schema to Form.io schema to render a UI and PVQ form responses. 

[`genViewer.ts`](./genViewer.ts) is what does the translation and, as of Node v23, can be run directly without the need for transpilation:

```bash
node viewer/genViewer.ts
```

This will produce a long json object in `out/formio.json`, which the frontend in `react` depends on to scaffold the UI. 

Right now, PVQ response values are not being pulled in or displayed, just the skeleton for where those values would go. 

```bash
cd react
npm i
npm run dev
```