const useCart = () => {

    const saveCartToLocalStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart))
    };

    const loadCartItemsFromLocalStorage = () => {
        const storedCartItems = localStorage.getItem('cart');
        const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
        return cartItems;
    };

    return { saveCartToLocalStorage, loadCartItemsFromLocalStorage };
}

export default useCart;

