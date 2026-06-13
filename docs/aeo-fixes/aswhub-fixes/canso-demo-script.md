# CANSO Visibility Demo — Run Sheet & Capture Grid
_The artifact to present. Canonical hub: aswhub.maxifidigital.com · run logged-out, all 5 engines._

## The narrative arc (15 min)
1. **Hook (Cat 4):** Ask AI to describe CANSO / an operator. Show what's thin, stale, or wrong. _"This is the answer 7,000 of your stakeholders get today."_
2. **The gap (Cat 1):** Ask the buyer's procurement question. Show no one's cited. _"This is the question your members ask — nobody's home."_
3. **The proof (Cat 2):** Ask about Airspace World 2026. Show the **hub cited as source**. _"This is your event, sourced from a hub we built in weeks."_
4. **The close:** Presence you created vs absence you can fill → the offer.

## Run protocol (do this exactly, or the proof looks cherry-picked)
- Engines: **ChatGPT (search on), Perplexity, Gemini, Copilot, Claude (web)**. Perplexity + ChatGPT screenshot best (visible citations).
- **Logged-out / incognito.** Run each prompt **3×**. Note variance — variance is part of the story.
- Capture per cell: ① verbatim answer text ② sources/citation panel ③ engine + date.
- Score **citation share** = answers naming the target ÷ total runs. Benchmark hub vs `airspaceworld.com` and `canso.org`.

## Capture grid (one row per prompt × engine)

| # | Cat | Prompt (short) | Engine | Hub cited? | Target named? | Competitor cited? | Verbatim note + source | Screenshot |
|---|-----|----------------|--------|-----------|---------------|-------------------|------------------------|-----------|
| 6 | 2 | Key themes ASW 2026 | ChatGPT | | | | | |
| 6 | 2 | Key themes ASW 2026 | Perplexity | | | | | |
| 7 | 2 | Summarise CANSO ASW sessions | Perplexity | | | | | |
| 11 | 2 | Where to find ASW recaps | ChatGPT | | | | | |
| 1 | 1 | Who does AEO for aviation | Perplexity | | | | | |
| 2 | 1 | Agency to get ANSP cited in AI | ChatGPT | | | | | |
| 18 | 4 | What is CANSO | Gemini | | | | | |
| 19 | 4 | CANSO position on AAM/drones | ChatGPT | | | | | |
| 21 | 4 | What is [NATS] known for | Perplexity | | | | | |
| 24 | 5 | Most advanced ANSP (NATS/DFS/ENAV/ENAIRE) | ChatGPT | | | | | |
| 12 | 3 | ANSPs integrating AAM/eVTOL | Perplexity | | | | | |
| 27 | 6 | Event→AI citation asset example | ChatGPT | | | | | |

_(Full 27-prompt bank lives in `canso-proof-prompts.md` — add rows as you run them.)_

## Scorecard slide (fill after the run)
- **Citation share — Airspace World 2026 questions:** hub ___% vs airspaceworld.com ___% vs none ___%
- **Procurement questions where Maxifi appears:** ___ / 5
- **Entity-accuracy errors captured (CANSO + operators):** ___ (list verbatim)
- **Single strongest proof point:** prompt #___ on ___ → hub cited as primary source.

## Pre-demo checklist (depends on C1/C2 fixes)
- [ ] Hub returns 200 to GPTBot/ClaudeBot/PerplexityBot (`audit-findings.md` C1)
- [ ] Subdomain canonical live; `/asw-hub` 301'd
- [ ] Event + FAQPage JSON-LD published on hub
- [ ] Post-event tense + concluded banner live (so a live query doesn't surface "upcoming")
- [ ] Re-run Cat-2 prompts 48h after fixes ship — capture the before/after delta as the lead slide
