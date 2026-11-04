# Small software for mostly-passive income (free ad-supported tools, micro-SaaS, Chrome extensions, mobile apps, AI wrappers, paid directories), as of late 2026

Research date: 2026-11-04. About 30 web searches and 30 page fetches. I fetched these primary sources directly: the RevenueCat State of Subscription Apps 2026 page, the TrustMRR homepage, the ChartMogul AI retention report, the Flippa 2025 M&A insights post, five individual Flippa listings, Apple's App Review Guidelines and Developer Program page, Google Play's testing-requirement help page, the Chrome Web Store spam policy, ExtensionPay's homepage and revenue article, and the pricing pages for Vercel (plus its fair-use terms), Supabase, Cloudflare Workers, Stripe, Lemon Squeezy, Paddle and Claude.
Several sources were blocked: BigIdeasDB returned 429, Indie Hackers returned 403, and the MicroConf report sits behind a form. Numbers from those sources come from search-result snippets and are marked "(snippet)". Display-ad RPMs, AdSense rules, Amazon Associates and the general effect of AI Overviews are covered in the sibling file `content_sites_ads_affiliate.md`, so they are only referenced here.

## 1. Verified revenue for small/solo software in 2025–2026 (TrustMRR, Indie Hackers, Starter Story, Acquire.com, Flippa); median vs top outcomes; how many vibe-coded apps earn anything

### Takeaway
The typical outcome is close to zero. In RevenueCat's data (2025, 115,000+ apps), the median new subscription app makes about **$72 a month** one year after launch. Only 17.3% of new apps reach $1K a month within two years, and 4.6% reach $10K. Revenue-verified directories such as TrustMRR show the same right skew: median MRR is in the tens to low hundreds of dollars, while a few listings make six or seven figures a month. Apps still on Lovable, Replit, Vercel or Netlify subdomains almost never earn anything.

