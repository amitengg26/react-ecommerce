import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const {name,price,imageUrl} = item;
  console.log('item',item)
  return(
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={()=>addItem(item)}>Add To Cart</CustomButton>
    </div>
  )  
};

const mapDispatchToProps = dispatch => ({
  addItem : item => dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);
/*
Create mapDispatch
it is a dispatch function
that says whenever there will be addItem 
it will get an item in as property 
then we will dispatch addItem action creator passing the item in

*/