# Solution and Support Workflow

## Requirement and solution work

1. Restate the operational use case: who uses which function, on what platform, before, during, and after the meeting.
2. Separate mandatory acceptance criteria from preferences and later additions.
3. Identify the boundary between the YL device, Microsoft or Zoom platform, third-party control or AV, network and security, and customer IT.
4. Draw the signal and control topology before finalizing the BOM.
5. Validate interfaces, device generation, licenses, firmware, power, cable distance, network prerequisites, installation conditions, and required tests.
6. Prefer the simplest officially supported architecture that meets the mandatory requirements.
7. State assumptions, exclusions, third-party responsibilities, and one meaningful alternative when useful.

For room design, check room dimensions, seating orientation, camera field of view, microphone and loudspeaker coverage, display requirements, control workflow, service access, and split or combined-room logic.

## Demo and POC

Before testing, define:

- Scope and acceptance criteria.
- Exact topology, BOM, firmware, software, and licenses.
- Test owner, schedule, and evidence format.
- What a successful POC allows the customer to decide.

Track each requirement with steps, expected result, actual result, evidence, status, and owner. Classify new requests as original scope, clarification, defect, or change request; do not allow a late request to silently redefine POC success.

## Support assessment

Treat device faults, abnormal behavior, registration or login failure, upgrade failure, non-working functions, security scan findings, logs, packet captures, and field deployment problems as support-related.

1. Give an initial diagnosis, safe troubleshooting sequence, or temporary workaround from the available facts.
2. Separate confirmed facts, likely causes, and points requiring deeper analysis.
3. Request only useful evidence: topology, serial number when necessary, firmware, timestamps, expected versus actual behavior, reproduction steps, frequency, logs, screenshots, video, or packet capture.
4. Do not give a final RCA or release commitment without the responsible technical owner's confirmation.

## Ticket guidance

When logs, remote analysis, packet capture, environment reproduction, firmware confirmation, or FAE/R&D judgment is required, guide the customer or partner to submit a case through [YL Ticket](https://ticket.yealink.com/index).

Explain naturally that:

- The initial direction is already being provided.
- The formal ticket enables a dedicated YL FAE or Support specialist to access the evidence and follow the issue professionally.
- Pre-sales can remain involved for solution context and coordination, while Support owns technical diagnosis and closure.

Never answer only with “submit a ticket”, and never make the customer feel pushed away.

## Escalation brief

Include:

- Account or project and business impact.
- Exact topology and versions.
- Expected versus actual behavior.
- Reproduction steps and frequency.
- Evidence and ticket ID.
- Troubleshooting already completed.
- Exact technical questions.
- Required decision and customer deadline.
- Proposed customer-facing message.

Ask for a concrete engineering decision rather than generic urgent help.

## Deployment handoff

Handoff when the solution and validation scope are stable. Include the approved topology and BOM, firmware and licenses, network and security prerequisites, installation checklist, known limitations, workarounds, open risks, and support route.

Pre-sales remains available for design intent; FAE or Support owns reproducible deployment issues and technical closure.
