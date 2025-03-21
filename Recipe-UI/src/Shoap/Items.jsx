import React from 'react';
import Reviews from './Reviews'
const Items = () => {
    const itemImages = [
        { img: 'https://img.freepik.com/free-photo/mix-pizza-with-tomato-slices-mushroom-olive_140725-185.jpg?t=st=1741764212~exp=1741767812~hmac=ece720ed03d0b5b36ec61718774d24f5d4e26ad68595cef1b444b88f65ea9d83&w=740', item: 'Pizza' },
        { img: 'https://img.freepik.com/free-photo/huge-burger-with-fried-meat-vegetables_140725-971.jpg?t=st=1741764281~exp=1741767881~hmac=3b879cd39ede12331048c8588b910b232e31551449854ffad1951a471164a5f5&w=740', item: 'Burger' },
        { img: 'https://img.freepik.com/premium-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-8576.jpg?w=1060', item: 'Pasta' },
        { img: 'https://img.freepik.com/free-photo/fresh-salad-with-vegetables-chicken-meat-wooden-table_2829-18245.jpg?w=1060', item: 'Salad' },
        { img: 'https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili_2829-19992.jpg?t=st=1741764973~exp=1741768573~hmac=b19c9fa4867a9a56dbd6431c9ffce36de7d7631c04df58b289bbfa583f07592f&w=1060', item: 'Fries' },
        { img: 'https://img.freepik.com/free-photo/sushi-set-wooden-board_2829-16049.jpg?w=1060', item: 'Sushi' },
        { img: 'https://img.freepik.com/free-photo/strawberry-ice-cream-served-wooden-table_2829-5862.jpg?w=740', item: 'Ice Cream' },
        { img: 'https://img.freepik.com/free-photo/hot-coffee-cup_1203-2253.jpg?w=740', item: 'Coffee' },
        { img: 'https://img.freepik.com/free-photo/blueberry-pancakes-wooden-table_2829-14669.jpg?w=1060', item: 'Pancakes' },
        { img: 'https://img.freepik.com/free-photo/chocolate-cake-decorated-with-berries-wooden-table_2829-11124.jpg?w=1060', item: 'Cake' }
    ];

    return (
        <div>
            <h3 style={{paddingLeft:"50px"}}>Available Items</h3>
            <div className='Items'>
            {itemImages.map((item, index) => (
                <div key={index}>
                    <img src={item.img} alt={item.item} />
                    <h6 className='text-center mt-2'>{item.item}</h6>
                </div>
            ))}
            </div>
 <Reviews/>           
        </div>
    );
};

export default Items;
