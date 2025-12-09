# Deployment Guide

This guide explains how to deploy your Expert-Stacker portfolio to various platforms.

## 🚀 Quick Deploy Options

### Option 1: Render (Recommended for Full-Stack Apps)

1. **Sign up** at [render.com](https://render.com) (free tier available)

2. **Create a new Web Service**:
   - Connect your GitHub repository: `https://github.com/ajaySingh-93/web-portfolio.git`
   - Name: `expert-stacker-portfolio`
   - Environment: `Node`
   - Build Command: `cd Expert-Stacker && npm install && npm run build`
   - Start Command: `cd Expert-Stacker && npm start`
   - Root Directory: Leave empty (or set to `Expert-Stacker`)

3. **Environment Variables**:
   - `NODE_ENV` = `production`
   - `PORT` = `5000` (Render will set this automatically)

4. **Deploy**: Click "Create Web Service" and Render will deploy your app!

### Option 2: Vercel

1. **Sign up** at [vercel.com](https://vercel.com) (free tier available)

2. **Import your GitHub repository**:
   - Go to Vercel Dashboard → Add New Project
   - Import `ajaySingh-93/web-portfolio`
   - Root Directory: Set to `Expert-Stacker`

3. **Configure Build Settings**:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

4. **Environment Variables**:
   - `NODE_ENV` = `production`

5. **Deploy**: Click "Deploy"

**Note**: Vercel works best for frontend-only. For full-stack with Express API, consider Render or Railway.

### Option 3: Railway

1. **Sign up** at [railway.app](https://railway.app) (free tier available)

2. **Create New Project**:
   - Click "New Project" → "Deploy from GitHub repo"
   - Select `ajaySingh-93/web-portfolio`

3. **Configure**:
   - Root Directory: `Expert-Stacker`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

4. **Environment Variables**:
   - `NODE_ENV` = `production`
   - `PORT` = Railway will set this automatically

5. **Deploy**: Railway will auto-deploy on every push to main branch

### Option 4: Replit (If you're using Replit)

Since you have a `.replit` file, you can deploy directly from Replit:

1. Open your project in Replit
2. Click "Deploy" button
3. Follow the deployment wizard
4. Your app will be live at `your-app-name.repl.co`

## 📝 Pre-Deployment Checklist

- [ ] Ensure all dependencies are in `package.json`
- [ ] Test `npm run build` locally
- [ ] Verify `npm start` works after build
- [ ] Check that all environment variables are set
- [ ] Ensure `.gitignore` excludes `node_modules` and `dist`

## 🔧 Build Process

The build process:
1. Builds the Vite client → `dist/public/`
2. Bundles the Express server → `dist/index.cjs`
3. Production server serves both static files and API routes

## 🌐 Custom Domain

After deployment, you can add a custom domain:
- **Render**: Settings → Custom Domain
- **Vercel**: Project Settings → Domains
- **Railway**: Settings → Networking → Custom Domain

## 📊 Monitoring

- Check deployment logs in your platform's dashboard
- Monitor errors and performance
- Set up alerts for downtime

## 🆘 Troubleshooting

**Build fails:**
- Check Node.js version (requires Node 20+)
- Verify all dependencies install correctly
- Check build logs for specific errors

**App doesn't start:**
- Verify PORT environment variable is set
- Check that `dist/index.cjs` exists after build
- Review server logs for errors

**Static files not loading:**
- Ensure `dist/public` directory exists
- Check that Vite build completed successfully
- Verify file paths in production

---

**Need help?** Check the platform-specific documentation or open an issue on GitHub.
