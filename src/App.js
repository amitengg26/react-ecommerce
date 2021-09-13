import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      }

      setCurrentUser( userAuth );
    });
  }

  componentWillUnmount() {
  
    this.unsubscribeFromAuth();
    
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin'  render = {()=> 
            this.props.currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignInAndSignUpPage />
            )}  />
        </Switch>
      </div>
    );
  }
}
// Now what we'll end up returning inside of our map dispatch will be set current user but it goes to a
// function that gets the user object and then calls dispatch and what dispatches is.
// It is a way for redux to know that whatever you're passing me whatever object you're passing me is going
// to be an action object that I'm going to pass to every producer so our user action is a function that
// gets the user but returns an action object.
// So we are going to call our action but we're gonna pass that user in so that what we're doing is we're
// invoking set current user with the user that will then be used as the payload But this return is the
// object.
// So we're just dispatching the object and now we're gonna pass map dispatch the props as the second argument
// of connect and now we'll have this value offset current user so we don't need this constructor anymore 
const mapStateToProps = ({user}) =>({
  currentUser : user.currentUser
})

const mapDisptachToProps = dispatch=>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});



export default connect(mapStateToProps,mapDisptachToProps)(App);
