<div align="center">

# AceKit

### One command — **every AI media & model API inside your coding agent**

**Generate images, video, music, and run web search from Claude Code, Cursor, Codex, Gemini CLI & more — without leaving your editor. One install, one key, free quota to start.**

一行命令,把**图片 / 视频 / 音乐 / 搜索等全部 AI 能力**装进你的编码 agent(Claude Code · Cursor · Codex · Gemini CLI…)。一次安装、一个 key、免费额度起步。

<p>
  <a href="#-quick-start">⚡ Quick start</a> ·
  <a href="#-whats-inside">🧰 What's inside</a> ·
  <a href="https://platform.acedata.cloud">🔑 Free API key</a> ·
  <a href="https://discord.gg/f9GRuKCmRc">💬 Discord</a> ·
  <a href="#-star-us">⭐ Star us</a>
</p>

<p>
  <img alt="stars" src="https://img.shields.io/github/stars/AceDataCloud/AceKit?style=flat&color=blueviolet" />
  <img alt="npm" src="https://img.shields.io/npm/v/acekit?style=flat&logo=npm" />
  <img alt="license" src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat" />
  <img alt="agents" src="https://img.shields.io/badge/works%20with-Claude%20Code%20%7C%20Cursor%20%7C%20Codex%20%7C%20Gemini-black?style=flat" />
</p>

</div>

---

## ⚡ Quick start

```bash
npx acekit
```

AceKit detects every AI coding agent on your machine (Claude Code, Cursor, Codex, Gemini CLI, …) and installs the full AceData skill toolkit so your agent can immediately:

```text
"generate a hero image for this README"          → image (Midjourney / Flux / Seedream / NanoBanana)
"turn this script into a 30-second video"         → video (Sora / Veo / Kling / Seedance)
"compose background music for the demo"           → music (Suno)
"search the web for the latest X and summarize"   → web search (SERP)
```

```bash
npx acekit list      # see available capabilities
npx acekit --help
```

> **Free quota included.** Grab a key at **[platform.acedata.cloud](https://platform.acedata.cloud)** — no credit card to start. AceKit prompts for it on first run, or set `ACEDATACLOUD_API_TOKEN`.

---

## 🧰 What's inside

AceKit is the **front door** to the whole AceData developer surface. It installs the skill toolkit (and, on the roadmap, the matching MCP servers) so one key unlocks:

| Layer | What you get |
|---|---|
| 🧠 **Agent skills** | Battle-tested `SKILL.md` playbooks so your agent calls each API correctly (auth, async polling, retries). |
| 🔌 **MCP servers** | Suno · Midjourney · Flux · Seedream · NanoBanana · Sora · Veo · Kling · Hailuo · Wan · Luma · Seedance · SERP · ShortURL · … — published to PyPI, MCP Registry, VS Code, JetBrains, Smithery, Docker. |
| 🖥️ **CLIs** | `adc` unified CLI + per-service CLIs for terminal/CI use. |
| 📦 **SDKs** | Official Python & TypeScript SDKs, generated from our OpenAPI specs. |

One key (`ACEDATACLOUD_API_TOKEN`) unlocks all of it, billed by real usage at **[api.acedata.cloud](https://api.acedata.cloud)**.

---

## 🤖 Supported agents

| Agent | v0.1 |
|---|---|
| Claude Code | ✅ skills → `~/.claude/skills` |
| Codex CLI | ✅ skills → `~/.agents/skills` |
| Cursor / Gemini / OpenCode / others | ✅ skills → `~/.agents/skills` (point your agent there) |

> **Roadmap (v0.2):** per-capability `acekit add <name>`, and automatic per-agent MCP-server config (`claude mcp add-json`, Cursor deeplink).

---

## 🛠️ Capabilities

| Modality | Providers |
|---|---|
| 🖼️ Image | Midjourney · Flux · Seedream · NanoBanana · OpenAI Image · QR Art |
| 🎬 Video | Sora · Veo · Kling · Luma · Hailuo · Pixverse · Seedance · Wan |
| 🎵 Music | Suno |
| 🔎 Search | Google SERP (web · images · news · maps · videos) |
| 🔗 Utility | Short URL, and more |

Full catalog → [`catalog.json`](catalog.json).

---

## 💛 Star us

If AceKit saved you from hand-wiring a dozen AI APIs into your agent, give it a ⭐.
It tells the next developer this is worth their three seconds.

<a href="https://star-history.com/#AceDataCloud/AceKit&Date">
  <img alt="AceKit star history" src="https://api.star-history.com/svg?repos=AceDataCloud/AceKit&type=Date" width="70%" />
</a>

---

## 🔗 Links

- 🔑 Free API key & docs: <https://platform.acedata.cloud>
- 📚 API reference: <https://docs.acedata.cloud>
- 🧠 Skills source: <https://github.com/AceDataCloud/Skills>
- 🔌 MCP servers: <https://github.com/AceDataCloud/MCPs>
- 💬 Discord: <https://discord.gg/f9GRuKCmRc>
- 🐦 X: [@acedatacloud](https://x.com/acedatacloud)
- 📧 Email: office@acedata.cloud
- 🆘 Support: <https://platform.acedata.cloud/support>

## 📄 License

MIT © [AceDataCloud](https://platform.acedata.cloud)
