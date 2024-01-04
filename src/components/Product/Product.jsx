import '../Product/Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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
            <button className='btn-cart' onClick={() => handleAddToCart(props.product)}>
                Add to cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;