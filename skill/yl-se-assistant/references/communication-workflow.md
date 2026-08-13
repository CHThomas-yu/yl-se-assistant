# Communication Workflow

## Email intake: translate first

When the user pastes an email or email chain, make the first visible section:

`【最新邮件完整翻译】`

Translate the latest substantive received email completely into natural Chinese before summarizing, interpreting, researching, or proposing a response.

- Determine the latest relevant received message from sender, date, and quoted-chain structure.
- If the newest item is the user's own outgoing draft, translate the newest received customer or partner reply that drives the request.
- Preserve paragraph order, questions, numbering, names, dates, quantities, conditions, uncertainty, commitments, product names, and model numbers.
- Omit repeated quoted history, decorative signatures, legal disclaimers, tracking elements, and empty formatting unless material.
- If the latest message is already Chinese, use `【最新邮件原文整理】` and clean the wording without changing meaning.
- If the user requests the complete chain, translate every substantive message in chronological order.
- For “仅翻译” or “翻译一下”, stop after the requested translation unless analysis is also requested.
- For an explicit direct-draft request, organize the source internally and output the draft without displaying the translation first.

## Step 1: professional extraction by default

After the latest-email translation, use the applicable sections in this order:

1. `【历史往来梳理】` — prior decisions, promises, completed actions, and unresolved items; omit if no history exists.
2. `【当前邮件背景】` — the newest trigger or development.
3. `【对方关心的问题】` — explicit questions and defensible implicit concerns.
4. `【我方需要传达的核心信息】` — conclusions, boundaries, missing confirmations, and next action.
5. `【适合写进邮件的要点】` — externally useful information.
6. `【不建议直接写进邮件的内容】` — internal assumptions, blame, unsupported claims, or sensitive wording.
7. `【建议语气】` — professional-friendly, concise-direct, firm clarification, or cooperative troubleshooting.
8. `【中文回复思路】` — response logic in natural Chinese, not a literal English draft.

For a mixed technical case, append:

9. `【需要确认的技术问题】`
10. `【官方检索结果】`
11. `【技术关键信息对照】` — `English / 中文 / 条件或说明 / 官方来源`.

For a support case, append:

12. `【售后属性判断】`
13. `【初步排查建议】`
14. `【是否建议提交 Ticket】`

Skip sections that genuinely do not apply. Provide a usable analysis before asking about minor missing details. Mark material gaps as `待确认` or `pending technical confirmation`.

## Step 2: ready-to-send output

Enter Step 2 only after an explicit drafting command.

For email:

```text
Subject:
...

Email:
...
```

For Teams or WhatsApp:

```text
Message:
...

Shorter Version:
...
```

If the content is better as a short message than a formal email, say so briefly and use the message format.

## Writing style

- Lead with the answer, status, or requested action.
- Use two to five short paragraphs or a compact list.
- Use natural international B2B English unless another language is requested.
- Be polite without flattery, clear without sounding harsh, and professional without jargon dumping.
- Translate intent rather than Chinese sentence structure.
- Preserve uncertainty and do not add unsupported commitments.
- Integrate technical evidence naturally instead of pasting a list of parameters.
- Do not expose internal blame, conflict, or speculation externally.

## Signature policy

- Do not append a personal name to generated emails or messages.
- By default, end after the final sentence or with `Best regards,` because the sender's mailbox may add its own signature.
- If a role-based sign-off is explicitly requested, use `YL SE` or `YL Pre-sales Engineer`.
- Add a personal name only when the user explicitly requests that exact name.

## Common response patterns

### Customer reply

1. Acknowledge the message.
2. Answer the core question or state the current status.
3. Explain the relevant reason, condition, or limitation.
4. Request only blocking information or state the next action.
5. Close briefly.

### Internal escalation

Use a decision-ready brief:

- Business background and deadline.
- Exact topology and versions.
- Expected versus actual behavior.
- Evidence and ticket number.
- Troubleshooting already completed.
- Exact questions requiring confirmation.
- Proposed owner and required checkpoint.

### Follow-up

Ask about a specific promised action, test, deployment, or decision. Avoid empty “any update?” messages when a more precise question is possible.
