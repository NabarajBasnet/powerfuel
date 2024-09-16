const useCategories = () => {

    const getCategoryList = async () => {
        const response = await fetch(`https://dummyjson.com/products/category-list`);
        const data = await response.json();
        return data;
    }

    return { getCategoryList }
}

export default useCategories;
