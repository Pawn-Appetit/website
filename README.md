# Pawn Appétit Website

This is the official website for **Pawn Appétit** - The Ultimate Chess Toolkit.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pawn-Appetit/website.git
   cd pawn-appetit-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

For static export (GitHub Pages):
```bash
npm run export
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx          # Homepage
│   ├── features/         # Features page
│   ├── screenshots/      # Screenshots gallery
│   ├── docs/            # Documentation
│   ├── install/         # Installation guides
│   ├── contribute/      # Contribution guidelines
│   └── about/           # About page
├── components/           # Reusable components
│   ├── Header.tsx       # Navigation with theme toggle
│   └── Footer.tsx       # Footer with links
├── public/              # Static assets
└── README.md           # This file
```

## Contributing

This website is part of the Pawn Appétit project. Please see the main project's contributing guidelines.

## License

This project is licensed under the GPL-3.0 License - see the main project repository for details.
