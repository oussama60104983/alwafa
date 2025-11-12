# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (200 emails/month free)

## Step 2: Create Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
New Contact Form Message: {{subject}}
```

**Content:**
```
From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from the AL WAFA contact form.
```

4. Set **To Email** to: `jouinioussama044@gmail.com`
5. **Copy the Template ID** (you'll need this)

## Step 4: Get Public Key
1. Go to **Account** > **General**
2. Find **API Keys** section
3. **Copy your Public Key**

## Step 5: Configure Environment Variables
1. Create a `.env` file in the root directory (copy from `.env.example`)
2. Add your credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Restart your development server after adding the `.env` file

## Spam Protection Features
The form includes multiple spam protection measures:
- **Honeypot field**: Hidden field that bots fill but humans don't see
- **Rate limiting**: Maximum 1 submission per 10 seconds
- **Email validation**: Ensures valid email format
- **Required field validation**: All fields must be filled

## Testing
1. Fill out the contact form
2. Click "Send Message"
3. Check `jouinioussama044@gmail.com` for the email
4. You should receive an email with all the form details

## Troubleshooting
- Make sure your `.env` file is in the root directory
- Restart the dev server after adding environment variables
- Check the browser console for any error messages
- Verify your EmailJS service is active and properly configured

