# Quick Deployment Steps for DNS TechSupport

## ✅ COMPLETED:
- [x] Project created
- [x] Git initialized
- [x] Files committed to Git

## 🚀 NOW DO THESE STEPS:

### Step 1: Create GitHub Repository

1. **Go to GitHub:** https://github.com/new
2. **Repository name:** `dnstechsupport-website` (or any name you like)
3. **Visibility:** Choose **Private** (recommended) or Public
4. **DO NOT** check any boxes (no README, no .gitignore, no license)
5. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. 

**Open your terminal** (PowerShell or Command Prompt) in this project folder and run:

```bash
# Add GitHub as remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/dnstechsupport-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:**
If your GitHub username is `johndoe`, the command would be:
```bash
git remote add origin https://github.com/johndoe/dnstechsupport-website.git
```

### Step 3: Deploy to Vercel

#### A. Sign Up for Vercel
1. Go to: https://vercel.com/signup
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub

#### B. Import Your Project
1. After login, you'll see the dashboard
2. Click **"Add New..."** → **"Project"**
3. Find your repository `dnstechsupport-website`
4. Click **"Import"**

#### C. Configure & Deploy
1. **Framework Preset:** Next.js (auto-detected) ✅
2. **Root Directory:** ./ (leave as is) ✅
3. **Build Command:** Leave default ✅
4. **Output Directory:** Leave default ✅
5. Click **"Deploy"** button

⏳ **Wait 2-3 minutes** for deployment to complete.

### Step 4: Add Environment Variables (IMPORTANT!)

After the first deployment, the site will be live but the contact form won't work yet. You need to add environment variables:

1. In Vercel dashboard, go to your project
2. Click **"Settings"** tab
3. Click **"Environment Variables"** (left sidebar)
4. Add these one by one:

#### Required Environment Variables:

**Click "Add New" for each:**

1. **Key:** `SMTP_HOST`  
   **Value:** `smtp.gmail.com`

2. **Key:** `SMTP_PORT`  
   **Value:** `587`

3. **Key:** `SMTP_USER`  
   **Value:** `digidhanesh@gmail.com` (or your email)

4. **Key:** `SMTP_PASSWORD`  
   **Value:** `your-gmail-app-password` (see below how to get this)

5. **Key:** `SMTP_FROM`  
   **Value:** `noreply@dnstechsupport.com`

6. **Key:** `CONTACT_EMAIL`  
   **Value:** `digidhanesh@gmail.com`

7. **Key:** `NEXT_PUBLIC_SITE_URL`  
   **Value:** Your Vercel URL (e.g., `https://your-project.vercel.app`)

8. **Key:** `NEXT_PUBLIC_PHONE`  
   **Value:** `789-872-6342`

9. **Key:** `NEXT_PUBLIC_EMAIL`  
   **Value:** `digidhanesh@gmail.com`

10. **Key:** `NEXT_PUBLIC_WHATSAPP`  
    **Value:** `917898726342`

11. **Key:** `NEXT_PUBLIC_ADDRESS`  
    **Value:** `Pamgarh, Chhattisgarh, India`

**For each variable:**
- Select: ✅ Production ✅ Preview ✅ Development
- Click **"Save"**

### Step 5: Get Gmail App Password

**IMPORTANT:** You cannot use your regular Gmail password. You need an "App Password":

1. Go to: https://myaccount.google.com/security
2. Search for **"App passwords"** or scroll down to find it
3. If you don't see it, you need to enable **2-Step Verification** first
4. Click **"App passwords"**
5. Select:
   - **App:** Mail
   - **Device:** Other (Custom name) → type "DNS Website"
6. Click **"Generate"**
7. Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)
8. Use this password in the `SMTP_PASSWORD` environment variable

### Step 6: Redeploy with Environment Variables

1. Go to **"Deployments"** tab in Vercel
2. Find your latest deployment
3. Click the **"..."** (three dots) menu
4. Click **"Redeploy"**
5. Click **"Redeploy"** again to confirm

⏳ Wait 1-2 minutes for redeployment.

### Step 7: Test Your Website

1. Click on your Vercel URL (e.g., `https://your-project.vercel.app`)
2. Test all pages:
   - ✅ Homepage
   - ✅ About
   - ✅ Services
   - ✅ Contact
3. **Test Contact Form:**
   - Fill out the form
   - Submit
   - Check your email (digidhanesh@gmail.com)
   - You should receive the message!

---

## 🌐 Add Custom Domain (dnstechsupport.com)

### Step 8: Add Domain in Vercel

1. In Vercel project, go to **"Settings"**
2. Click **"Domains"**
3. Type: `dnstechsupport.com`
4. Click **"Add"**
5. Vercel will show DNS records you need to add

### Step 9: Update DNS at Your Domain Registrar

Go to where you bought your domain (GoDaddy, Namecheap, etc.) and add:

**Option 1: A Record (Recommended)**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`
- TTL: 3600

**Option 2: CNAME for www**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: 3600

### Step 10: Wait for DNS Propagation

- Usually takes **5-30 minutes**
- Can take up to 48 hours in some cases
- Vercel will automatically verify and issue SSL certificate
- Your site will be live at https://dnstechsupport.com

---

## 🎉 You're Done!

Your website will be live at:
- **Vercel URL:** https://your-project.vercel.app (immediately)
- **Custom Domain:** https://dnstechsupport.com (after DNS setup)

---

## 📞 Need Help?

If you get stuck at any step:

1. **Check Vercel Logs:** In your Vercel project → "Deployments" → Click on deployment → View "Build Logs"
2. **Vercel Discord:** https://vercel.com/discord
3. **Email me the error message** and I can help debug

---

## ⚡ Quick Reference

**Your Project Location:**
`C:\Users\LEGION\Downloads\Project\dnstechsupport`

**GitHub Repository URL Format:**
`https://github.com/YOUR-USERNAME/dnstechsupport-website`

**Vercel Dashboard:**
https://vercel.com/dashboard

**Gmail App Passwords:**
https://myaccount.google.com/apppasswords

---

## 🔄 Making Future Updates

After initial deployment, to update your site:

```bash
# Make your changes, then:
git add .
git commit -m "Updated contact form"
git push origin main
```

Vercel automatically deploys when you push! 🚀

---

**Good luck! Your website is almost live! 🎊**
