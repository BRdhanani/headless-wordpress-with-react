# Headless Wordpress With React

## Description
Demo to fetch content from WordPress site using ReactJs.

## Installation
First thing you need to do is install npm using command

```npm install```

Next, create your first react application by running the following command in your command
line.

```npx create-react-app my-app-name```

Then go into the folder and you will see that default react starter files will be added there.

```cd my-app-name```

next, run below command and it will start your development server. Now, open your favorite
browser and open http://localhost:3000/ URL. You can see that your project is running.

```npm start```

Let’s look at some default files provided by react.

## index.js file
Here the main file is index.js in which components are defined.

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
```

In the above code we have defined the App component in which we defined all the components
we need to use in our demo. Here ReactDOM is used to use ReactDOM. We have added
custom CSS in index.css file

```ReactDOM.render(<App />, document.getElementById('root'));```

The above command will map the data with dom element specified with ID root.

## App.js File
In our demo this file is used to define the layout of the page. First we need to import Routes,
Layout, Menu, BrowserRouter as Router, Link from their respective packages.

For example, we have defined our page path in the following format

```<Link to="/posts" />```

We need to add an export tag so we can use the component we created of App
export default App;

## Routes.js file
In this file we import our created components. We create Routes class by extending React.
Component. For rendering the data we need to specify the path to our component shown in the
below code.

```<Route path="/posts" exact component={Posts} />```

## Posts.js component
First we need to import Card, Col, Row, Avatar, Link, Axios from their respective packages.
Then we will extend the Posts class from the component class.

In componentDidMount we use asynchronous call to get post data from the demo site. In await
axios.get we pass the URL of the page to get data and add ?_embed parameter to get featured
image from data.

this.setState will save the fetched data in posts array.

As you can see in render() function we will loop through the fetched data to display it.

Remove tags function will remove the HTML tags from the fetched data while displaying.

Index.html file in the public folder is used to display the content of fetched pages.
