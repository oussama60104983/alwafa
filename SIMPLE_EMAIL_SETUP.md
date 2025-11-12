# Simple Email Setup - Formspree

## Super Easy Setup (2 minutes):

1. **Go to https://formspree.io/**
2. **Sign up** (free account - 50 submissions/month)
3. **Create a new form**
4. **Set the email** to: `jouinioussama044@gmail.com`
5. **Copy your form endpoint** (looks like: `https://formspree.io/f/xxxxxxxxxx`)
6. **Add to `.env` file**:
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id_here
   ```
7. **Restart your dev server**

That's it! No complex configuration needed.

## Alternative: Web3Forms (Even Simpler)

If you prefer, you can use Web3Forms instead:

1. Go to https://web3forms.com/
2. Enter your email: `jouinioussama044@gmail.com`
3. Get your access key
4. Update the code to use Web3Forms endpoint

Both services handle spam protection automatically and send emails directly to your inbox!

