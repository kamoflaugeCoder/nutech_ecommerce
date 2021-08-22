import './App.scss';
import NavBar from './Components/navbar';

import HomePage from './Pages/homePage';
import { Switch, Route } from "react-router-dom";
import AboutPage from './Pages/aboutPage';
import { useState } from 'react';

import CategoryPage from './Pages/categoryPage';
import ProductPage from './Pages/productPage';
// import './App.css';


function App() {
  const [navToggle, setNavToggle] = useState(false);

	const navClick = () =>{
		setNavToggle(!navToggle)
	  }

  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
				<div className="content">
					<Switch>
						<Route path="/" exact>
							<HomePage />
						</Route>
            <Route path="/about" exact>
							<AboutPage />
						</Route>
            <Route path="/category" exact>
							<CategoryPage />
						</Route>
						<Route path="/product" exact>
							<ProductPage />
						</Route>
            </Switch>
      </div>
    </div>
  </div>
  );
}

export default App;
