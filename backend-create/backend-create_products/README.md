# Backend Read: Products

In this challenge (and the upcoming ones), you'll create a fish shop.
You'll read data from your remote MongoDB using `mongoose` and display it in the frontend.

## Task

### Introduction

Run `npm run dev` and open [localhost:3000](http://localhost:3000) on your browser.

Have a look around:

- there is an overview page with all products and a details page for each of them;
- the data is taken from `lib/products.js`.

Your task is to refactor the app so that it fetches the data from a remote MongoDB.

### Read Products from Database

Use MongoDB Atlas to create a database:

- the database should be called `fish-shop`,
- there should be one collection called `products`,
- download and extract the [resources](README.md#resources) and
- use the `products.json` file to import the data into your `products` collection.
- Note: you can use MongoDB Atlas to import the data by clicking on the `Insert Document` button, changing to the view `{}` and copy-pasting the data from the `products.json` file.

Create a schema for the `Product` model in the `db/models` folder.

The schema should have the following fields:

- `name` (String)
- `description` (String)
- `price` (Number)
- `currency` (String)

At the root of the project, create a `.env.local` file which uses the `MONGODB_URI` environment variable and your MongoDB connection string.

- Copy and paste the following into the `.env.local` file: `MONGODB_URI=mongodb+srv://<user>:<password>@<cluster-url>/fish-shop?retryWrites=true&w=majority`.
- Replace `<user>` with your database username, `<password>` with your password and `<cluster-url>` with the URL of your cluster. You can find all of this information on the MongoDB Atlas website.

Switch to `pages/api/products/index.js`:

- Delete the import of `lib/products`.
- Import `dbConnect` from the `db/connect.js` file.
- Import the `Product` model.
- Make the `handler` function `async` and `await` the connection to the database.
- If the `request.method` is `GET`,

  - use the `Product` model to find all products and
  - return them as a response.

Switch to `components/ProductList` and adapt the frontend:

- replace all instances of `product.id` with `product._id`.

Check that it works:

- Reload `localhost:3000`; you should still see all fishes.

Switch to `pages/api/products/[id].js` and adapt it as explained above:

- To find a single product by its id, you can use the `Product` model and the `.findById()` method: `Product.findById(id)`.
- Delete `lib/products.js` because it is not used anymore.

Open the browser and check the details pages: they should now work as well!

### Bonus: Populate Reviews

Some of the products already have reviews which are stored in a second collection. Your task is to read from that collection and display the reviews on the right details page.

Open MongoDB Atlas and adapt your `fish-shop` database:

- Add a new collection called `reviews`; insert the data from `bonus-reviews.json`.
- Drop the `products` collection; recreate it with the same name, but now insert data from the `bonus-products.json` file.
  - Note: The data in `bonus-products.json` contain a `reviews` array with `ids` as a reference to the corresponding review in the `review` collection.

Create a schema for the `Review` model in the `db/models` folder.

The schema should have the following fields:

- `title` (String)
- `text` (String)
- `rating` (Number)

Update the `Product` schema to include a reference to the `Review` model:

- Import the `Review` model with `import "./Review";`
- Below the `currency` key, add a new line for the reviews; you want to define that it is an array of Object-Ids and has a reference to the `Review` schema like so: `reviews: { type: [Schema.Types.ObjectId], ref: "Review" },`

Switch to `pages/api/products/[id].js` and use the `.populate` method to integrate the reviews for each product:

- `const product = await Product.findById(id).populate("reviews");`

Finally, update the frontend to display the reviews:

- Switch to `components/Product/index.js`.
- Inside of the return statement, check whether the fetched `data` contain any reviews and if so, display them.
- Feel free to decide which part of the review data you want to display.

### Resources

You can find the fish shop data in [this folder](./resources/).

- The files are already in the correct structure for the app.
  - `products.json` contains the data for the first task, and
  - `bonus-products.json` and `bonus-reviews.json` contain the data for the bonus task.
- Import them into the correct collection of your remote MongoDB when you are asked to.

## Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter

### Add a `POST` route

Switch to `./pages/api/products/index.js` and write the code for the `request.method` `POST` :

- Use a `try...catch` block.
- Try to:
  - Save the product data submitted by the form - accessible in `request.body` - to a variable called `productData`.
  - use `Product.create` with the `productData` to create a new document in our collection.
  - _Wait_ until the new product was saved.
  - Respond with a status `201` and the message `{ status: "Product created." }`.
- If an error occurs:
  - Log the error to the console.
  - Respond with a status `400` and the message `{ error: error.message }`.

Submitting the form will not yet work because the form does not know that you've created a `POST` route it can use.

### Send a `POST` request

Switch to `./components/ProductForm/index.js`:

- There already is a `handleSubmit` function which creates a `productData` object with all relevant data.

Your task is to fetch your new `POST` route and send the data to your database. After that use `mutate` from `useSWR` to refetch the data from the database.

- call `useSWR` in your `ProductForm` component with the API endpoint and destructure the `mutate` method.
- inside the handleSubmit function:
  > 💡 Hint: have a look at the handout if you get stuck here.
- send a "POST" request with `fetch` using the following options as the second argument

```js
{
  method: "POST",
headers: {
  "Content-Type": "application/json",
  },
body: JSON.stringify(???),
}
```

- use the productData from the form input as the body of the request
- await the response of the fetch, if the fetch was successful, call the `mutate` method to trigger a data revalidation of the useSWR hooks

Open [`localhost:3000/`](http://localhost:3000/) in your browser, submit a new fish and be happy about your shop being expanded!

### Resources

You can find the fish shop data in [this folder](./resources/).

- The files are already in the correct structure for the app.
  - `products.json` contains the data for the all fish,
  - `reviews.json` contain the data for all reviews.
- Import them into the correct collection of your MongoDB when you are asked to.
