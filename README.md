# Hollie Hix Artist Website

A static artist portfolio site designed for GitHub Pages.

## Pages
- `index.html` — Home
- `portfolio.html` — Artwork portfolio
- `music.html` — Performance videos and music links
- `about.html` — Biography and artist statement
- `store.html` — Products and purchase links

## Adding images
Put your JPG/PNG/WebP images in `assets/images/` and update the filenames in the HTML.

Suggested names:
- `hero.jpg`
- `about.jpg`
- `work-01.jpg` through `work-06.jpg`
- `product-01.jpg` through `product-03.jpg`
- `video-poster-01.jpg`, `video-poster-02.jpg`

## Adding videos
Put MP4 videos in `assets/videos/`, then update the `<source>` filename in `music.html`.

For YouTube/Vimeo, replace the `<video>` element with an embed iframe.

## Store
This version intentionally does not process payments itself. Change each `Purchase` button's `href="#"` to your checkout/product URL from Etsy, Shopify, Square, PayPal, etc.

## GitHub Pages
1. Create a new GitHub repository.
2. Upload all files and folders in this project.
3. In the repository, open Settings → Pages.
4. Choose deployment from the `main` branch and `/ (root)`.
5. Save. GitHub will provide your site address.

## Customizing
Most colors, spacing, typography, and layout are controlled from the top of `style.css`.
