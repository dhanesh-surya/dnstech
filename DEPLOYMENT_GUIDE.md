# Vercel Deployment Guide for DNS TechSupport

## 🚀 Complete Step-by-Step Deployment Guide

### Prerequisites
- GitHub account (free)
- Vercel account (free) - Sign up at https://vercel.com
- Git installed on your computer
- Node.js installed (for local testing)

---

## Part 1: Prepare Your Project

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all the required packages. Wait for it to complete (may take 2-5 minutes).

### Step 2: Create Environment File

```bash
cp .env.example .env
```

Then edit the `.env` file with your actual details:

```env
# Application
NEXT_PUBLIC_SITE_URL=https://dnstechsupport.com

# Email Configuration (Use Gmail for easy setup)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-gmail-app-password
SMTP_FROM=noreply@dnstechsupport.com
CONTACT_EMAIL=digidhanesh@gmail.com

# Contact Information
NEXT_PUBLIC_PHONE=789-872-6342
NEXT_PUBLIC_EMAIL=digidhanesh@gmail.com
NEXT_PUBLIC_WHATSAPP=917898726342
NEXT_PUBLIC_ADDRESS=Pamgarh, Chhattisgarh, India
```

**Important for Gmail:**
- You need to generate an "App Password" from your Google Account
- Go to: https://myaccount.google.com/apppasswords
- Create an app password and use it in `SMTP_PASSWORD`

### Step 3: Test Locally (Optional but Recommended)

```bash
npm run dev
```

Visit http://localhost:3000 to test your site. Press `Ctrl+C` to stop.

### Step 4: Build Test (Important!)

```bash
npm run build
```

This ensures there are no build errors. Fix any errors before proceeding.

---

## Part 2: Set Up Git Repository

### Step 5: Initialize Git

If not already initialized:

```bash
git init
git add .
git commit -m "Initial commit - DNS TechSupport website"
```

### Step 6: Create GitHub Repository

1. Go to https://github.com
2. Click the **"+"** icon (top right) → **"New repository"**
3. Name it: `dnstechsupport-website`
4. Make it **Private** (recommended) or Public
5. **DO NOT** initialize with README (you already have files)
6. Click **"Create repository"**

### Step 7: Push to GitHub

GitHub will show you commands. Copy and run them:

```bash
# Add the remote
git remote add origin https://github.com/YOUR-USERNAME/dnstechsupport-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

---

## Part 3: Deploy to Vercel

### Step 8: Sign Up for Vercel

1. Go to https://vercel.com/signup
2. Click **"Continue with GitHub"** (easiest option)
3. Authorize Vercel to access your GitHub account

### Step 9: Import Your Project

1. Once logged in, click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories
3. Find `dnstechsupport-website` and click **"Import"**

### Step 10: Configure Project

Vercel will auto-detect Next.js. You'll see:

**Framework Preset:** Next.js  
**Root Directory:** ./  
**Build Command:** `npm run build` (auto-filled)  
**Output Directory:** `.next` (auto-filled)  
**Install Command:** `npm install` (auto-filled)

**Leave these as default** and click **"Deploy"**

⏳ **Wait 2-3 minutes** for the first deployment.

---

## Part 4: Add Environment Variables

### Step 11: Add Production Environment Variables

After the first deployment (even if some features don't work yet):

1. Go to your project dashboard on Vercel
2. Click **"Settings"** tab
3. Click **"Environment Variables"** from the left sidebar
4. Add each variable one by one:

#### Required Variables:

| Variable Name | Value | Example |
|---------------|-------|---------|
| `NEXT_PUBLIC_SITE_URL` | Your domain or Vercel URL | `https://your-project.vercel.app` |
| `SMTP_HOST` | Your email server | `smtp.gmail.com` |
| `SMTP_PORT` | Email port | `587` |
| `SMTP_USER` | Your email | `your-email@gmail.com` |
| `SMTP_PASSWORD` | App password | `your-app-password` |
| `SMTP_FROM` | From email | `noreply@dnstechsupport.com` |
| `CONTACT_EMAIL` | Where to receive messages | `digidhanesh@gmail.com` |
| `NEXT_PUBLIC_PHONE` | Phone number | `789-872-6342` |
| `NEXT_PUBLIC_EMAIL` | Display email | `digidhanesh@gmail.com` |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number | `917898726342` |
| `NEXT_PUBLIC_ADDRESS` | Address | `Pamgarh, Chhattisgarh, India` |

**For each variable:**
1. Click **"Add New"**
2. Enter **Key** (variable name)
3. Enter **Value**
4. Select **Production, Preview, and Development**
5. Click **"Save"**

### Step 12: Redeploy with Environment Variables

1. Go to **"Deployments"** tab
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**
4. Check **"Use existing Build Cache"**
5. Click **"Redeploy"**

---

## Part 5: Custom Domain Setup

### Step 13: Add Your Domain (dnstechsupport.com)

1. In Vercel project dashboard, click **"Settings"**
2. Click **"Domains"** from left sidebar
3. Type `dnstechsupport.com` and click **"Add"**
4. Vercel will give you DNS records to add

### Step 14: Update Domain DNS

Go to your domain registrar (where you bought dnstechsupport.com):

#### Option A: Using Nameservers (Recommended)
1. Change nameservers to Vercel's nameservers (shown in Vercel)
2. This gives Vercel full control

