# GitHub Hosting Guide

## 📋 Prerequisites

- GitHub account (create one at [github.com](https://github.com) if you don't have one)
- Git installed on your computer (already done ✅)

## 🚀 Step-by-Step Guide

### Step 1: Create a New Repository on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `improvised-solutions-website` (or your preferred name)
   - **Description**: "Professional staffing and on-site support services website"
   - **Visibility**: Choose **Public** or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/improvised-solutions-website.git

# Verify the remote was added
git remote -v

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your files uploaded
3. The README.md will be displayed on the repository homepage

## 🌐 Deploy to Vercel (Free Hosting)

### Option 1: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Sign in with your GitHub account
3. Click **"Add New Project"**
4. Import your `improvised-solutions-website` repository
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next
6. Add **Environment Variables**:
   - Click "Environment Variables"
   - Add `EMAIL_USER` with your email
   - Add `EMAIL_PASSWORD` with your app password
7. Click **"Deploy"**
8. Wait 2-3 minutes for deployment
9. Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? improvised-solutions-website
# - Directory? ./
# - Override settings? No

# Add environment variables
vercel env add EMAIL_USER
vercel env add EMAIL_PASSWORD

# Deploy to production
vercel --prod
```

## 🎯 Deploy to Netlify (Alternative)

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Sign in with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** and authorize
5. Select your repository
6. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
7. Add environment variables in **Site settings** → **Environment variables**
8. Click **"Deploy site"**

## 📝 Important Notes

### Environment Variables
⚠️ **Never commit `.env.local` to GitHub!** 

The `.gitignore` file already excludes it, but always double-check:
```bash
git status
# Make sure .env.local is NOT listed
```

### Custom Domain (Optional)

After deployment, you can add a custom domain:

**Vercel:**
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

**Netlify:**
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

## 🔄 Updating Your Website

After making changes:

```bash
# Check what changed
git status

# Add all changes
git add .

# Commit with a message
git commit -m "Description of changes"

# Push to GitHub
git push

# Vercel/Netlify will auto-deploy the changes!
```

## 🆘 Troubleshooting

### "Permission denied" error
```bash
# Use HTTPS instead of SSH
git remote set-url origin https://github.com/YOUR_USERNAME/improvised-solutions-website.git
```

### "Authentication failed"
- Use a Personal Access Token instead of password
- Generate at: GitHub Settings → Developer settings → Personal access tokens

### Build fails on Vercel/Netlify
- Check environment variables are set correctly
- Check build logs for specific errors
- Ensure all dependencies are in `package.json`

## ✅ Checklist

- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Deployed to Vercel or Netlify
- [ ] Added environment variables
- [ ] Tested contact form
- [ ] (Optional) Added custom domain

---

Need help? Contact saadghufran@outlook.com
