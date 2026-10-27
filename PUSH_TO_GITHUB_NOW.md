# EASIEST WAY: Upload to GitHub via Web Interface

## 🚀 Quick Upload Method (5 Minutes)

Since authentication is having issues, let's use GitHub's web interface directly.

### Step 1: Create a ZIP of Your Project

1. Open File Explorer
2. Go to: `C:\Users\LEGION\Downloads\Project\dnstechsupport`
3. Select all files and folders EXCEPT:
   - `.git` folder (if you see it)
   - `node_modules` folder (if exists)
4. Right-click → Send to → Compressed (zipped) folder
5. Name it: `dnstech.zip`

### Step 2: Go to Your GitHub Repository

1. Open browser and go to: **https://github.com/dhanesh-surya/dnstech**
2. Sign in to GitHub if not already

### Step 3: Upload Files

1. On the repository page, click **"Add file"** → **"Upload files"**
2. Drag and drop your files OR click "choose your files"
3. Add commit message: `Initial commit - DNS TechSupport website`
4. Click **"Commit changes"**

---

## ⚡ ALTERNATIVE: Use GitHub Desktop (Recommended)

This is the most reliable method for Windows:

### Step 1: Download GitHub Desktop
- Go to: https://desktop.github.com/
- Download and install (takes 2 minutes)

### Step 2: Sign In
1. Open GitHub Desktop
2. Click **"Sign in to GitHub.com"**
3. Enter your credentials in the browser

### Step 3: Add Repository
1. File → **"Add local repository"**
2. Click **"Choose..."**
3. Select: `C:\Users\LEGION\Downloads\Project\dnstechsupport`
4. Click **"Add repository"**

### Step 4: Publish
1. Click **"Publish repository"**
2. Repository name: `dnstech`
3. Choose Private or Public
4. Click **"Publish repository"**

✅ **Done!** Your code is now on GitHub.

---

## 🔥 FASTEST: Use Personal Access Token

If you want to push via command line right now:

### Generate Token:
1. Go to: https://github.com/settings/tokens/new
2. Note: `DNS Website Push`
3. Expiration: 90 days
4. Select scope: ✅ **repo**
5. Click **"Generate token"**
6. **COPY THE TOKEN** (starts with `ghp_`)

### Push with Token:

Open PowerShell as Administrator and run:

```powershell
cd "C:\Users\LEGION\Downloads\Project\dnstechsupport"

# Remove old remote
git remote remove origin

# Add remote with token (replace YOUR_TOKEN)
git remote add origin https://YOUR_TOKEN@github.com/dhanesh-surya/dnstech.git

# Push
git push -u origin main
```

**Replace `YOUR_TOKEN`** with the token you copied.

**Example:**
```powershell
git remote add origin https://ghp_abc123xyz456@github.com/dhanesh-surya/dnstech.git
```

---

## ✅ After Code is on GitHub

Once your code is successfully pushed, continue with Vercel:

### Deploy to Vercel:

1. **Go to Vercel:** https://vercel.com/login
2. **Sign in with GitHub**
3. Click **"Add New..."** → **"Project"**
4. Find repository: **dhanesh-surya/dnstech**
5. Click **"Import"**
6. Framework: Next.js (auto-detected)
7. Click **"Deploy"**

⏳ Wait 2-3 minutes for deployment.

### Add Environment Variables:

After first deployment:

1. Go to **Settings** → **Environment Variables**
2. Add these variables (one by one):

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = digidhanesh@gmail.com
SMTP_PASSWORD = your-gmail-app-password
SMTP_FROM = noreply@dnstechsupport.com
CONTACT_EMAIL = digidhanesh@gmail.com
NEXT_PUBLIC_SITE_URL = https://your-project.vercel.app
NEXT_PUBLIC_PHONE = 789-872-6342
NEXT_PUBLIC_EMAIL = digidhanesh@gmail.com
NEXT_PUBLIC_WHATSAPP = 917898726342
NEXT_PUBLIC_ADDRESS = Pamgarh, Chhattisgarh, India
```

3. Click **"Redeploy"** from Deployments tab

---

## 📧 Get Gmail App Password

**IMPORTANT:** For contact form to work:

1. Go to: https://myaccount.google.com/apppasswords
2. Enable 2-Step Verification if needed
3. Create app password for "Mail"
4. Copy the 16-character password
5. Use it in `SMTP_PASSWORD`

---

## 🎯 Recommended: Use GitHub Desktop

For easiest experience, download GitHub Desktop:
- **Download:** https://desktop.github.com/
- **Time:** 5 minutes total
- **No command line needed**
- **Visual interface**

---

## ⏱️ Time Estimate

- **GitHub Desktop:** 5 minutes
- **Personal Access Token:** 3 minutes
- **Web Upload:** 2 minutes (but need to extract files)

---

## 🆘 Need Help?

If you're still stuck, tell me which method you want to try and I'll guide you through it step by step.

**Your options:**
1. ✅ GitHub Desktop (easiest, recommended)
2. Personal Access Token (command line)
3. Web upload (manual)

Choose one and let me know!
