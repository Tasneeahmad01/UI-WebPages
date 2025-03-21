import { NavLink } from 'react-router-dom';
import Images from '../FastFood/Images';
// import './Images.css';

const ImagesItem = () => {
    const purchase = (item) => {
        alert(`You have purchased the item for ₹${item.price} with recipe: ${item.recipe}`);
    };

    return (
        <div className="image-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {
                Images.map((item, index) => (
                    <div key={index} className='image-card' style={{ textAlign: 'center', border: '1px solid #ccc', padding: '6px', borderRadius: '10px' }}>
                        <img src={item.img} alt={`Food item ${index + 1}`} className='image-food' style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }}/>
                        <h2 className='image-price' style={{ fontSize: '25px' }}>Price: ₹{item.price}</h2>
                        <p className='image-recipe'>{item.recipe}</p>
                        <NavLink to={`/form`}>
                            <button className='buy-button' onClick={() => purchase(item)} style={{ backgroundColor: 'orange', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Buy Now</button>
                        </NavLink>   
                    </div>
                ))
            }    
        </div>
    );
}

export default ImagesItem;
