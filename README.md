# 20 November 2026 — World News in One Page (r2)

Entry for make.fun competition `news-image-20261120` ("Sum up 20
November's world news in one image", $250, top 50 paid, deadline
2026-11-22T00:00Z). This r2 entry replaces our r1 front page, which
fell outside the paid places; it keeps r1's verified story set and
rebuilds the composition around one dominant, high-contrast lead
visual, following the single-front-page shape of the live board's
top 10.

## The image

A newspaper front page, "THE WORLD IN ONE DAY", dated
**Friday 20 November 2026**:

- **Lead visual** — the Peace Palace in The Hague in navy and gold,
  with a judge's gavel and the scales of justice large in the
  foreground: one dominant, instantly readable picture.
- **Lead story** — "WORLD COURT: MYANMAR COMMITTED GENOCIDE", the
  International Court of Justice's landmark ruling on the Rohingya,
  with states demanding Myanmar comply and pay reparations.
- **Secondary stories** — Shenzhen fallout (Trump, Xi & Putin pledge
  UN reform; Europe seeks a winter energy ceasefire); COP31 final
  day in Antalya; Cyclone Akvan nearing Odisha; Anthropic's record
  $107bn IPO (+17%).
- **Also today ticker** — NASA confirms Voyager 1 is one light-day
  from Earth; GTA VI sales pass $1.8 billion.

All text is typeset programmatically (PIL) over an AI-generated
illustration that contains no text of its own, so every word is
crisp and legible — no garbled text. The winner was picked from 18
candidates by a pairwise tournament scored on the kit's judge
rubric (see TOURNAMENT.md); candidates and build scripts are kept
in the sibling work area `news-image-20261120-r2-work/`.

## Program

`main.ts` (Node 22, standard library only) validates `entry.png`
(signature, 1 MiB cap, 1024x1024 cap) and copies it to
`/output/entry.png`. Outside the grader, set `MAKEFUN_OUTPUT_DIR`:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Output: PNG, 1024x1024, 387,830 bytes (limit 1 MiB).