#### Option B: Using A/CNAME Records
Add these DNS records:

| Type | Name | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

**DNS propagation takes 5 minutes to 48 hours** (usually 1-2 hours).

### Step 15: Verify Domain

1. Wait for DNS propagation
2. Vercel will automatically verify
3. SSL certificate is auto-generated (free)
4. Your site will be live at https://dnstechsupport.com

---

## Part 6: Testing & Verification

### Step 16: Test Your Deployed Site

Visit your Vercel URL (e.g., `https://your-project.vercel.app`):

✅ **Test Checklist:**
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] About page displays properly
- [ ] Services page shows all services
- [ ] Contact form submits successfully
- [ ] Email notifications are received
- [ ] WhatsApp button works
- [ ] Mobile responsive design
- [ ] All images load

### Step 17: Test Contact Form

1. Go to Contact page
2. Fill out the form
3. Submit
4. Check both emails:
   - Admin email (digidhanesh@gmail.com)
   - User confirmation email

---

## 🔧 Troubleshooting Common Issues

### Issue 1: Build Fails

**Solution:**
```bash
# Test build locally first
npm run build

# Fix any TypeScript errors
npm run type-check
```

### Issue 2: Contact Form Doesn't Work

**Check:**
1. Environment variables are set correctly in Vercel
2. SMTP password is an "App Password" (not your regular Gmail password)
3. Check Vercel **Functions** logs for errors

### Issue 3: Images Don't Load

**Solution:**
- Images from Unsplash/external sources require domain whitelisting
- Already configured in `next.config.js`
- May need to add your custom domain

### Issue 4: Environment Variables Not Working

**Solution:**
1. Make sure variables with `NEXT_PUBLIC_` prefix are used for client-side
2. Redeploy after adding environment variables
3. Clear cache and redeploy if needed

---

## 📊 Post-Deployment Tasks

### 1. Set Up Analytics

Add Google Analytics:
1. Get GA4 ID from https://analytics.google.com
2. Add `NEXT_PUBLIC_GA_ID` environment variable in Vercel
3. Redeploy

### 2. Set Up Google Search Console

1. Go to https://search.google.com/search-console
2. Add property: `https://dnstechsupport.com`
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://dnstechsupport.com/sitemap.xml`

### 3. Test Performance

1. Go to https://pagespeed.web.dev
2. Enter your URL
3. Check scores (should be 90+)

### 4. Set Up Monitoring

Vercel provides:
- Automatic error tracking
- Performance monitoring
- Analytics dashboard

---

## 🔄 Making Updates

### To Update Your Site:

```bash
# Make your changes to code
# Then commit and push:

git add .
git commit -m "Description of changes"
git push origin main
```

Vercel **automatically deploys** when you push to GitHub!

---

## 💰 Vercel Pricing

**Free Tier Includes:**
- Unlimited deployments
- Automatic HTTPS
- 100GB bandwidth/month
- Automatic preview deployments
- Perfect for this project!

**Pro Plan ($20/month)** - Only needed if you exceed limits.

---

## 📞 Support

If you encounter issues:

1. **Vercel Docs:** https://vercel.com/docs
2. **Vercel Discord:** https://vercel.com/discord
3. **GitHub Issues:** Create an issue in your repo

---

## ✅ Deployment Checklist

Before going live:

- [ ] Dependencies installed (`npm install`)
- [ ] Build successful (`npm run build`)
- [ ] Code pushed to GitHub
- [ ] Project imported to Vercel
- [ ] Environment variables added
- [ ] Contact form tested
- [ ] Custom domain added
- [ ] DNS configured
- [ ] SSL certificate active
- [ ] All pages tested
- [ ] Mobile responsive verified
- [ ] Google Search Console set up
- [ ] Analytics configured

---

## 🎉 You're Done!

Your DNS TechSupport website is now live at:
- **Vercel URL:** https://your-project.vercel.app
- **Custom Domain:** https://dnstechsupport.com (once DNS propagates)

**Next Steps:**
1. Test all features thoroughly
2. Share with clients
3. Monitor analytics
4. Update content as needed

---

## 📧 Quick Email Setup Guide (Gmail)

### How to Get Gmail App Password:

1. Go to https://myaccount.google.com
2. Click **Security** (left sidebar)
3. Enable **2-Step Verification** (required)
4. Search for **App passwords**
5. Click **App passwords**
6. Select:
   - App: **Mail**
   - Device: **Other** (type "DNS TechSupport Website")
7. Click **Generate**
8. Copy the 16-character password
9. Use this in `SMTP_PASSWORD` environment variable

**Important:** This password is different from your regular Gmail password!

---

## 🌐 Domain Registrar Specific Guides

### If your domain is at:

**GoDaddy:**
1. DNS Management → Add Records
2. Type: A, Name: @, Value: `76.76.21.21`
3. Type: CNAME, Name: www, Value: `cname.vercel-dns.com`

**Namecheap:**
1. Domain List → Manage → Advanced DNS
2. Add New Record → A Record → @ → `76.76.21.21`
3. Add New Record → CNAME → www → `cname.vercel-dns.com`

**Cloudflare:**
1. DNS → Add record
2. Type: A, Name: @, IPv4: `76.76.21.21`, Proxy: Off
3. Type: CNAME, Name: www, Target: `cname.vercel-dns.com`, Proxy: Off

---

**Good luck with your deployment! 🚀**
