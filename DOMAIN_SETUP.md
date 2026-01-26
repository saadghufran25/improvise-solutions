# Custom Domain Setup Guide for Vercel

## 🌐 Connecting Your Domain to Vercel

### Step 1: Add Domain in Vercel

1. **Go to your Vercel project**:
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click on your `improvise-solutions` project

2. **Navigate to Domains**:
   - Click on the **"Settings"** tab
   - Click on **"Domains"** in the left sidebar

3. **Add your domain**:
   - Enter your domain name (e.g., `improvisedsolutions.com`)
   - Click **"Add"**

4. **Choose configuration**:
   - Vercel will show you DNS records to configure
   - Keep this page open - you'll need these records

### Step 2: Configure DNS Records

You have **two options** depending on your domain provider:

---

## Option A: Using Vercel Nameservers (Recommended - Easiest)

This is the simplest method. Vercel manages all DNS for you.

### Steps:

1. **In Vercel**, after adding your domain, select **"Use Vercel Nameservers"**

2. **Copy the nameservers** shown (usually 2-4 nameservers like):
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

3. **Go to your domain registrar** (where you bought the domain):
   - GoDaddy, Namecheap, Google Domains, etc.
   - Find **"Nameservers"** or **"DNS Settings"**
   - Change from default nameservers to Vercel's nameservers

4. **Save changes**

5. **Wait for propagation** (can take 24-48 hours, usually faster)

### Popular Domain Registrars:

#### GoDaddy
1. Go to [godaddy.com/domains](https://godaddy.com/domains)
2. Click on your domain → **"Manage DNS"**
3. Scroll to **"Nameservers"** → Click **"Change"**
4. Select **"Custom"**
5. Enter Vercel's nameservers
6. Click **"Save"**

#### Namecheap
1. Go to [namecheap.com/domains](https://namecheap.com/domains)
2. Click **"Manage"** next to your domain
3. Find **"Nameservers"** section
4. Select **"Custom DNS"**
5. Enter Vercel's nameservers
6. Click **"Save"**

#### Google Domains
1. Go to [domains.google.com](https://domains.google.com)
2. Click on your domain
3. Click **"DNS"** in the left menu
4. Scroll to **"Name servers"**
5. Click **"Use custom name servers"**
6. Enter Vercel's nameservers
7. Click **"Save"**

---

## Option B: Using Custom DNS Records (Keep Current Nameservers)

If you want to keep your current DNS provider (for email, etc.), use this method.

### DNS Records to Add:

Vercel will show you specific records. Typically:

#### For Root Domain (example.com):

**A Record:**
```
Type: A
Name: @ (or leave blank)
Value: 76.76.21.21
TTL: 3600 (or Auto)
```

#### For www Subdomain (www.example.com):

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

### Steps for Common Providers:

#### GoDaddy
1. Go to **"Manage DNS"**
2. Scroll to **"Records"**
3. Click **"Add"** for each record
4. Enter the details from Vercel
5. Click **"Save"**

#### Namecheap
1. Go to **"Advanced DNS"**
2. Click **"Add New Record"**
3. Select record type (A or CNAME)
4. Enter details from Vercel
5. Click **"Save All Changes"**

#### Cloudflare
1. Go to **"DNS"** tab
2. Click **"Add record"**
3. Enter the details from Vercel
4. **Important**: Set proxy status to **"DNS only"** (gray cloud)
5. Click **"Save"**

---

## Step 3: Verify Domain in Vercel

1. **Return to Vercel**
2. Click **"Verify"** or **"Refresh"**
3. Vercel will check if DNS is configured correctly
4. Once verified, you'll see a green checkmark ✅

---

## Step 4: Configure www Redirect (Optional but Recommended)

To redirect www to non-www (or vice versa):

1. In Vercel **Domains** settings
2. Add both versions:
   - `example.com`
   - `www.example.com`
3. Vercel will automatically redirect one to the other
4. Choose which should be primary in settings

---

## 🔒 Step 5: Enable HTTPS (Automatic)

Vercel automatically provisions SSL certificates:
- ✅ Free SSL certificate from Let's Encrypt
- ✅ Auto-renewal
- ✅ HTTPS enabled by default

No action needed! Your site will be secure at `https://yourdomain.com`

---

## ⏱️ DNS Propagation Time

- **Nameserver changes**: 24-48 hours (often 2-6 hours)
- **DNS record changes**: 1-24 hours (often 15 minutes - 2 hours)
- **Check propagation**: [whatsmydns.net](https://www.whatsmydns.net)

---

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] Visit `http://yourdomain.com` - should redirect to HTTPS
- [ ] Visit `https://yourdomain.com` - should load your site
- [ ] Visit `https://www.yourdomain.com` - should work (or redirect)
- [ ] Check SSL certificate (padlock icon in browser)
- [ ] Test contact form
- [ ] Check all pages load correctly

---

## 🆘 Troubleshooting

### "Domain not verified" in Vercel
- **Wait longer**: DNS can take up to 48 hours
- **Check DNS records**: Use [dnschecker.org](https://dnschecker.org)
- **Clear cache**: Try incognito/private browsing

### "SSL certificate pending"
- **Wait**: Can take 10-30 minutes after DNS verification
- **Check DNS**: Ensure records are correct
- **Contact Vercel**: If it takes more than 24 hours

### "This site can't be reached"
- **Check nameservers**: Verify they're set correctly
- **Wait for propagation**: Can take up to 48 hours
- **Clear DNS cache**: 
  ```bash
  # Mac
  sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
  
  # Windows
  ipconfig /flushdns
  ```

### Domain shows old content
- **Clear browser cache**: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- **Check in incognito**: Rule out caching issues
- **Wait for CDN**: Vercel's CDN can take a few minutes to update

---

## 📧 Email Configuration (If Applicable)

If you use email with your domain (e.g., contact@yourdomain.com):

### Using Nameserver Method:
- You'll need to add MX records in Vercel's DNS settings
- Contact your email provider for specific MX records

### Using Custom DNS Method:
- Keep your existing MX records
- Only add A and CNAME records for the website

---

## 🎯 Quick Reference

### What You Need:
1. ✅ Domain name (purchased from registrar)
2. ✅ Access to domain's DNS settings
3. ✅ Vercel project deployed
4. ✅ DNS records from Vercel

### Recommended Setup:
- **Method**: Vercel Nameservers (easiest)
- **Domains**: Both root and www
- **Redirect**: www → non-www (or vice versa)
- **SSL**: Automatic (free)

---

## 📞 Need Help?

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Vercel Docs**: [vercel.com/docs/custom-domains](https://vercel.com/docs/custom-domains)
- **DNS Help**: Check your domain registrar's support docs

---

**Good luck with your domain setup!** 🚀

Your website will be live at your custom domain once DNS propagates.
