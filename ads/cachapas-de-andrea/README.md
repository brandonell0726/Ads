# Cachapas De Andrea — sample reels

Venezuelan cachapa food truck, 44079 US-27, Davenport, FL 33897 ([Google Maps](https://maps.app.goo.gl/px4NrJLTNTeAJ8oU9)).
A free sample made to pitch them. **Don't post it as their ad without their OK.** All the scenes are AI-generated (Higgsfield), so tell them that when you show it.

## Final videos (made 2026-10-22)

| Version | Full quality | Lighter (WhatsApp, email) |
|---|---|---|
| 36 s reel, 1080×1920 (v2) | [53 MB](https://d2ol7oe51mr4n9.cloudfront.net/user_3KLFV0cEMmZSg7ppr0pWGFB5JyS/af3ab623-6701-4b61-b1eb-aae364d930b3.mp4) (media `af3ab623-6701-4b61-b1eb-aae364d930b3`) | [15 MB](https://d2ol7oe51mr4n9.cloudfront.net/user_3KLFV0cEMmZSg7ppr0pWGFB5JyS/4297c073-8c7c-4375-a1e8-63597ca28d44.mp4) (media `4297c073-8c7c-4375-a1e8-63597ca28d44`) |
| 16 s cut, 1080×1920 (v2) | [25 MB](https://d2ol7oe51mr4n9.cloudfront.net/user_3KLFV0cEMmZSg7ppr0pWGFB5JyS/64891cc3-d355-429d-9fc8-0f5316025d3a.mp4) (media `64891cc3-d355-429d-9fc8-0f5316025d3a`) | [6.5 MB](https://d2ol7oe51mr4n9.cloudfront.net/user_3KLFV0cEMmZSg7ppr0pWGFB5JyS/b71dbb4d-8e84-4d80-aec2-34b734a23845.mp4) (media `b71dbb4d-8e84-4d80-aec2-34b734a23845`) |

v2 replaces the griddle scene. Brandon pointed out that v1 poured batter onto a cachapa that was already cooked. The v1 files are still in Higgsfield (media `09cf9ad4…`, `a82f47b5…`, `454514f4…`, `8007af1c…`), but don't use them.

Cost: 111.50 Higgsfield credits (3,856.10 → 3,744.60), about $4.50 on the Ultra plan. That's 9 stills, 9 clips and one logo upscale, plus a redo of the griddle scene (2 stills and 1 clip). In the first version the batter was poured onto a cachapa that was already cooked, which made no sense. Its jobs are kept under `descartados` in `jobs.json`. The 16 s cut reuses the same clips, so it cost nothing extra.

## The idea

All on-screen text is in Spanish (Brandon's choice). It uses their own tagline, "Una cachapa nunca había sido tan cool", and the look of their logo: navy badge, gold lettering, corn.

Hook ("¿Antojo de cachapa?" over corn being cut) → on the beat drop their badge stamps onto the griddle, where raw batter is being spread, kernels fly out, "DESDE 2006" → the flip, "100% MAÍZ" → their menu as orange cards on two binder rings, like the tags on their real menu board: con queso de mano ("La clásica."), con carne mechada, con chicharrón, con tajada y queso → a quick four-cut burst: DORADITA / CALIENTICA / CRUJIENTE / SABROSA → nata dip, "¿Nata extra? ¡Obvio!" → 4.6★ from 54 Google reviews → badge, tagline, address, hours and website over a table at dusk.

- `anuncio.json`: shot plan for the 36 s reel (order, bars per shot, where each clip starts)
- `diseno/`: text and graphics (`capas.html`, `estilo.css`, `animacion.js`)
- `anuncio-15/`: plan and design for the short cut (same clips, music starts later so it still ends on the song's last hit)
- `musica.json`: "Uncontrollable" by Arulo (Mixkit Stock Music Free License: commercial use OK, credit not required), 110 BPM
- `notas.md`: address, hours, menu, brand and review notes, with sources
- `jobs.json`: Higgsfield job IDs for every still, clip and reference photo

## Higgsfield clips (Nano Banana Pro still → Kling 3.0 pro, 5 s, 9:16)

| Scene | Still job | Clip job |
|---|---|---|
| 01 Corn cut off the cob | 0deb4633-32f9-489f-8dad-0ebb41e9898d | a3319ace-d63b-44b8-836c-b2eb4b401916 |
| 02 Batter spread on the griddle (v2) | 191f1615-9c02-4df0-9c47-eb1b15bc0162 | 93cf077c-eb18-4030-8e96-772e90546464 |
| 03 Cachapa flip | c7d192a5-c781-46de-8f68-db363f085ccd | 51936268-1863-4054-a20a-0c4cc55d649f |
| 04 Queso de mano | e05d1e9d-e8cb-4f95-923c-b1d456755da3 | 96663feb-fcde-48e6-a452-26bb3542305a |
| 05 Carne mechada | 893b8905-1452-4737-b7ea-d9314718ab6e | d956d7e8-1cd1-4612-80d0-880f76150be9 |
| 06 Chicharrón + lime | 6bd32af3-d865-44a1-9449-3c7231efcfcc | a3552901-f9cb-4e90-9a52-fcd9fc03a4c0 |
| 07 Tajada y queso | 205342d9-1334-4f9d-ae9e-4d0f448ae123 | 39f26136-2546-42b2-b99c-ed70d62b348b |
| 08 Nata dip | c34989d2-dccc-4f67-a337-19e611128fc2 | c295df98-26df-4ba6-b893-21a283f28b70 |
| 09 Table at dusk | 7acb021c-16c3-4661-b3ff-1cce4f7a78ff | 86d36277-37cb-414a-a5d2-a394e0f9a357 |

The logo is their own badge from cachapasdandrea.com, upscaled (job `58569018-feb3-4f0a-98ad-366c97e756b8`) and cut to a circle.

Changes to text, timing, music, order or length can reuse these clips at no credit cost. Redoing one scene costs about 11 credits.

## Before pitching

- No public email found on their site or Google listing. They publish Instagram @cachapas.d.andrea, Facebook, a WhatsApp link and phone numbers. Follow the outreach rules in `CLAUDE.md`.
- The truck in the blurred background of the last scene is generic, not theirs. No photo of their Davenport truck was available.
