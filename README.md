# Project request:

- Create an application for selling basketball equipment.

- Each product should have: name, slug, category to which it belongs, image, price, number of available quantity in the store, product brand name, customer rating, number of reviews and product description.

- Visitors to the site can see all the products (equipments) and sort them by: categories, prices and customer reviews.

- By clicking on any product (equipment), the user will get a new page with that product with all the necessary information about that product and available actions.

- They will also see a special display of whether the equipment is available or not currently available.

- Create a button to add products (equipment) to the cart, and then when you click on the cart make a special page where you can see all orders.

- To order products, site visitors must register. From the registration data, they need to submit: name, email and password.

- When adding a product to the cart, the registered user can choose the quantity of the same product.

- The customer can increase, decrease or delete the product (equipment) from the shopping cart page.

- When the user finishes editing their shopping cart, they can continue to the payment options by clicking the button.

- Before payment options the user must sign in or if is a new user then he must first register.

- Only administrators (who provide the same data as users) can change the contents of the equipment and all data related to it.

- The site should be in colors: dark orange, black and white, and a little: blue, red and green.

- The application should have a login page to which the user or administrator can log in with the correct email and password.

- If the user is logged in and chooses what to buy in their cart, then they can go to the page where he or she need to specify the delivery address.

- Delivery address information is: full name, address, city, postal code and country.

- Provide visual shopping steps for online shopping, there will be four: user login, delivery address, payment options and ordering.

- If the user is not registered, it should be a registration page. The new user should enter: name, e-mail, password and it would be good to be able to confirm the password.

- The registered user can choose between PayPal and Stripe for the payment method.

- For the last 4th step it should be preview order page.

- Orders informations are: order items, shipping address, payment method, items price, shipping price, tax price and total price.

- The user needs to have an authorization token.

- Users can see the history of their orders.

- The user can go to his profile page, where he can see and update (change) his name, email and password.

- The application should have a sidebar and a search box.

- The application should have a page where the customer can see the search results by several filters: equipment filter, price range filter and filter by average rating.

- The user can also adjust the search according to: latest arrival, price (from low to high and from high to low) and average customer reviews.

- Put a picture of Nikola Jokić, who was twice the MVP of the NBA league regular season, on two pages: the page with the cart and the ordering page.

- The administrator should have an administrator menu in the header.

- Protect some routes for administrators and some for registered users:

a) The user must be logged in if he wants to see his: profile page, order page and order history page.

b) The administrator must be logged in if he wants to see his: administrator dashboard page, all products list page, all orders list page and all users list page.

- Make dashboard page for administrator.

- Make product list page for administrator.

- In product list page administrator will have options to make a new product.

- The administrator can edit and update every product in his products page.

- Administrator can delete product too.

- The administrator should have an order page where he can see all the orders of all users.

- If the order has been paid for and not delivered, the administrator can click on the button on the order page and deliver the order to the user.

- The administrator should also have options to delete orders.

- The administrator will have a page where he can see all registered users and administrators.

- An administrator can update any user, and can change their name, email, and can make a user an administrator and an administrator a regular user.

- An administrator can delete any user or administrator, only the master administrator cannot be deleted.

- In product page it should be a submit review form. Every user or administrator can submit only one time for one product. Submit form must have comment and rating.

## Technical Limitations

- The application should be based on the MERN concept:

- M - MongoDB - is a database program.

- E - Express - is a back-end web application framework for Node.js.

- R - React - is a front-end JavaScript library for building user interfaces based on UI components.

- N - Node - is a back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
