# Email Setup Instructions

To enable the contact form to send emails directly to `samitahir018@gmail.com`, you need to set up Gmail SMTP credentials.

## Step 1: Create a `.env.local` file

Create a file named `.env.local` in the root directory of your project with the following content:

```env
EMAIL_USER=samitahir018@gmail.com
EMAIL_PASSWORD=your-app-password-here
```

## Step 2: Generate Gmail App Password

You need to create a Gmail App Password (NOT your regular Gmail password):

1. Go to your Google Account: https://myaccount.google.com/security
2. Enable **2-Step Verification** if not already enabled
3. Go to **App Passwords**: https://myaccount.google.com/apppasswords
4. Select **"Mail"** as the app
5. Select **"Other (Custom name)"** as the device and name it something like "Landing Page Contact Form"
6. Click **Generate**
7. Google will show you a 16-character password
8. Copy this password and paste it in your `.env.local` file as the `EMAIL_PASSWORD` value

## Step 3: Update .env.local file

Your `.env.local` file should look like this:

```env
EMAIL_USER=samitahir018@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

(Replace `abcd efgh ijkl mnop` with your actual 16-character app password)

## Step 4: Restart your development server

After creating the `.env.local` file:

1. Stop your dev server (Ctrl+C)
2. Run `npm run dev` again
3. Test the contact form!

## Important Notes:

- Never commit the `.env.local` file to Git (it's already in .gitignore)
- The app password is different from your Gmail password
- Emails will be sent FROM `samitahir018@gmail.com` TO `samitahir018@gmail.com`
- The form submitter's email will be included in the email content

## Testing

Once set up:
1. Fill out the contact form on your website
2. Click "Request proposal"
3. You should see a success message
4. Check `samitahir018@gmail.com` inbox for the email

If you encounter issues, check the browser console and terminal for error messages.

