# Technical Research

Use this workflow for product capability, compatibility, firmware, configuration, topology, licensing, lifecycle, service policy, security, API, protocol, Teams behavior, or third-party integration questions.

## Source order

Use sources in this order:

1. Current official YL Support documents and official YL product pages.
2. Current official Microsoft documentation for Teams, certification, licensing, and platform behavior.
3. Current official documentation from the relevant third-party vendor.
4. User-provided YL training, engineering, product, or ticket material.
5. A named reply from Product, FAE, Support, or R&D.
6. Reproducible field evidence.
7. Clearly labeled engineering inference.

Prefer public official sources for customer-facing citations. Never use memory or internal notes as external proof.

## Search YL Support

Start at [YL Support](https://support.yealink.com) and try multiple queries:

```text
site:support.yealink.com <model> <feature>
site:support.yealink.com <model> release notes
site:support.yealink.com <model> administrator guide
site:support.yealink.com <model> compatibility
```

Also search exact error text, setting names, menu labels, protocols, ports, and parameters.

Inspect the relevant product page, datasheet, Administrator Guide, User Guide, deployment guide, release notes, FAQ, KB, compatibility list, troubleshooting guide, security white paper, or service-policy page. Confirm the exact model, generation, platform mode, firmware, license, topology, limitation, and publication date.

## Classify the conclusion

Use one status for each material conclusion:

| Status | Use when |
| --- | --- |
| Officially supported | A current primary source confirms the exact model, mode, and function |
| Theoretically possible | Interfaces or standards suggest feasibility, but the exact workflow is not validated |
| Not officially validated | No primary source confirms the exact combination or workflow |
| Unsupported | A primary source or responsible owner explicitly excludes it |
| Pending confirmation | Product, FAE, Support, or R&D must resolve the point |

Do not convert absence of documentation into an unsupported claim.

## Cite precisely

- Cite every material factual claim near the sentence or table row it supports.
- Link directly to the original page or document, never to search results.
- Do not use an unrelated official document merely to provide a citation.
- For long documents, include the section or page when available.
- Ensure the source matches the exact model, generation, mode, firmware, and feature.
- When no direct YL source exists, state: `在 YL Support 网站未找到直接对应资料。`
- Label any remaining advice as general engineering inference or pending confirmation.

## Cross-check boundaries

- Cross-check feature pages against guides and release notes.
- Cross-check compatibility against the current compatibility list.
- Cross-check Teams behavior with official Microsoft documentation.
- Cross-check third-party integration against both vendors' documented boundaries.
- Prefer the newer and more specific source when official materials conflict; disclose the conflict and avoid a firm commitment.

## Output format

Use:

1. `【结论】` — direct answer plus evidence status.
2. `【官方依据】` — source-backed facts.
3. `【技术关键信息对照】` — `English / 中文 / 条件与限制 / 来源`.
4. `【未确认项与风险】` — missing, conflicting, or owner-dependent points.
5. `【建议下一步】` — customer wording, test, or escalation question.
6. `【原始链接】` — primary sources only.

Keep standard terms such as SIP, PoE, BYOD, MTR, Teams Rooms, Zoom Rooms, DECT, Dante, VLAN, and 802.1X in English. Do not simplify away official conditions.
