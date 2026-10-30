# Shreyash Musmade — Portfolio

A Next.js portfolio designed for Vercel. It combines AI/ML, Generative AI, data analytics and Power BI projects in one interactive project system.

## Included projects

- AI Employment Matching Platform
- Sales Forecasting
- AI Fitness Trainer
- EnergyBae
- Editra AI
- Agent-Search
- Innomatics Research Labs
- Power BI Blink-It
- Power BI Sales Overview
- Power BI Coffee Shop Sales

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open http://localhost:3000

## 3. Add live project/dashboard URLs

Edit:

`lib/data.js`

For hosted AI/ML projects, set:

```js
liveUrl: "https://your-live-project-url"
```

For Power BI:

```js
dashboardUrl: "https://app.powerbi.com/..."
```

For Excel:

```js
dashboardUrl: "https://onedrive.live.com/..."
```

If the URL is empty, the card automatically falls back to the GitHub repository.

## 4. Deploy to Vercel

Push this folder to a GitHub repository, then import the repository into Vercel.

Build command:
`npm run build`

No environment variables are required for the portfolio.

## Important

Do not put private API keys, database credentials, or service secrets in this project. Public Power BI/OneDrive links should only be used for dashboards you intend to share publicly.
