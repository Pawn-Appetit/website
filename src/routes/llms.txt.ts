import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/llms/txt")({
  loader: () => {
    const content = `
# Pawn Appétit Documentation

## Overview
Pawn Appétit is a free, open-source chess analysis tool suitable for all skill levels.
- **Website**: https://pawnappetit.com
- **Download**: https://pawnappetit.com/docs/installation
- **Source Code**: https://github.com/pawn-appetit/pawn-appetit

## Core Features
1. **Smart Analysis**: 
   - Integrate top UCI engines (Stockfish, etc.).
   - Multi-engine evaluation comparison.
2. **Repertoire Training**: 
   - Build opening repertoires.
   - Train with spaced repetition and interactive moves.
3. **Position Search**: 
   - Search millions of positions across databases for games and patterns.
4. **Engine Management**:
   - Easy installation and configuration of multiple engines.

## Key Documentation Links
- **Installation**: https://pawnappetit.com/docs/installation (Windows, macOS, Linux)
- **First Steps**: https://pawnappetit.com/docs/first-steps (Basic usage guide)
- **FAQ**: https://pawnappetit.com/docs/faq (Common questions)

## Technical Details
- **Tech Stack**: Tauri + React (Frontend), Rust (Backend/Core)
- **Performance**: High performance with low memory footprint compared to Electron.
        `.trim();

    return new Response(content, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  },
});
