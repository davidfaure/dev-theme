# <span style="color: rebeccapurple;">Developer Portfolio Theme by David Faure</span>

### Getting started

- In your terminal, run `yarn install` to install packages
- Once all packages have installed, you can run `yarn dev` and then in your browser navigate to `http://localhost:3000`
- Rename `.env.example` to `.env.local`

* If you don't have `yarn` installed on your computer, follow the instructions here: [https://classic.yarnpkg.com/lang/en/docs/install/](https://classic.yarnpkg.com/lang/en/docs/install/)

### Customizing data

All the content data that can be customized is found in the `data.js` file.

### Og:image generator

In developement mode (`yarn dev`), navigate to `http://localhost:3000/generator`. Click `Generate Image` button to generate `og:image`. It will appear in the `/public/images` folder as `og-image.jpg`. This is the image that will be show when you share your portfolio on social media.

### Linting

This project uses `eslint-config-next` for linting. To learn more, visit [https://nextjs.org/docs/basic-features/eslint#eslint-config](https://nextjs.org/docs/basic-features/eslint#eslint-config)

### BONUS: Setting up contact form with nodeMailer and Gmail

1. Sign in to your google account at [https://mail.google.com/mail/](https://mail.google.com/mail/).
2. Click on your profile in the top-right corner -> `Google Account` -> `Security`
3. You need to `turn on access` for a `Less secure app access`.
4. Add the email used on #1 to `AUTH_EMAIL` with your password to `PASSWORD` in `.env.local` file.
5. Make sure your website is running (using `yarn dev`) and go to `http://localhost:3000`. If it was already running, stop the server and run `yarn dev` again.
6. Scrolling down to the `Contact` section, fill in some info in the form and click `Send`.
7. If everything went well, you should be getting the confetti animation and should shortly receive a `Contact Form - Portfolio: 'Any subject'` email at the email you verified at #1 and added to `.env.local`
