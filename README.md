# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# React Blog Application

## Description
This is a full-featured **React Blog Application** where users can create, edit, delete, and view blog posts. The project emphasizes a modular structure using React components, custom hooks, and routing for seamless navigation between different pages. The app is responsive and designed to provide an optimal experience across desktop and mobile devices.

## Features
- **Create Blog Posts**: Allows users to create new blog posts using a form.
- **Read Blog Posts**: Displays all blog posts in a feed with full details on individual pages.
- **Edit Blog Posts**: Users can edit previously created blog posts.
- **Delete Blog Posts**: Removes posts that are no longer needed.
- **Search Bar**: Enables users to search for specific blog posts by title or content. The search functionality filters the posts using the following logic:
  ```javascript
  const filterPost = posts.filter((post) => 
      post.title.toLowerCase().includes(searchPost.toLowerCase()) || 
      post.body.toLowerCase().includes(searchPost.toLowerCase())
  );
  setSearchPostResult(filterPost.reverse());
  ```
  This logic checks if the search input matches either the title or the body of each post, ignoring case differences, and sets the filtered results in reverse order.

- **Responsive Design**: The app adapts to different screen sizes, making it usable on mobile, tablet, and desktop.
- **Custom Hooks**: Utilizes React hooks like `useAxiosApi` and `useWindowSize` for reusable logic.

## Technologies Used
- **React**: For building the user interface and managing component state.
- **React Router**: For enabling smooth navigation between pages such as the home, new post, and edit post views.
- **Axios**: For handling API requests and managing data fetching operations.
- **CSS**: For styling components to maintain a consistent and clean UI.

## Key Components and Files
- **`App.js`**: The root component that manages the main routing logic.
- **`Nav.js`**: Navigation bar that provides links to different sections of the application.
- **`Header.js`**: Displays the main header of the app.
- **`Footer.js`**: Provides the footer section for the app layout.
- **Pages**:
  - **`Home.js`**: Displays a list of all blog posts.
  - **`PostPage.js`**: Shows the detailed view of a single blog post.
  - **`NewPost.js`**: A form for creating a new blog post.
  - **`EditPost.js`**: A form for editing an existing blog post.
  - **`About.js`**: Displays information about the application or website.
  - **`Missing.js`**: Handles 404 error pages for non-existent routes.
- **Custom Hooks**:
  - **`useAxiosApi.js`**: A hook for fetching data using Axios.
  - **`useWindowSize.js`**: A custom hook to handle responsive design by tracking window dimensions.

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/ketan-2905/todo_list.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todo_list
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the JSON Server (assuming the server is set up to run on port 5000):
   ```bash
   npx json-server --watch db.json --port 5000
   ```
5. Start the React development server:
   ```bash
   npm start
   ```


## Usage
Once the app is running, you can navigate through different sections of the blog:
- **Home**: View the list of blog posts.
- **New Post**: Create a new blog entry.
- **Edit Post**: Modify the content of an existing post.
- **Post Details**: View the full content of individual blog posts.

## Future Enhancements
- **User Authentication**: Adding login functionality to manage user-specific blog posts.
- **Comments Section**: Allow users to comment on blog posts.
