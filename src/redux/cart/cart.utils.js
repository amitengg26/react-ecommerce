export const addItemToCart = (cartItems,cartItemToAdd) =>{
    console.log('DATA IS',cartItems,cartItemToAdd)
    if(cartItems.length > 0){
        const existingCartItem = cartItems.find(
            cartItem => cartItem.id === cartItemToAdd.id
        )
    
        if(existingCartItem){
            return cartItems.map(cartItem =>
                cartItem.id === cartItemToAdd.id
                ? {...cartItem,quantity:cartItem.quantity + 1}
                : cartItem
            )
        }
    }
    

    return[...cartItems, {...cartItemToAdd,quantity:1}]
}