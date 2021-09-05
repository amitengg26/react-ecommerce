import React from 'react';
import {Route} from 'react-router-dom';

// import Restaurant  from './components/basics/Restaurant'
// import UseState from './components/hooks/UseState'
import './App.css'
// import UseEffect from './components/hooks/UseEffect'
// import UseReducer from './components/hooks/UseReducer'
// import Todo from './components/todos/Todo'
// import CovidData from './components/CovidData'
import Homepage from './pages/components/homepage.component'
import ShopPage from './pages/components/shop/shop.component';

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
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  )
}

/*const App = ()=>{
  // return "<h1>Hello world</h1>"
  return React.createElement("h1",{},"Amit")
}*/

export default App
