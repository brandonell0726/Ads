# Gap research: build paths for the self-serve AI ad app, Higgsfield's builder included (as of 2026-11-04)

Scope: the build-path questions the earlier notes left open. (1) What Higgsfield's own website/app builder ("Supercomputer": Apps, Websites, Games) can and can't do, and what the Higgsfield developer API allows for third-party apps. (2) A side-by-side of three build paths for a non-coder working with Claude Code. (3) Cheap "concierge" or "Wizard of Oz" tests to check demand before building anything. Costs, credit design and legal basics are already in `build_costs_credits_legal.md` and `verification_costs_terms_legal.md`. They're reused here only where needed, with their original source URLs.

Method and reliability:
- About 25 web searches and 19 page fetches on 2026-11-04. Higgsfield's blog, help center, API docs and Terms of Use could be fetched directly, and so could the official Lovable, Bolt, Replit, Stripe, Carrd and Tally pages. Framer, Typeform, Calendly, Lovable Cloud and some Lovable/Bolt/Replit details come from third-party pricing sites and are marked as such.
- Read-only Higgsfield MCP calls in this session: `get_workflow_instructions("website-builder-flow")`, then `get_workflow_bundle_file` for `references/app-flow.md`, `runtime-and-infra.md`, `auth.md`, `fnf-sdk.md`, `containers.md`, `security.md`, `app-layouts.md`, `website-flow.md` and `contest.md`, plus `list_website_categories`, `list_websites` and `balance`. Nothing was created, deployed, published or generated, and no credits were spent. The bundle is versioned `2026-07-25-cover-compose-v3-no-model-text`.
- "MCP output" below means the text these tools returned. It is Higgsfield's own developer guidance for its builder, so treat it as first-party but internal. It can change without notice.

---

## Bottom line

