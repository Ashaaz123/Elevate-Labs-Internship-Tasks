# DevOps Git Workflow Best Practices

## 🌿 Branching Architecture
```
  [main]      ──●──────────────●──────────────● (v1.1.0)
               │              ▲              ▲
               │              │              │
  [dev]        └──●───────────┼──────●───────┘
                   │          │      ▲
                   ▼          │      │
  [feature/*]      └────●─────┘      └───●───┘
```

1. **`main`**: Production-ready branch. Only merges via approved Pull Requests from `dev` (or hotfixes). Always tagged with Semantic Versioning (`v1.0.0`, `v1.1.0`).
2. **`dev`**: Active integration branch where developers test features combined together before staging/production deployment.
3. **`feature/<name>`**: Created from `dev` for specific tasks. Never commits directly to `main`. Merged back into `dev` via Pull Requests.
4. **`hotfix/<name>`**: Critical fixes branched directly off `main` and backported to both `main` and `dev`.

## ✍️ Conventional Commits Standard
Every commit follows standard semantic formatting:
- `feat: ...` - New features
- `fix: ...` - Bug fixes
- `docs: ...` - Documentation changes
- `chore: ...` - Build process, package updates, config changes
- `refactor: ...` - Code change that neither fixes a bug nor adds a feature
- `test: ...` - Adding or modifying tests
