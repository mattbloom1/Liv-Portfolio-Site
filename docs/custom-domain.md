# Custom domain (Namecheap → GitHub Pages)

The site is hosted on GitHub Pages from `mattbloom1/Liv-Portfolio-Site`. Namecheap only provides the name; DNS points it at GitHub. Replace `yourdomain.com` below with the domain you bought.

## 1. Namecheap DNS

Domain List → **Manage** → **Advanced DNS**.

First delete the records Namecheap adds by default (a `CNAME www → parkingpage.namecheap.com` and a `URL Redirect @`). Then add:

| Type         | Host  | Value                   | TTL       |
|--------------|-------|-------------------------|-----------|
| A Record     | `@`   | `185.199.108.153`       | Automatic |
| A Record     | `@`   | `185.199.109.153`       | Automatic |
| A Record     | `@`   | `185.199.110.153`       | Automatic |
| A Record     | `@`   | `185.199.111.153`       | Automatic |
| CNAME Record | `www` | `mattbloom1.github.io.` | Automatic |

Optional IPv6 (add as **AAAA Record**, host `@`): `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.

## 2. Verify the domain with GitHub (recommended)

Stops anyone else from claiming your domain on GitHub Pages.

1. GitHub → your profile picture → **Settings** → **Pages** → **Add a domain** → enter `yourdomain.com`.
2. GitHub shows a TXT record. Add it in Namecheap as **TXT Record**, host `_github-pages-challenge-mattbloom1`, value = the code GitHub shows.
3. Click **Verify** (may take a few minutes to an hour).

## 3. Tell the build about the domain

Repo → **Settings** → **Secrets and variables** → **Actions** → **Variables** tab → **New repository variable**:

- Name: `CUSTOM_DOMAIN`
- Value: `yourdomain.com` (no `https://`, no `www`)

The workflow already defaults to `livpolani.com`, so this is only needed to use a different domain.

This makes the build serve from the domain root instead of `/Liv-Portfolio-Site` and writes the `CNAME` file. No code change needed.

## 4. Turn it on in GitHub Pages

Repo → **Settings** → **Pages**:

1. **Custom domain**: enter `yourdomain.com` → **Save**. Wait for the DNS check to go green.
2. Re-run the deploy: **Actions** → **Deploy to GitHub Pages** → **Run workflow**.
3. Once the certificate is issued (up to ~1 hour, sometimes up to 24h), tick **Enforce HTTPS**.

`www.yourdomain.com` will redirect to `yourdomain.com` automatically.

## Checking

- `https://yourdomain.com` loads with images and styles.
- Command line: `dig yourdomain.com +short` should list the four `185.199.x.153` addresses.

## Troubleshooting

- **Page loads with no styles/images**: the `CUSTOM_DOMAIN` variable is missing or the workflow wasn't re-run after adding it.
- **"Domain's DNS record could not be retrieved"**: DNS hasn't propagated yet; wait and click Check again.
- **Enforce HTTPS is greyed out**: certificate is still being issued; wait.
- **Going back to the github.io address**: delete the `CUSTOM_DOMAIN` variable, clear the custom domain in Pages settings, re-run the workflow.
