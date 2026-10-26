# Polka-dot athleisure fit flip (client ad)

Made 2026-10-26 for Brandon's client: an athleisure/loungewear line in cream, navy and black with polka-dot fold-over waistbands. The script logo reads roughly "B'thnys"; confirm the exact brand name with her. Paid client work: **don't post it or use it in the portfolio without her written OK.**

The model is AI-generated (fictional, not the woman in her photos). The clothes are her real products, rebuilt from her photos. Turn on the platform's AI label when it's posted, and don't present it as a real customer.

## Brief

- Format copied from the reference video she sent (a screen recording of another brand's ad): one model stands centered and still, full body, while the outfit changes on the beat; the backdrop alternates grey and pink; no talking, no text.
- 1 video, 9:16, 1080×1920, 30 fps, **7.8 s**, 30 shots.
- Opens on the music drop and holds the cream set for 1 beat, then cuts every half beat (a quarter-beat burst at the end of bar 2). Every look appears on both backdrops. It ends on a 2-beat hold of the cream set on pink, where she breaks into a small smile.

## Final video

- Higgsfield media `9f2fe29d-d856-45bc-a0a8-d45f09d3a27a` (`polka-dot-fit-flip.mp4`). The link was shared in chat; it isn't kept here because this repo is public and the ad isn't released.
- Earlier render `2231af74-cc82-4e91-89fa-885f512b22d6`: same edit, but the audio peaked slightly over 0 dB. Don't use it.
- Cost: about 125 Higgsfield credits (1,627.39 → 1,502.16), roughly $5 on the Ultra plan.

## Her uploads (Higgsfield media)

Her originals show a real person's face, so the clothing references were cropped below the chin before generating.

| What | Original | Face-free crop |
|---|---|---|
| Reference video | 05642443-d0d6-4ef9-b9ce-b098bdbdd9cf | |
| Cream tank + bike shorts, close | 49d29a34-d546-403b-836b-d22adb92cd6f | 38ba7f3b-3869-49a0-9c94-5f45d9b25d5f |
| Cream set, full (Paris) | b624ecbc-2942-4ff3-be04-a13e9b590d59 | b1ebc0b6-9148-40d7-b177-56de8f58deda |
| Cream wide-leg pants, back | 6e0b093e-0f15-456e-900a-f4221bcfcfb0 | e8062ed8-00c2-429e-8cbc-bdd8507d8a7e |
| Cream pants waistband, front / back | 392fae32-4f54-4f2d-bec6-035433a47aca / fa0f4681-8111-49cf-b655-852c7da335b7 | (no face) |
| Navy cami | e5053606-a221-4545-9a19-54436bb8d02d | 27b0d98d-54d5-42ce-92a9-a650193b1462 |
| Navy sports bra + shorts | 11207b9b-6060-41f0-b91c-f6744c9f7495 | b30de53a-fe75-45c8-8dcd-efb95e07445e |
| Black cami + wide-leg pants | fb3844d5-0b06-4029-b06b-e47d9fcc4b31 | 254faa85-6c10-4453-b37b-d3892399d8d6 |

## Saved references (Higgsfield job IDs)

`@Model1Face`: Face 1, long straight dark-brown hair, olive skin (Soul 2.0), `53c60e4a-4803-4242-a517-e2dbb3f04f90`.

Looks (Nano Banana Pro, 2K, 9:16). `A_grey` is the anchor; every other look was made from it so the pose and framing match exactly.

| Look | Grey backdrop | Pink backdrop |
|---|---|---|
| A cream tank + bike shorts, white sneakers | 3138d46a-0515-4d46-8a66-0f153c06986c | 3785b89c-365c-4579-8e23-8d374a5b4d3a |
| B cream tank + wide-leg pants | c5535adf-40b7-477e-b494-5cbf2f8def2b | 8a1a5658-9f98-4c6f-a2cf-3ea6a414dc98 |
| C navy cami + navy shorts | bf797305-d1e2-4e8c-81d8-552927875101 | 6da10a69-8126-487a-843a-c1310d32b8a5 |
| D navy sports bra + shorts, white headband, socks | c00ed051-96e9-476b-9a8f-1dbcc9b5d084 | a7a9c1f3-4a0a-493e-a149-927915951539 |
| E black cami + black wide-leg pants, cream sandals | ff1a8832-915d-4b18-b840-96adaae24214 | 3fd5482e-9bcc-4ae3-b34d-e47c2698f784 |

## Clips (Kling 3.0 pro, silent, locked-off camera, subtle idle motion)

| Clip | Job |
|---|---|
| Ag | b644d712-5f17-4323-84f9-2b66c705a50f |
| Bg | 24d3dd56-b7c1-4b07-bad1-7bba4a6f7e3e |
| Cg | a801bb40-a7e1-443d-aa84-ae04c07305ac |
| Dg | 60e13cfb-4fa5-4462-af5a-7c46fc5a4fc5 |
| Eg | 25a9360c-8ee4-45b9-97cf-62721521937d |
| Ap | e252e0b3-50d5-435b-9bd9-05b699558af7 |
| Bp | aeda83a3-f2b9-4abb-bda6-10a44fd56ab4 |
| Cp | ac26f000-73ad-42e1-a4b6-5dddc7f79bef |
| Dp | 025e15b4-4427-4825-9da7-96ae3fea4716 |
| Ep | 007ef76a-5f19-4991-bfdc-1cd6f4be4227 |
| Hero (Ap, 5 s, small smile from about 2.4 s) | 85c2166e-949f-448f-a1c7-b16ea5f0528d |

Known flaw: in both D clips (navy sports bra) the stomach sucks in unnaturally after about 0.5 s. The edit only uses their first 0.25 s; keep D offsets under 0.25 if you re-cut.

## Re-cutting (no credits)

- `edl.json`: the shot list (clip, start offset in the clip, length in beats)
- `build.py`: renders the edit in the Higgsfield sandbox (`sandbox_exec`), with cuts locked to the music's kick grid
- `musica.json`: "Cat Walk" by Arulo (Mixkit Stock Music Free License: commercial use OK, credit not required), 129.2 BPM, starts on the drop at 29.536 s

Changing the order, timing, music start or length only needs a new `edl.json` and a re-run. A logo or @handle end card can be added if she sends her logo file.
