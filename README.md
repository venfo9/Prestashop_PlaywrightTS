This project uses the Playwright framework to demonstrate POM and Auth test with comparing amounts for the E-commerce site (Prestashop). Locators and actions are placed in separate classes corresponding to the names of the site pages. Email and password are stored in the config. Test flow:

Open the site
Go to login page
Enter credentials
Login
Enter search word in the search field
Get the result
Switch good list fro grid to the list
Get the amount of the first good (amountFromChooseGoods)
Add the first good to the cart
Go to the cart
Compare value amountFromChooseGoods with amountFromCart on the cart page
