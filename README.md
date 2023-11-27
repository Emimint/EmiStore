# EmiStore

This application is mock implementation of a standard e-commerce website. The user can filter the display of the products by category, select and purchase multiple products.

![image](https://github.com/Emimint/EmiStore/assets/90863470/bc5c82c3-62f6-4a19-a9ee-dd24d4b115cb)


## Tech Stack

- Frontend
  - [Angular](https://angular.io/)
  - [Angular Material](https://material.angular.io/)
  - [Tailwind](https://tailwindcss.com/)
  - [Fake App Store API](https://fakestoreapi.com/)
- Backend
  - NodeJS
  - Express.js
  - [Stripe](https://stripe.com) for payment form


## Local installation

Make sure to have Node.js installed. In your terminal, run `npm install` to install all dependencies. 

In order to access the back-end payment service, cd to the `server` folder, and again run `npm install`. To start the server, run `node server.js`. It will open a server at `http://localhost:4242/`. 

Return to the root directory and <em>in a separate teminal</em> run `ng serve`. In the browser of your choice, navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Test payment form

You can emulate a successful payment by entering '4242 4242 4242 4242' for the card number (any other information of the form can be entered). Emulate a fake payment by entering '4000 0000 0000 9995'.

## Further improvements
- Make the entire application web responsive
- Add a search engine
- Improve performance by add local storage support

## Acknowledgments

Original project idea : [FreeCodeCamp](https://www.freecodecamp.org/)
