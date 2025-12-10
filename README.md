This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy on Cloudflare Pages

To deploy this Next.js application on Cloudflare Pages:

1. Connect your GitHub repository to Cloudflare Pages
2. In your project settings, configure:
   - Build Command: `npm run build`
   - Build output directory: `out`
   - Framework preset: `Next.js` or leave as `Automatic`
   - **Important**: Do NOT set a custom "Build output directory" under "Environment Variables" that would trigger wrangler deploy
   - **Important**: Make sure there is NO custom deploy command in your build settings
3. The application is configured with static export, so it will be deployed as static files

**Troubleshooting**: If you are getting a "Missing entry-point to Worker script" error, it means your Cloudflare Pages project is configured to use `wrangler deploy` instead of serving static files. Check your project settings and ensure there is no custom deploy command set - Cloudflare Pages should automatically serve the contents of the `out` directory after the build completes.

Your application will be built and deployed automatically on each push to your repository.

## Deploy using Cloudflare CLI

To deploy this static Next.js application using Cloudflare CLI:

1. Install wrangler:
   ```bash
   npm install -g wrangler
   ```

2. Create an API token in your Cloudflare dashboard:
   - Go to My Profile > API Tokens
   - Create a token with permissions for Pages
   - Copy the token

3. Set the API token as an environment variable:
   ```bash
   export CLOUDFLARE_API_TOKEN="your-api-token"
   ```

4. Deploy the project:
   ```bash
   wrangler pages deploy out --project-name=digitabank
   ```

Alternatively, you can use:
```bash
CLOUDFLARE_API_TOKEN="your-api-token" wrangler pages deploy out --project-name=digitabank
```
