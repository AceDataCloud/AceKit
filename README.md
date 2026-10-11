<div align="center">

# AceKit

### One command — **every AI media & model API inside your coding agent**

**Generate images, video, music, and run web search from Claude Code, Cursor, Codex, Gemini CLI & more — without leaving your editor. One install and an API key with the service access you need.**

一行命令,把**图片 / 视频 / 音乐 / 搜索等全部 AI 能力**装进你的编码 agent(Claude Code · Cursor · Codex · Gemini CLI…)。一次安装，配置具有相应服务权限的 API Key。

<p>
  <a href="#-quick-start">⚡ Quick start</a> ·
  <a href="#-whats-inside">🧰 What's inside</a> ·
  <a href="https://platform.acedata.cloud/console/applications?inviter_id=4c37bac7-d460-4d5e-8a72-8d5312050f2c&utm_source=opensource&utm_medium=referral&utm_campaign=evergreen&utm_content=acekit_readme_api_key">🔑 Get API key</a> ·
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

## Get your Ace Data Cloud API key

1. Open [Ace Data Cloud → Applications](https://platform.acedata.cloud/console/applications?utm_source=opensource&utm_medium=referral&utm_campaign=evergreen&utm_content=acekit_readme_api_key). Sign in, or register an account first.
2. Find **General application**. If it has not been created, choose **Initialize General Application**. A general key can use the services available to your account; a dedicated application's key is limited to its service. Check the required service/model access and [current pricing](https://platform.acedata.cloud/models?utm_source=opensource&utm_medium=referral&utm_campaign=evergreen&utm_content=acekit_readme_pricing).
3. Copy the **API Key** from the application card, or open **Keys / Manage Keys → Create** to create a separate key for this integration. Give it a recognizable name so you can revoke or rotate it independently.
4. When creating a key, review **Expiration Time**, **Set Usage Limitation**, and **Allowed APIs**. Enable only the restrictions you need, allow the operations you will call, then click **Create** and copy the token from the key list. Task lookup does not grant permission to submit a generation. Confirm the application's balance can cover your first request; any trial allowance is whatever your account currently displays.
5. Copy only the token value, without quotation marks, spaces, or `Bearer `. An API Key / API Token field expects this raw value; only a manually configured HTTP `Authorization` header needs the `Bearer ` prefix. A `platform-...` account-management token cannot replace a generation API key.

![Copy an application API key or open Manage Keys](https://raw.githubusercontent.com/AceDataCloud/NanoBananaDify/2522b2f57210597af2db866445319334a1677a23/_assets/tutorial/get-api-key-en.png)

![Create a separately named key with optional restrictions](https://raw.githubusercontent.com/AceDataCloud/NanoBananaDify/2522b2f57210597af2db866445319334a1677a23/_assets/tutorial/create-api-key-en.png)

Save the key in the client's credential store or the environment variable shown below. Never put it in a prompt, shared workflow, screenshot, or Git commit. If authentication fails, check the full copied value, application/service access, expiration, usage limit, and balance before creating another key.

AceKit's first-run prompt makes the key available only to that installer process; it does not save a persistent credential for later agent sessions. Follow the installed skill's setup instructions and set `ACEDATACLOUD_API_TOKEN` in the environment that launches your agent. For OpenClaw, the [Skills first-run guide](https://github.com/AceDataCloud/Skills#first-run-with-clawhub-and-openclaw) explains its Gateway `.env` setup.

中文：先登录或注册平台，初始化通用应用，在 **密钥 / 管理密钥 → 创建** 中建立并复制 Key，检查权限、余额、有效期与额度限制。只复制 Token 本身，不加 `Bearer `。AceKit 安装时输入的 Key 不会自动保存给之后的 Agent 会话；请按 Skill 文档配置 Agent 的环境变量。

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

> **Check your account allowance and current pricing.** Create a key at **[platform.acedata.cloud](https://platform.acedata.cloud/console/applications?inviter_id=4c37bac7-d460-4d5e-8a72-8d5312050f2c&utm_source=opensource&utm_medium=referral&utm_campaign=evergreen&utm_content=acekit_readme_api_key)** using the steps above. Set `ACEDATACLOUD_API_TOKEN` for your agent before making API calls.

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

- 🔑 Get API key & docs: <https://platform.acedata.cloud/console/applications?inviter_id=4c37bac7-d460-4d5e-8a72-8d5312050f2c&utm_source=opensource&utm_medium=referral&utm_campaign=evergreen&utm_content=acekit_readme_api_key>
- 📚 API reference: <https://platform.acedata.cloud/documents?utm_source=opensource&utm_medium=referral&utm_campaign=evergreen&utm_content=acekit_readme_documents>
- 🧠 Skills source: <https://github.com/AceDataCloud/Skills>
- 🔌 MCP servers: <https://github.com/AceDataCloud/MCPs>
- 💬 Discord: <https://discord.gg/f9GRuKCmRc>
- 🐦 X: [@acedatacloud](https://x.com/acedatacloud)
- 📧 Email: office@acedata.cloud
- 🆘 Support: <https://platform.acedata.cloud/support?utm_source=opensource&utm_medium=referral&utm_campaign=evergreen&utm_content=acekit_readme_support>

## 📄 License

MIT © [AceDataCloud](https://platform.acedata.cloud?utm_source=opensource&utm_medium=referral&utm_campaign=evergreen&utm_content=acekit_readme_platform)
