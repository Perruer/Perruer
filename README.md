<picture>
  <source media="(prefers-color-scheme: dark)" srcset="banner-dark.svg">
  <img src="banner-light.svg" width="100%" alt="Perruer: giving abandoned open-source projects a second life">
</picture>

I pick up useful open-source tools that their authors had to leave behind and bring them back to life:
fix what broke, rewrite them for today's platforms, and ship the features users kept asking for in the
issues. The original authors are always credited, and the licenses are kept.

- 🔭 Just released **[Sapper](https://github.com/Perruer/sapper)**: which of your products does this CVE reach? SBOM graph with CISA KEV, EPSS and OpenVEX, the continuation of Minefield
- 🧰 Also new: **[Yapix](https://github.com/Perruer/yapix)**, API docs, mock server and API tests for teams, the security-maintained continuation of YApi
- 🧩 Browser extensions for Firefox, Chrome and Edge (Manifest V3, one code base)
- 🛡️ Self-hosted platforms kept safe to run: isolated scripts, current dependencies, upgrade tests on real old databases
- ⚙️ Command-line tools in Go and Python libraries
- 🧪 Every revived project ships with end-to-end tests: real browsers, real providers
- 💡 Know an abandoned project that deserves a second life? [Tell me](https://github.com/Perruer/Perruer/issues/new)

## Projects

<table>
  <tr>
    <td width="50%" valign="top">
      <img src="sapper.svg" width="44" align="left" alt="">
      <b><a href="https://github.com/Perruer/sapper">Sapper</a></b><br>
      <sub>CLI · SBOM · Vulnerabilities · Go</sub>
      <br clear="left">
      Shows which of your products a CVE reaches and through which dependencies, known-exploited
      (CISA KEV) and likely-exploited (EPSS) first. One static binary, works offline.<br>
      <sub>Continuation of <a href="https://github.com/bitbomdev/minefield">Minefield</a> (733★)</sub><br><br>
      <a href="https://github.com/Perruer/sapper/releases/latest"><b>Download →</b></a>
    </td>
    <td width="50%" valign="top">
      <img src="yapix.svg" width="44" align="left" alt="">
      <b><a href="https://github.com/Perruer/yapix">Yapix</a></b><br>
      <sub>Self-hosted · API docs · Mock server · Docker</sub>
      <br clear="left">
      API docs, a Mock.js mock server and API test collections for teams. Scripts run in an isolated
      V8 sandbox, tokens can't be forged, and your existing YApi database works as it is.<br>
      <sub>Continuation of <a href="https://github.com/YMFE/yapi">YApi</a> (27.7k★)</sub><br><br>
      <a href="https://github.com/Perruer/yapix#quick-start"><b>Run it →</b></a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="keelflow.svg" width="44" align="left" alt="">
      <b><a href="https://github.com/Perruer/keelflow">Keelflow</a></b><br>
      <sub>Self-hosted · AI agents · Docker</sub>
      <br clear="left">
      Build AI agents, RAG pipelines and chatbots visually. Security fixes, an Apache-2.0-only code
      base, and your existing Flowise flows, keys and data work as they are.<br>
      <sub>Continuation of <a href="https://github.com/FlowiseAI/Flowise">Flowise</a> (55k★)</sub><br><br>
      <a href="https://github.com/Perruer/keelflow#quick-start"><b>Run it →</b></a>
    </td>
    <td width="50%" valign="top">
      <img src="gorget.svg" width="44" align="left" alt="">
      <b><a href="https://github.com/Perruer/gorget">Gorget</a></b><br>
      <sub>Python · LLM security · ONNX</sub>
      <br clear="left">
      Scans prompts and answers of language models for prompt injection, personal data (including
      Russian documents), secrets and toxicity. Runs on CPU without PyTorch.<br>
      <sub>Continuation of <a href="https://github.com/protectai/llm-guard">LLM Guard</a> (3.2k★)</sub><br><br>
      <a href="https://github.com/Perruer/gorget#install"><b>Install →</b></a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="unclick.svg" width="44" align="left" alt="">
      <b><a href="https://github.com/Perruer/unclick">Unclick</a></b><br>
      <sub>CLI · OpenTofu · Terraform</sub>
      <br clear="left">
      Turns resources that already exist in your cloud accounts into OpenTofu / Terraform code with
      import blocks. 44 importers, plus discovery through the providers' own list resources.<br>
      <sub>Continuation of <a href="https://github.com/GoogleCloudPlatform/terraformer">Terraformer</a> (14.5k★)</sub><br><br>
      <a href="https://github.com/Perruer/unclick/releases/latest"><b>Download →</b></a>
    </td>
    <td width="50%" valign="top">
      <img src="notewing.svg" width="44" align="left" alt="">
      <b><a href="https://github.com/Perruer/notewing">Notewing</a></b><br>
      <sub>Web app · PWA · works offline</sub>
      <br clear="left">
      Markdown notes stored in your own GitHub repository. No server in between, instant search,
      images, version history.<br>
      <sub>Continuation of <a href="https://github.com/batnoter/batnoter">BatNoter</a> (2.4k★)</sub><br><br>
      <a href="https://perruer.github.io/notewing/"><b>Open the app →</b></a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="cookietin.svg" width="44" align="left" alt="">
      <b><a href="https://github.com/Perruer/cookietin">CookieTin</a></b><br>
      <sub>Firefox · Chrome · Edge</sub>
      <br clear="left">
      Cookie manager and editor that sees every cookie: containers, private windows and partitioned
      cookies. Import and export in all common formats.<br>
      <sub>Rewrite of <a href="https://github.com/ysard/cookie-quick-manager">Cookie Quick Manager</a></sub><br><br>
      <a href="https://github.com/Perruer/cookietin/releases/latest"><b>Download →</b></a>
    </td>
    <td width="50%" valign="top">
      <img src="wordtoast.svg" width="44" align="left" alt="">
      <b><a href="https://github.com/Perruer/wordtoast">WordToast</a></b><br>
      <sub>Firefox · Chrome · Edge</sub>
      <br clear="left">
      Translate selected text, keep a wordbook and review words with pop-up toasts. Google, DeepL,
      on-device or your own AI.<br>
      <sub>Rewrite of <a href="https://github.com/waynecz/dadda-translate-crx">Dadda Translate</a></sub><br><br>
      <a href="https://github.com/Perruer/wordtoast/releases/latest"><b>Download →</b></a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="skullclick.svg" width="44" align="left" alt="">
      <b><a href="https://github.com/Perruer/skullclick">SkullClick</a></b><br>
      <sub>Firefox · Chrome · Edge</sub>
      <br clear="left">
      Click to remove ads, pop-ups, cookie banners and any other annoying element from a web page.<br>
      <sub>Fork of <a href="https://github.com/rhardih/ekill">ekill</a></sub><br><br>
      <a href="https://github.com/Perruer/skullclick/releases/latest"><b>Download →</b></a>
    </td>
    <td width="50%" valign="top"></td>
  </tr>
</table>

## Tools I use

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![ONNX](https://img.shields.io/badge/ONNX_Runtime-005CED?style=flat-square&logo=onnx&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Preact](https://img.shields.io/badge/Preact-673AB8?style=flat-square&logo=preact&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![esbuild](https://img.shields.io/badge/esbuild-FFCF00?style=flat-square&logo=esbuild&logoColor=black)
![CodeMirror](https://img.shields.io/badge/CodeMirror-D30707?style=flat-square&logo=codemirror&logoColor=white)
![Puppeteer](https://img.shields.io/badge/Puppeteer-40B5A4?style=flat-square&logo=puppeteer&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox_Add--ons-FF7139?style=flat-square&logo=firefoxbrowser&logoColor=white)
![Chrome](https://img.shields.io/badge/Chrome_Extensions-4285F4?style=flat-square&logo=googlechrome&logoColor=white)
![OpenTofu](https://img.shields.io/badge/OpenTofu-FFDA18?style=flat-square&logo=opentofu&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

## Support my work

All projects are free, open source and without ads. If one of them saves you time, you can support
the work on them:

<a href="https://boosty.to/mikio_kuroki/donate"><img src="https://img.shields.io/badge/Support_on-Boosty-F15F2C?style=for-the-badge&logo=boosty&logoColor=white" alt="Support on Boosty"></a>

<details>
<summary><b>Crypto</b></summary>

- **USDT / TRX (TRON, TRC-20):** `TXUBW4e88SDTfrnJRKfbhYfFcggufbonc1`
- **ETH / USDT / USDC (Ethereum, BSC, Polygon and other EVM networks):** `0x1378491169064702786b2E5b58c6375776177E8A`
- **TON / USDT (TON):** `UQAhI7EKzoa-JuKOfv0ULMzA3FrmpxsDkXj8Qevwj2z1cMRN`

</details>

A ⭐ on a project, a bug report or an idea helps too.
