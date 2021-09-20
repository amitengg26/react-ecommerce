import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {ToggleCartHidden} from '../../redux/cart/cart.actions'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';

const CartIcon = ({ToggleCartHidden,itemCount}) => (
    <div className="cart-icon" onClick={ToggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
})
// const mapStateToProps = ({cart}) => ({
//     cartItems: cart.cartItems.length
// })

/*
const numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
 */
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})


// const mapDispatchToProps = dispatch => ({
//     oggleCartHidden: () => dispatch(toggleCartHidden())
//   });
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);