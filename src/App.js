import React from 'react';
import {Switch,Route} from 'react-router-dom';

// import Restaurant  from './components/basics/Restaurant'
// import UseState from './components/hooks/UseState'
import './App.css'
// import UseEffect from './components/hooks/UseEffect'
// import UseReducer from './components/hooks/UseReducer'
// import Todo from './components/todos/Todo'
// import CovidData from './components/CovidData'
import Homepage from './pages/components/homepage.component'
import ShopPage from './pages/components/shop/shop.component';
import Header from './components/header/header.component';
const App = () => {
  return (
    <div>
      {/* <Restaurant/> */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseReducer/> */}
      {/* <Todo/> */}
      {/* <CovidData/> */} 
      {/* <Homepage />      */}
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  )
}

/*const App = ()=>{
  // return "<h1>Hello world</h1>"
  return React.createElement("h1",{},"Amit")
}*/

export default App
