import fs from 'fs'
import { PVQSchema } from "../lib/index.js"
fs.writeFileSync('lib/schema.json', JSON.stringify(PVQSchema, null, 2))