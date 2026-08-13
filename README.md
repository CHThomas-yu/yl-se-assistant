# YL SE Assistant

A reusable AI workflow skill for YL SE and pre-sales teams.

面向 YL SE 与售前团队的可复用 AI 工作流 Skill。

## Recommended Installation / 推荐安装方式

For most users, the recommended method is to download the ZIP package and upload it directly to an AI tool that supports Skills. No CMD, Git, Node.js, or proxy configuration is required.

对于大多数用户，推荐直接下载 ZIP 安装包，并上传到支持 Skills 的 AI 工具中。无需使用 CMD，也无需配置 Git、Node.js 或代理。

### 1. Download / 下载

Download the latest package:

下载最新安装包：

**[Download yl-se-assistant.zip / 下载 yl-se-assistant.zip](https://raw.githubusercontent.com/CHThomas-yu/yl-se-assistant/main/dist/yl-se-assistant.zip)**

### 2. Upload to your AI tool / 上传到 AI 工具

1. Open the **Skills**, **Agent Skills**, **Extensions**, or similar management page in your AI tool.  
   打开 AI 工具中的 **Skills**、**Agent Skills**、**Extensions** 或类似管理页面。
2. Choose **Upload**, **Import**, or **Add Skill**.  
   选择 **Upload**、**Import** 或 **Add Skill**。
3. Upload `yl-se-assistant.zip` directly. Do not extract it unless the tool requires a folder.  
   直接上传 `yl-se-assistant.zip`。除非工具明确要求文件夹，否则无需解压。
4. If ZIP upload is not supported, extract the package and import the complete `yl-se-assistant` folder containing `SKILL.md`.  
   如果工具不支持 ZIP，请解压后导入包含 `SKILL.md` 的完整 `yl-se-assistant` 文件夹。
5. After installation, open a new conversation and select or mention the Skill.  
   安装完成后，打开新对话并选择或提及该 Skill。

> Skill installation menus and invocation syntax vary by AI tool, version, and workspace policy. Use the tool's current Skill management interface when available.
>
> 不同 AI 工具、版本及企业工作区的安装入口和调用方式可能不同，请以对应工具当前提供的 Skill 管理界面为准。

## How to Use / 如何调用

Select the installed Skill from the interface, or mention it using the syntax supported by your AI tool, such as:

在界面中选择已安装的 Skill，或按照 AI 工具支持的格式提及它，例如：

```text
@yl-se-assistant
```

Some Codex environments may use:

部分 Codex 环境也可能使用：

```text
$yl-se-assistant
```

Example / 示例：

```text
@yl-se-assistant 完整翻译最新邮件，然后提炼重点。
```

The Skill can also trigger automatically when the request clearly matches its workflow, depending on the AI tool.

如果用户请求与工作流明显匹配，部分 AI 工具也可能自动调用该 Skill。

## Update / 更新

To update the Skill, download the latest ZIP package from this repository and upload it again. If the AI tool does not support replacement, remove the old version first and then import the new package.

如需更新，请重新下载本仓库中的最新 ZIP 并再次上传。如果 AI 工具不支持直接覆盖，请先移除旧版本，再导入新版本。

## CMD Installation / CMD 命令行安装

CMD-based installation is currently considered an advanced or experimental method because it depends on the user's operating system, Node.js, Git, network access, proxy variables, and AI-tool installation paths.

CMD 命令行安装目前属于高级或实验性方式，因为它会受到操作系统、Node.js、Git、网络访问、代理变量以及不同 AI 工具安装路径的影响。

For a stable team-wide rollout, use the ZIP upload method above. A simplified and environment-independent CMD installation method may be added in a future release.

团队内部统一使用时，请优先采用上方的 ZIP 上传方式。后续版本将继续迭代更简单、尽量不依赖用户环境的 CMD 安装方案。

## Package Structure / 安装包结构

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

## Troubleshooting / 常见问题

- **The AI tool cannot recognize the ZIP / AI 工具无法识别 ZIP**  
  Extract the ZIP and import the complete `yl-se-assistant` folder.  
  解压 ZIP，并导入完整的 `yl-se-assistant` 文件夹。

- **The Skill does not appear after installation / 安装后未显示 Skill**  
  Refresh or reopen the Skills page, then start a new conversation.  
  刷新或重新打开 Skills 页面，再新建一个对话。

- **The Skill is not triggered automatically / Skill 没有自动触发**  
  Select it manually or mention `@yl-se-assistant`.  
  手动选择该 Skill，或输入 `@yl-se-assistant`。

## Official Resources / 官方资源

- [YL Support](https://support.yealink.com)
- [YL Ticket](https://ticket.yealink.com/index)
- [OpenAI Skill Documentation](https://learn.chatgpt.com/docs/build-skills)

## Privacy and Disclaimer / 隐私与免责声明

Do not upload customer-confidential information, credentials, internal pricing, diagnostic logs, packet captures, or personal data to public or unauthorized environments. Review technical conclusions against the latest official documentation before external use.

请勿将客户机密信息、账号凭证、内部价格、诊断日志、抓包文件或个人数据上传到公开或未经授权的环境。任何对外技术结论都应结合最新官方资料进行复核。

This repository is an independent productivity workflow. It does not represent an official product statement, compatibility guarantee, support commitment, or final technical conclusion.

本项目是独立的效率工作流，不代表官方产品声明、兼容性保证、Support 承诺或最终技术结论。
