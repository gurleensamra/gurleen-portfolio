# Gurleen Samra — portfolio prototype

A first-pass homepage with an original SVG cat, day/night theme, reduced-motion support, responsive project windows, and existing portfolio images. Read DESIGN.md for the audit, design tokens, asset sources, and recruiting content notes.

## Run
Requires Node 22.13 or later.

```
npm ci
npm run dev
```

Open the Local address printed by the server. `npm run build` produces the Sites deployment build.

## What is complete
- Homepage, selected project summaries, About, contact, résumé and LinkedIn navigation.
- Browser-local theme preference, cat interaction, focus states, responsive layouts, motion preferences.
- Real portrait/project art from the existing portfolio; original SVG accents.

Project detail links go to the original portfolio. No case-study migration or existing-domain replacement is included. No analytics, contact backend, generated imagery, or music playback is included.

## Validation
- Production build passed before final source formatting; final rebuild performed after corrections.
- App-level lint and TypeScript checks are run separately.
- Full scaffold lint reports pre-existing issues in unused generated UI components. These were not edited or suppressed.
- Local route returned HTTP 200. Browser visual, responsive interaction, and assistive-technology testing remain unperformed.
- The starter dependency installation reports 11 audit advisories; no force-upgrade was applied to pinned scaffold dependencies. Review dependencies before public launch.

Content is grounded in the current public portfolio, which may itself contain older biographical details. Review current status, résumé and personal project contributions before public recruiting launch.
