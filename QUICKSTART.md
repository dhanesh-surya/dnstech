# 🚀 QUICK START: Push Code & Deploy to Vercel

**Current Status:** Your code is ready locally but needs to be pushed to GitHub.

---

## ⚡ FASTEST METHOD: Personal Access Token (2 minutes)

### Step 1: Generate GitHub Token (1 minute)

1. **Click this link:** https://github.com/settings/tokens/new
2. **Note:** `DNS Website Deploy`
3. **Expiration:** 90 days
4. **Scopes:** Check ✅ **repo** (all repo permissions)
5. Click **"Generate token"** (bottom of page)
6. **COPY THE TOKEN** - it looks like: `ghp_xxxxxxxxxxxxxxxxxxxxx`

### Step 2: Push to GitHub (30 seconds)

Open **Command Prompt** or **PowerShell** and run these commands:

```bash
cd C:\Users\LEGION\Downloads\Project\dnstechsupport

git remote remove origin

git remote add origin https://YOUR_TOKEN_HERE@github.com/dhanesh-surya/dnstech.git

git push -u origin main
```

**Important:** Replace `YOUR_TOKEN_HERE` with your actual token from Step 1.

**Example:**
```bash
git remote add origin https://ghp_abc123xyz789@github.com/dhanesh-surya/dnstech.git
```

✅ **Done!** Your code is now on GitHub: https://github.com/dhanesh-surya/dnstech

---

## 🌐 Deploy to Vercel (5 minutes)

### Step 3: Sign in to Vercel

1. Go to: https://vercel.com/login
2. Click **"Continue with GitHub"**
3. Authorize Vercel

### Step 4: Import Your Project

1. Click **"Add New..."** → **"Project"**
2. Find: **dhanesh-surya/dnstech**
3. Click **"Import"**
4. Click **"Deploy"** (keep all defaults)

⏳ Wait 2-3 minutes. You'll get a URL like: `https://dnstech-xxx.vercel.app`

### Step 5: Add Environment Variables (CRITICAL!)

After deployment, your site will work but the contact form needs configuration:

1. In Vercel, go to **Settings** → **Environment Variables**
2. Add each variable below (click "Add New" for each):

#### Copy-Paste These Variables:

**Variable 1:**
- Key: `SMTP_HOST`
- Value: `smtp.gmail.com`

**Variable 2:**
- Key: `SMTP_PORT`
- Value: `587`

**Variable 3:**
- Key: `SMTP_USER`
- Value: `digidhanesh@gmail.com`

**Variable 4:**
- Key: `SMTP_PASSWORD`
- Value: `[YOUR GMAIL APP PASSWORD - see below]`

**Variable 5:**
- Key: `SMTP_FROM`
- Value: `noreply@dnstechsupport.com`

**Variable 6:**
- Key: `CONTACT_EMAIL`
- Value: `digidhanesh@gmail.com`

**Variable 7:**
- Key: `NEXT_PUBLIC_SITE_URL`
- Value: `https://your-vercel-url.vercel.app` (copy from Vercel)

**Variable 8:**
- Key: `NEXT_PUBLIC_PHONE`
- Value: `789-872-6342`

**Variable 9:**
- Key: `NEXT_PUBLIC_EMAIL`
- Value: `digidhanesh@gmail.com`

**Variable 10:**
- Key: `NEXT_PUBLIC_WHATSAPP`
- Value: `917898726342`

**Variable 11:**
- Key: `NEXT_PUBLIC_ADDRESS`
- Value: `Pamgarh, Chhattisgarh, India`

**For each variable:**
- Select: ✅ Production ✅ Preview ✅ Development
- Click **"Save"**

### Step 6: Get Gmail App Password

**CRITICAL:** You need a special Gmail password for the contact form:

1. Go to: https://myaccount.google.com/apppasswords
2. If you don't see "App passwords", enable **2-Step Verification** first
3. Click **"App passwords"**
4. App: **Mail**
5. Device: **Other (Custom name)** → type "DNS Website"
6. Click **"Generate"**
7. Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)
8. Remove spaces and use in `SMTP_PASSWORD` variable

### Step 7: Redeploy

1. Go to **Deployments** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**
4. Wait 1 minute

✅ **Your site is now LIVE and fully functional!**

---

## 🎉 Test Your Website

Visit your Vercel URL and test:

1. ✅ Homepage loads
2. ✅ Navigation works
3. ✅ Contact form submits
4. ✅ Email received at digidhanesh@gmail.com
5. ✅ WhatsApp button works
6. ✅ Mobile responsive

---

## 🌐 Add Custom Domain (Optional)

### Add dnstechsupport.com:

1. In Vercel: **Settings** → **Domains**
2. Type: `dnstechsupport.com`
3. Click **"Add"**
4. Vercel shows DNS records

### Update DNS at Your Registrar:

Add these records where you bought the domain:

**A Record:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**CNAME Record:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

⏳ Wait 5-30 minutes for DNS propagation.

---

## 📊 Summary

**Time Required:**
- Push to GitHub: 2 minutes
- Deploy to Vercel: 3 minutes
- Add environment variables: 3 minutes
- Get Gmail app password: 2 minutes
- **Total: ~10 minutes**

**URLs After Deployment:**
- Vercel: `https://dnstech-xxx.vercel.app`
- Custom: `https://dnstechsupport.com` (after DNS)

---

## 🆘 Quick Troubleshooting

**If GitHub push fails:**
- Make sure token starts with `ghp_`
- Check repository exists at https://github.com/dhanesh-surya/dnstech
- Try running as Administrator

**If Vercel build fails:**
- Check build logs in Vercel
- Usually auto-fixes on redeploy

**If contact form doesn't work:**
- Verify Gmail app password is correct
- Check all environment variables are saved
- Redeploy after adding variables

---

## 🎯 Current Time: October 26, 2026, 9:21 PM IST

**Your Next Steps:**
1. ✅ Generate GitHub token
2. ✅ Push code (2 min)
3. ✅ Deploy to Vercel (3 min)
4. ✅ Add environment variables (3 min)
5. ✅ Test your site

**Let's do it! 🚀**