### Cited Findings
- **RevenueCat State of Subscription Apps 2026** (2025 data; 115,000+ apps; $16B+ revenue; over a billion transactions; page fetched 2026-11-04) — [RevenueCat](https://www.revenuecat.com/state-of-subscription-apps-2026/):
  - New subscription-app launches rose from about 2,000 a month in Jan 2022 to **14,700+ a month by Jan 2026**. iOS accounts for about 77% of launches.
  - Within their first two years, **17.3% of new apps reach $1K monthly revenue and 4.6% reach $10K**. About 75% of the apps that reach $1K never reach $10K. Among apps that hit them, the median time to $1K is 58 days and to $10K is 109 days.
  - Monthly revenue one year after launch: **median ~$72; top quartile >$429; top 10% >$2,574**.
  - Apps launched before 2020 earn 69% of subscription revenue (Jan 2026 snapshot). Apps launched in 2025 or later earn 3%.
  - Year-over-year MRR growth in 2025: median 5.3%, top 25% +80%, top 10% +306%, bottom 25% −33%.
- **New-app supply vs demand:** New App Store apps nearly doubled in H1 2026 to about 560,000, which the source attributes to vibe coding, while downloads rose about 2% (secondary source, 2026). — [Pasquale Pillitteri](https://pasqualepillitteri.it/en/news/8867/app-store-vibe-coding-surge)
- **TrustMRR** (founders connect read-only Stripe/Paddle/RevenueCat accounts; revenue is checked hourly; fetched 2026-11-04) — [TrustMRR homepage](https://trustmrr.com/):
  - The top of the leaderboard is not a solo-project world. Stan shows $3,569,654 MRR, GojiberryAI $424,368, Postiz $367,170, Rezi $241,179 and Cometly $197,248.
  - The for-sale listings show what small products earn: TrackThletics $56/mo (asking $6k), Privkap $98/mo ($4.5k), Vedic Astro Lab $174/mo ($12k), FlowPost $230/mo ($13k), ReplyCurrent $274/mo ($1.8k), Truth or Dare: Couples Game $495/mo ($9k), UseHite $956/mo ($45k), "Stud Finder Wall Detector Tool" $5.1k/mo ($130k).
  - The site claims 200K monthly visitors.
- **The TrustMRR population is small and right-skewed:** A BigIdeasDB page dated July 9, 2026 counts 6,040+ verified startups in 31 categories with $30M+ aggregate MRR (snippet). — [BigIdeasDB TrustMRR page](https://bigideasdb.com/trustmrr)
- **TrustMRR medians, from BigIdeasDB's analyses (snippets; the pages conflict with each other):**
  - On 3,787 revenue-reporting startups: p25 $29, **median $145**, p75 $894 MRR. — [BigIdeasDB State of Indie SaaS Revenue 2026](https://bigideasdb.com/state-of-indie-saas-revenue-2026)
  - Another page on 3,478 revenue-positive startups: **median ~$7 MRR**, average $4,682, and 76% under $1,000 MRR. — [BigIdeasDB revenue benchmarks](https://bigideasdb.com/docs/revenue-benchmarks)
  - Category medians (snippet): Marketing $276 (10.3% at $10K+/mo), AI $203 (941 startups, 5.8% at $10K+), SaaS $156, Fintech $83, Analytics $77. Sales, marketing and education tools lead; developer tools and fintech lag. — [BigIdeasDB](https://bigideasdb.com/state-of-indie-saas-revenue-2026)
  - BigIdeasDB itself warns that TrustMRR contains only startups that chose to list, so it is not a census.
- **Vibe-coded apps (BigIdeasDB, 2026, snippets):**
  - Only **7.6% of apps still hosted on Lovable, Replit, Vercel or Netlify subdomains report any monthly revenue, and none clears $1K**.
  - Of startups earning anything, 31.8% make under $45 a month.
  - The widely repeated "$600–$20,000/month" vibe-coder income range has no source.
  - About half of tools sold *to* vibe coders have revenue, and BigIdeasDB concludes that selling services or tools to builders is more reliable than publishing an app.
  - Sources: [BigIdeasDB: do vibe-coded apps make money](https://bigideasdb.com/do-vibe-coded-apps-make-money); [BigIdeasDB: how to make money vibe coding](https://bigideasdb.com/how-to-make-money-vibe-coding)
- **A built product with no customers sells for almost nothing:**
  - "GrubLedger", a turnkey SaaS for food-truck operators (permit tracking, event booking, prep lists, catering quotes, financials, Stripe billing live with 3 tiers and a free trial; 81+ React components, 23 API routes, 13 database models), was 5 months old, pre-revenue and had zero subscribers. It was listed at **$300** (an earlier search snippet showed $500), and the listing ended with no sale price shown (fetched 2026-11-04). — [Flippa listing 13529765](https://flippa.com/13529765-turnkey-saas-for-food-truck-operators-permit-tracking-event-booking-prep-lists-catering-quotes-financials-stripe-billing-live-with-3-tiers-free-trial)
- **A Starter Story example of a high-end solo outcome:** "Packager", a "boring" browser tool for IT admins, says it makes $60K/month (episode around March 2026; self-reported). — [Starter Story via Rosetta](https://rosetta.to/u/starterstory/i-make-60k-month-from-the-most-boring-saas-on-the-internet)
- **Share of solo founders:** MicroConf's 2024 State of Independent SaaS (~700 respondents) is the latest edition. Its findings are behind a form, and no 2025 edition exists as of 2026-11-04. — [MicroConf State of Indie SaaS](https://microconf.com/state-of-indie-saas). A MicroConf page quotes 27.6% of founders running solo (snippet; I didn't confirm which page). — [MicroConf founders page](https://microconf.com/founders/pre-rev). Freemius reportedly says 45.7% of SaaS makers on its platform are solo (secondary). — [Startup OG citing Freemius](https://startupog.com/blog/micro-saas-ideas-for-solo-founders-to-launch-in-2026)

### Inferences
- When planning a new app or SaaS, assume **$0–$100 a month in year one**. RevenueCat's $72 median (2025 data) is the best-sourced baseline. Reaching $1K a month puts a product in roughly the top 17–25%.
- The product counts as an asset only once it has paying users. GrubLedger is in Brandon's exact niche (food trucks), had real features and billing, and was still valued at $300 because it had no customers. Distribution, meaning the ability to get it in front of buyers, is the scarce input. Code is cheap.
- Survivorship bias is strong in every source. TrustMRR lists only founders who opt in, which skews toward successes. Starter Story and Indie Hackers feature winners. RevenueCat and the subdomain-hosting cut are the closest things to a full-population view, and both are bleak.
- Brandon's edge is not code. His edge is direct access to Central Florida food-truck and restaurant owners, many of them Spanish-speaking, who already trust him for ads. Any software he builds has a far better chance if it is sold to the clients he already serves.

### Gaps
- I couldn't access the 2025/2026 Indie Hackers revenue distribution or the MicroConf 2024 numbers (blocked or gated).
- BigIdeasDB's TrustMRR medians conflict ($7 vs $145), and I couldn't open its pages to resolve this. Use them only for direction.
- No source gives an independent count of how many Claude Code / Cursor-built apps earn money (the 7.6% figure covers only apps on builder subdomains).

## 2. Free online tools with ads (calculators, converters, generators, checkers): traffic sources, RPMs, AI Overview/ChatGPT risk, examples with numbers

### Takeaway
Free-tool sites can earn real ad money, but only at volume and usually after years. A 15-year-old PDF converter with AdSense-verified data made about $1,197 a month in profit on about 197,000 pageviews. A 6-month-old site with 30 calculators runs at a −$50 a month loss while taking 4–7 hours a week. Hosting an AdSense site on Vercel's free tier breaks Vercel's terms. AI Overviews have cut clicks on informational searches, and I found no measured data specific to calculator or converter queries.

### Cited Findings
- **Old, verified PDF-conversion site:** 15 years old, "Data Verified" with an AdSense integration, **$1,197/mo profit at a 92% margin**, **196,906 pageviews/mo**. About 80% of revenue comes from AdSense and 20% from sales of PDF-to-Word software. The seller claims zero maintenance hours. The listing ended after 234 bids, and the winning bid isn't shown (fetched 2026-11-04). — [Flippa listing 10100985](https://flippa.com/10100985-online-pdf-conversion-site-adsense-fully-automated-100-html)
- **New multi-tool calculator site (CalcXi):** 30 free calculators across 8 niches, 6 months old, Google Analytics verified. It shows **−$50/mo profit** and **19,554 pageviews/mo**, and Search Console shows 52.5K clicks and 9.03M impressions over three months. Maintenance is **4–7 hours a week**. The asking price was cut from $2,999 to $2,000. An Ahrefs estimate of "500K+ monthly organic traffic" was printed next to the verified ~19.5K pageviews (fetched 2026-11-04). — [Flippa listing 13841260](https://flippa.com/es/13841260-30-free-calculator-and-utility-tools-across-8-niches-finance-health-construction-seo-youtube-ai-math-insta-business-seo-traffic-adsense-monetized)
- **Other tool listings (seller-stated, search snippet, 2025–2026):**
  - A PDF/image converter with 3 subscribers lists $1/mo profit.
  - A "turnkey" browser-only PDF tools SaaS with 22 tools lists $5/mo.
  - A 6–7-month-old site with 100+ tools lists no profit figure.
  - Sources: [Flippa 13796313](https://flippa.com/13796313-pdf-and-images-converter-and-editor-document-for-easy-to-manage-just-upload-and-covert-documents-into-pdf-and-image-files); [Flippa 12940289](https://flippa.com/12940289-turnkey-pdf-tools-saas-where-files-never-leave-the-browser-22-tools-premium-pdfdig-com-domain-near-zero-hosting-costs-ready-to-launch); [Flippa 14227410](https://flippa.com/14227410-a-6-month-old-free-online-tools-website-offering-100-practical-tools-for-text-images-pdfs-developers-calculators-converters-and-everyday-utilities)
- **Single blog anecdote:** A no-login "instant utility" site made about $300 from AdSense on about 3,200 pageviews in a month, roughly a $14 RPM. The post says RPM varies a lot by tool (JSON formatter vs file converter). This is unverified. — [3l3c.ai](https://www.3l3c.ai/blog/us-startup-marketing-without-vc/free-tools-growth-without-vc)
- **How Flippa verifies AdSense:** Flippa pulls AdSense data read-only through the API and shows a three-month average (months with no revenue count). — [Flippa blog: verified AdSense](https://flippa.com/blog/new-feature-verified-google-adsense-revenue/); [Flippa support: verified listings](https://support.flippa.com/hc/en-us/articles/4842857720079-Understanding-verified-listings-on-Flippa)
- **Hosting rule:** Vercel says "Hobby teams are restricted to non-commercial personal use only." Its definition of commercial use includes "The inclusion of advertisements, including but not limited to online advertising platforms like Google AdSense" and sites where "Affiliate linking is the primary purpose" (page last updated 2026-09-14). — [Vercel Fair Use Guidelines](https://vercel.com/docs/limits/fair-use-guidelines)
- **Cloudflare alternative:** Requests to static assets on Cloudflare Workers are "free and unlimited". The Workers Free plan allows 100,000 dynamic requests a day. — [Cloudflare Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/)
- **AI Overview risk for tools (vendor claims, unverified):**
  - Informational queries are hit hardest. One SEO vendor reports a 61% CTR drop where an AI Overview appears.
  - Another vendor argues that tool pages are "structurally protected" because the user has to interact. Nobody has tested this.
  - Google Search Console cannot isolate AI Overview traffic.
  - Sources: [HubSpot](https://blog.hubspot.com/marketing/is-ai-killing-web-traffic?); [Stackmatix](https://www.stackmatix.com/blog/ai-overview-impact-analysis)
  - For measured, query-level data (Pew, Chartbeat, Seer), see the sibling file `content_sites_ads_affiliate.md` §4.
- **Wider search decline (secondary):**
  - Chartbeat data via Press Gazette shows publishers' Google search traffic down 33% globally in 2025 (US −38%).
  - Seer Interactive (Sept 2025) found a 61% organic CTR drop on queries with AI Overviews.
  - Source: [Pixelmojo summary](https://www.pixelmojo.io/blogs/google-traffic-dropped-33-percent-ai-search-shift)

### Inferences
- Implied AdSense RPM on the verified PDF site: (~$1,300 revenue × 80% AdSense) ÷ 196.9K pageviews ≈ **$5.3 per 1,000 pageviews** (my arithmetic from the listing's figures). That fits the $3–8 lifestyle range in the sibling file. At that rate, **$1,000 a month needs about 190,000 pageviews a month**, and $100 a month needs about 19,000. CalcXi's 19.5K pageviews would be roughly $100 a month at best, which matches its near-zero or negative profit.
- Third-party traffic estimates can be off by more than 10×: CalcXi's Ahrefs figure was 500K+ against about 19.5K verified pageviews. Don't plan from Ahrefs or Semrush numbers. Make decisions from Search Console after launch.
- Tools that work on files, run in the browser or need the user's own data (image resizing, PDF merging, a menu-photo cropper) are harder for a chatbot to replace than pure lookups or formulas ("what's 18% of $45"). ChatGPT and AI Overviews can answer the formula questions directly. This is reasoning, not measured data.
- A free-tool site is a slow SEO bet with a long payback. The best-earning examples are 10+ years old. Under a $500 budget, it is cheap to try (Cloudflare static hosting plus a domain), but expect almost no income in the first 6–12 months.
- A free tool aimed at Brandon's niche, such as a bilingual menu or food-truck post caption generator, a "food truck permit checklist for Osceola/Polk/Orange County", or a menu-price calculator, can do two jobs: it attracts the exact business owners who buy his ad packs, and it may earn small ad revenue. As a lead source, it is likely worth more than its ad income.

### Gaps
- I found no independent study measuring AI Overview or ChatGPT impact on calculator or converter queries specifically.
- I couldn't retrieve sale prices for the tool listings (they are hidden behind sign-up).
- I found no Spanish-language tool-site revenue data (the sibling file also found no reliable Spanish-vs-English RPM data).

## 3. Micro-SaaS for niches (boring B2B, local-business tools, compliance, scheduling, menus): what earns steadily, pricing, churn, first customers without an audience; food truck/restaurant evidence

### Takeaway
Steady micro-SaaS income comes from tools priced high enough to keep customers and sold into a workflow the founder can reach directly. Restaurant QR-menu tools are crowded and earn single to low-hundreds of dollars a month in the visible examples. Cheap AI tools under $50 a month keep only 23% of their revenue over a year. In the evidence I found, local businesses rarely bought from cold calls; demos built for the specific restaurant and very small paid ads worked better.

### Cited Findings
- **Restaurant QR-menu micro-SaaS:**
  - One listing reports 4 customers, about €80 MRR (~$1,000 ARR), all from local cold outreach at about 10–15% conversion, with no ads or SEO (self-reported sale listing). — [Microns: Restaurant QR Menu Builder SaaS](https://microns.io/startup-listings/restaurant-qr-menu-builder-saas)
  - A TrustMRR-listed QR menu maker shows **$9 MRR with 4 active subscriptions**, and a competitor charges $15–$49 a month (snippet). — [TrustMRR: QR Menu Maker](https://trustmrr.com/startup/qr-menu-maker)
  - Other menu tools are listed on TrustMRR as well (Disho, Dinecard, wifi menu; figures not fetched). — [TrustMRR Disho](https://trustmrr.com/startup/disho)
- **First customers without an audience (single founder, 3 months, self-reported):** "150+ cold calls, 0 customers". Owners rarely take calls from strangers. The founder then switched to building a demo of the restaurant's own menu and sending it over WhatsApp, which got better replies. The first paying user came from a **$15 Facebook ad**. — [Indie Hackers post](https://www.indiehackers.com/post/150-cold-calls-0-customers-then-a-15-facebook-ad-got-me-my-first-paying-user-sharing-everything-ive-learned-in-3-months-building-a-saas-TLjPVmhvvUZFfq7KBhw3)
- **Food-truck SaaS evidence:**
  - GrubLedger (see §1) was pre-revenue and listed at $300. — [Flippa 13529765](https://flippa.com/13529765-turnkey-saas-for-food-truck-operators-permit-tracking-event-booking-prep-lists-catering-quotes-financials-stripe-billing-live-with-3-tiers-free-trial)
  - The visible food-truck platforms (Foosye, OrderUp Apps with "over 100 clients") are team or venture companies, not solo micro-SaaS (search snippet). — [Gust: Foosye](https://gust.com/companies/foosye); [ISBDC: OrderUp Apps](https://isbdc.org/posts/orderupapps)
- **Retention by price (ChartMogul, published Dec 10, 2025; 2025 annualized; ~3,500 companies including ~200 AI-native with $250k+ ARR)** — [ChartMogul: The AI churn wave](https://chartmogul.com/reports/saas-retention-the-ai-churn-wave/):
  - AI-native products priced **under $50/month: 23% gross revenue retention (GRR), 32% NRR**.
  - $50–249/month: 45% GRR, 61% NRR.
  - Over $250/month: 70% GRR, 85% NRR ("essentially the same as B2B SaaS").
  - Overall AI-native: 40% GRR, 48% NRR. B2B SaaS median NRR: 82%. B2C SaaS median NRR: 49%.
  - ChartMogul calls the tier results "directional".
- **SMB churn benchmarks (vendor blogs, which cite each other):**
  - SMB SaaS monthly churn is about 3–7%.
  - Products for customers paying under $25 a month see 5–7% monthly churn.
  - Sources: [UserJot](https://userjot.com/blog/saas-churn-rate-benchmarks); [We Are Founders](https://www.wearefounders.uk/saas-churn-rates-and-customer-acquisition-costs-by-industry-2025-data/)
- **Mobile subscription benchmarks (RevenueCat, 2025 data)** — [RevenueCat](https://www.revenuecat.com/state-of-subscription-apps-2026/):
  - Median prices: weekly ~$5.99, monthly $10, yearly $34.80 (up from $31.60). The report also states a monthly median of $7→$8 in one section, which conflicts with the $10 figure.
  - Hard paywalls convert 10.7% of downloads to paid by day 35, against 2.1% for freemium.
  - Median trial-to-paid in North America is 34.2%.

### Inferences
- Pricing matters more than the idea. A $9–15 a month tool for food trucks would sit in the price band that churns hardest (5–7% a month, or 23% annual revenue retention for cheap AI tools). Twenty customers at $15 is $300 a month, and keeping that number flat would take about one new customer a month.
- Brandon already does the hard part, getting in front of local Hispanic food-truck owners. A tool sold to the **clients he already serves**, for example a bilingual "ad + post kit" portal, a menu/QR page bundled with his ad pack, or event/permit reminders for food trucks, has a distribution channel most micro-SaaS founders lack. It would be a semi-passive add-on to his service, not passive income.
- The 150-cold-calls result is consistent with the rest of the evidence: personalized demos (a mock-up of their own menu or ad) beat cold pitches. That is the same playbook Brandon uses for his video samples.
- "Boring B2B" winners like Packager ($60K/month) solve a painful workflow for a buyer the founder understands deeply. That points Brandon toward problems he sees first-hand at food trucks (event bookings, permit renewals, bilingual menus, posting schedules) rather than generic trend ideas.

### Gaps
- I found no verified MRR for any solo-run food-truck or Hispanic-restaurant SaaS.
- I couldn't fetch the 2025–2026 Indie Hackers or Starter Story data on acquisition channels (blocked).
- I found no 2025 survey measuring demand for Spanish-language software among Hispanic small-business owners. The closest are Verizon's 2024 Latino Small Business Survey (500 Latino owners, Morning Consult, Mar–Apr 2024) and a 2023 Verizon finding that owners working in both Spanish and English use digital tools for revenue growth more (77%) than English-mainly owners. — [Verizon 2024 survey](https://www.verizon.com/about/2024-latino-small-business-survey); [Verizon Hispanic SB survey](https://www.verizon.com/about/hispanic-small-business-survey). A September 2026 House bill press release says the SBA removed some Spanish-language materials in December 2025, which hints at an underserved need but is not demand data. — [Rep. Correa press release](https://correa.house.gov/news/press-releases/correa-evans-introduce-bipartisan-bill-to-improve-transparency-of-sba-spanish-language-resources)

## 4. Chrome extensions, mobile apps (RevenueCat benchmarks, App Store 4.3, AI-app rejections) and AI-wrapper durability

### Takeaway
Extensions can be sold through ExtensionPay (5% fee). Typical free-to-paid conversion is around 1%, and an honest 38-extension portfolio made **$31 MRR**. Mobile apps face Apple's 4.2/4.3 rules against thin or copycat apps, Google's rule of 12 testers for 14 days, and the RevenueCat median of $72 a month. AI wrappers monetize well at first but churn fast (30% faster in RevenueCat's data, 23% revenue retention under $50 a month in ChartMogul's), and a single feature launch by the model provider can wipe them out.

### Cited Findings
- **ExtensionPay:** Charges a 5% transaction fee on top of Stripe, with no monthly fee. It supports subscriptions, one-time payments, trials, Stripe Tax and 135+ currencies. It says "Developers have now made over $800,000 with ExtensionPay" (fetched 2026-11-04), up from "over $500k" in April 2025. Combined across all developers since 2021, that is small. — [ExtensionPay homepage](https://extensionpay.com/); [Chromium-extensions post, Apr 2025](https://groups.google.com/a/chromium.org/g/chromium-extensions/c/ctDt86Z9B8I)
- **Google ended Chrome Web Store payments in 2021**, which is why third-party tools like ExtensionPay exist. — [ExtensionPay article](https://extensionpay.com/articles/extensionpay-is-the-chrome-web-store-payments-replacement)
- **Famous extension revenue numbers are old:** ExtensionPay's own list cites Gmass $130k/mo (2019), GoFullPage $10k/mo (2021), CSS Scan $100k+ total (Aug 2020), BlackMagic $3k/mo and Weather Extension $2.5k/mo (undated). These figures are stale. — [ExtensionPay: 8 extensions with impressive revenue](https://extensionpay.com/articles/browser-extensions-make-money)
- **Realistic 2026 portfolio (corrected Aug 4, 2026):** 38 live extensions, 5 of them monetized with about 80–1,200 installs each. Free-to-paid conversion was 0.8% overall (0.3–1.4%). MRR at end of July 2026 was **$31.03**, and lifetime net revenue was **$165.47**. The author retracted an earlier "$180/month" claim because the dashboard had double-counted refunds. Switching one tool to a $3.99 one-time price improved conversion. Adding a paywall after launch drew negative reviews. — [DEV: real numbers, freemium Chrome extensions](https://dev.to/ktg0215/real-numbers-freemium-chrome-extension-monetization-after-6-months-5hga)
- **Chrome Web Store policies:**
  - The store bans "multiple extensions that provide duplicate experiences or functionality" and manipulation of ratings or installs. Extensions "should provide value to users through the creation of unique content or services." — [Chrome Web Store spam & abuse policy](https://developer.chrome.com/docs/webstore/program-policies/spam-and-abuse)
  - Affiliate-ads policy (published Mar 11, 2025, enforced from Jun 10, 2025): affiliate links, codes or cookies are allowed only with a direct, transparent user benefit, must be disclosed, and require user action. Background injection is banned. — [Chrome for Developers](https://developer.chrome.com/blog/cws-policy-update-affiliate-ads-2025?hl=en)
- **Forced maintenance (example):** Manifest V2 extensions were disabled by default on Mar 31, 2025 and could no longer be re-enabled from Jul 24, 2025 (Chrome 138). Remaining MV2 items were scheduled for removal from the Web Store on Aug 31, 2026. — [Chrome MV2 deprecation timeline](https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline)
- **Apple App Review Guidelines (fetched 2026-11-04):**
  - 4.2: apps must be "beyond a repackaged website", and an app that is "not particularly useful, unique, or 'app-like'… doesn't belong on the App Store."
  - 4.2.2: apps shouldn't primarily be marketing materials, ads, web clippings or collections of links.
  - 4.2.6: apps from "a commercialized template or app generation service will be rejected unless they are submitted directly by the provider of the app's content." A single "picker" app is allowed, e.g., "a restaurant finder app with separate customized entries or pages for each client restaurant."
  - 4.3(a): don't create multiple Bundle IDs of the same app (e.g., one per city).
  - 4.3(b): don't submit apps "indistinguishable from what's already widely available". Saturated categories (dating, flashlight, sound effects, wallpaper, simple timers, fortune telling) need a "meaningfully different or improved experience".
  - The guidelines don't ban AI-built apps. AI appears only in rules on UGC (1.2), chatbots (4.7) and disclosure of personal data shared with third-party AI (5.1.2(i)).
  - Source: [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- **Reading of the rejection rules:** A guide that reread the guidelines on Oct 21, 2026 says rejections of AI-built apps come from 4.2 (minimum functionality) and 4.3 (spam), and that the template language is in 4.2.6, not 4.3. — [Newly: guideline 4.3](https://newly.app/guides/guideline-4-3-spam-rejection). A developer-forum thread shows a 4.3(a) rejection after DeepSeek-based AI features were added. — [Apple Developer Forums](https://developer.apple.com/forums/thread/759667)
- **Store costs and gates:**
  - The Apple Developer Program costs "$99 annual membership". — [Apple Developer Program](https://developer.apple.com/programs/)
  - Google Play personal accounts created after Nov 13, 2023 must run a closed test "with a minimum of 12 testers" opted in "continuously for at least 14 days" before they can apply for production. — [Google Play Console Help](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en)
- **AI apps (RevenueCat, 2025 data):** AI apps are about 27% of subscription apps. They generate 41% more revenue per payer but churn 30% faster. About $3.5B of non-game in-app revenue came from generative AI. — [RevenueCat](https://www.revenuecat.com/state-of-subscription-apps-2026/); [PPC Land summary](https://ppc.land/ai-apps-earn-41-more-per-user-but-churn-30-faster-revenuecat-finds/)
- **AI-wrapper wipeout (the classic case, Nov 2023):** ChatGPT added PDF uploads. TechCrunch described PDF "wrapper startups" built around a ChatGPT feature gap, and one founder posted "Many startups just died today". TechCrunch also said it was unclear whether any would actually die. — [TechCrunch, Nov 6, 2023](https://techcrunch.com/2023/11/06/get-the-pdf-outta-here). Widely shared "90% of wrappers close" and "McKinsey 3% survival" claims have no verifiable source (2026 blog posts). — [DEV post](https://dev.to/autonainews/90-of-ai-wrapper-startups-face-2026-closures-as-value-add-strategy-crumbles-7d4)

### Inferences
- Chrome extensions are cheap to build with Claude Code and cost nothing to host, but the median result is pocket change. The audited portfolio (38 extensions, $31 MRR) is more typical than the 2019–2021 success stories. Google's platform changes (MV3, affiliate rules) force rework, so extensions are not hands-off.
- For mobile, Brandon would need a $99/yr Apple account and a Google Play account plus 12 real testers for 14 days, and he'd still face 4.2/4.3 review against simple "ChatGPT-in-an-app" ideas. With a median of $72 a month after a year, mobile is a poor first passive project for him.
- Guideline 4.2.6 matters if he ever wants per-restaurant apps. Apple will reject one app per food truck submitted by him. One "picker" app (a Central Florida food-truck finder with a page per client) is the allowed structure.
- An AI wrapper lasts only if it owns something the model makers won't build: a niche workflow, local data, a bilingual voice tuned to Hispanic food businesses, or integrations. A generic "AI caption generator" can be copied by ChatGPT or Higgsfield at any time.

### Gaps
- I found no reliable 2025–2026 dataset on Chrome extension revenue distribution beyond individual reports.
- I couldn't find Apple's own published rejection statistics for 4.2/4.3 broken out for AI-generated apps.
- I found no measured 2025–2026 revenue drop for a named wrapper after a specific OpenAI, Google or Anthropic launch.

## 5. Paid directories and listing sites: how they make money, the 2023–2025 AI-directory boom and bust, what works now

### Takeaway
Directories earn from recurring "featured" listings, sponsorships, lead-generation fees and some ads. A few well-known sites make $6K–$14K a month, while typical new directories make tens to hundreds of dollars. The AI-tool directory gold rush left many sites with collapsed Google traffic and tiny resale values. One verified Flippa example fell about 92% from peak clicks and sold-listed at $15K on ~$5K a year.

### Cited Findings
- **AI-tools directory (Flippa, "Vetted + Data Verified", Stripe connected; fetched 2026-11-04):** About $5,000 a year in revenue, peak month $900, from affiliate links, featured listings and paid promotions. Google clicks fell from **~200,000/month at peak to ~15,000/month (−92%)**, which the seller blames on stopping SEO work. Asking price was **$15,000**, and the listing ended. The listing contradicts itself: $626/month profit is about $7.5K a year, more than the stated ~$5K annual revenue, and the site is called "1-year-old" while the age field says 2 years. — [Flippa listing 12204765](https://flippa.com/12204765-1-year-old-directory-of-ai-tools-with-more-6700-users-240-sales-and-yearly-income-of-5000-very-easy-to-maintain-200k-clicks-from-google-at-peak)
- **A tiny paid-listings result:** A business-tools directory reports $35 in annual revenue from paid listings after switching between free and paid listings. — [Microns: Business Tools Directory](https://www.microns.io/startup-listings/business-tools-directory)
- **AI-directory founder lessons:** Affiliate revenue is inconsistent, and sponsored listings risk trust. — [DEV: I built an AI tools directory](https://dev.to/_1a008d053e73e4a54d13a/i-built-an-ai-tools-directory-these-10-lessons-hurt-the-most-3c39)
- **Top directory examples (self-reported or secondhand):**
  - SaaSHub: about 108 featured listings at ~$99/month gave over $10K MRR, and a later repost says $130/month × 106 listings ≈ $13.8K/month (Niall Doherty's breakdown, not SaaSHub's books). — [Indie Hackers: two directory sites making $10,000 monthly](https://www.indiehackers.com/post/two-directory-sites-making-10-000-monthly-9e10c20aac)
  - OpenAlternative crossed **$6K MRR by December 2025**, from ads, sponsorships and featured listings (snippet). — [Indie Hackers: $79k from side projects in 2025](https://www.indiehackers.com/post/79k-from-side-projects-in-2025-my-year-in-review-e145b2fa95)
  - Dirstarter (which sells directory software, so this is vendor content) says a small niche directory "typically makes $500–5,000 per month in its first year". It puts OpenAlternative at ~$6,500/month and Nomad List at ~$33,000/month (Jul 2026). — [Dirstarter](https://dirstarter.com/blog/how-much-do-directory-websites-make)
- **Failure and lead-gen examples:**
  - IndieHub, a directory for indie makers, showed $0 MRR and −55% growth on a tracking site. — [ShipByData: IndieHub](https://shipbydata.pages.dev/en/startup/indiehub)
  - One 2026 builder reports lead-generation commissions of $850/month against $350/month from display ads, saying lead gen beat listings (self-reported). — [DEV: directory making $4,700/month](https://dev.to/uur_kl_cdddfc05d1a8e/i-accidentally-built-a-directory-in-2026-that-now-makes-4700month-heres-the-platform-that-1opc)
- **Local directories:** Recurring featured or promoted listings ("businesses pay to sit at the top of their category") are described as the natural fit (Indie Hackers post by someone who productized local directories, which is a conflict of interest; snippet). — [Indie Hackers: niche local directory sites](https://www.indiehackers.com/post/niche-local-directory-sites-are-a-durable-solo-business-i-productized-the-boring-part-e0552817bb)

### Inferences
- The AI-tool directory niche is saturated, and its traffic is fragile. Building another one in late 2026 is a poor bet.
- A **hyper-local, bilingual "Central Florida food trucks" directory or schedule site** fits Brandon better than a generic directory. He already knows the trucks. A $10–30/month featured slot could be bundled into his ad packs, and diners searching "food trucks near me Kissimmee / Davenport" are local searches where map results and a real schedule help more than an AI summary. The catch is upkeep: schedules change daily. Without the trucks updating their own entries, the site goes stale and loses trust, so it is not passive.
- In this category, revenue depends on a few dozen businesses paying monthly. That is a sales job, which matches Brandon's outreach skills but is not passive.

### Gaps
- No systematic data on the 2023–2025 AI-directory boom and bust (traffic or revenue across many sites). There's An AI For That's revenue is not public.
- I found no revenue data for local food or food-truck directories in Florida or any other US market.

## 6. Costs and effort: hosting, AI API costs, payments/merchant of record, support, security/maintenance, how passive it really is; what Claude Code can build vs what the owner must do

### Takeaway
Running costs can stay under about $50 a month. The real costs are time and risk: payment and tax setup, app-store accounts, customer support, security fixes and SEO upkeep fall on the owner. AI-built apps have shipped serious data leaks, in 2025 and again in 2026. In the examples I found, the only near-zero-maintenance properties were mature content or tool sites, not new apps.

### Cited Findings
- **Vercel:**
  - Hobby is $0 but non-commercial only: AdSense, affiliate-first sites and taking payments all require Pro. Hobby includes 100 GB data transfer and 1M function invocations a month and can't buy more. — [Vercel Fair Use](https://vercel.com/docs/limits/fair-use-guidelines)
  - **Pro is $20/month** with a $20 usage credit and a default $200 on-demand budget that can pause projects at 100%. — [Vercel pricing](https://vercel.com/pricing)
- **Cloudflare Workers:** Free plan gives 100,000 requests/day at 10 ms CPU per call. Paid plan is a **$5/month** minimum with 10M requests included, then $0.30 per million. D1 free: 5 GB storage, 5M rows read/day. Static assets are free and unlimited. — [Cloudflare Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/)
- **Supabase:**
  - Free plan: 500 MB database, 50,000 monthly active users, 2 active projects, 5 GB egress, 1 GB storage. "Free projects are paused after 1 week of inactivity."
  - **Pro is from $25/month** (8 GB database, 100K MAUs, 250 GB egress).
  - Source: [Supabase pricing](https://supabase.com/pricing)
- **Payments (fetched 2026-11-04):**
  - Stripe: 2.9% + 30¢ for US cards; +1.5% for international cards; +1% when currency conversion applies. Stripe Billing pay-as-you-go adds 0.7% of billing volume. Stripe Tax Basic is 0.5% per transaction. **Stripe Managed Payments (merchant of record) adds 3.5% on top of payment fees.** — [Stripe pricing](https://stripe.com/pricing)
  - Lemon Squeezy: 5% + 50¢, acts as merchant of record and files sales tax and VAT. It has a "2026 Update: Lemon Squeezy + Stripe Managed Payments" banner. Its CEO's 2026 post sets moving merchants to Stripe Managed Payments as the goal, and secondary coverage says the post admitted slower support during the transition. — [Lemon Squeezy pricing](https://www.lemonsqueezy.com/pricing); [Lemon Squeezy 2026 update](https://www.lemonsqueezy.com/blog/2026-update); [Inkfluence summary](https://www.inkfluenceai.com/blog/how-to-sell-ebooks-on-lemon-squeezy-2026)
  - Paddle: 5% + 50¢, merchant of record, no monthly fee, custom pricing for products under $10. — [Paddle pricing](https://www.paddle.com/pricing)
  - ExtensionPay (for extensions): 5% + Stripe fees. — [ExtensionPay](https://extensionpay.com/)
- **AI API costs (Claude, fetched 2026-11-04, per million tokens):**
  - Haiku 5.5: $0.10 input / $0.50 output for prompts up to 100K tokens.
  - Haiku 4.5: $1 / $5.
  - Sonnet 5.5: $2 / $10.
  - Opus 5.5: $4 / $20.
  - The Batch API gives 50% off both input and output.
  - Source: [Claude API pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- **Security track record of vibe-coded apps:**
  - CVE-2025-48757: insufficient Supabase Row-Level Security in Lovable-generated sites through 2025-04-15 let "remote unauthenticated attackers… read or write to arbitrary database tables". — [CVE-2025-48757 (Intruder)](https://cvemon.intruder.io/cves/CVE-2025-48757)
  - Feb 2026: a Lovable-showcased app reportedly exposed data on about 18,000 users through inverted access-control logic. — [The Register, Feb 27, 2026](https://www.theregister.com/2026/02/27/lovable_app_vulnerabilities)
  - 2026: Lovable reportedly left thousands of projects exposed for 48 days. — [The Next Web](https://thenextweb.com/news/lovable-vibe-coding-security-crisis-exposed)
- **Maintenance hours actually reported:**
  - CalcXi: 4–7 hours/week. — [Flippa 13841260](https://flippa.com/es/13841260-30-free-calculator-and-utility-tools-across-8-niches-finance-health-construction-seo-youtube-ai-math-insta-business-seo-traffic-adsense-monetized)
  - The 15-year-old PDF site: 0 hours/week (seller claim). — [Flippa 10100985](https://flippa.com/10100985-online-pdf-conversion-site-adsense-fully-automated-100-html)
  - The AI directory lost ~92% of its clicks after SEO work stopped. — [Flippa 12204765](https://flippa.com/12204765-1-year-old-directory-of-ai-tools-with-more-6700-users-240-sales-and-yearly-income-of-5000-very-easy-to-maintain-200k-clicks-from-google-at-peak)
- **Billing failures as a support burden:** Billing failures cause 32.2% of Google Play subscription cancellations, against 15.2% on the App Store (2025). — [RevenueCat via secondary coverage](https://www.subscriptioninsider.com/blog/revenuecat-data-shows-subscription-app-growth-concentrating-at-the-top-news)

### Inferences
- **Fee examples (my arithmetic from the pricing pages above):**
  - A $9/month US subscription costs about $0.62 per charge on Stripe with Billing (≈6.9%).
  - It costs $0.95 on Lemon Squeezy or Paddle (≈10.6%).
  - It costs about $0.94 on Stripe Managed Payments with Billing (≈10.4%).
  - Merchant-of-record options cost roughly 3–4 points more but handle sales-tax filing for Brandon, which is worth it for a solo non-accountant selling online.
- **AI cost per call (my arithmetic):** A call with 2,000 input and 500 output tokens costs about **$0.00045 on Haiku 5.5** (~2,200 calls per $1) and about **$0.009 on Sonnet 5.5** (~110 calls per $1). For a text-only tool, AI cost is negligible next to payment fees. Image and video generation (e.g., Higgsfield credits) cost far more per output.
- **Fixed monthly floor for a small paid web app:** about $0–5 for static or ad-supported tools on Cloudflare. About $20–50 for a SaaS with a database (Vercel Pro $20 + Supabase Pro $25, or Cloudflare $5 + D1). Add $99/yr if it goes on iOS. Domain cost was not verified here.
- **What Claude Code can do:** write and deploy the code; set up Cloudflare, Vercel or Supabase from the command line once credentials exist; write SEO pages in English and Spanish; run scheduled tasks for content refreshes, uptime and error checks, and data updates; draft support replies; and audit security settings such as Row-Level Security (RLS) and exposed keys.
- **What Brandon must do himself:** open and verify the Stripe, Lemon Squeezy or Paddle accounts (identity and bank are his); own the AdSense, Apple and Google developer accounts; recruit the 12 Google Play testers; answer customers and approve refunds; approve every outreach email (his own rule in CLAUDE.md); and carry legal and tax responsibility.
- "Day and night" automation fits content and SEO upkeep and monitoring well. It does not replace getting customers, which is where every source says small software succeeds or fails.
- Each Lovable incident traces back to Supabase databases shipped without proper access rules. Any app holding customer data (food-truck owners' emails, payments) needs Row-Level Security rules plus a security review before launch. That is extra work, and a breach could also hurt Brandon's main service business.

### Gaps
- I didn't verify current domain registration prices.
- I didn't fetch Cloudflare's terms to confirm the free plan allows commercial or ad-supported use (the pricing page lists no restriction).
- I found no published data on support hours per customer for solo micro-SaaS.
- I didn't check the hosting and commercial terms of the Higgsfield website builder (available in this session).

## 7. Selling software assets: Acquire.com/Flippa multiples for small SaaS and tools in 2025–2026

### Takeaway
Small software sells for about **2–4× annual profit**. On Flippa in 2025, SaaS averaged 2.7× profit (5.8× top quartile) and deals of $10K–$100K averaged 1.8×. Products with no revenue are close to worthless (GrubLedger at $300). On TrustMRR, small listings ask anywhere from 0.4× to 8.9× annual revenue. Asking is not selling.

### Cited Findings
- **Flippa 2025 marketplace data (Jan–Dec 2025; post updated Dec 23, 2025)** — [Flippa: 2025 Online Business M&A Insights](https://flippa.com/blog/2025-online-business-ma-insights-from-flippa/):
  - Average / top-quartile profit multiples: **SaaS 2.7× / 5.8×**, apps 2.4× / 5.4×, premium content 2.6× / 5.5×, ecommerce 1.4× / 2.7×, YouTube 1.8× / 3.9×.
  - By deal size: **$10K–$100K: 1.8× / 3.9×**, $100K–$250K: 2.1× / 4.2×, $250K–$1M: 2.3× / 3.5×, $1M+: 2.9× / 5.4×.
  - Volume vs 2024: SaaS +73.5%, content sites −33.5%, YouTube +155%. 37% of buyers made more than one purchase.
  - Deals of $100K–$500K take about 90 days to close with clean financials.
- **Acquire.com:**
  - Its January 2024 report put the median at 4.3× trailing-12-month (TTM) profit, with a range of 0.63×–34× (secondary summary). — [Livmo summary](https://livmo.com/?p=10711)
  - BigIdeasDB says Acquire.com closed deals at a median 3.9× SDE (seller's discretionary earnings, roughly owner profit) in both 2024 and 2025 for deals under $10M (snippet, unverified against Acquire). — [BigIdeasDB State of Small SaaS Valuations 2026](https://bigideasdb.com/state-of-saas-valuations-2026)
  - BigIdeasDB's listing analysis (asking prices) shows a median 3.5× profit for $50K–$250K listings and 5.0× at $250K+. Listings with 0–3% monthly churn ask 4.2×, and higher-churn listings 3.8× (snippet). — [BigIdeasDB SaaS Valuation Multiples 2026](https://bigideasdb.com/saas-valuation-multiples-2026)
  - Across 651 listings, the median asking price is $195,800 at about 2× revenue (snippet). — [BigIdeasDB](https://bigideasdb.com/state-of-saas-valuations-2026)
- **TrustMRR marketplace (fetched 2026-11-04):**
  - Asking prices for small listings: TrackThletics $56/mo at $6k (8.9×), Privkap $98/mo at $4.5k (4.3×), UseHite $956/mo at $45k (3.9×), MAX Dating AI Suite $912/mo at $4.9k (0.4×), ReplyCurrent $274/mo at $1.8k (0.5×), Stud Finder Wall Detector Tool $5.1k/mo at $130k (2.1×). — [TrustMRR](https://trustmrr.com/)
  - TrustMRR claims a 3% flat fee, "3 offers within 48 hours" for well-priced startups and a 23-day average close (marketing claims, snippet). — [TrustMRR: why sell](https://trustmrr.com/why-sell-on-trustmrr)
- **Revenue-less builds:** GrubLedger (food-truck SaaS, $0 revenue) was listed at $300. — [Flippa 13529765](https://flippa.com/13529765-turnkey-saas-for-food-truck-operators-permit-tracking-event-booking-prep-lists-catering-quotes-financials-stripe-billing-live-with-3-tiers-free-trial)
- **Free-tool and directory sites:** CalcXi (−$50/mo profit) was asking $2,000. The AI directory (~$5K/yr) was asking $15,000 (about 2× profit). — [Flippa 13841260](https://flippa.com/es/13841260-30-free-calculator-and-utility-tools-across-8-niches-finance-health-construction-seo-youtube-ai-math-insta-business-seo-traffic-adsense-monetized); [Flippa 12204765](https://flippa.com/12204765-1-year-old-directory-of-ai-tools-with-more-6700-users-240-sales-and-yearly-income-of-5000-very-easy-to-maintain-200k-clicks-from-google-at-peak)

### Inferences
- The TrustMRR multiples shown equal asking price ÷ (monthly revenue × 12). For example, UseHite: $45,000 ÷ ($956 × 12) = 3.9. So they are annual-revenue multiples, not profit multiples (my arithmetic).
- Building to sell is a weak plan at Brandon's scale. A tool making $300 a month profit ($3,600/yr) would fetch roughly $6.5K at Flippa's 1.8× small-deal average, or $14K at the top quartile, and only after a buyer's due diligence. The money is in running it, not flipping it.
- Revenue verification (connected Stripe, AdSense, Google Analytics) and low churn are what lift multiples, so any project should be on Stripe and Search Console from day one.

### Gaps
- I couldn't access Acquire.com's own 2025 Annual SaaS Report, so its 2025 median multiples remain unverified.
- I found no closed-sale (not asking) data for TrustMRR listings under $1K MRR.
- I found no data on sale multiples for Spanish-language or US-Hispanic-focused software.
