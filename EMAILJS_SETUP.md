# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form on your portfolio.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Add an Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your email account
5. Note your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template structure:

```
Subject: Portfolio Contact - {{from_name}}

From: {{from_name}} <{{from_email}}>
Reply-To: {{reply_to}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Configure the template:
   - **To Email**: `elmaalmiayoub@gmail.com` (your email)
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **Reply To**: `{{reply_to}}`
   - **Subject**: `Portfolio Contact - {{from_name}}`
   - **Content**: Use the template above

5. Note your **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** in the API Keys section
3. Copy this key (you'll need it later)

## Step 5: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and fill in your credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxx
   ```

3. Replace the placeholder values with your actual:
   - Service ID (from Step 2)
   - Template ID (from Step 3)
   - Public Key (from Step 4)

## Step 6: Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact section on your portfolio
3. Fill out the form and submit
4. Check your email inbox for the test message

## Troubleshooting

### Emails not sending?
- Verify all environment variables are set correctly
- Check that your EmailJS service is properly connected
- Ensure your template variables match: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_email}}`, `{{reply_to}}`
- Check the browser console for error messages

### Getting CORS errors?
- Make sure you're using the Public Key, not the Private Key
- Verify your domain is allowed in EmailJS settings (if using domain restrictions)

### Template variables not working?
- Ensure variable names match exactly: `{{variable_name}}`
- Check that you're using double curly braces
- Verify the template is saved and published

## Security Notes

- Never commit `.env.local` to version control (it should be in `.gitignore`)
- The Public Key is safe to use in client-side code
- EmailJS free tier includes rate limiting (200 emails/month)
- For production, consider upgrading to a paid plan if you expect high traffic

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

