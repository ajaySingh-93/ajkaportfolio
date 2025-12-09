# 🚀 Quick Deployment Guide

## Step 1: Push to GitHub (If not done already)

```bash
cd Expert-Stacker
git init
git add .
git commit -m "Initial commit: Expert-Stacker portfolio"
git branch -M main
git remote add origin https://github.com/ajaySingh-93/web-portfolio.git
git push -u origin main
```

**Note**: If push fails, you may need to authenticate:
- Use GitHub Personal Access Token as password
- Or set up SSH keys

## Step 2: Deploy to Render (Easiest - Recommended)

### Option A: Using Render Dashboard

1. **Go to [render.com](https://render.com)** and sign up/login (FREE)

2. **Click "New +" → "Web Service"**

3. **Connect GitHub**:
   - Click "Connect GitHub"
   - Authorize Render
   - Select repository: `ajaySingh-93/web-portfolio`

4. **Configure Service**:
   - **Name**: `expert-stacker-portfolio` (or any name you like)
   - **Environment**: `Node`
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Root Directory**: Leave **EMPTY** (since repo root is Expert-Stacker folder)
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

5. **Environment Variables** (Optional - Render sets PORT automatically):
   - `NODE_ENV` = `production`

6. **Click "Create Web Service"**

7. **Wait 5-10 minutes** for build and deployment

8. **Your portfolio will be live at**: `https://expert-stacker-portfolio.onrender.com`

### Option B: Using Render.yaml (Auto-deploy)

The `render.yaml` file is already configured! Just:

1. Go to Render Dashboard
2. Click "New +" → "Blueprint"
3. Connect your GitHub repo
4. Render will auto-detect `render.yaml` and deploy!

## Step 3: Deploy to Railway (Alternative)

1. **Go to [railway.app](https://railway.app)** and sign up (FREE)

2. **Click "New Project" → "Deploy from GitHub repo"**

3. **Select**: `ajaySingh-93/web-portfolio`

4. **Configure**:
   - Root Directory: Leave empty (or set to root)
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`

5. **Environment Variables**:
   - `NODE_ENV` = `production`

6. Railway will auto-deploy on every push!

## Step 4: Deploy to Vercel (Frontend-focused)

**Note**: Vercel works best for frontend. For full-stack with Express, use Render or Railway.

1. **Go to [vercel.com](https://vercel.com)** and sign up

2. **Import Project**:
   - Click "Add New" → "Project"
   - Import `ajaySingh-93/web-portfolio`

3. **Configure**:
   - Framework Preset: Other
   - Root Directory: Leave as root
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

4. **Deploy**

## ✅ Verify Deployment

After deployment, check:
- ✅ Site loads without errors
- ✅ All pages work (Home, About, Skills, Projects, Experience, Contact)
- ✅ 3D animations load correctly
- ✅ Profile image displays
- ✅ Responsive design works on mobile

## 🔧 Troubleshooting

**Build fails?**
- Check Node.js version (needs Node 20+)
- Verify all dependencies in `package.json`
- Check build logs in deployment platform

**Site doesn't load?**
- Verify PORT environment variable
- Check that `dist/index.cjs` exists after build
- Review server logs

**Static files not loading?**
- Ensure `dist/public` directory exists
- Check file paths are correct
- Verify Vite build completed

## 📝 Next Steps

1. **Add Custom Domain** (Optional):
   - Render: Settings → Custom Domain
   - Railway: Settings → Networking → Custom Domain

2. **Set up Auto-Deploy**:
   - Both Render and Railway auto-deploy on git push
   - Just push to `main` branch and it deploys!

3. **Monitor Performance**:
   - Check deployment logs
   - Monitor uptime
   - Set up alerts

---

**Need Help?** Check the full [DEPLOYMENT.md](./DEPLOYMENT.md) guide or platform documentation.