- **Higgsfield's builder can't host Brandon's paid product.** For a Higgsfield "app" (the only builder type that may generate images or video), every end user has to sign in with their own Higgsfield account and pays for generations with their own Higgsfield credits. Brandon can't set his own credit price or keep a margin on generation. The app also has to look like a Higgsfield product (Higgsfield's design system, always dark) and runs inside Higgsfield on a `*.higgsfield.app` address. The Terms bar "sales directed at other users on the Service" without Higgsfield's written consent. The other builder type, "website", can have its own brand and its own Stripe, but Higgsfield's rules forbid any AI generation on it.
- **The builder is still useful in two ways.** (1) As a no-extra-cost host for a branded landing page with a photo-upload form and a Stripe checkout ("website" type, for the concierge test). (2) As a free demo app on Higgsfield's community feed, built on the "preset" template (pick a style, then generate), which matches Brandon's "pick one of 5 ad styles" idea. Neither earns money per use.
- **For the real self-serve app, Brandon bills customers himself.** The Higgsfield API uses account-level keys only: no OAuth, and no way to charge his customers' Higgsfield accounts. Path (a) (Claude Code writing Next.js + Supabase + Stripe, hosted on Vercel, generating through the Higgsfield API and/or fal) gives the most control and lowest lock-in, at about $45–150/month fixed. Path (c) (Lovable, Bolt or Replit) is quicker to get looking right and costs about $20–50/month plus usage, but Brandon would still have to set up Stripe webhooks and the credit ledger himself.
- **Test demand first.** A concierge test costs about $3–15/month plus Stripe fees: Carrd + Tally + Stripe Payment Links, with Brandon making the ads in Higgsfield, which he already pays for. His Ultra balance of about 3,900 credits covers roughly 25–35 "launch pack" orders (estimate). Higgsfield's Terms allow selling outputs to clients, so this is cleaner than any automated setup built on his Ultra plan.

---

## 1. Higgsfield's website/app builder (Supercomputer)

### Takeaway
Higgsfield's builder ships real full-stack sites: React 19 + TanStack Start, running server-side as a single Cloudflare Worker, with an optional database (D1), file storage (R2), KV store, Durable Object, a container for heavy jobs, secrets, and git access to the code. You build it by chatting, including from Claude through MCP. It comes in three product types with hard rules. **"App"** = Sign in with Higgsfield + generation billed to each visitor's own Higgsfield credits + Higgsfield's look. **"Website"** = your own brand, your own backend and third-party APIs like payments, but **no AI generation of any kind**. **"Game"** = multiplayer browser games. Hosting is on `<name>.higgsfield.app`. Building costs Brandon's normal plan credits. No hosting price, revenue share or creator payout is published. Custom domains mean contacting Higgsfield.

### Cited findings

**Product types and the "generation = app" rule**
- `create_website` requires a `type`: `"website"`, `"app"` or `"game"`. A website has "NO Higgsfield integration and **NO AI generation of any kind** (no image/video/audio/text generation — not via Higgsfield, and not via some other provider)". An app is "tightly integrated with Higgsfield: its users Sign in with Higgsfield and generate images/videos through the fnf SDK". — MCP output, `website-builder-flow` SKILL.md
- "Generation is ALWAYS an app… (Sign in with Higgsfield, generation on the user's Higgsfield credits). NEVER offer the user an option to 'bring your own image/video API' or plug in their own generation key for a website — that path does not exist." A website may still use "ordinary non-generation third-party APIs — payments, maps, email — with the user's own keys". — MCP output, SKILL.md
- Even text/LLM features count as generation and so must be an app: "the platform attaches the visitor's identity and bills their credits… NEVER on a `type: "website"` build, and never a 'bring your own LLM key' path." — MCP output, `references/fnf-sdk.md`
- App starter templates: `studio` (full workspace), `preset` ("pick-a-style-then-generate… persistent left creation rail beside a browsable preset grid with a History tab"; also the base for wizards and upload-configure-iterate tools) and `app-detail` (one tool's landing page; the nearest fit for a before/after tool). — MCP output, `references/app-layouts.md`

**Who pays for generation**
- "Users generate on their own credits, so the creator pays nothing when others use it." The example app Plushies costs users $1 for 20 photos or two videos. — [Higgsfield blog: Introducing Higgsfield Apps](https://higgsfield.ai/blog/introducing-higgsfield-apps) (2026-07-09)
- "their generations are billed to their credits, not yours." The creator pays only to build. — [Higgsfield help center: What are Higgsfield Apps](https://higgsfield.ai/creator-hub/help-center/tools-and-workflows/what-are-higgsfield-apps) (published 2026-08-01, modified 2026-09-01)
- Generation calls go only to `https://fnf.internal` from server code, and "the platform attaches the user's identity on server egress". Each submit needs a confirmation pop-up showing model, settings and credit cost. — MCP output, `references/app-flow.md`, `references/fnf-sdk.md`

**Accounts and login**
- Apps must use Higgsfield's login (`/__auth/login`, `/__auth/logout`, a `/api/user` proxy). "Do not invent your own login UI, email/password form, or token handling." If an app also needs its own accounts, keep them separate, and "never replace Higgsfield auth with app-local auth for generation". — MCP output, `references/app-flow.md`, `references/auth.md`
- Websites (no generation) build their own login and sessions, stored in their own database. — MCP output, `references/website-flow.md`, `references/auth.md`

**Look and feel (apps)**
- An app "must look and feel like a Higgsfield product: UI built with Quanta". "Apps never get a custom brand — Quanta is the brand." It is always dark ("no light mode"). There is no app header because "apps render INSIDE Higgsfield". — MCP output, SKILL.md and `references/app-flow.md`
- Websites get "a fully independent brand… no 'Powered by / Built on Higgsfield' badges". — MCP output, SKILL.md

**Database, storage, secrets, server code, long jobs**
- Infrastructure is opt-in in `app.manifest.json`: D1 database, R2 file storage, KV, one Durable Object, one container. "Counts are capped (≤1 each)". KV is "eventually consistent (NOT Redis)". — MCP output, `references/app-flow.md`, `references/website-flow.md`
- There's one live deploy and one database: "there is no staging copy… Any migration or data change hits live production data directly." — MCP output, `references/runtime-and-infra.md`
- Server logic runs as TanStack server functions or routes. The Worker has a 128 MB memory limit and a 100 MB request body limit. — MCP output, `references/runtime-and-infra.md`, `references/security.md`
- Secrets: API keys go in `website_secrets` or in Higgsfield's website settings, read server-side. In "brokered" mode the user enters the values in Higgsfield's settings, and they're never pasted into chat. — MCP output, SKILL.md, `references/security.md`
- Heavy or long work (ffmpeg, minutes-to-hours jobs) can run in a Docker container fronted by a Durable Object. It's limited to `max_instances: 1`, one shared container for the whole site, with a 3-hour job deadline in the example. A container reaches Higgsfield generation through the site's own API using a short-lived "container token" (3 h, one user + one site). — MCP output, `references/containers.md`
- Conflict: `runtime-and-infra.md` says "Containers/code sandboxes are not deployable through this template yet", while `containers.md`, `app-flow.md` and `website-flow.md` document `"container": true`. — MCP output (unresolved)
- The security guide expects payment-processor webhooks on websites: "Webhook/Callback Endpoints — External services that call back into the website (payment processors…)", with signature checks and protection against duplicate credits. — MCP output, `references/security.md`
- The help center says an app is "a React app on a single server with a database and file storage", and that you can view the database read-only. — [Help center](https://higgsfield.ai/creator-hub/help-center/tools-and-workflows/what-are-higgsfield-apps) (2026-09-01)

**Payments**
- No Higgsfield page mentions Stripe, payments, paywalls or creator revenue share for apps. The only payout described is the App Contest prize pool. — [Blog](https://higgsfield.ai/blog/introducing-higgsfield-apps); [Help center](https://higgsfield.ai/creator-hub/help-center/tools-and-workflows/what-are-higgsfield-apps). A web search on 2026-11-04 for an app-creator revenue share found none. The MCP builder docs also never mention charging app users.
- Terms §5.1(ii)(e) bar "commercial activities and/or sales directed at other users on the Service" without "Company's prior written consent", though "this clause does not limit your commercial use of Outputs as described in Section 4.4." — [Higgsfield Terms of Use](https://higgsfield.ai/terms-of-use-agreement) (last updated 2026-10-23)

**Domains, publishing, remixing, removal**
- The live URL is `<subdomain>.<host>`. The subdomain must be more than 4 characters, lowercase, with single hyphens. Short words like `api`, `www` and `app` are reserved. — MCP output, SKILL.md. The host is `*.higgsfield.app`. — MCP output, `references/security.md`; [Blog](https://higgsfield.ai/blog/introducing-higgsfield-apps)
- Custom domains: apps run on renameable Higgsfield subdomains, and "for anything beyond that" the help center points to the contact page. — [Help center](https://higgsfield.ai/creator-hub/help-center/tools-and-workflows/what-are-higgsfield-apps)
- Deploy goes live straight away. Publishing to the community "Explore" feed is optional. Listed apps can be used and remixed by others, and unlisted apps can't be remixed. — MCP output, `references/app-flow.md`; [Help center](https://higgsfield.ai/creator-hub/help-center/tools-and-workflows/what-are-higgsfield-apps)
- Before going live, "an automated LLM check screens for malicious intent, NSFW content, and IP issues". — [Blog](https://higgsfield.ai/blog/introducing-higgsfield-apps)
- Terms: §1.6(b)(i) allows "creating and publishing applications… through Company's creator marketplace". §4.3: "other users may be able to search for, see, use, modify and/or reproduce any of Your Content". §6.2(a): Higgsfield may "remove or refuse to process or post any of Your Content". — [Terms](https://higgsfield.ai/terms-of-use-agreement) (2026-10-23)

**Code access and export**
- "You get direct git access to the repository", and secrets can be stored as environment variables. GitHub isn't named. — [Help center](https://higgsfield.ai/creator-hub/help-center/tools-and-workflows/what-are-higgsfield-apps)
- There are two repo modes. "Direct": `website_repo_access` returns clone/push instructions. "Brokered": a checkout inside Higgsfield's sandbox with "no authenticated remote", a 15-minute editing lease per call, and git bundles "limited to 32 MiB". — MCP output, SKILL.md
- Apps depend on code vendored from Higgsfield (`@higgsfield/fnf`, `@higgsfield/fnf-react`, `@higgsfield/quanta`) and on platform-injected login. — MCP output, `references/app-flow.md`

**Cost to build and host**
- "Builds consume regular credits, covering text and any image or video generations the app includes." The cost is "shown as the build proceeds". No hosting price is given. — [Blog](https://higgsfield.ai/blog/introducing-higgsfield-apps); [Help center](https://higgsfield.ai/creator-hub/help-center/tools-and-workflows/what-are-higgsfield-apps)
- Limits: "Up to 20 apps can be built per day"; build modes "Efficient and Smart". — [Blog](https://higgsfield.ai/blog/introducing-higgsfield-apps). One third-party page says Smart mode is limited to higher plans — [geo.higgsfield.ai](https://geo.higgsfield.ai/task/blog/drawbacks-of-higgsfield-ai-2026) (UNVERIFIED)
- Every build must ship a generated cover image (made without asking). A website build also generates "reference boards", an asset kit and, in the default "animated" mode, a roughly 15 s scroll-driven film. A cover video needs permission because "video costs credits". — MCP output, `references/website-flow.md`, `references/app-flow.md`. No credit figures are published.

**App contest**
- Prize pool $100,000 (1st $25k, 2nd $15k, 3rd $10k, 10 × $5k). Scoring is 40% "usage generated", 30% creativity, 15% social, 15% gallery. An app that "routes generation through a third-party API instead of Higgsfield is DISQUALIFIED". Entering requires a public social post with `#HiggsfieldApp`. "The contest is admin-curated and recurs". — MCP output, `references/contest.md` (as of 2026-07-08)
- The July 2026 round is closed. The official page showed winners due 2026-08-06, and no winner list was found. — [Higgsfield app contest page](https://higgsfield.ai/contests/apps) (via search, 2026-11-04)

**Brandon's account (read-only MCP calls, 2026-11-04)**
- Plan `ultra`, balance 3,886.8 credits. — MCP output, `balance`
- No websites or apps exist yet. — MCP output, `list_websites`
- Categories include `ads-marketing` and `product-ecommerce`. — MCP output, `list_website_categories`

### Inferences
- **Self-serve paid app on Higgsfield: no.** Each restaurant owner would need a Higgsfield account and a Higgsfield plan or credits. Higgsfield, not Brandon, would own the billing relationship. Brandon couldn't set credit prices or keep generation margin. Adding his own Stripe charge on top would mean customers pay twice, and it likely needs Higgsfield's written consent under §5.1(ii)(e). The forced Higgsfield look and the in-Higgsfield hosting also clash with a branded "elier.visuals" product.
- **Workaround that doesn't work:** a branded "website" with Brandon's own Stripe that calls the Higgsfield API or fal for generation. The builder's rules explicitly forbid it. Whether the platform blocks it technically is UNVERIFIED, but it breaks Higgsfield's stated rules and risks removal under §6.2(a).
- **Good use 1, concierge landing page:** a "website" build (own brand, D1 for orders, R2 for uploaded photos, Stripe with Brandon's own keys) costs only build credits and no extra hosting fee, as far as published. Downsides: the address is `something.higgsfield.app` unless Higgsfield sets up a custom domain; there's one production database and no staging; the default "animated" website spends video credits; and Brandon doesn't own the hosting. For a demand test, Carrd + Tally (§4) is simpler and fully under his control.
- **Good use 2, free demo or lead-magnet app:** a `preset`-template app ("Pick a style → upload your burger → get a menu-ready ad") on the Explore feed costs Brandon nothing per use and shows off his styles. But the audience is Higgsfield users (creators), not restaurant owners, and anyone can remix a listed app. It's a marketing piece or portfolio item, not a revenue engine. Contest prizes are the only payout found, and any future round's dates and rules are unknown.
- **Lock-in for apps is total:** login, generation, billing and UI are all Higgsfield's. Leaving means rewriting those parts, even though git access exists. Websites are fairly portable: TanStack Start + Cloudflare D1/R2 can move to Brandon's own Cloudflare account with some work.

### Gaps
- No published price for hosting, bandwidth, storage, or the credits a typical build uses. Whether apps/websites stay up if the Ultra plan lapses: UNVERIFIED.
- Whether Higgsfield grants written consent for paid apps or paywalls, or plans creator monetization: not found (worth emailing Higgsfield support).
- The process, cost and plan requirement for custom domains: not documented (the help center points to the contact page).
- Whether free Higgsfield accounts get any credits to use an app: not checked.
- Whether containers can actually be deployed today: the MCP docs conflict.

---

## 2. Higgsfield developer API: can Brandon's customers be billed through Higgsfield?

### Takeaway
No. The API authenticates Brandon's account with his key, and every generation is charged to his USD balance. Nothing lets his customers pay Higgsfield directly, so Brandon must charge them himself (Stripe). The current Terms allow API-built apps for end users, but not as a "pass-through", and not as products "that compete with the Service". Practical mechanics: requests over the limit are queued, webhooks are available, failures aren't charged, and outputs are deleted after 7 days.

### Cited findings
- Credentials are "a key ID and a secret", sent as `Authorization: Key`. "Authentication identifies the account." Nothing covers OAuth or delegated user tokens. "Do not call the API directly from browser or mobile application code." — [Higgsfield API docs: Authentication](https://docs.higgsfield.ai/docs/authentication.md) (read 2026-11-04)
- The docs index lists billing, webhooks, SDKs (Python and TypeScript), enterprise organizations and access control, but no OAuth, "Sign in with Higgsfield", end-user billing or apps-platform entries. — [docs.higgsfield.ai/llms.txt](https://docs.higgsfield.ai/docs/llms.txt) (read 2026-11-04)
- Billing: only successful requests are charged. `failed` and `nsfw` results are refunded. Cancelling is possible only before processing starts. Balance funds expire one year after they're added. An estimate endpoint returns a USD cost. — [Billing and retention](https://docs.higgsfield.ai/docs/concepts/billing-and-retention.md) (read 2026-11-04)
- Retention: "Request files are kept for seven days after the request finishes, then deleted". Higgsfield recommends copying outputs to your own storage. — [Billing and retention](https://docs.higgsfield.ai/docs/concepts/billing-and-retention.md)
- Limits: concurrency is set per account in the Console, and some models have their own limits. Requests over the limit are `queued`. A full queue returns `429 account_queue_full` with `Retry-After`. Send an `Idempotency-Key` with each request. No rate-limit headers are sent on success. — [Rate limits](https://docs.higgsfield.ai/docs/concepts/rate-limits.md); [Capacity](https://docs.higgsfield.ai/docs/enterprise/capacity.md) (read 2026-11-04). Creating a key unlocks 20 concurrent requests — [Help center: What is the Higgsfield API](https://higgsfield.ai/creator-hub/help-center/integrations/what-is-the-higgsfield-api) (2026-09-16, via earlier notes)
- Webhooks: pass `hf_webhook=<https URL>` per request. Higgsfield POSTs on `completed`, `failed` or `nsfw`, signed per the Standard Webhooks spec. Retries continue for up to 2 hours. The endpoint must reply within 10 s. Deduplicate by `webhook-id`. — [Webhooks](https://docs.higgsfield.ai/docs/how-to/webhooks.md) (read 2026-11-04)
- API and web plans are billed separately. Ultra doesn't include API access. The minimum top-up is $5. — [Help center](https://higgsfield.ai/creator-hub/help-center/integrations/what-is-the-higgsfield-api) (2026-09-16, via `verification_costs_terms_legal.md`)
- Terms: §1.2 licenses use of "APIs, MCP integrations, CLI tools" to "build and operate applications for your end users in accordance with Section 11". §11.5: no making Developer Access available "on a standalone basis… or act as a pass-through or service bureau for the Service with no independent value added". §11.3: keys are "for your use only". §11.9: access can be suspended "immediately and without prior notice". §5.1(iii): no using the Service or Outputs to develop "any products or services that compete with the Service". §9.4: credits are "non‑transferable". — [Terms](https://higgsfield.ai/terms-of-use-agreement) (2026-10-23; §1.2 quoted in `verification_costs_terms_legal.md`)

### Inferences
- Brandon has to run the money side himself: Stripe takes the payment → his app adds credits in its own ledger → his server spends his Higgsfield API (or fal/Google) balance. His price per credit has to cover the API cost, re-rolls and Stripe fees (see `build_costs_credits_legal.md` §4–5).
- Webhooks plus the 7-day deletion mean the app must (1) receive the webhook quickly, (2) copy the finished file into its own storage (Supabase Storage or R2) straight away, and (3) charge credits only on `completed`. Failed jobs cost Brandon nothing on the API, so refund the customer's credits automatically.
- §5.1(iii) is the open risk for any Higgsfield-backed ad tool, because Higgsfield sells Marketing Studio and Ads Studio. Using fal or Google directly as the main backend, with Higgsfield API as an optional extra, lowers that risk. Asking Higgsfield in writing removes it.

### Gaps
- No written statement from Higgsfield on whether a restaurant-ad app counts as "value added" (§11.5) or "competing" (§5.1(iii)).
- Default concurrency for a new key beyond the "20" in the help center, and the queue multiplier, aren't published.

---

## 3. Three build paths compared

### Takeaway
For a paid, branded self-serve app, **path (a)** (Claude Code writes a normal Next.js + Supabase + Stripe app on Vercel, generating through the Higgsfield API, fal or Google) is the best fit. It handles everything Brandon needs, has the lowest lock-in, and its costs are already worked out in the earlier notes. **Path (c)** (Lovable, Bolt or Replit) can stand up sign-up, Stripe checkout and a gallery in days with less technical help. But Stripe webhooks, the credit ledger and long video jobs still need careful prompting, and the code is only partly portable. **Path (b)** (Higgsfield builder) can't bill customers for generation (§1), so it fails as the product. It is only good for a landing page or a free demo.

### Comparison

| | (a) Custom code with Claude Code: Next.js + Supabase + Stripe + Higgsfield API / fal / Google on Vercel | (b) Higgsfield builder ("app" type, the only one allowed to generate) | (c) AI app builder (Lovable / Bolt / Replit) wired to the same APIs and Stripe |
|---|---|---|---|
| Sign-up / login | Yes: Supabase Auth (email or Google) | Only "Sign in with Higgsfield" for generation; customers need Higgsfield accounts | Yes: Lovable Cloud/Supabase auth; Bolt and Replit have built-in databases and auth |
| Credit balance Brandon controls | Yes: his own ledger table, topped up by Stripe webhooks | No: generation draws on the visitor's Higgsfield credits | Yes, if he has the builder write a ledger and webhooks (not automatic) |
| Stripe subscriptions | Yes: Checkout, Billing, webhooks | Not documented; §5.1(ii)(e) needs written consent | Lovable: generated checkout, subscription check, portal; **webhooks off by default**; subscriptions matched by email. Bolt: Stripe through Bolt Cloud. Replit: Stripe connector with your own keys |
| Long video jobs (1–5 min renders) | Submit to the provider queue with `hf_webhook` / `fal_webhook` and save the result; Vercel Pro functions run up to 800 s if needed | Platform handles queueing; job state comes from the SDK | Same webhook pattern; Lovable/Supabase edge functions are capped at 150 s (free) or 400 s (paid), so they must not wait on the render |
| File storage | Supabase Storage (100 GB on Pro) | R2 (one bucket), with outputs in the user's Higgsfield history | Lovable Cloud storage; Bolt: 100 MB upload limit on Pro; Replit object storage (price not checked) |
| Fixed monthly cost (before generation) | About $45 to start charging (Vercel Pro $20 + Supabase Pro $25); about $50–150 at about 100 users | $0 extra published; build uses Ultra credits | Lovable Pro about $25 + Cloud usage from the same credits; Bolt Pro $25; Replit Core $20 + deployment $2+ (Autoscale) or $15–130 (Reserved VM) |
| Lock-in | Low: standard code in his own GitHub, his own Stripe/Supabase/Vercel accounts | Very high: login, billing, UI and hosting all Higgsfield's | Medium: code exports through GitHub sync, but hosting, secrets and backend wiring live in the builder |
| What Brandon does himself | Create and own accounts (GitHub, Vercel, Supabase, Stripe, API balances, domain); approve each Claude Code change; test payments; write terms and privacy pages | Chat to build; can't price generation; customers must join Higgsfield | Prompt and test in the builder; connect Stripe and set up webhooks; set keys; watch build-credit burn |

### Cited findings

**Path (a): custom code**
- Vercel: Hobby "is for personal, non-commercial use"; Pro is $20/month with a $20 usage credit and 1 TB transfer, then from $0.15/GB. — [Vercel pricing](https://vercel.com/pricing) (read 2026-11-04, via `verification_costs_terms_legal.md`)
- Vercel function duration: Hobby 300 s maximum; Pro and Enterprise 300 s default, 800 s maximum (generally available), 1,800 s in beta. — [Vercel functions limitations](https://vercel.com/docs/functions/limitations); [Fluid compute](https://vercel.com/docs/fluid-compute) (updated 2026-07-01)
- Supabase Pro $25/month: 8 GB database, 100 GB storage, 250 GB egress, 100K MAU. — [Supabase pricing](https://supabase.com/pricing) (read 2026-11-04, via `verification_costs_terms_legal.md`)
- Supabase Edge Functions wall-clock limit: 150 s on free, 400 s on paid; background tasks run until that limit. — [Supabase Edge Functions limits](https://supabase.com/docs/guides/functions/limits) (read via search 2026-11-04)
- fal queue: `fal_webhook` URL per request, POSTed on completion; status and result can also be polled by request ID; a full queue returns 429. — [fal Queue API](https://fal.ai/docs/inference-api/queue/submit.md) (via search 2026-11-04)
- Higgsfield API webhooks and 7-day retention: see §2. — [Webhooks](https://docs.higgsfield.ai/docs/how-to/webhooks.md); [Billing and retention](https://docs.higgsfield.ai/docs/concepts/billing-and-retention.md)
- Stripe: 2.9% + 30¢ per card charge; Billing pay-as-you-go is 0.7% of Billing volume, "Excludes one-off invoices". — [Stripe Billing pricing](https://stripe.com/billing/pricing) (read 2026-11-04)
- Long AI-video jobs: separate the submit from the status check and never hold an HTTP request open for the render; one provider's jobs failed at a 100 s Cloudflare edge timeout until they did this. — [dev.to: long-running AI video renders](https://dev.to/vlogmeai/handling-long-running-ai-video-renders-202-accepted-polling-and-signed-webhooks-with-a-working-2ffi) (third-party)

**Path (c): AI app builders**
- Lovable + Stripe: one-time checkout, subscription checkout with a sign-in check, and a "Manage subscription" portal button. "Webhooks: Off by default" (written on request). Subscriptions are matched to users by email. Works with the built-in Lovable backend or your own Supabase. You can't mix your own Stripe account with Lovable's built-in payments. In preview with a live key, payments are real. — [Lovable docs: Stripe](https://docs.lovable.dev/integrations/stripe.md) (undated; read 2026-11-04)
- Lovable plans: Free gets 5 build credits a day (up to 30/month) plus 20 Cloud credits a month. Paid-plan credits cover building, Cloud and AI features. "Most small or new apps cost nothing to host within the included grant." Monthly plan credits expire after two months; top-ups last 12 months. — [Lovable pricing](https://lovable.dev/pricing) (read 2026-11-04; plan prices weren't in the captured page)
- Lovable Pro is $25/month for 100 credits; Business from $50. Since August 2026, Cloud usage draws from the same credit balance; one guide says top-ups cost $0.60/credit. — [rapidevelopers](https://www.rapidevelopers.com/md/lovable-issues/what-is-lovable-cloud); [eesel](https://eesel.ai/blog/lovable-pricing) (third-party; the August 2026 change is UNVERIFIED first-party)
- Lovable code export: GitHub sync stays updated with every prompt. Sources conflict on whether it needs a paid plan. Secrets don't export and must be recreated. — [rapidevelopers](https://www.rapidevelopers.com/md/lovable-issues/how-to-download-and-export-lovable-project-code); [vp0](https://vp0.com/blogs/does-lovable-own-my-code.md); [pasqualepillitteri](https://pasqualepillitteri.it/news/2393/lovable-claude-code-codex-migrazione) (third-party, CONFLICTING)
- A Lovable user hit timeouts on long backend jobs whatever timeout was set. The fix was a callback edge function, a status table and frontend polling. — [n8n community thread](https://community.n8n.io/t/built-in-solution-for-async-polling-with-long-running-ai-workflows/125678?tl=en) (third-party)
- Bolt: Free $0 (1M tokens/month, 300K/day, hosting up to 333K requests, 10 MB upload limit). Pro $25/month (from 10M tokens, rollover, hosting up to 1M requests, custom domain, 100 MB upload limit). Teams $30/member. — [Bolt pricing](https://bolt.new/pricing) (read 2026-11-04). Bolt Cloud covers hosting, domains and databases, and "integrates directly with Stripe" — [Bolt support: Bolt Cloud](https://support.bolt.new/cloud/bolt-cloud); [Bolt blog](https://bolt.new/blog/bolt-cloud) (2025-08-14)
- Replit: Core $20/month ($18 annual) with $20 of usage; Pro $100/month ($90 annual). — [Replit pricing](https://replit.com/pricing) (read 2026-11-04). Deployments: Autoscale $2/month base + $0.60 per million compute units + $0.40 per million requests; Reserved VM $15 (shared 0.5 vCPU/2 GB) to $130 (4 vCPU/16 GB) a month; Static free + $0.05/GB; Scheduled $2/month base. — [Replit docs: deployment pricing](https://docs.replit.com/billing/deployment-pricing.md) (undated; read 2026-11-04)
- Replit lists Stripe among its connectors, and the agent writes the integration once you supply keys. — [jetadmin](https://www.jetadmin.io/blog/replit-pricing-in-2026-plans-credits-and-when-to-consider-jet-admin/); [automationatlas](https://automationatlas.io/answers/replit-agent-pricing-explained-2026/) (third-party)

### Inferences
- **Long video jobs work on every path if built as "submit → webhook → save":** the browser starts a job, the server sends it to the provider with a webhook URL and returns right away, the webhook handler saves the file and deducts credits, and the browser polls a cheap status endpoint. None of the timeout limits above matter then. Brandon should spell this pattern out in prompts for Lovable/Bolt/Replit, because they don't add webhooks by default.
- **Claude Code vs Lovable for Brandon:** Claude Code (path a) already runs in his workflow and writes ordinary code he owns. The trade-off is that he must approve changes and click through account setup (Stripe, Supabase, Vercel). Lovable is friendlier to look at, but he would pay for two AI tools and maybe migrate later anyway. Lovable's own Stripe docs list several sharp edges (no webhooks by default, real payments in preview with live keys, matching by email). Path (a) suits the long-term product better. Lovable is reasonable for a clickable prototype to show restaurants.
- **Generation backend on any path:** charge customers through Brandon's own Stripe. Spend through the Higgsfield API (cheap Kling/Seedance starting rates) or fal/Google. Never use the Ultra web plan as the backend: credits are non-transferable (§9.4), and the earlier notes flag throttling and account-sharing risks.
- **Rough fixed monthly cost at launch (before generation):** (a) about $45; (c) Lovable about $25 + Supabase $0–25, Bolt about $25, Replit about $22–35; plus a domain (about $1–2/month) and Stripe fees on each sale.

### Gaps
- Official Lovable plan prices and the August 2026 Cloud credit change weren't readable first-party. Bolt's Stripe and Bolt Database specifics, Replit object storage and database prices, and Replit's Stripe docs weren't checked.
- Commercial-use terms for apps hosted on Lovable, Bolt or Replit weren't checked.
- No hands-on test of any builder handling a 2–5 minute video job end to end.

---

## 4. Concierge / "Wizard of Oz" test before building

### Takeaway
Sell the outcome before building the software. A landing page shows the 5+ ad styles with before/after examples. A form collects the product photo and style choice. A Stripe Payment Link takes the money (one-off pack or monthly plan). Brandon makes the ads himself in Higgsfield, using Claude and his existing Ultra plan, and delivers within an agreed time. Fixed cost is about $3–15/month plus Stripe fees. It tests the key question: will restaurants pay, and for which styles? It is allowed under Higgsfield's Terms: outputs may be used commercially and sublicensed to clients. Run it openly as a concierge ("made for you by our team with AI tools, delivered in 24–48 h") rather than presenting it as instant software, which stays honest and matches Brandon's own rule to tell businesses the visuals are AI-made.

### Cited findings

**Method**
- Concierge MVP = deliver the service by hand to early users who know it's manual. Wizard of Oz = the customer doesn't know a person is doing the work. "Concierge is for workflow validation; Wizard of Oz is for UX validation." Time-box it to about 4–8 weeks. Manual delivery can't scale and isn't a permanent operating model. — [tms-outsource](https://tms-outsource.com/blog/posts/mvp-tests/); [Causo concierge MVP guide 2026](https://hub.causo.ai/guides/concierge-mvp-deliver-manually-before-building-2026); [fatskills](https://www.fatskills.com/product-management/chapter/product-management-lean-software-development-mvp-minimum-viable-product-types-concierge-wizard-of-oz-piecemeal) (third-party)

**Tools and prices**
- Carrd (annual billing only): Pro Lite $9/year (3 sites, **no custom domain, no forms, no embeds**). **Pro Standard $19/year** (10 sites, custom domain, forms, widgets/embeds including Stripe/PayPal). Pro Plus $49/year (25 sites, advanced forms). — [Carrd Pro](https://carrd.com/pro) (read 2026-11-04)
- Tally: Free plan has unlimited forms and submissions, file uploads (10 MB per file) and "Collect payments". Pro $24/month (no per-file limit). Business $74/month. — [Tally pricing](https://tally.so/pricing) (read 2026-11-04). Third-party sources say Tally payments use Stripe — [jetadmin](https://www.jetadmin.io/blog/tally-pricing/) (Stripe by name UNVERIFIED first-party)
- Typeform: Basic about $28/month annual or $39 monthly for 100 responses/month; Plus $56/$79 (1,000 responses); Business $91/$129. Which tier includes payment fields is unclear. — [jetadmin](https://www.jetadmin.io/blog/typeform-pricing/); [tinycommand](https://tinycommand.com/blogs/typeform-pricing-explained) (third-party, 2026)
- Framer: Basic about $10/month annual ($15 monthly) with a custom domain; Pro about $30/month annual; the free plan has no custom domain; pricing is per site. — [siter.io (read off Framer's pages 2026-09-03)](https://siter.io/framer-pricing); [vp0](https://vp0.com/blogs/framer-pricing-plans-2026/) (third-party)
- Stripe Payment Links: no-code links for one-off or recurring prices, with optional custom fields (returned after payment and in the `checkout.session.completed` webhook) and optional free trials without a card. Stripe advises against collecting sensitive data in custom fields. — [Stripe docs: customize Payment Links](https://docs.stripe.com/payment-links/customize); [Stripe docs: custom fields](https://docs.stripe.com/payments/checkout/custom-fields)
- Fees: 2.9% + 30¢ per card charge. Recurring prices likely add Billing at 0.7%: Stripe lists Payment Links as a way to sell subscriptions "with no code", but doesn't say outright that the 0.7% applies to them. — [Stripe Billing pricing](https://stripe.com/billing/pricing) (read 2026-11-04). Stripe Tax at 0.5% if enabled on no-code checkouts — [Stripe pricing](https://stripe.com/pricing) (via `verification_costs_terms_legal.md`)
- Calendly Standard: about $10/seat/month annual or $12 monthly, with Stripe/PayPal payment collection at booking; a free plan exists. — [zeeg](https://zeeg.me/post/calendly-standard-plan); [cal.com](https://cal.com/blog/calendly-pricing) (third-party, late Oct 2026)
- A custom domain typically costs about $10–20/year. — [Expert Reviews](https://www.expertreviews.co.uk/website-builders/1417687/how-much-does-it-cost-to-build-a-website) (third-party)

**Higgsfield side of fulfilment**
- Outputs: Higgsfield "does not claim ownership… nor does it restrict your commercial use of Outputs"; you "may transfer or sublicense your rights in Outputs to your clients" (§4.4). — [Terms](https://higgsfield.ai/terms-of-use-agreement) (2026-10-23, via `verification_costs_terms_legal.md`)
- Ultra is 3,000 credits/month; about $129/month billed monthly is the only figure every source agrees on. Nano Banana Pro is about 2 credits per image; a 5 s 720p Seedance 2.5 clip is about 35 credits. — [creatify](https://creatify.ai/blog/higgsfield-pricing-(2026)-plans-and-what-you-ll-actually-pay); [Higgsfield pricing blog](https://higgsfield.ai/blog/higgsfield-pricing-explained) (via `build_costs_credits_legal.md` / `verification_competitors_and_platforms.md`; per-model credit figures are third-party)
- This session's Higgsfield connector also lists `ads_studio_*` tools (create brand, add product, quote, generate), which could speed up fulfilment. `ads_studio_quote` presumably prices a run before generating. The tools were not called. — session tool listing (UNVERIFIED behaviour)

### Inferences
**A concierge setup Brandon could run this month (all estimates):**

| Piece | Tool | Cost |
|---|---|---|
| Landing page: 5–6 style tiles, each with a before/after example, prices, FAQ, "AI-made, human-checked" note | Carrd Pro Standard (custom domain + Stripe embeds + forms) | $19/year |
| Order form: business name, contact, product photo upload, style pick, offer text, deadline | Tally Free (10 MB/file is fine for phone photos) | $0 |
| Payment | Stripe Payment Links: e.g. "Launch pack" one-off and "Monthly menu refresh" recurring | 2.9% + 30¢ (+0.7% on recurring) |
| Optional kickoff call | Calendly Free, or Standard at about $10–12/month | $0–12/month |
| Domain | e.g. an elier.visuals domain | about $10–20/year |
| Fulfilment | Higgsfield Ultra (already paid) + Claude | already paid |
| **Total new fixed cost** | | **about $3–15/month** |

- **Alternative host:** a Higgsfield "website" build could replace Carrd + Tally (own brand, D1 for orders, R2 for photos, Stripe with his own keys) at no extra published hosting cost. But it costs build credits, lives on `*.higgsfield.app`, and has one production database. Carrd + Tally is simpler and fully his.
- **Credit budget per order:** a "launch pack" of 6 images (about 12 credits) + 2 × 5 s clips (about 70) + 30–50% re-rolls is about 110–125 credits. Brandon's current 3,887 credits cover about 30–35 packs, and each 3,000-credit month about 24–27. At about $0.043/credit (monthly Ultra), that's about $5 of credits per pack. Only rough, because the per-model credit figures are third-party.
- **What to measure (4–8 weeks):** visits → orders → paid; which styles get picked; turnaround time; re-order or subscription rate; Brandon's hours per order. A sensible go/no-go before building path (a) is, say, 10+ paid orders and 3+ repeat or recurring customers. That threshold is a judgement call for Brandon, not a sourced benchmark.
- **Honesty:** a "Wizard of Oz" that implies instant automated software while Brandon works by hand risks looking misleading. Concierge framing (honest turnaround, "our team uses AI tools") avoids that and matches the repo rule to tell businesses the visuals are AI-generated.
- **House rules that limit the test** (from `/home/user/Ads/CLAUDE.md`):
  - Before/after examples on the landing page must be Brandon's own demo products, or used with the business's written OK. Samples made for one business are for that business only.
  - Cold emails to drive traffic need Brandon's OK for each email, and a mailing address in each one. That address isn't on file yet, so outreach is blocked until he provides one.

### Gaps
- Whether Stripe's 0.7% Billing fee applies to recurring Payment Links isn't stated outright by Stripe.
- Tally's payment provider (Stripe) and payment fees weren't confirmed first-party. Framer, Typeform and Calendly prices are third-party only.
- No restaurant-specific concierge case study was found.

---

## 5. Suggested sequence (inference)

1. **Now to week 6:** run the concierge test (§4), using about $20–50 of new spend. Use Higgsfield Ultra for fulfilment. Optionally build a free `preset`-template Higgsfield app as a public demo of the styles (no revenue, Higgsfield look).
2. **If demand is proven:** build path (a) with Claude Code. Use Supabase Auth + a credit ledger + Stripe Checkout/Billing + webhooks, generate through the Higgsfield API (and/or fal/Google), and copy outputs to Supabase Storage before Higgsfield deletes them after 7 days. Budget about $45/month fixed plus API balances. Optional: a Lovable prototype first, if Brandon wants something clickable to show restaurants before committing.
3. **Before launch:** email Higgsfield for written comfort on §11.5 and §5.1(iii), and ask whether paid apps on its builder are possible with consent (§5.1(ii)(e)). If the answer on competing products is no, make fal/Google the primary backend.

## Overall gaps
- Higgsfield builder: hosting cost, typical build credit use, custom-domain process, creator monetization and paywall consent are unpublished. The MCP docs conflict on containers.
- Higgsfield API: no written answer on whether an ad-maker app is "value added" or "competing".
- Builder comparison: no hands-on test. Lovable, Bolt and Replit pricing is partly third-party and changes often.
- Concierge: demand thresholds are judgement calls. The Stripe Billing fee's coverage of Payment Links isn't confirmed outright.
