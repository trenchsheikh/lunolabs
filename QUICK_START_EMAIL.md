# Quick Start: Enable Email Sending

Your contact form is now set up to send emails directly! Follow these 3 simple steps:

## Step 1: Create `.env.local` file

In your project root folder, create a new file called `.env.local` and add:

```
EMAIL_USER=samitahir018@gmail.com
EMAIL_PASSWORD=your-16-digit-app-password
```

## Step 2: Get Your Gmail App Password

1. Go to: https://myaccount.google.com/apppasswords
2. You may need to enable 2-Step Verification first if prompted
3. Select **"Mail"** for app, **"Other"** for device
4. Name it "Contact Form" 
5. Click **Generate**
6. Copy the 16-character password (it looks like: `abcd efgh ijkl mnop`)
7. Paste it into your `.env.local` file

Your `.env.local` should look like:
```
EMAIL_USER=samitahir018@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

## Step 3: Restart Your Server

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

## That's it! 🎉

Now when someone fills out your contact form and clicks "Request proposal", an email will be sent directly to `samitahir018@gmail.com` with all their information!

---

### Testing

1. Go to your contact form
2. Fill it out with test data
3. Click "Request proposal"
4. You should see "Sending..." then a success message
5. Check your Gmail inbox!

### Troubleshooting

If emails aren't sending:
- Check that `.env.local` file exists in the root folder
- Verify the app password is correct (no extra spaces)
- Make sure you restarted the dev server after creating `.env.local`
- Check the browser console (F12) and terminal for error messages

