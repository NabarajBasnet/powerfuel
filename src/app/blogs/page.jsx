'use client'

const Blogs = () => {

    const numbers = [1, 2, 3];
    const moreNumbers = [4, 5, 6];
    const combinedNumber = [...numbers, ...moreNumbers];
    console.log('Combined Numbers: ', combinedNumber);

    return (
        <div>page</div>
    )
}

export default Blogs
