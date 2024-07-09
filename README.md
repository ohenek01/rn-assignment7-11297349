# rn-assignment7-11297349
## Shopping App Design Choices and Implementation
This README provides an overview of the design choices and the implementation of data storage in our React Native Shopping App. The app includes a HomeScreen, ProductDetailScreen, Checkout, and custom drawer navigation.

## Design Choices
### Component-Based:

* HomeScreen: Displays a list of products fetched from an API. Each product can be viewed in detail or added directly to the cart.
* ProductDetailScreen: Shows detailed information about a selected product with options to add it to the cart.
* Checkout: Allows users to view and remove items from their cart.
* CustomDrawerContent: Handles navigation drawer customization and functionality.
* Navigation: Implemented using React Navigation with a drawer layout for ease of access to different screens.
* State Management: Utilized Context API to manage the global state of the cart. The CartContext provides a way to access and modify the cart items across different components.
* Styling: Used StyleSheet for consistent and modular styling.
Employed icons from react-native-vector-icons for intuitive user interaction elements like adding to cart, navigating menus, and checkout.
* Data Fetching: Axios is used to fetch product data from a sample API (https://fakestoreapi.com/products).
* Icons: Incorporated Ionicons, FontAwesome, and MaterialIcons for a rich set of icons to enhance the user interface.
  ## Implementation of Data Storage
* CartContext: Created a CartContext to manage the cart state across the app.
Used useContext hook to access the cart and setCart functions for adding or removing items.
* Adding to Cart: In HomeScreen and ProductDetailScreen, the addToCart function updates the cart state by appending the selected product to the current cart array.
* Removing from Cart: In Checkout, the removeFromCart function updates the cart state by removing the item at the specified index from the cart array.
  ## Usage
### HomeScreen: 
* Displays a list of products.
* Users can navigate to product details or add products directly to the cart.
### ProductDetailScreen:
* Shows detailed information about a product.
* Users can add the product to the cart from this screen.
### Checkout:
* Displays all items in the cart.
* Users can remove items from the cart.
### CustomDrawerContent:
* Handles navigation and user profile view in the drawer.
![photo_2024-07-09_21-44-39](https://github.com/ohenek01/rn-assignment7-11297349/assets/144062701/df52442a-b972-40bc-8e01-4b0cb350aac9)
![photo_2024-07-09_21-44-55](https://github.com/ohenek01/rn-assignment7-11297349/assets/144062701/64951764-a7df-4ba6-b73b-1865935056fa)
![photo_2024-07-09_21-45-07](https://github.com/ohenek01/rn-assignment7-11297349/assets/144062701/9da93a98-1c39-485e-bff4-c6073ad2e9aa)
![photo_2024-07-09_21-45-15](https://github.com/ohenek01/rn-assignment7-11297349/assets/144062701/db557ff6-b11f-4b36-9cb2-8cbf8db7e7ac)
![photo_2024-07-09_21-45-22](https://github.com/ohenek01/rn-assignment7-11297349/assets/144062701/431ad235-3cc0-4e87-8989-cd9159d290b0)
![photo_2024-07-09_21-45-32](https://github.com/ohenek01/rn-assignment7-11297349/assets/144062701/77177bf8-7f93-4300-96be-e9d90f9ba3c6)
![photo_2024-07-09_21-45-40](https://github.com/ohenek01/rn-assignment7-11297349/assets/144062701/3227e095-8e87-46f4-906a-2933d42300ba)
![photo_2024-07-09_21-45-48](https://github.com/ohenek01/rn-assignment7-11297349/assets/144062701/ae898d4c-af13-4c5a-b4d8-06ed5f647e26)


