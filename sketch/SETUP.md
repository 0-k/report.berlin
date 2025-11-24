# Quick Setup Guide

## 🚀 Get Started in 2 Minutes

1. **Download all files** to a folder called `berlin-report`

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

Files will be in the `dist/` folder.

## 🌐 Deploy

### Vercel (Easiest)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Netlify
1. Run `npm run build`
2. Drag `dist` folder to netlify.com/drop

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Source: Deploy from branch
3. Select `main` branch and `/` root
4. Add GitHub Action for builds

## 🔧 Customization

Edit `src/berlin-report.jsx` to:
- Add more services
- Change styling
- Update translations
- Modify categories

## 📝 Register .berlin Domain

1. Visit [dot.berlin](https://dot.berlin/)
2. Search for your desired domain
3. Register through their registrar partners
4. Point DNS to your hosting (Vercel/Netlify)
5. SSL is automatic on Vercel/Netlify

## 🎨 Recommended Domains

- **report.berlin** ⭐ (Best choice - clear and international)
- **fixit.berlin** (Friendly)
- **melden.berlin** (German-focused)

---

Need help? Check the full README.md for more details!
