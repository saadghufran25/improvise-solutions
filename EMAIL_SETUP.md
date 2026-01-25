# Email Setup Instructions

The contact form is configured to send emails to **saadghufran@outlook.com**.

## Setup Steps

### Option 1: Using Gmail (Recommended)

1. **Create/Use a Gmail account** (or use an existing one)

2. **Enable 2-Step Verification**:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification if not already enabled

3. **Generate an App Password**:
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Other (Custom name)"
   - Name it "Improvised Solutions Website"
   - Click "Generate"
   - Copy the 16-character password

4. **Update `.env.local`**:
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASSWORD=xxxx-xxxx-xxxx-xxxx
   ```

5. **Restart the dev server**:
   ```bash
   npm run dev
   ```

### Option 2: Using Outlook/Hotmail

1. **Update the API route** (`app/api/contact/route.ts`):
   - Change `service: "gmail"` to `service: "outlook"`

2. **Update `.env.local`**:
   ```env
   EMAIL_USER=your-email@outlook.com
   EMAIL_PASSWORD=your-password
   ```

3. **Restart the dev server**

### Option 3: Using Custom SMTP

Replace the transporter configuration in `app/api/contact/route.ts`:

```typescript
const transporter = nodemailer.createTransport({
  host: "smtp.your-provider.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check **saadghufran@outlook.com** inbox for the email
4. The email will have a professional HTML template with all form details

## Email Features

✅ Professional HTML template  
✅ All form data included (name, email, phone, service, message)  
✅ Reply-to set to customer's email for easy responses  
✅ Timestamp in UK timezone  
✅ Service highlighted with badge  
✅ Mobile-responsive design  

## Troubleshooting

- **"Invalid credentials"**: Check your app password is correct
- **"Connection refused"**: Check your internet connection and firewall
- **Email not received**: Check spam folder
- **Dev server not picking up changes**: Restart with `npm run dev`

## Security Notes

⚠️ **Never commit `.env.local` to Git** - it contains sensitive credentials  
✅ The `.gitignore` file is already configured to exclude it  
✅ Use `.env.example` as a template for other developers  
