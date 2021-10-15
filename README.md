ya# <span style="color: rebeccapurple;">Developer Portfolio Theme by Nico Pellerin</span>

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

### BONUS: Setting up contact form with Sendgrid

1. Sign up for a free Sendgrid account at [https://sendgrid.com/](https://sendgrid.com/).
2. In the left menu, click on `Settings`. Then click on `Sender Authentication` and then on `Verify a Single Sender` button. Fill in your info and click on `Create`. Once that's done, you should receive an email to verify. Click on button to verify you are the sender.
3. Once that's done, in the left menu, click on `Email API` and `Integration Guide`. Choose `Web API` and then `Node.js`. Create API key and copy it to `SENDGRID_API_KEY` in `.env.local` file of the theme project.
4. Using verified email from #2, add email to `SENDGRID_EMAIL` in `.env.local` file.
5. Going back to the Sendgrid website, at the bottom of the page where you created API key, select the checkbox `I've intergrated the code above.` and click on `Next: Verify Integration` button.
6. Make sure your website is running (using `yarn dev`) and go to `http://localhost:3000`. If it was already running, stop the server and run `yarn dev` again.
7. Scrolling down to the `Contact` section, fill in some info in the form and click `Send`.
8. If everything went well, you should be getting the confetti animation and should shortly receive a `Contact Form - Portfolio` email at the email you verified at #2 and added to `.env.local`
