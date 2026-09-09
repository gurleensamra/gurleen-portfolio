# Gurleen’s little desktop

## Current-site audit · September 9, 2026

Reviewed the public HTML, content, asset references and styling from https://gurleenksamra.com/, /about, and /projects/uw-dining-app-ux-case-study. This is a source/content audit; no browser visual or interaction audit was performed. Original mockup images were not retrievable from the referenced conversation; direction follows the supplied written brief.

### Keep
- Clear blend of software engineering and UX, with an authentic UW Informatics background.
- Real work across product research (Husky Bites), engineering (Mini-Git), and visual communication (SWE).
- Real portrait, existing project artwork, résumé and LinkedIn links.
- Husky Bites has concrete evidence: two interviews, three usability tests, and specific feedback about filtering and map context.

### Improve
- Homepage labels such as “Case study insight.” and “Technical project.” obscure project names. Lead with names and a concrete problem or engineering purpose.
- The site declares earth-green palette tokens and Inter typography. Replace this visual vocabulary with cream paper, restrained pastel window chrome and editorial serif headings, matching the new brief.
- Add a memorable personal composition: portrait polaroid, handwritten annotation, original SVG cat, desktop-window project framing.
- Surface the strongest research evidence on the homepage instead of requiring a case-study click first.
- Project images in the retrieved source lack descriptive alt text. Supply meaningful descriptions.
- Existing footer email addresses appear as plain text. Make the primary contact a mailto link.
- The home title is “Home”; give it a descriptive identity and portfolio summary.
- Existing source explicitly disables reduced-motion handling for Framer entrance effects. The new homepage respects reduced motion and never gates content behind animation.
- The About page’s time-sensitive “Currently” paragraph and 2024–2025 footer need owner review. Do not carry the old current-activity claims into the redesign.

## Visual system

Thesis: a personal creative desktop with the clarity of an editorial portfolio. Whimsy lives around real work, with no generated hero artwork.

| Token | Day | Night | Purpose |
|---|---|---|---|
| Background | #faf6ec | #252735 | dotted desk surface |
| Paper | #fffdf5 | #343343 | readable content windows |
| Ink | #433b3c | #f7ede4 | headings and body |
| Muted | #6f6264 | #d0c3c9 | secondary copy |
| Pink | #ecd0d7 | #63516a | window bars and actions |
| Blue | #dbe8ef | #3c5060 | supporting paper accents |
| Border | #9b8588 | #998896 | fine handmade outlines |

Typography: Georgia editorial headings; Arial body; local Bradley Hand / Segoe Print / cursive for short personal annotations; monospace window labels. No remote font dependency. Handwriting varies by installed fonts.

Layout: maximum 1184px content width, 32px gutters, asymmetric two-column introduction, one large feature project, two supporting projects, personal note, contact. Below 740px, use one column with 22px gutters. Never hide project navigation inside the desktop metaphor.

Components: shared window title bar, polaroid portrait, project card, underlined story link, offset-shadow CTA, note paper, day/night toggle, original cat doodle. Faux window dots are decorative, not misleading close/minimize buttons.

Motion: one slow 8px floating star, 200ms button press/hover, 400ms image hover, 600ms palette transition. Cat expression changes on click and sleeps at night. Reduced-motion preference removes animation, transitions and smooth scrolling. No autoplay audio, scroll hijacking, or custom cursor.

Accessibility: semantic headings, visible focus, skip link, descriptive image alternatives, labeled theme and cat controls, native anchors, keyboard activation, persistent theme with graceful storage failure. This is implementation-level coverage, not a completed browser accessibility audit.

## Recruiting content and evidence

Husky Bites is a team course prototype, not a shipped product. Research counts and flow findings come from the existing case study. No conversion or user-impact metrics are invented. The homepage credits team work. Detailed project links currently open the original portfolio; full case-study migration is a later iteration.

Before a public recruiting launch, confirm current student/status copy, résumé freshness, specific individual responsibilities in Husky Bites, and add Mini-Git repository/test evidence where shareable. Preserve project collaborators and avoid presenting team outcomes as individual delivery.

For future case-study pages: one-sentence problem → individual role + collaborators + scope → constraints → pivotal decision with evidence → real artifact → observed result → limitations and next experiment. Prefer an annotated screenshot to a paragraph about a tool.

## Asset provenance

The four raster assets are copied from the current public portfolio, not generated:
- images/gurleen.jpg: https://framerusercontent.com/images/byXgyczNRfI6Gp91eWPzSn3Zq8.jpg
- images/husky-bites.png: https://framerusercontent.com/images/4U815vngPgi1DzbMcUH9Tosog.png
- images/mini-git.png: https://framerusercontent.com/images/7uVE5NRw2ZXk7n4zg5LH7u8nA.png
- images/swe.png: https://framerusercontent.com/images/bZSTZzVlPpazkWQuVlYr3Bko14.png

The cat and underline are original SVG paths. No Kirby or other branded character assets are used. User-requested CSS/SVG doodles take precedence over the Sites skill’s generic illustration preference.
