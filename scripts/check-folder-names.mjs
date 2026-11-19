import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import path from 'node:path'
const files = execFileSync('git', ['ls-files', '-z', '--cached', '--others', '--exclude-standard'], { encoding: 'utf8' }).split('\0').filter(Boolean)
const ignored = new Set(['node_modules', '.next', '.vercel', '.git', '.claude'])
const valid = name => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) || /^\([a-z0-9]+(?:-[a-z0-9]+)*\)$/.test(name) || /^\[(?:\.\.\.)?[a-z][a-z0-9]*\]$/.test(name) || /^\[\[\.\.\.[a-z][a-z0-9]*\]\]$/.test(name)
const bad = new Set()
for (const file of files) {
  if (!existsSync(file)) continue
  const parts = path.dirname(file).split('/')
  if (parts.some(p => ignored.has(p))) continue
  for (const part of parts) if (part !== '.' && !valid(part)) bad.add(part)
}
if (bad.size) { console.error('Invalid source folder names:', [...bad].join(', ')); process.exitCode = 1 }
else console.log('Source folder naming PASS')
