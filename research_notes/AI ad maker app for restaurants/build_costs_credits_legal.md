# Build costs, credits and legal: a self-serve AI ad generator app (research as of 2026-11-04)

Scope: what it costs per generation (image, video, avatar, voice, music, assembly), how a non-coder could build and run the app with Claude Code, how to design credits and subscriptions with healthy margins, and the legal, licensing and platform-terms issues. US and Florida focus. Competitor apps and go-to-market are out of scope.

Method and reliability: about 50 web searches and fetches on 2026-11-04. The proxy blocked most official pricing pages, so many prices come from third-party aggregators that quote the official pages; each one is flagged. The Google AI Studio pricing page (image models), the Higgsfield API blog, the Higgsfield help center, the Sunbiz fee page and the Remotion license page were read directly or are first-party. The session's web-search budget ran out before every gap could be closed (see Gaps). Prices in this market change monthly, so check each live page before committing money.

---

## 1. Image generation API prices (per image, at ad resolutions)

### Takeaway
A good-quality ad image costs about $0.03–$0.07 at 1K–2K on the cheap tier (Nano Banana 2 / 2.1, Seedream 4.5, FLUX Kontext Pro) and $0.13–$0.24 on the premium tier (Nano Banana Pro, gpt-image high quality, 4K). Higgsfield's own API models start below $0.01. Cutting the product out of its background costs about $0.01–$0.02 per photo. Images cost little next to video.

