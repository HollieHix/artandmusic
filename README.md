# Hollie Hix Artist Website — Easy Maintenance Version

## The important part: `content/`

You can now maintain most of the site by editing only these four files:

- `content/site.json` — artist name, tagline, bio, statement, location, social links
- `content/portfolio.json` — artwork titles, descriptions, and image filenames
- `content/music.json` — performance video URLs and titles
- `content/products.json` — store products, prices, images, and checkout links

### Add an artwork
1. Put the image in `assets/images/`.
2. Open `content/portfolio.json`.
3. Copy an existing item and change `image`, `title`, `details`, and `alt`.

Example:
{
  "image": "my-new-vase.jpg",
  "title": "My New Vase",
  "details": "Stoneware • 2026",
  "alt": "Blue stoneware vase"
}

### Add a YouTube performance
Open `content/music.json` and add:
{
  "type": "youtube",
  "url": "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  "title": "Song Title",
  "details": "Live at Venue • 2026"
}

For YouTube, use the video's Embed URL rather than the normal watch URL.

### Add a store item
Put the product image in `assets/images/`, then add an item to `content/products.json`:
{
  "image": "my-piece.jpg",
  "title": "My Piece",
  "description": "Handmade original artwork.",
  "price": "$125",
  "url": "YOUR-CHECKOUT-LINK"
}

The `url` can point to Etsy, Shopify, Square, PayPal, or another checkout page.

## GitHub update

You DO NOT need to delete your existing GitHub repository.

If you already created the original repository:
1. Keep the same repository.
2. Replace the old website files with the files from this version.
3. Make sure the `content/` and `assets/` folders are uploaded.
4. Commit the changes.
5. GitHub Pages will update the existing website automatically.

If you prefer, you can also create a brand-new repository, but it is not necessary.

## Important note about local testing

Because this site loads JSON files with JavaScript, opening `index.html` directly from your computer may not load the content correctly in some browsers. It will work normally on GitHub Pages. For local testing, use a simple local server such as VS Code's Live Server extension.
