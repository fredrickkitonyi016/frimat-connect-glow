# Cyberpunk command-center redesign

## User experience
- Establish one consistent terminal-black, neon-lime and holographic-cyan visual language across the public site, shop, portal and admin screens, using the existing design tokens.
- Reorganize the homepage around an operational hero with live counters and clear portal actions, then a scannable service-module grid, a four-step workflow timeline, verified review logs and an organized command-grid footer.
- Preserve the shop search and visible category filters directly beneath its heading; style inventory, pricing and stock indicators to match the system.
- Improve the shared navigation and responsive layouts without changing sign-in requirements or access rules.

## Technical approach
- Review and update the shared semantic CSS tokens and reusable HUD styles first; retain Times New Roman for general copy and JetBrains Mono for technical labels and numbers.
- Refine the existing Navbar, hero, services, shop, workflow, testimonials and footer components rather than duplicating app routes or changing Supabase behavior.
- Apply shared styling to portal, admin and other existing pages, keeping their current components, authentication, data flows, routes and role permissions intact.
- Validate desktop and mobile layouts, shop search/category interactions, and the current preview diagnostics after the changes.
