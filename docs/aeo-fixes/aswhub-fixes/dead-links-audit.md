# ASW Hub — Dead Links Audit (Footer /services/ URLs)

The ASW Hub footer links to four `/services/` URLs on the main domain. These paths do **not** exist on `maxifidigital.com` (the live service pages use different routes), so they almost certainly **404**.

## Likely-broken footer links

| Footer link | Probable target (404) |
|---|---|
| AEO Audit | `https://maxifidigital.com/services/aeo-audit` |
| Conference Sprint | `https://maxifidigital.com/services/conference-sprint` |
| AI Knowledge Hub Build | `https://maxifidigital.com/services/ai-knowledge-hub-build` |
| AEO Content System | `https://maxifidigital.com/services/aeo-content-system` |

## Recommendation

**Option A (fastest — recommended): repoint the footer to existing pages.**

| Footer label | New destination |
|---|---|
| AEO Audit | `https://maxifidigital.com/visibility-snapshot` |
| Conference Sprint | `https://maxifidigital.com/conference-aeo` |
| AI Knowledge Hub Build | `https://maxifidigital.com/work` |
| AEO Content System | `https://maxifidigital.com/aeo` |

**Option B: build the four `/services/` pages** on the main domain if these are intended as distinct offerings, then keep the footer URLs as-is.

## Action
1. Confirm each URL's status:
   ```bash
   for p in aeo-audit conference-sprint ai-knowledge-hub-build aeo-content-system; do
     echo -n "$p: "; curl -s -o /dev/null -w "%{http_code}\n" "https://maxifidigital.com/services/$p"
   done
   ```
2. For any returning 404, apply Option A (update the footer `href`s in the ASW Hub template) or Option B (build the pages).
3. Re-test all footer links after deploy.
