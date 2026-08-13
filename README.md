# YL SE Assistant

A reusable AI workflow skill for YL SE and pre-sales teams.

面向 YL SE 与售前团队的可复用 AI 工作流 Skill。

## Download / 下载

Download the latest package: [yl-se-assistant.zip](https://raw.githubusercontent.com/CHThomas-yu/yl-se-assistant/main/dist/yl-se-assistant.zip).

下载最新安装包：[yl-se-assistant.zip](https://raw.githubusercontent.com/CHThomas-yu/yl-se-assistant/main/dist/yl-se-assistant.zip)。

The installation package is named:

安装包名称为：

```text
yl-se-assistant.zip
```

## One-command Codex Installation / Codex 一键安装

No manual download is required. Open Windows CMD and run:

无需提前下载安装包。打开 Windows CMD 并执行：

```cmd
mkdir "%USERPROFILE%\.agents\skills" 2>nul & curl.exe -fL "https://raw.githubusercontent.com/CHThomas-yu/yl-se-assistant/main/dist/yl-se-assistant.zip" -o "%TEMP%\yl-se-assistant.zip" && tar.exe -xf "%TEMP%\yl-se-assistant.zip" -C "%USERPROFILE%\.agents\skills" && if exist "%USERPROFILE%\.agents\skills\yl-se-assistant\SKILL.md" (echo Installation successful) else (echo Installation failed)
```

The command downloads the current package from this repository, extracts it to the user-level Codex Skills directory, and verifies the installation.

该命令会从当前仓库自动下载安装包、解压至用户级 Codex Skills 目录并检查安装结果。

## Use in Codex / 在 Codex 中调用

Start Codex:

启动 Codex：

```cmd
codex
```

Then invoke the skill:

然后调用 Skill：

```text
$yl-se-assistant
```

Example / 示例：

```text
$yl-se-assistant Translate the latest email completely and extract the key points.
```

```text
$yl-se-assistant 完整翻译最新邮件，然后提炼重点。
```

## Install in ChatGPT / 在 ChatGPT 中安装

1. Download `yl-se-assistant.zip` using the link above.
   使用上方链接下载 `yl-se-assistant.zip`。
2. Open the **Skills** page and upload the ZIP without extracting it.
   打开 **Skills** 页面，直接上传 ZIP，无需解压。
3. Start a new conversation and select the installed skill with `@`.
   打开新对话，输入 `@` 并选择已安装的 Skill。

## Package Structure / 安装包结构

The ZIP must contain one top-level folder:

ZIP 内必须包含一个顶层文件夹：

```text
yl-se-assistant/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── assets/
│   └── icon.svg
└── references/
    ├── communication-workflow.md
    ├── solution-and-support.md
    └── technical-research.md
```

## Official Resources / 官方资源

- [YL Support](https://support.yealink.com)
- [YL Ticket](https://ticket.yealink.com/index)
- [OpenAI Skill Documentation](https://learn.chatgpt.com/docs/build-skills)

## Privacy and Disclaimer / 隐私与免责声明

Do not publish customer-confidential information, credentials, internal pricing, diagnostic logs, packet captures, or personal data. Technical conclusions should be reviewed against the latest official documentation before external use.

请勿公开客户机密信息、账号凭证、内部价格、诊断日志、抓包文件或个人信息。任何对外技术结论都应结合最新官方资料进行复核。

This repository is an independent productivity workflow and does not represent an official product statement, compatibility guarantee, support commitment, or final technical conclusion.

本项目是独立的效率工作流，不代表官方产品声明、兼容性保证、Support 承诺或最终技术结论。
