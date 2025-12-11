# HiroBank SPA (vanilla JS)

A small single-page app that mimics a banking dashboard: card info, transactions, statistics, balance operations, and money transfer — built **without frameworks**.  
Instead of React/Vue, the project uses a lightweight custom component system (HTML templates + CSS Modules), a tiny DOM helper, a History API router, and a simple store with observers.
---

## Features

- **SPA routing** via `history.pushState` + `popstate` (no page reloads)
- **Layout + dynamic content** rendering (`#app` + `#content`)
- **Component system**
    - HTML templates (`*.template.html`)
    - SCSS Modules (`*.module.scss`) with automatic class mapping
    - Custom tags like `<component-card-info>` replaced at runtime
- **State management**
    - Singleton `Store`
    - `Proxy`-based reactive updates
    - Observer pattern (`observer.update()`)
    - Persisted user + token in `localStorage`
- **API client**
    - `hiroQuery` wrapper over `fetch`
    - JSON body/headers handling
    - Auto `Authorization: Bearer <token>` from storage
    - Error message extraction + toast notifications
- **UI services**
    - Notifications (`success` / `error`) with auto-hide
    - Form values helper
    - Input helpers (numbers / credit card formatting)
    - Validation helper (temporary red border)
- **Auth flow**
    - `AuthService` logs in/registers (depending on route type)
    - Saves `user` + `accessToken` and updates UI via store
---

## Tech stack

- **Vanilla JavaScript (ES Modules)**
- **SCSS Modules**
- **Fetch API**
- **History API Router**
- (Bundler is expected to support `@/` aliases + CSS Modules, e.g. Vite/Webpack)