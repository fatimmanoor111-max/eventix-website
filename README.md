# EventiX — Event Booking Website

A multi-page website for browsing and booking event tickets — concerts, workshops, conferences, and more. Built with plain **HTML, CSS, and JavaScript** (no frameworks, no build tools).

---

## 📁 Project Structure

```
Web Dev_Updated/
├── index.html          → Homepage
├── about.html           → About page
├── events.html           → Browse all events
├── event-details.html    → Single event detail page (reads ?id= from URL)
├── book.html             → Ticket booking form
├── contact.html          → Contact page
├── events-data.js         → Event data + page logic (JavaScript)
└── styles.css             → Site-wide styling
```

---

## 🌐 About the Website

**EventiX** lets a visitor:

1. **Browse events** on the Events page — concerts, workshops, conferences, each with a category, date, location, and price.
2. **Click an event** to open `event-details.html`, which reads the event's `id` from the page URL (e.g. `event-details.html?id=2`) and dynamically fills in the title, image, date, venue, price, and description.
3. **Book tickets** via `book.html`, linked from the details page.
4. Read more on the **About** and **Contact** pages.

All event data (title, date, price, image, description) lives in one place — **`events-data.js`** — as a JavaScript array. The HTML pages are mostly static shells; JavaScript reads this array and injects content into the page at runtime. This is why the site needs to be served over `http://` rather than opened directly as a file — more on that below.

**No backend/server/database** — everything runs in the browser. Styling (colors, layout, animations) is handled in `styles.css`, with some page-specific styles inlined directly in `index.html`.

---

## ▶️ How to Run This Project (VS Code + Live Server)

Since this is a static site with no `npm`/`node` build step, you don't run a "start" command — you serve the files with a lightweight local server.

### Step 1: Install the Live Server extension
1. Open VS Code
2. Open the Extensions tab: press **`Ctrl+Shift+X`**
3. Search for **"Live Server"** (by **Ritwick Dey**)
4. Click **Install**

### Step 2: Launch the site
1. In VS Code's file explorer, right-click on **`index.html`**
2. Select **"Open with Live Server"**

### Step 3: View it in the browser
- Your default browser will automatically open to:
  ```
  http://127.0.0.1:5500
  ```
- The site is now running locally. ✅

### Step 4: Live reload while editing
- Keep Live Server running, edit any `.html`, `.css`, or `.js` file, and press **Save** (`Ctrl+S`)
- The browser tab will **auto-refresh** instantly — no need to manually reload

> ⚠️ **Why Live Server and not just double-clicking `index.html`?**
> This site loads `events-data.js` and reads URL parameters (like `?id=2`) to show event details dynamically. Some browsers block this kind of file access when you open an HTML file directly (`file://...`) instead of through a server (`http://...`). Live Server avoids this issue completely.

---

## 🚀 How to Push This Project to GitHub

### Step 1: Initialize Git (run inside the project folder)
```bash
git init
git add .
git commit -m "Initial commit - EventiX website"
```

### Step 2: Create a new repository on GitHub
1. Go to [github.com](https://github.com) → click **New repository**
2. Give it a name (e.g. `eventix-website`)
3. **Do NOT** check "Add a README" or "Add .gitignore" — keep it empty
4. Click **Create repository**
5. Copy the repository URL shown (e.g. `https://github.com/your-username/eventix-website.git`)

### Step 3: Connect and push your local project
```bash
git remote add origin https://github.com/your-username/eventix-website.git
git branch -M main
git push -u origin main
```

Refresh your GitHub repo page — your files should now appear there. ✅

---

## 🌍 Make It Live on the Internet (GitHub Pages — Free)

1. On your GitHub repo, go to **Settings** → **Pages** (left sidebar)
2. Under **Source**, select branch: **`main`**, folder: **`/ (root)`**
3. Click **Save**
4. Wait 1–2 minutes, then visit:
   ```
   https://your-username.github.io/eventix-website/
   ```

Your site is now live and shareable with anyone. 🎉

---

## 🔧 Future Updates

After making changes locally:
```bash
git add .
git commit -m "Describe your change here"
git push
```

If GitHub Pages is enabled, the live site updates automatically within a minute or two of pushing.

---

## 🛠️ Tech Used

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, gradients, flex/grid) |
| Interactivity | Vanilla JavaScript (no frameworks) |
| Icons | Font Awesome (via CDN) |
| Hosting | GitHub Pages (static hosting) |

