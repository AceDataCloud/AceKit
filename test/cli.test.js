import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

test('the installed AceKit engine lists ACE Music without invoking npx or global skills', () => {
  const entry = fileURLToPath(new URL('../bin/cli.js', import.meta.url));
  const result = spawnSync(process.execPath, [entry, 'list'], {
    env: { ...process.env, PATH: '' },
    encoding: 'utf8'
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /^  - ace-music$/m);
  assert.match(result.stdout, /^  - suno-music$/m);
});
