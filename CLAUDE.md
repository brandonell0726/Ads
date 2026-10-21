# elier.visuals — notes for Claude

Read this first. It holds Brandon's business details so they don't have to be asked again.

## Business profile

- **Owner:** Brandon
- **Business:** elier.visuals
- **Business email:** elier.visualss@gmail.com (two "s" at the end, exactly as given)
- **Postal mailing address:** not provided yet. US law (CAN-SPAM) requires a street address, P.O. box or registered virtual mailbox in every cold email; an email address doesn't count. Do not send cold emails until Brandon gives one. Don't commit a home address here while this repo is public.
- **Portfolio link:** none yet. Leave it out of emails until there is one.
- **Based in:** Davenport, FL (Four Corners area, Central Florida)
- **Services:** short vertical video ads/reels for local businesses (restaurants, food trucks), and UGC-style videos for e-commerce brands
- **Connected tools (as of 2026-10-21):** Higgsfield (Ultra plan) and Gmail

## Email sign-off (use on every pitch)

```
This is a business pitch. I found your email on [WHERE YOU FOUND IT]. If you'd rather not hear from me, just reply "no thanks" and I won't write again.

Brandon · elier.visuals · elier.visualss@gmail.com · [mailing address]
```

## Outreach rules

- Only email addresses the business published itself for enquiries. Never guess or build one from a pattern.
- One personal message per lead, at most 50 a day, and only after Brandon approves the list and the messages.
- One follow-up after 4–5 days at most. Anyone who says no goes in `leads/do-not-contact.md`. Check that list before every send.
- Samples made for a business are for that business only. Don't post them or use them in a portfolio without its written OK.
- AI-made samples (Higgsfield): tell the business they're AI-generated. Never present AI people as real customer testimonials.

## What's in this repo

- `leads/four-corners-restaurants.md`: 25 restaurant and cafe leads around Davenport / Four Corners / Kissimmee, with an email draft for each (2026-10-21)
- `leads/florida-ugc-brands.md`: 10 Florida beauty, skincare, fitness and wellness brands for UGC, with an email draft for each (2026-10-21)
- `leads/do-not-contact.md`: opt-outs
- `ads/chef-amanda/`: the Chef Amanda (Cuban fusion food truck, Kissimmee) sample reel: design source, plan and links. See its README.

## Working in Claude Code cloud sessions

- The session's network blocks most websites (Google Maps, business sites, Higgsfield's upload server and CDN, Mixkit). Web search works.
- Higgsfield's `sandbox_exec` has open internet plus ffmpeg, node and Chromium. Download clips and music there, render HyperFrames there, then upload the result with `media_upload` and a curl PUT from the sandbox.
- Photos Brandon drops into the chat can't be read by Higgsfield. Use `media_upload_widget` so he uploads them straight to Higgsfield.
