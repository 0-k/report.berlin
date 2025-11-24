# Berlin Problem Reporting Website

A bilingual (German/English) one-page React website that provides a comprehensive overview of Berlin's problem reporting services.

## Recent Updates ✨

- ✅ **Enhanced accessibility** with aria-labels on all links
- ✅ **Improved SEO** with comprehensive meta tags
- ✅ **Better UX** with refined icons (FileText for reports, Building for housing)
- ✅ **Clearer categories** ("Stadt & Ordnung" instead of "Infrastruktur & Ordnung")
- ✅ **Detailed descriptions** for each service explaining when and how to use them

See [CHANGELOG.md](CHANGELOG.md) for full details.

## Features

- 🌐 **Bilingual**: Switch between German and English
- 🚨 **Emergency Services**: Quick access to 112, 110, 116117
- ⭐ **Featured Ordnungsamt**: Prominently displayed central reporting hub
- 🚇 **Public Transport**: BVG, S-Bahn, Deutsche Bahn reporting tools
- 💡 **Utilities**: Water, electricity, heating, gas disruptions
- 🏠 **Housing**: Major Berlin housing company contacts
- 🚴 **Traffic**: Report violations and dangerous situations
- 📱 **Mobile Friendly**: Responsive design works on all devices
- ♿ **Accessible**: Full aria-label support for screen readers
- 🔍 **SEO Optimized**: Comprehensive meta tags for search engines

## Services Included

### 🚨 Emergency Banner (Top of Page)
- **112** - Fire & Ambulance (life-threatening)
- **110** - Police (crimes & dangerous situations)
- Prominent red banner emphasizing this page is for NON-emergencies

### ⭐ Featured
- **Ordnungsamt Berlin** - Central online reporting hub for many issues (prominently featured)

### City & Public Order
- Ordnungsamt (online reporting)
- Traffic Management
- Traffic Signals (Infrasignal)
- Parking violations (weg.li)
- Police online station
- Police precinct finder
- Traffic violations office (Bußgeldstelle)
- Anonymous police tips

### Public Transport
- BVG (contact & chatbot)
- BrokenLifts.org
- S-Bahn (contact, WhatsApp cleanliness & emergency hotlines)
- Deutsche Bahn

### Utilities
- Berliner Wasserbetriebe (water)
- Stromnetz Berlin - Power Outages
- Stromnetz Berlin - Street Lighting (separate)
- Berliner Energiewerke / BEW (heating, district heating)
- NBB Netzgesellschaft (gas)

### Housing Companies
- Degewo
- Gewobag
- Howoge
- Vonovia
- BUO

### Other Services
- **116117** - Medical On-Call Service (NON-emergency medical help)
- Data Protection complaints
- Consumer Protection
- Anti-Discrimination Office (LADS)
- Discrimination reporting centers
- Medical Chamber (patient complaints)
- Bar Association (lawyer complaints)
- Chamber of Commerce (apprenticeship issues)
- mach-meldung.org (comprehensive reporting overview)

## Domain Name Ideas

- **report.berlin** - Simple and direct ✅
- **fixit.berlin** - Friendly and action-oriented
- **incident.berlin** - Professional but formal
- **melden.berlin** - German-focused
- **problememelden.berlin** - Too long, German-only

## Quick Start

All setup files are included! Just install dependencies and run:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates optimized static files in the `dist` folder ready for deployment.

### Alternative: Vite from Scratch

If you want to start fresh:

```bash
npm create vite@latest berlin-report -- --template react
cd berlin-report
npm install
npm install lucide-react
```

Replace `src/App.jsx` with `berlin-report.jsx`, then:

```bash
npm run dev
```

### Option 2: Next.js

```bash
npx create-next-app@latest berlin-report
cd berlin-report
npm install lucide-react
```

Create `app/page.js` with the component, then:

```bash
npm run dev
```

### Option 3: Static HTML (No Build Step)

For the simplest deployment without any build process, you can use a CDN version:

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Probleme in Berlin melden / Report Problems in Berlin</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <div id="root"></div>
  <script type="module">
    import React from 'https://esm.sh/react@18';
    import ReactDOM from 'https://esm.sh/react-dom@18/client';
    // Copy the component code here
  </script>
</body>
</html>
```

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the dist/build folder to Netlify
```

### GitHub Pages
1. Build the project
2. Push to GitHub
3. Enable GitHub Pages in repository settings

### .berlin Domain
To get a `.berlin` domain:
1. Register through providers like [dot.berlin](https://dot.berlin/)
2. Point DNS to your hosting provider
3. Configure SSL certificate

## Customization

To add more services, edit the `content` object in the component:

```javascript
services: {
  newservice: {
    name: 'Service Name',
    desc: 'Description',
    url: 'https://example.com'
  }
}
```

Then add it to the appropriate category section in the render code.

## Tech Stack

- React 18
- Tailwind CSS
- Lucide React (icons)

## License

This is an unofficial community project. All service links and contact information belong to their respective organizations.

## Contributing

Feel free to:
- Add missing services
- Update outdated links
- Improve translations
- Enhance the design

---

**Note**: This is not an official Berlin government website. Always verify information on the official websites linked.
