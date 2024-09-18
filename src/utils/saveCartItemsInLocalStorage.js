const saveCartToLocalStorage = (cart) => {
    if (typeof window !== "undefined") {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
};

export { saveCartToLocalStorage };
