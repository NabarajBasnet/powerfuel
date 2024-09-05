const useProducts = () => {

    const getAllProducts = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.log('Error: ', error);
            throw new Error(error)
        }
    }

    const getSingleProduct = async (productId) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.log('Error: ', error);
            throw new Error(error)
        }
    }

    const deleteAllProducts = async () => {
        return 'useDeleteAllProducts'
    }

    const deleteSingleProduct = async (productId) => {
        return productId
    }

    return { getAllProducts, getSingleProduct, deleteAllProducts, deleteSingleProduct };
}

export default useProducts;