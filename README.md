# Prime-Power Electric Website

Static GitHub Pages website for Prime-Power Electric.

## Local preview

```bash
cd ~/Desktop/primegen-electric-site
python3 -m http.server 8000
```

Open:

```txt
http://localhost:8000
```

## Contact form

The contact form currently uses a safe `mailto:` fallback and sends quote requests to:

```txt
Prime-gen@outlook.com
```

No backend is required for this version. Later, the form can be upgraded to AWS API Gateway + Lambda + SES/SMS.

## Easy image swap placeholders

The main customer/media placeholders are intentionally named simply:

```txt
assets/img001.png  hero/main customer image
assets/img002.png  electrical/residential work image
assets/img003.png  larger project/event/power image
```

To swap with personalized media, replace the file contents and keep the same filenames. If using `.jpg` or `.jpeg` instead, update the matching `src` paths in `index.html`. For easiest swaps, export/rename future images to the same filenames: `img001.png`, `img002.png`, and `img003.png`.

## Deploy

```bash
cd ~/Desktop/primegen-electric-site
git add .
git commit -m "update Prime-Power Electric site"
git push
```


## Restored business links

Google review link:
https://share.google/hpaqriqUUdsknxRN6

Facebook link:
https://www.facebook.com/share/17ryRffM1y/

## Final v3 notes

- Image placeholder labels are hidden/removed from the visible page.
- Contact/request quote section uses black/gold styling.
- Social/review links are restored in the page.
