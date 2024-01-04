import '../Product/Product.css'

const Product = (props) => {

    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <h5>Price: ${price}</h5>
                <p>Manufacturer: {seller}<br></br>Ratings: {ratings} star</p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(props.product)}>Add to cart</button>
        </div>
    );
};

export default Product;