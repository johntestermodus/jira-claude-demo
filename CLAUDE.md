# Jira + Claude Agent Webinar Demo

**Goal:** Build a live demo for a webinar (10-minute slot) showing how Jira Cloud's "assign agent to column" feature routes work to Claude, which picks up tickets end-to-end (reads ticket → implements code → opens PR → reports back to Jira).

**Audience:** Mixed technical + business stakeholders.

**Teaching Point:** Jira Cloud lets you assign an AI agent (Claude) to a kanban column, so cards moved into that column auto-assign and trigger work without leaving Jira.

## Demo Use Case

**Ticket:** "Order timestamps show raw UTC instead of local time"
- **Priority:** Low
- **Trigger:** Jira Automation rule: when issue created with Priority=Low → move to "Claude – In Progress" column → auto-assign to Claude Agent for Jira
- **What happens:** Claude reads the ticket, modifies the Orders page to format timestamps in user's local timezone with friendly format (e.g., "Sep 20, 2026, 9:32 AM"), updates tests, opens a PR with the changes, streams status back to the Jira issue
- **Visual payoff:** Before/after screenshot of Orders page; side-by-side diff in PR

## Demo Repo Structure

This repo contains:
- `app/` — small Orders admin demo app (Node/Express or simple static app) with list view showing orders with timestamps
- Sample orders seeded with raw UTC timestamps
- Tests covering the timestamp formatting logic
- GitHub integration: repo is connected to Claude Agent for Jira, and to a Jira project/board

## Phases

1. **Build demo app locally** (this phase)
   - Create Orders list UI with raw UTC timestamps
   - Seed sample data
   - Add basic test suite
   
2. **Set up Jira Cloud + GitHub wiring** (next)
   - Create Jira Kanban project
   - Install Claude Agent for Jira from Marketplace
   - Connect GitHub repo
   - Add automation rule + board column assignment
   
3. **Dry run** (before webinar)
   - Create the real ticket, watch flow end-to-end, time it
   - Prepare fallback (screenshots/recording) for live demo backup
   
4. **10-minute webinar script**
   - Open: "Work reaches AI agents without leaving Jira"
   - Show board setup (30 sec)
   - Create ticket (30 sec)
   - Watch automation + agent work (2-3 min, possibly sped up)
   - Review PR, merge, show fixed UI (1 min)
   - Close with the value prop

## Tech Stack (TBD)

- Frontend: React or vanilla JS + HTML/CSS (simple, no build complexity for a demo)
- Backend: Node/Express (or static for simplicity)
- Package manager: npm
- Testing: Jest or Vitest
- GitHub + Jira Cloud + Claude Agent for Jira Marketplace app