### Cited Findings
**Google Gemini API (official AI Studio pricing page, read 2026-11-04; paid tier, standard, per image)**
- Gemini 2.5 Flash Image ("Nano Banana", original): $0.039 per image up to 1024×1024; batch $0.0195 (50% off) — [Google AI Studio pricing](https://aistudio.google.com/docs/pricing)
- Gemini 3.1 Flash Image ("Nano Banana 2"): $0.045 (0.5K), $0.067 (1K), $0.101 (2K), $0.151 (4K); no batch tab listed — [Google AI Studio pricing](https://aistudio.google.com/docs/pricing)
- "Nano Banana 2.1": $0.0336 (1K), $0.0504 (2K), $0.113 (4K); batch $0.0168 / $0.0252 / $0.0567 — [Google AI Studio pricing](https://aistudio.google.com/docs/pricing)
- Gemini 3.1 Flash Lite Image ("Nano Banana 2 Lite"): $0.0336 at 1K; batch $0.0168 — [Google AI Studio pricing](https://aistudio.google.com/docs/pricing)
- Gemini 3 Pro Image ("Nano Banana Pro"): $0.134 (1K or 2K), $0.24 (4K), plus $0.0011 per input image — [Google AI Studio pricing](https://aistudio.google.com/docs/pricing); the same figures appear on [benchlm](https://benchlm.ai/md/media-pricing/nano-banana.md). One guide claims Pro batch pricing of $0.067 / $0.12, but the official page lists no batch tab for 3 Pro Image — [yingtu](https://yingtu.ai/blog/gemini-3-pro-image-pricing-calculator) (unconfirmed)
- Free-tier data: on the free tier, Google uses data from the Flash image models to improve its products; on the paid tier it does not — [Google AI Studio pricing](https://aistudio.google.com/docs/pricing); [Gemini API Additional Terms](https://ai.google.dev/gemini-api/terms)

**OpenAI (token-billed; OpenAI's own pricing page couldn't be reached, so these are third-party figures)**
- gpt-image-1.5 (released Dec 2025): about $0.009 (low), $0.034 (medium) and $0.133 (high) per 1024×1024; portrait 1024×1536 costs about 1.5× that; non-square high quality is about $0.20. Image tokens cost $8 per 1M in and $32 per 1M out. OpenAI says it is 20% cheaper than gpt-image-1 — [pricepertoken](https://pricepertoken.com/image/model/openai-gpt-image-1-5); [OpenAI model page](https://developers.openai.com/api/docs/models/gpt-image-1.5); [imagine.art](https://www.imagine.art/blogs/gpt-image-1-5-pricing)
- gpt-image-2 (newer): $5 per 1M text tokens in, $8 per 1M image tokens in, $30 per 1M image tokens out. That works out to about $0.006 (low) to $0.211 (high) per 1024×1024 and about $0.40 for 3840×2160 high quality; batch halves the cost — [llmreference](https://www.llmreference.com/model/gpt-image-2/openai-api); [laozhang blog](https://blog.laozhang.ai/en/posts/gpt-image-2-api-pricing.md); [aireiter](https://aireiter.com/blog/gpt-image-2-api-pricing). Gateways advertise as little as $0.008 per image — [Atlas Cloud](https://www.atlascloud.ai/blog/gpt-image-2-api-guide) (reseller claim)

**ByteDance Seedream and Black Forest Labs FLUX (via fal.ai, third-party reports)**
- Seedream 4.5: $0.04 per image on fal (billed per output and normalized to 1 MP; higher resolutions cost proportionally more) — [pricepertoken](https://pricepertoken.com/image/model/bytedance-seedream-4-5); [fal explore listing](https://fal.ai/explore/best-ai-image-generators?page=10)
- FLUX.1 Kontext [pro] (image editing / product-in-scene): $0.04 per image on fal; Kontext Max listed at about $0.042 by one comparison site (seems low, so verify) — [ModelsLab on fal pricing](https://modelslab.com/fal-ai-pricing.md); [pricepertoken](https://pricepertoken.com/image/model/black-forest-labs-flux-kontext-max)
- FLUX 2 Pro: $0.05 per image on fal vs $0.055 on Replicate — [apidog comparison](https://apidog.com/blog/best-ai-inference-platform-guide-2026)

**Higgsfield API (first-party blog, 2026-09-16)**
- Marketing Studio Image from $0.0059 per image; Soul 2 and Soul Cinema from $0.0032 per image; the catalog also includes Recraft, Ideogram and Grok image models (their prices weren't on the blog) — [Higgsfield API blog](https://higgsfield.ai/blog/higgsfield-api)

**Background removal / product cutout**
- fal: Ideogram remove-background $0.01 per image; Bria RMBG 2.0 $0.018 per image — [fal background remover APIs](https://fal.ai/explore/background-remover-apis); [aireiter test](https://aireiter.com/blog/best-background-removal-api)
- Photoroom API Basic: $0.02 per image (watermarked sandbox, 10 free production calls) — [Photoroom blog](https://www.photoroom.com/blog/remove-bg-api-cost-leonardo-ai-vs-photoroom)
- remove.bg: about $0.105–$0.20 per image pay-as-you-go — [dev.to comparison](https://dev.to/om_prakash_3311f8a4576605/removebg-charges-0105image-heres-a-0009-alternative-2026-api-comparison-4jjp)
- Self-hosted rembg / BiRefNet: $0 per image plus compute — [aireiter](https://aireiter.com/blog/best-background-removal-api)

### Inferences
- A 9:16 ad at 1080×1920 is about 2 MP, so expect "2K" pricing: about $0.05 (Nano Banana 2.1), $0.10 (Nano Banana 2) or $0.134 (Nano Banana Pro) per image at Google list price.
- Nano Banana Pro (and gpt-image high quality) is the right "premium" tier because it renders legible text (prices, menu names) and keeps the product faithful. The cheap tier is fine for backgrounds, lifestyle scenes and carousel filler.
- Budget 30–50% extra for re-rolls. Users regenerate images they don't like, and that is real cost unless re-rolls are charged.

### Gaps
- No official current price was found for Imagen 4, Ideogram 3, Recraft V3 or Seedream 5 via API. Ideogram and Recraft are available through the Higgsfield API, but the blog doesn't list their rates.
- I couldn't read OpenAI's own pricing page, so the gpt-image-1.5 and gpt-image-2 figures are third-party.

---

## 2. Video generation, avatar, voice and music API prices

### Takeaway
Short vertical video is the main cost driver. An 8–10 s clip costs about $0.40–$1.00 on budget models (Veo 3.1 Lite or Fast, Kling 2.5/2.6, Seedance 2.5, Hailuo, Runway Turbo) and $2–$5 on premium models (Veo 3.1 Standard with audio, Kling 3.0 Pro with audio on fal). OpenAI's Sora 2 API was shut down on 2026-09-24, so don't build on it. Talking-avatar UGC runs about $1–$7 per minute through APIs. Voiceover costs cents.

### Cited Findings
**Google Veo 3.1 (Gemini API)**
- Veo 3.1 Fast: $0.10/s (720p), $0.12/s (1080p), $0.30/s (4K), read from Google's pricing page in Sept 2026 — [benchlm](https://benchlm.ai/md/media-pricing/veo.md). It was cut from $0.15/s on 2026-04-07 — [Skila / dev.to](https://dev.to/skilaai/google-just-made-ai-video-50-cheaper-openai-killed-sora-heres-the-new-pricing-math-1ag4)
- Veo 3.1 Lite: $0.05/s (720p), $0.08/s (1080p), audio included — [Skila / dev.to, 2026-04-07](https://dev.to/skilaai/google-just-made-ai-video-50-cheaper-openai-killed-sora-heres-the-new-pricing-math-1ag4); [Skila news](https://news.skila.ai/article/veo-3-1-lite-ai-video-pricing-comparison-2026)
- Veo 3.1 Standard: $0.40/s at 1080p with audio; $0.60/s at 4K — [Skila / dev.to](https://dev.to/skilaai/google-just-made-ai-video-50-cheaper-openai-killed-sora-heres-the-new-pricing-math-1ag4)
- Audio: [Layer3Labs](https://www.layer3labs.io/guides/veo-3-pricing) and Skila say Gemini API Veo pricing includes audio. Atlas Cloud and Akool describe an audio surcharge — [Atlas Cloud](https://www.atlascloud.ai/blog/tips/veo-3.1-api-pricing); [Akool](https://akool.com/blog-posts/google-veo-3-1-cost-guide). This conflict is unresolved. I couldn't read the Veo section of Google's page.

**OpenAI Sora 2: discontinued**
- Last list prices were Sora 2 at $0.10/s (720p) and Sora 2 Pro at $0.30–$0.70/s — [benchlm](https://benchlm.ai/md/media-pricing/sora.md)
- OpenAI announced the shutdown on 2026-03-24. The Videos API and the sora-2 / sora-2-pro models were removed on 2026-09-24, with no successor — [Make help center](https://help.make.com/openai-sora-and-video-modules-deprecation-by-september-24-2026); [Zilliz FAQ](https://zilliz.com/ai-faq/what-is-the-sora-shutdown-timeline); [Neowin](https://www.neowin.net/amp/openai-to-shut-down-sora-app-and-apis-as-it-shifts-focus-to-coding-ai/)

**Kling**
- Kling 3.0 "official" rates, quoted second-hand: $0.084/s (720p silent), $0.112/s (720p with audio or 1080p silent), $0.14/s (1080p with audio), $0.42/s (4K) — [aireiter](https://aireiter.com/blog/kling-3-api-pricing-guide-2026) (I couldn't reach Kling's own page)
- Kling 3.0 on fal: Standard $0.168/s, Pro $0.224/s silent, Pro $0.28/s with audio — [Skila / dev.to](https://dev.to/skilaai/google-just-made-ai-video-50-cheaper-openai-killed-sora-heres-the-new-pricing-math-1ag4); [apiframe](https://apiframe.ai/blog/kling-3-0-api-providers)
- Higgsfield API starting rates: Kling 2.5 $0.042/s, Kling 2.6 $0.07/s, Kling 3.0 $0.112/s — [Higgsfield API blog](https://higgsfield.ai/blog/higgsfield-api)

**Seedance (ByteDance)**
- Higgsfield API: Seedance 2.5 from $0.0738/s; Seedance 2.0 listed at $0.9332/s (probably a top resolution/audio tier; the blog doesn't say) — [Higgsfield API blog](https://higgsfield.ai/blog/higgsfield-api)
- Seedance 2.0 elsewhere: fal $0.3034/s (720p with audio), $0.2419/s on the fast endpoint, $0.682/s (1080p) — [novoads](https://novoads.ai/blog/seedance-2-0-pricing); Apiframe $0.19/s (720p with audio) — [apiframe](https://apiframe.ai/models/seedance-2.0/pricing); Atlas Cloud about $0.112/s base — [Atlas Cloud](https://ask.atlascloud.ai/seedance-2-cost-per-second) (vendor claims). One report says BytePlus bills per minute with a one-minute minimum — [Atlas Cloud](https://www.atlascloud.ai/blog/seedance-2.0-pricing-full-cost-breakdown-2026)

**Other video models**
- Runway Gen-4 Turbo $0.05/s; Runway Gen-4.5 $0.12/s — [Skila / dev.to](https://dev.to/skilaai/google-just-made-ai-video-50-cheaper-openai-killed-sora-heres-the-new-pricing-math-1ag4)
- Hailuo 2.3 Standard $0.047/s (768p, 6 s max) — [Skila / dev.to](https://dev.to/skilaai/google-just-made-ai-video-50-cheaper-openai-killed-sora-heres-the-new-pricing-math-1ag4); MiniMax H3 from $0.13/s on the Higgsfield API — [Higgsfield API blog](https://higgsfield.ai/blog/higgsfield-api)
- Wan 3.0 from $0.20/s; LTX 2.5 Pro $0.17/s; PixVerse 6 $0.115/s; Higgsfield DoP $0.125 per generation (all Higgsfield API) — [Higgsfield API blog](https://higgsfield.ai/blog/higgsfield-api)
- Luma Ray 3.x (official docs, billed in 5 s blocks): $0.15 (540p), $0.30 (720p) and $1.20 (1080p) per 5 s, about $0.06/s at 720p and $0.24/s at 1080p; HDR costs 2× — [Luma docs](https://docs.agents.lumalabs.ai/guides/pricing/); [gmicloud](https://www.gmicloud.ai/zh-tw/blog/test-luma-ray-3-2-kling-3-0-turbo-video-api)
- Replicate "official models" quoted at $0.09/s of video (generic figure) — [apidog](https://apidog.com/blog/best-ai-inference-platform-guide-2026)

**Talking-avatar / UGC actor APIs**
- HeyGen API: a pay-as-you-go wallet, separate from Studio plans, with a $5 minimum top-up. Avatar III costs about $1 per minute; Avatar IV about $4/min (one source) or $3–$6/min (another); Avatar V digital twin about $7.20/min; Video Agent / translation about $2/min — [HeyGen blog](https://www.heygen.com/blog/best-ai-avatar-talking-head-apis); [creatify](https://creatify.ai/blog/heygen-pricing-(2026)-plans-and-what-you-ll-actually-pay); [diyai](https://diyai.io/ai-tools/video-generation/heygen-pricing/) (sources conflict)
- Creatify API (official docs): API Starter $99/month for 500 credits; API Pro $299/month for 2,000 credits. URL-to-Video or AI Avatar costs 5 credits per 30 s; Product Video 10 credits per 30 s; Ad Clone 12 credits per 5 s. That is roughly $0.75–$0.99 per 30 s avatar clip — [Creatify billing docs](https://docs.creatify.ai/billing)
- Arcads: no public price list. Reported at about $110/month for 10 videos (about $11 per video); 800 credits per minute per actor; API on Pro (about $385/month, unconfirmed) — [fluxnote](https://fluxnote.io/guides/arcads-pricing-2026); [novoads](https://novoads.ai/blog/arcads-pricing)

**Voice (TTS)**
- ElevenLabs API: $0.08 per 1K characters (Eleven v4) and $0.04 (v4 Turbo), as of Oct 2026 — [dupple](https://dupple.com/pricing/elevenlabs). Earlier (Sept 2026): $0.10 per 1K (v2/v3) and $0.05 (Flash) — [puter](https://developer.puter.com/tutorials/elevenlabs-api-pricing/). The free plan has no commercial license; Starter ($6/month) includes one — [activepieces](https://www.activepieces.com/blog/elevenlabs-pricing-2026-plans-credits-and-costs.md)

**Music**
- Epidemic Sound Partner API lets platforms embed its cleared catalog (sync, mechanical and public performance rights, per the vendor), with a free tier for prototyping — [Epidemic Sound developers](https://www.epidemicsound.com/business/developers/)
- The Eleven Music API is "trained on licensed data and cleared for broad commercial use" (vendor claim) — [ElevenLabs blog](https://elevenlabs.io/blog/eleven-music-now-available-in-the-api)
- Caution: "royalty-free" licences often don't cover sublicensing to clients or paid ad placements. Check that the tier covers end users' paid ads — [Sonilo](https://sonilo.com/blog/comparisons/ai-soundtrack-apis-ads-client-work-monetized-video)

### Inferences
- Default video model: Veo 3.1 Lite or Fast. It has native audio (sizzle, ambient sound), and 8 s costs $0.40 (Lite 720p) to $0.96 (Fast 1080p) at Google list price. Kling 2.5/2.6 or Seedance 2.5 through the Higgsfield API cost about $0.42–$0.74 per 10 s.
- Premium video: Veo 3.1 Standard at $3.20 per 8 s, or Kling 3.0 Pro with audio on fal at $2.80 per 10 s. Charge enough credits for it.
- A 15 s video is usually two clips stitched together (most models generate 5–10 s), so the generation cost roughly doubles.
- Talking AI actors for e-commerce UGC are best done through Creatify or HeyGen APIs at about $1–$4 per 30–60 s. Under the FTC rules (section 8), these must never be presented as real customers.

### Gaps
- No API prices were found for Hedra or Captions/Mirage.
- No API prices were found for Epidemic Sound or Eleven Music.
- Google's own Veo section and Kling's own developer pricing page couldn't be read, so those numbers are second-hand.
- The cost of self-hosting open-source Wan wasn't researched.

---

## 3. Aggregators, the Higgsfield API, and using a consumer subscription (Higgsfield Ultra, Midjourney) as the backend

### Takeaway
Use pay-as-you-go APIs (fal.ai, Replicate, the Google Gemini API, or the new Higgsfield API), not Brandon's Higgsfield Ultra web subscription. Since Sept 2026 Higgsfield has sold a separate dollar-billed API "for building generation into your own applications". Its terms let outputs be used and sold commercially, but they bar commercially exploiting the Service itself. Midjourney has no API and bans automation. Aggregator prices sit within about 0–20% of each other for the same model. Runware is cheapest for basic images.

### Cited Findings
**Higgsfield API (first-party)**
- Pay-as-you-go in US dollars with no subscription. Top up a balance and each successful generation deducts its cost; failed requests are free and the balance can't go negative. Auto top-up is available. Funds expire one year after they're added. The API is billed separately from higgsfield.ai plans. Creating a key unlocks 20 concurrent requests, rising with volume. Output files are kept for at least 7 days, so download them for storage. Outputs "can be used in commercial products, ads, and client work." The catalog has more than 50 models (Seedance, Kling, Wan, MiniMax, LTX, PixVerse, Recraft, Ideogram, Grok, plus Higgsfield's own Soul, DoP and Marketing Studio). Blog dated 2026-09-16 — [Higgsfield API blog](https://higgsfield.ai/blog/higgsfield-api)
- Website plans (such as Ultra) don't include API access, and an API balance doesn't add website credits — [MindStudio](https://www.mindstudio.ai/blog/higgsfield-api-pricing-pay-per-use/). One review reports a $5 minimum top-up — [MindStudio](https://www.mindstudio.ai/blog/higgsfield-api-pricing-pay-per-use/). Older reviews say "Higgsfield has no public API" — [aireiter](https://aireiter.com/de/blog/higgsfield-ai-reviews-pricing-vs-api); the Sept 2026 official blog supersedes them.
- Nano Banana Pro is not in the Higgsfield API blog's rate list, so Google-family models may need to come from Google or fal directly — [Higgsfield API blog](https://higgsfield.ai/blog/higgsfield-api) (absence noted, not confirmed)

**Higgsfield Terms of Use (via the official help center; the full ToS page returned 404)**
- Section 4.4: Higgsfield doesn't claim ownership of inputs or outputs; you may transfer or sublicense outputs to clients; rights survive cancellation; outputs aren't exclusive. Commercial use isn't tied to a plan; paid plans give watermark-free downloads; the Terms "do not prohibit selling generated outputs" — [Higgsfield help center](https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially)
- Section 5.2's restrictions apply to "commercially exploiting the Service itself", not to downstream use of content. Section 5.1(ii)(e) bars commercial activities run through the Service (contests, sweepstakes, barter) without written consent. Sections 5.1(iii) and 5.2(iv) ban using outputs to train AI models. Section 5.1(ii)(b) makes the user responsible for copyright, trademark and likeness. Section 5.3 bars using another person's image without permission. Enterprise plans include IP indemnification — [Higgsfield help center](https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially)
- Higgsfield revised its Terms in July 2026 after a backlash over content and training rights — [Higgsfield blog](https://higgsfield.ai/blog/terms-of-use-privacy-policy-update); [MindStudio](https://mindstudio.ai/blog/higgsfield-terms-of-service-backlash)
- Higgsfield Ultra (web plan) is 3,000 credits a month, about $99/month billed annually or $129 monthly; about $0.033 per credit on annual billing. Nano Banana Pro costs about 2 credits per image; a 5 s 720p Seedance 2.5 clip costs about 35 credits. Some sources say monthly credits expire after 30 days. Plan prices differ between sources — [creatify](https://creatify.ai/blog/higgsfield-pricing-(2026)-plans-and-what-you-ll-actually-pay); [Higgsfield pricing blog](https://higgsfield.ai/blog/higgsfield-pricing-explained); [krater](https://krater.ai/blog/higgsfield-pricing)

**Midjourney**
- There is no official API. The Community Guidelines strictly prohibit automating interactions, and reselling or sharing access is not permitted — [ConductAtlas summary](https://conductatlas.com/platform/midjourney/midjourney-community-guidelines/no-automation-or-third-party-apps-one-account-per-user/); [Midjourney ToS (effective 2026-05-27)](https://docs.midjourney.com/docs/terms-of-service)

**Google Gemini API terms**
- Users must be 18 or older. The Services may not be used in apps directed at, or likely to be used by, people under 18. Safety filters may not be bypassed. Google claims no ownership of outputs but may generate similar content for others. On the paid tier, prompts and responses aren't used to improve Google products; on the unpaid tier, human reviewers may read them. You may not use the Services to build competing models — [Gemini API Additional Terms](https://ai.google.dev/gemini-api/terms) (the version seen was archived May 2024; check the live one)

**Aggregators**
- fal vs Replicate on the same model: FLUX 2 Pro costs $0.05 vs $0.055; SDXL $0.003 vs $0.005. Runware is about $0.0006 per basic image ($6 per 10K images); WaveSpeed about $0.02 per image (that table is from WaveSpeed's own blog) — [apidog](https://apidog.com/blog/best-ai-inference-platform-guide-2026); [WaveSpeed blog](https://wavespeed.ai/blog/posts/best-ai-inference-platform-2026/)
- fal is described as the cheapest for most video use; Replicate is slightly pricier but has better docs — [teamday](https://teamday.pages.dev/blog/fal-ai-vs-replicate-comparison)
- Some fal models bill per megapixel, others per image — [fal explore](https://fal.ai/explore/best-ai-image-generators?page=10)
- Reselling gateways (EvoLink, Atlas Cloud, PiAPI, apiyi) often undercut official prices. Kling 3.0 is $0.075–$0.10/s on EvoLink vs $0.168–$0.224/s on fal — [aireiter](https://aireiter.com/blog/kling-3-api-pricing-guide-2026)
- PhotoAI (Pieter Levels) ran on Replicate. One secondary write-up puts Replicate at about $12K/month against more than $100K/month revenue, an 87% margin; Levels himself cited about $20K/month for image models — [Indie Hackers case study](https://www.indiehackers.com/post/photo-ai-by-pieter-levels-complete-deep-dive-case-study-0-to-182k-mrr-in-18-months-3a9a2b1579); [Indie Hackers](https://www.indiehackers.com/post/tech/pieter-levels-just-passed-100-000-a-month-in-revenue-with-photoai-NToMGI3ZjwSBOfTywZnG)

### Inferences
- Using Brandon's Higgsfield Ultra subscription as the hidden backend of a public app (with Claude or a script driving the web or MCP account for paying customers) would very likely count as "commercially exploiting the Service itself" (Section 5.2). It would also hit concurrency limits and risk the account. Keep Ultra for his own done-for-you client work and for prototyping the five styles. Power the app with API keys (Higgsfield API, fal and/or Google).
- Recommended routing: one aggregator (fal.ai) plus Google direct gives Nano Banana 2/Pro, Seedream, FLUX Kontext, Kling and Veo through two keys. The Higgsfield API can be added for Kling/Seedance at its starting rates, which are lower than fal's.
- Avoid unofficial "Midjourney API" wrappers and cheap gray-market gateways. They risk bans, sudden shutdowns and data-handling problems, as the Sora shutdown showed even an official API can disappear. Design the code so the model provider can be swapped per style.

### Gaps
- Kie.ai and OpenRouter image pricing and markup weren't researched before the budget ran out.
- No published percentage markup for fal or Replicate over the original model makers was found.
- I couldn't read the full Higgsfield Terms of Use text on automated access, bots and account sharing; the ToS URL tried returned 404.

---

## 4. Cost of one "pack" and recommended credit pricing

### Takeaway
At list prices, one pack (5 ad images, a 5-slide carousel, and 1–2 vertical videos of 8–15 s) costs about **$1.10–$1.80 on budget models**, **$3–$4 mid-tier** and **$8.50–$12 premium**. Price every action at about 3.5–4× its cost (with retries) and you keep a 65–75% gross margin at full credit use, and more with typical unused credits ("breakage"). That puts a budget pack at about $9–$15 retail, mid at $19–$29 and premium at $49–$79.

### Cited Findings
(The unit prices behind the arithmetic are cited in sections 1–2. Supporting benchmarks:)
- AI-native products average about a 52% gross margin (ICONIQ 2026), against 70–80% (median about 80%) for traditional SaaS — [CloudZero](https://www.cloudzero.com/blog/ai-gross-margin); [metricrig](https://metricrig.pages.dev/answers/ai-saas-gross-margin-benchmark-2026); [Enterprise DNA](https://enterprisedna.co/resources/ai-pulse/ai-pulse-2026-07-31-ai-native-saas-gross-margins-are-still-running-20-40-points)
- AI-first companies spend 40–50% of revenue on inference (one source) — [softwareseni](https://www.softwareseni.com/why-ai-gross-margins-are-so-much-lower-than-saas-and-what-that-means-for-your-business/)
- PhotoAI's reported margin is about 87% (secondary) — [Indie Hackers](https://www.indiehackers.com/post/photo-ai-by-pieter-levels-complete-deep-dive-case-study-0-to-182k-mrr-in-18-months-3a9a2b1579)
- Stripe fees on each sale: 2.9% + $0.30 for cards, plus 0.7% for Stripe Billing, plus 0.5% for Stripe Tax if used — [flexprice](https://flexprice.io/blog/stripe-pricing-breakdown-2026); [NerdWallet](https://www.nerdwallet.com/business/software/learn/stripe-fees)

### Inferences (worked estimates at list price, 2026-11-04)
**Budget pack (about $1.10–$1.80)**
- Cutout of the product photo: 1 × $0.018 (Bria) = $0.02
- 10 images (5 ads + 5 carousel slides) at 2K: Seedream 4.5 at $0.04 or Nano Banana 2.1 at $0.0504 = $0.40–$0.50; +50% re-roll allowance = $0.60–$0.76
- 1 video, 8 s, Veo 3.1 Lite 720p with audio: $0.40 (alternatives: Kling 2.5 on the Higgsfield API, 10 s at $0.42; Hailuo 2.3, 6 s at $0.28). A second video adds $0.40.
- Voiceover of about 400 characters (ElevenLabs v4 at $0.08 per 1K) = $0.03
- Assembly (captions, logo, music): Shotstack pay-as-you-go at $0.40/min × 0.25 min = $0.10, or Remotion (free licence for ≤3-person companies) plus about $0.005 of Lambda
- Total: about $1.15 with one video, about $1.55–$1.80 with two

**Mid pack (about $3–$4)**
- 10 images, Nano Banana 2 at 2K: $1.01; +50% re-rolls = $1.52
- 2 videos, 8 s each, Veo 3.1 Fast 1080p: 2 × $0.96 = $1.92 (or Kling 3.0 on the Higgsfield API, 10 s at $1.12 each)
- Voice, music and assembly: about $0.15
- Total: about $3.60

**Premium pack (about $8.50–$12)**
- 10 images, Nano Banana Pro: $1.34 + $0.01 input fees; +50% re-rolls = about $2.00
- 2 videos, 8 s, Veo 3.1 Standard 1080p with audio: 2 × $3.20 = $6.40; one video re-roll adds $3.20
- Total: about $8.60 with no video re-roll, about $11.80 with one

**A credit design that keeps the margin steady whatever users generate**
- Retail credit at about $0.10 pay-as-you-go; subscriptions bring it down to about $0.07–$0.085.
- Suggested credit costs (COGS → margin at $0.10 per credit):
  - Standard image (Nano Banana 2.1 / Seedream): 2 credits ($0.20 vs about $0.05, about 75%)
  - HD text-accurate image (Nano Banana Pro): 5 credits ($0.50 vs $0.134, about 73%)
  - Quick video, 8 s (Veo 3.1 Lite 720p): 15 credits ($1.50 vs $0.40, about 73%)
  - HD video, 8 s (Veo 3.1 Fast 1080p): 40 credits ($4.00 vs $0.96, about 76%)
  - Cinematic video, 8 s (Veo 3.1 Standard with audio): 120 credits ($12 vs $3.20, about 73%)
  - Bundled "Starter Pack" (5 images + carousel + 1 quick video + 1 free redo per item): about 50 credits ($5 at the pay-as-you-go rate, against about $1.15–$1.30 cost)
- Example plans:
  - Free trial: 1 watermarked pack (about $1.20 acquisition cost)
  - Starter: $29/month for 350 credits (about 7 starter packs)
  - Growth: $79/month for 1,100 credits
  - Top-up: 100 credits for $12, valid 12 months
- Check at 100% usage: Starter takes in $29, and Stripe takes about 2.9% + $0.30 + 0.7% = about $1.34, leaving $27.66. Seven starter packs cost about $9 in COGS, a gross margin of about 64%. Because every action is priced at about 4× its cost, the margin stays about the same whether users pick images or Cinematic video. Unused credits push the real margin higher.
- Keep top-ups at $10 or more: Stripe's $0.30 fixed fee is 8.9% of a $5 charge but only 4.4% of a $20 charge.
- Refund credits automatically when a generation fails (the Higgsfield API doesn't charge for failures, so the app shouldn't either).

### Gaps
- No public, primary breakdown of credit-to-cost ratios from Higgsfield, Krea or Freepik was found. Their unit economics are inferred only from plan prices.
- The LLM cost for writing ad copy and prompts (Claude, Gemini) wasn't researched. It's probably a few cents per pack, but that's unverified.

---

## 5. How credit systems work elsewhere, Stripe billing, and app-store fees

### Takeaway
The common pattern is a monthly subscription that grants credits, with plan credits expiring or rolling over for a limited time, plus top-up packs that last 12–36 months and are spent after plan credits. Each model or action costs a different number of credits. Stripe handles this with Meters and Billing Credits (public preview) at 2.9% + $0.30 plus 0.7% Billing. A web app avoids Apple's IAP rules; Apple currently charges $0 on US link-outs while the Supreme Court case is pending, and Google Play charges about 10% even on external links.

### Cited Findings
**Credit structures at comparable apps**
- Higgsfield: Starter, Plus and Ultra at 200/1,000/3,000 credits a month per its blog (another guide says 270/1,200/3,000). Credits vary by model, length and resolution; on Seedance 2.0, 1080p costs about 3× 720p and 4K about 5×. Monthly credits reportedly expire after 30 days — [Higgsfield pricing blog](https://higgsfield.ai/blog/higgsfield-pricing-explained); [creatify](https://creatify.ai/blog/higgsfield-pricing-(2026)-plans-and-what-you-ll-actually-pay); [krater](https://krater.ai/blog/higgsfield-pricing)
- Freepik/Magnific (rebranded April 2026): Premium is about $14.50/month annual with 240K credits a year. An image costs about 50–150 credits; a video about 80–3,000 credits per clip. Extra credit packs are valid up to 3 years and are spent only after plan and rollover credits. Rollover is disputed: one source says none, while Freepik's Business-plan doc says up to 3 months — [eesel](https://eesel.ai/blog/freepik-ai-pricing); [Freepik docs](https://de.freepik.com/ai/docs/using-the-business-plan); [vantaige](https://vantaige.io/blog/best-freepik-alternatives-2026)
- Krea: Basic $9/month for about 20 Seedance 2.0 videos; the free plan gives 100 units a day — [kive](https://kive.ai/learn/krea-alternatives)
- Leonardo: free plan 150 tokens a day; Essential $12/month ($10 annual); per-video token costs are shown only inside the app — [fluxnote](https://fluxnote.io/guides/leonardo-ai-pricing-guide-2026)
- Arcads: credits only, about $11 per talking-actor video, rounded up to the minute — [fluxnote](https://fluxnote.io/guides/arcads-pricing-2026)
- Lovable (credit-metered builder, a useful UX model): Pro is $25/month for 100 credits; top-ups of 50–1,000 credits last 12 months; sources disagree on rollover — [eesel](https://eesel.ai/blog/lovable-pricing); [banani](https://www.banani.co/blog/lovable-pricing-and-credits)

**Stripe**
- Cards: 2.9% + $0.30 per US online charge; +1.5% for international cards; +1% for currency conversion; $15 per dispute. Stripe Billing is 0.7% of billing volume. Stripe Tax is 0.5% per transaction and calculates tax but doesn't file returns in most places — [flexprice](https://flexprice.io/blog/stripe-pricing-breakdown-2026); [activepieces](https://www.activepieces.com/blog/stripe-pricing-2026-total-transaction-add-on-costs.md) (third-party; Stripe's own pricing page wasn't reached)
- Billing Credits / credit grants track a prepaid or promotional balance per customer. They apply only to metered prices that report usage through Meters, and the feature is in public preview. Advanced usage-based billing (real-time credit burndown) is in private preview — [Stripe docs](https://docs.stripe.com/billing/subscriptions/usage-based/advanced/about); [Stripe credits-based model](https://edge-docs.stripe.com/billing/subscriptions/usage-based/use-cases/credits-based-pricing-model); [Stripe support](https://support.stripe.com/questions/billing-credits-pricing-understanding-credit-funding-and-applications)
- Stripe acquired Metronome in January 2026; Standard Billing includes up to 100M meter events a month — [Orb blog](https://www.withorb.com/blog/stripe-billing-pricing)

**Apple App Store**
- Credits or currency bought by IAP and consumed in the app must use IAP, and IAP credits "may not expire." A US web-checkout link is allowed "in addition to, but not as a replacement for" IAP. It must open in the default browser, with no redirects and no tracking parameters. Outside the US such links get the app rejected — [Superwall](https://superwall.com/blog/external-checkout-a-b-testing-and-trial-toggles-confirmed-apples-rules-for-ios); [Apple dev forums](https://developer.apple.com/forums/thread/132272)
- Apple removed Cal AI for taking payment through embedded Stripe in place of IAP — [NewsBytes](https://www.newsbytesapp.com/news/business/why-apple-removed-myfitnesspal-owned-cal-ai-from-app-store/story)
- In December 2025 the Ninth Circuit upheld the contempt finding but said Apple may charge some commission on link-outs. The Supreme Court agreed to hear Apple's appeal on 2026-06-30. Apple has charged no commission on external-link purchases for about a year; the rate is still to be set by the district court — [MacRumors](https://www.macrumors.com/2025/12/11/apple-app-store-fees-external-payment-links/); [TheNextWeb](https://thenextweb.com/news/supreme-court-apple-epic-contempt-app-store-commission); [TechSpot](https://www.techspot.com/news/112956-apple-fight-epic-over-app-store-fees-reaches.html?rand=98523)
- Apple added 13+, 16+ and 18+ age ratings (answers due 2026-01-31) and bars generating content that breaks its Generative AI Prohibited Use Policy — [iGeeksBlog](https://www.igeeksblog.com/apple-app-store-age-ratings/); [ConductAtlas](https://conductatlas.com/platform/apple/apple-app-store-review-guidelines/age-rating-and-adult-content-restrictions/)

**Google Play (US)**
- External-link and alternative-billing programs started 2025-12-09. Under the Epic settlement model (mid-2026), the service fee starts at 10% on the first $1M a year and applies to external links too; Play Billing adds 5% — [Google Play help](https://support.google.com/googleplay/android-developer/answer/15582165?hl=en); [foxdata](https://foxdata.com/en/blogs/google-play-store-opens-external-billing-fees-drop-to-10-starting-june-30-2026/); [MacRumors](https://macrumors.com/2026/06/24/google-play-store-fee-change/) (dates differ: June 30 vs July 22, 2026)

### Inferences
- Recommended model for restaurants and small brands: a monthly plan with credits that roll over one month (cap at 2× the allowance), top-ups valid 12 months, and a one-time "Try a pack" purchase (e.g. $9.99) for owners who won't subscribe.
- Build credits as an app-side ledger in Supabase (one table of +/− transactions with a reason, job ID and model cost). Stripe is just the way money comes in (Checkout for subscriptions and one-time packs, with webhooks granting credits). Stripe Billing Credits is in preview and only works with metered prices, which is more complexity than a non-coder needs on day one.
- Selling on the web avoids Apple's 15–30% fee and its rule that IAP credits can't expire. A later iOS app could be a "companion" that links out to web checkout in the US. That costs $0 commission today, but the Supreme Court case may change it.

### Gaps
- The current Apple Small Business Program rate (traditionally 15%) wasn't confirmed in this research.
- Official Krea and Leonardo rollover and top-up policies weren't found.

---

## 6. Build path, stack and monthly running costs for a non-coder using Claude Code

### Takeaway
Brandon doesn't need to buy software up front. Claude Code can write a Next.js + Supabase + Stripe + fal/Google/Higgsfield-API app, deployed on Vercel, using free or low-cost tiers. He mainly pays as he goes: about $0–$50/month while building, about $50–$150/month fixed at around 100 users, and about $200–$500/month fixed at around 1,000 users, plus generation costs (which credits pass on to customers), Stripe fees and a $125 Florida LLC. AI app builders (Lovable, Bolt, Replit) cost $20–$100/month and are fine for a clickable prototype, but long-running video jobs and credit ledgers are better built in real code with Claude Code.

### Cited Findings
**Hosting, database, auth, storage**
- Supabase Pro: $25/month per org. Includes an 8 GB database, 100 GB file storage, 250 GB egress, 100K monthly active users and a $10 compute credit (one Micro instance). Overages: database $0.125/GB, egress $0.09/GB, storage $0.021/GB; extra projects $10/month — [makerkit](https://makerkit.dev/blog/saas/supabase-pricing); [jetadmin](https://www.jetadmin.io/blog/supabase-pricing-2026-guide-to-plans-limits-and-real-world-costs/); [activepieces](https://www.activepieces.com/blog/supabase-pricing-free-tier-limits-pro-costs-egress.md)
- Vercel: Hobby is free; Pro is $20 per user per month with a $20 usage credit and about 1 TB of bandwidth, then pay as you go; overage rates are unclear, and one source's $550/TB figure is unverified — [Vercel pricing mirror](https://docs.it.apps.vogels.com/docs/vercel/reference/pricing); [costbench](https://www.costbench.com/software/developer-tools/vercel/hidden-costs/)

**Background jobs (video generation takes 30 s to several minutes, longer than a normal web request)**
- Inngest free tier: about 50K step runs a month; paid tiers are cited at $20, $50–$500, or $99 Pro / $499 Business depending on the source — [automationatlas](https://automationatlas.io/answers/inngest-pricing-explained-2026/); [budgetforge](https://www.budgetforge.dev/tools/inngest-pricing-2026)
- Trigger.dev: free tier; Pro reported at $50/month with $50 of usage, $0.25 per 10K runs, compute billed per second; open source (Apache 2.0) for self-hosting — [automationatlas](https://automationatlas.io/answers/trigger-dev-pricing-explained-2026/)

**Video assembly (captions, logo, price overlay, music, 9:16 export)**
- Remotion: free for individuals and companies of up to 3 people. Beyond that, "Automators" pay $0.01 per render with a $100/month minimum; Creators $25 per seat per month; Enterprise from $500/month — [Remotion license FAQ](https://www.remotion.dev/docs/license/faq); [Remotion pricing](https://www.remotion.dev/docs/pricing). A warm 1-minute 1080p render on Lambda costs about $0.017 (third-party estimate) — [wireflow](https://www.wireflow.ai/blog/remotion-pricing)
- Shotstack: $0.40 per rendered minute pay-as-you-go (25-credit / $10 minimum); $39/month for 250 min ($0.16/min); $99 for 750 min; $199 for 2,000 min; same price at any resolution — [wireflow](https://www.wireflow.ai/blog/shotstack-pricing); [Shotstack pricing](https://shotstack.io/pricing/)
- Creatomate: about $41–$54/month for 2,000 credits; about 14 credits per minute at 720p/25fps and about 37 per minute at 1080p/30fps, so about $0.10–$0.84 per minute — [wireflow](https://www.wireflow.ai/blog/creatomate-pricing)
- ffmpeg is free and open source. A cost analysis of ffmpeg-as-an-API exists — [dev.to](https://dev.to/javidjamae/ffmpeg-api-pricing-what-video-processing-actually-costs-2026-516f)

**AI app builders (alternatives to Claude Code)**
- Lovable: Free (5 credits a day, 30 a month), Pro $25/month ($21 annual) for 100 credits, Business $50/month; Lovable Cloud credits are extra — [eesel](https://eesel.ai/blog/lovable-pricing); [coworker](https://coworker.ai/blog/lovable-pricing)
- Bolt.new: Pro about $20–$25/month with about 10M tokens; free 1M tokens a month — [activepieces](https://activepieces.com/blog/boltnew-pricing-2026-plans-tokens-and-costs-explained); [vp0](https://vp0.com/blogs/bolt-new-pricing-plans-2026/)
- Replit: Core $20/month with $25 of credits; Pro $95–$100/month; Agent usage is metered — [vp0](https://vp0.com/blogs/replit-pricing-plans-2026/); [devtoolpicks](https://dev.to/devtoolpicks/lovable-vs-bolt-vs-replit-vs-v0-in-2026-best-vibe-coding-tool-for-solo-developers-d88)
- v0 (Vercel): about $30 subscription; free tier with $5 of credits a month — [dev.to comparison](https://dev.to/jangwook_kim_e31e7291ad98/vibe-coding-tools-compared-2026-boltnew-vs-lovable-vs-replit-vs-v0-which-ai-app-builder-wins-3k0j)

### Inferences
**Suggested stack (all code written by Claude Code; Brandon clicks "approve" and pastes API keys)**
- Next.js (React) web app on Vercel
- Supabase for login (email or Google), Postgres (users, brands, products, jobs, credit ledger) and Storage (uploads and outputs)
- Stripe Checkout and webhooks for subscriptions and credit packs
- fal.ai and/or Google Gemini API, plus the Higgsfield API, for generation
- Inngest or Trigger.dev for the queue (submit job → poll or webhook → save the output to Supabase Storage → deduct credits)
- Remotion (free at Brandon's size) or Shotstack for captions and branding on the final 9:16 MP4
- Five "ad styles" stored as prompt templates plus model choices in the database, so styles can be tuned without code changes

**Monthly fixed costs (generation costs excluded; credits pass them on to customers)**

| Stage | Items | Fixed/month |
|---|---|---|
| Building / 0 users | Supabase Free, Vercel Hobby, free tiers of Inngest or Trigger.dev, Remotion free; API test budget $20–$50 | about $0–$50 (+ $125 LLC once) |
| About 100 users | Vercel Pro $20, Supabase Pro $25, queue free tier, Remotion free (or Shotstack $39), domain and email | about $50–$150 |
| About 1,000 users | Vercel Pro + overages, Supabase Pro + bigger compute + storage and egress overages (e.g. 1 TB egress ≈ $67 over the included amount), Trigger.dev Pro $50 or Inngest $99, Stripe Billing 0.7% | about $200–$500 |

- Storage example (assumed sizes): 1,000 users × 4 packs × about 40 MB ≈ 160 GB of new storage a month. Beyond the 100 GB included, that's about $1–$3/month of storage. Egress (people downloading and viewing videos) matters more.
- Upfront money: about $125 (LLC) + $20–$50 of API credits + a domain. No software licence is needed. Brandon's existing Claude plan covers the coding.
- Timeline (estimate, no source): with Claude Code, a single-style working prototype (upload → images → one video → download) in about 1–2 weeks of evenings; a paid MVP with five styles, credits, Stripe and terms pages in about 3–6 weeks; then ongoing tuning.
- Lovable or Bolt could produce the front-end quickly, but long video jobs, webhooks and an accurate credit ledger are where these builders get expensive in credits and fragile. Claude Code in a GitHub repo, deployed to Vercel, gives full control at lower cost.

### Gaps
- No primary source on realistic MVP timelines for non-coders was found; the timeline above is an estimate.
- Not checked: whether Vercel's Hobby tier allows commercial use, and the costs of domain, transactional email (e.g. Resend) and error monitoring.
- Bubble and JSON2Video pricing weren't researched.
- The Higgsfield connector in this session exposes website-builder tools (create_website, deploy_website, website_db, website_secrets). Their capabilities, pricing and terms for hosting a commercial SaaS weren't researched and could be a no-code alternative worth checking.

---

## 7. Web app vs native mobile app vs PWA

### Takeaway
Start with a mobile-friendly web app (optionally installable as a PWA). It avoids Apple and Google review, IAP and commission. It also suits the B2B, 18+ audience that Google's Gemini terms require, and owners can upload photos from a phone browser. Consider a native app only after there's traction, and even then sell credits on the web.

### Cited Findings
- On iOS, digital credits used in the app must be sold through IAP (15–30%), and IAP credits may not expire. US link-outs are allowed only alongside IAP — [Superwall](https://superwall.com/blog/external-checkout-a-b-testing-and-trial-toggles-confirmed-apples-rules-for-ios); [Apple dev forums](https://developer.apple.com/forums/thread/132272)
- Google Play charges a service fee of about 10% (first $1M) even on external links, from mid-2026 — [foxdata](https://foxdata.com/en/blogs/google-play-store-opens-external-billing-fees-drop-to-10-starting-june-30-2026/)
- Apple requires generative AI apps to meet its new age ratings and its Generative AI Prohibited Use Policy, and to remove violating user content. It once asked a ChatGPT-based app to go 17+ or add filtering — [iGeeksBlog](https://www.igeeksblog.com/apple-app-store-age-ratings/); [MacRumors 2023](https://macrumors.com/2023/03/02/apple-restricting-generative-ai-apps)
- The Gemini API can't be used in services directed at or likely used by under-18s — [Gemini API Additional Terms](https://ai.google.dev/gemini-api/terms)

### Inferences
- Pros of the web app: no store review delays, no IAP fee, instant updates, one codebase, and credits that can expire or roll over as the business chooses. Cons: weaker push notifications and less App Store discovery, which matters little for restaurant owners who arrive from Brandon's outreach or Meta and Instagram ads.
- PWA "Add to Home Screen" gives an app-like icon at no extra cost. That is enough for repeat use.

### Gaps
- PWA limits on iOS in 2026 (push notifications, storage) weren't researched.

---

## 8. Legal, licensing and platform terms (US / Florida)

### Takeaway
The minimum legal setup:
- Form a Florida LLC ($125, then $138.75 a year).
- Publish Terms of Service, a Privacy Policy and an Acceptable Use Policy that make the business user (18+) responsible for owning the product photos, logos and trademarks they upload, and that ban real people's likeness without consent, fake testimonials, political ads and celebrity or competitor marks.
- Disclose to customers that outputs are AI-generated and may not be copyrightable.
- Follow the FTC fake-review rule.

Pure SaaS is generally not subject to Florida sales tax.

### Cited Findings
**Business entity (Florida)**
- New LLC: $100 filing + $25 registered agent designation = $125. Annual report $138.75, due Jan 1–May 1; filing late brings it to $538.75 (a $400 penalty) — [Florida Sunbiz LLC fees](https://arts-culture.dos.fl.gov/sunbiz/forms/fees/llc-fees); [bizee](https://bizee.com/llc/florida)
- A commercial registered-agent service is optional, about $100–$300 a year (it keeps a home address off the public record) — [vjmglobal](https://www.vjmglobal.com/feeds/blog/fl-llc-formation-cost-2026)

**Sales tax**
- Florida generally doesn't tax electronically delivered SaaS (DOR advisement TAA 16A-014). Software on physical media and some bundles are taxable. Information services and communications features need review. Nontaxable SaaS receipts don't count toward Florida's $100K remote-seller threshold — [Florida DOR TAA 16A-014](https://floridarevenue.com/TaxLaw/Documents/16A-014.pdf); [floridasalestax.com, July 2026](https://www.floridasalestax.com/florida-tax-law-blog/2026/july/is-software-as-a-service-saas-taxable-in-florida/); [Anrok](https://www.anrok.com/saas-sales-tax-by-state/florida)
- One Kintsugi post (Dec 2024) said Florida SaaS is taxable; Kintsugi's own 2026 guide and the other sources contradict it — [Kintsugi 2026](https://trykintsugi.com/blog/florida-saas-sales-tax)

**Copyright of AI outputs**
- US Copyright Office, Report Part 2 (2025-01-29): prompts alone "do not provide sufficient human control" to make users the authors; iterative prompting isn't enough. Human-authored inputs that remain perceptible (e.g. the business's own product photo), creative selection and arrangement, and creative edits can be protected — [Copyright Alliance summary](https://copyrightalliance.org/ai-report-part-2-copyrightability/); [Lowenstein](https://www.lowenstein.com/news-insights/publications/client-alerts/us-copyright-office-issues-report-on-copyrightability-of-generative-ai-outputs-ai); [Baker Botts](https://ourtake.bakerbotts.com/post/102jxrk/copyright-office-releases-part-2-of-artificial-intelligence-report)
- Providers don't claim outputs (Google, Higgsfield) but may produce similar content for others; Higgsfield says outputs aren't exclusive — [Gemini API Additional Terms](https://ai.google.dev/gemini-api/terms); [Higgsfield help center](https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially)

**Model providers' terms that pass down to the app**
- Gemini API: users 18+, not for services likely used by minors; safety filters may not be bypassed; follow the Prohibited Use Policy; paid tier for data privacy — [Gemini API Additional Terms](https://ai.google.dev/gemini-api/terms)
- Higgsfield: no training on outputs; the user is responsible for copyright, trademark and likeness; no using another person's image without permission; outputs may be sold — [Higgsfield help center](https://higgsfield.ai/creator-hub/help-center/account-and-privacy/who-owns-my-generations-and-can-i-use-them-commercially)
- Midjourney: no automation and no reselling access — [ConductAtlas](https://conductatlas.com/platform/midjourney/midjourney-community-guidelines/no-automation-or-third-party-apps-one-account-per-user/)

**FTC: fake reviews and AI testimonials**
- 16 CFR Part 465 (announced August 2024, in force October 2024) bans fake or false reviews and testimonials, including AI-generated ones. It also bans buying them, insider reviews without disclosure, fake social-influence indicators and review suppression. Civil penalties apply to knowing violators, up to $51,744 per violation (the 2024 figure, adjusted for inflation each year) — [FTC press release](https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials); [Hunton](https://hunton.com/hunton-retail-law-resource/ftc-issues-final-rule-targeting-fake-consumer-reviews-and-testimonials-including-those-generated-by-artificial-intelligence-ai-and-online-bots); [Olshan](https://olshanlaw.com/Advertising-Law-Blog/FTC-Publishes-New-Rule-Covering-Fake-Reviews-and-Testimonials)
- On 2025-12-22 the FTC set aside its 2024 Rytr consent order, which had banned an AI tool that generated reviews and testimonials, saying it "unduly burdens innovation." The FTC said it will still pursue those who use AI to deceive. Hogan Lovells cautions that review integrity remains a focus — [Hogan Lovells](https://www.hoganlovells.com/en/publications/in-rare-move-ftc-sets-aside-rytr-order-for-burdening-ai-innovation-and-failing-to-plead-violations); [Broadband Breakfast](https://broadbandbreakfast.com/ftc-vacates-consent-order-against-ai-company-rytr/)

**Likeness, deepfakes and Florida law**
- Florida Stat. § 540.08 bars unauthorized commercial or advertising use of a person's name or likeness, with injunctions, damages and fees as remedies. Whether it covers voice is unsettled — [Florida Statutes 540.08](https://www.flsenate.gov/Laws/statutes/2025/540.08); [Chambers 2026 (Shutts & Bowen)](https://practiceguides.chambers.com/practice-guides/trade-marks-copyright-2026/usa-florida/trends-and-developments)
- 2026 bills SB 482 and SB 1395 would add AI-created name, image and likeness to § 540.08. Their passage is unverified — [SB 482](https://flsenate.gov/Session/Bill/2026/482/BillText/Filed/HTML); [SB 1395](https://flsenate.gov/Session/Bill/2026/1395/BillText/Filed/PDF)
- In 2025 Florida criminalized AI-altered sexual depictions of identifiable people. § 836.13 now requires platforms to keep takedown processes (since 2025-12-31). The federal NO FAKES Act had not passed as of June 2026 — [Chambers 2026](https://practiceguides.chambers.com/practice-guides/trade-marks-copyright-2026/usa-florida/trends-and-developments); [recordinglaw](https://www.recordinglaw.com/us-laws/deepfake-laws/florida-deepfake-laws)
- Florida HB 919 (Ch. 2024-126, signed 2024-04-26): political ads that use generative AI must carry the disclaimer "Created in whole or in part with the use of generative artificial intelligence (AI)." Omitting it is a first-degree misdemeanor for the sponsor. Only political ads are covered — [Florida Senate HB 919](https://www.flsenate.gov/Session/Bill/2024/919); [WMNF](https://wmnf.org/florida-legislature-passes-bill-disclaimers-ai-political-ads-heads-to-governor)

**Ad platforms' AI labels (affects customers' use of outputs)**
- TikTok (ads policy updated 2026-07-21, per secondary sources) requires AI-generated ad content to be disclosed with its label or the advertiser's own disclaimer; undisclosed content can be rejected. Meta auto-labels "AI info" when its own tools are used and requires disclosure for political and social-issue ads; its rule for ordinary product ads is narrower or unclear. Google added "How this ad was made" (2026-07-09) — [Billo](https://billo.app/blog/ai-labeling/); [Cinerads](https://www.cinerads.com/blog/ai-ad-disclosure-requirements); [Common Thread](https://commonthreadco.com/blogs/coachs-corner/tiktok-ai-ad-disclosure-rules-ecommerce-2026)

### Inferences
**ToS, AUP and product guardrails to build in**
- Accounts for 18+ business users only. Users warrant they own or have rights to uploaded photos, logos and menu names.
- Block or flag uploads of real people's faces, celebrity names, competitor trademarks and political content (or ban political ads outright, to stay clear of HB 919).
- No "customer testimonial" style using AI people. Allow only clearly labelled "AI presenter" styles, matching Brandon's CLAUDE.md rule and the FTC rule.
- Add an auto-generated AI-disclosure note or label option for TikTok and Meta.
- Explain that outputs may not be copyrightable or exclusive. Disclaim warranties, cap liability at fees paid, and include an indemnity from users.
- Use the provider's safety filters, keep logs, and have a takedown and contact process.

**Other legal steps**
- The privacy policy needs to cover uploaded photos, payment data (Stripe), sub-processors (Supabase, Vercel, Google, fal, Higgsfield) and retention. Use the paid tier of the Gemini API so customer data isn't used for training.
- Florida sales tax probably doesn't apply. If the app later sells to customers in states that tax SaaS, Stripe Tax at 0.5% can calculate it once a state's nexus threshold is crossed.
- A termly or iubenda-style ToS and Privacy generator, plus a one-time lawyer review (cost not researched), is the usual low-budget route.

### Gaps
- Not confirmed: whether SB 482 / SB 1395 (Florida AI likeness) passed in the 2026 session.
- Thaler v. Perlmutter status in 2026: the search budget ran out before it could be checked.
- The current inflation-adjusted FTC civil penalty for 2026 wasn't verified.
- Other states' SaaS sales tax rules and Stripe Managed Payments (merchant-of-record) fees weren't researched.
- The cost of ToS and Privacy generators or a Florida tech lawyer wasn't researched.
- Official TikTok and Meta ad-policy pages weren't read; the July 2026 dates come from secondary blogs.
