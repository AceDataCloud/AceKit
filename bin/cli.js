#!/usr/bin/env node
/**
 * AceKit — one command to wire every AceData AI capability into your coding agent.
 *
 * v0.1.0: the front door. The actual skill install is delegated to the published
 * `@acedatacloud/skills` engine (`install --target <dir>`), so we don't rebuild the
 * per-agent wiring. AceKit owns: detection, token onboarding, and the funnel CTA.
 * Per-capability selection and MCP-server config are on the roadmap (see README).
 */
import { execSync, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

const SIGNUP_URL =
  'https://platform.acedata.cloud/?inviter_id=4c37bac7-d460-4d5e-8a72-8d5312050f2c&utm_source=cli&utm_campaign=acekit';
const TOKEN_ENV = 'ACEDATACLOUD_API_TOKEN';
const SKILLS_PKG = '@acedatacloud/skills';

// Detect installed agents and the skills dir we install into for each.
const AGENTS = [
  { id: 'claude-code', name: 'Claude Code', probe: '.claude', skillsDir: '.claude/skills' },
  { id: 'codex', name: 'Codex CLI', probe: '.codex', skillsDir: '.agents/skills' },
  { id: 'cursor', name: 'Cursor', probe: '.cursor', skillsDir: '.agents/skills' },
  { id: 'gemini', name: 'Gemini CLI', probe: '.gemini', skillsDir: '.agents/skills' }
];

function detectAgents() {
  const home = homedir();
  return AGENTS.filter((a) => existsSync(join(home, a.probe)));
}

function parseArgs(argv) {
  const args = argv.slice(2);
  if (args.includes('--help') || args.includes('-h')) return { cmd: 'help' };
  if (args[0] === 'list') return { cmd: 'list' };
  if (args[0] === 'add') return { cmd: 'add', target: args[1] };
  return { cmd: 'install' };
}

async function ensureToken() {
  if (process.env[TOKEN_ENV]) return process.env[TOKEN_ENV];
  console.log(`\n🔑  AceKit needs an AceData API key (free quota, no card).`);
  console.log(`    Get one in ~30s → ${SIGNUP_URL}\n`);
  const rl = createInterface({ input: stdin, output: stdout });
  const token = (await rl.question(`    Paste your ${TOKEN_ENV} (or leave blank to set later): `)).trim();
  rl.close();
  if (token) process.env[TOKEN_ENV] = token;
  return token || null;
}

// Reuse the published engine: copies the full skill toolkit into a target dir.
function installToDir(targetDir) {
  const cmd = `npx -y ${SKILLS_PKG} install --target "${targetDir}"`;
  console.log(`    $ ${cmd}`);
  return spawnSync(cmd, { stdio: 'inherit', shell: true }).status === 0;
}

function printHelp() {
  console.log(`
AceKit — every AI media & model API inside your coding agent.

Usage:
  npx acekit                 Install the AceData skill toolkit into all detected agents
  npx acekit list            List available capabilities
  npx acekit --help

Roadmap: per-capability \`add <name>\` + per-agent MCP-server config (v0.2).
Capabilities: see catalog.json  ·  Free key: ${SIGNUP_URL}
`);
}

async function main() {
  const { cmd, target } = parseArgs(process.argv);
  if (cmd === 'help') return printHelp();
  if (cmd === 'list') {
    spawnSync(`npx -y ${SKILLS_PKG} list`, { stdio: 'inherit', shell: true });
    return;
  }
  if (cmd === 'add') {
    console.log(`\nℹ️  Per-capability install (\`add ${target || '<name>'}\`) lands in v0.2.`);
    console.log(`   For now \`npx acekit\` installs the full toolkit — every capability, one step.\n`);
  }

  console.log(`\n🃏  AceKit — wiring AI into your coding agent\n`);

  const home = homedir();
  const found = detectAgents();
  if (found.length === 0) {
    console.log(`⚠️  No supported agent detected (Claude Code, Cursor, Codex, Gemini).`);
    console.log(`   Installing to ~/.agents/skills/ — point your agent there.`);
  } else {
    console.log(`✓  Detected: ${found.map((a) => a.name).join(', ')}`);
  }

  await ensureToken();

  // Install into each detected agent's skills dir (dedupe identical targets).
  const targets = [...new Set((found.length ? found : [{ skillsDir: '.agents/skills' }]).map((a) => join(home, a.skillsDir)))];
  console.log(`\n📦  Installing the AceData skill toolkit via ${SKILLS_PKG} …`);
  let ok = true;
  for (const t of targets) ok = installToDir(t) && ok;

  if (ok) {
    console.log(`\n✅  Done. Try it now — ask your agent:`);
    console.log(`      "generate a hero image for this README"`);
    console.log(`      "turn this script into a 30-second video"`);
    if (!process.env[TOKEN_ENV]) {
      console.log(`\n   ℹ️  Set your key when ready:  export ${TOKEN_ENV}=...   (${SIGNUP_URL})`);
    }
    console.log(`\n   ⭐  If this helped, star us: https://github.com/AceDataCloud/AceKit`);
    console.log(`   💬  Questions? Join the community: https://discord.gg/f9GRuKCmRc\n`);
  } else {
    console.log(`\n❌  Install failed. Try a fresh terminal, or open an issue:`);
    console.log(`      https://github.com/AceDataCloud/AceKit/issues\n`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
