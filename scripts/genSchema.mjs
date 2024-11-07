import fs from 'fs'
const packageJson = {
  type: 'module',
};
fs.writeFileSync('lib/package.json', JSON.stringify(packageJson, null, 2))
import { PVQSchema } from "../lib/schema.js"
fs.writeFileSync('lib/schema.json', JSON.stringify(PVQSchema, null, 2))
fs.rmSync('lib/package.json')