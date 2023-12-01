import React from 'react';
import './product.css';
//import { FaSearch, FaShoppingCart ,FaTrash} from 'react-icons/fa'
const products = [
    { name: 'Watch', details: 'Classic Model23', quantity: 2, price: 3000 },
    { name: 'Bangle', details: 'Blue Star Rectangle bangle', quantity: 3, price: 200 },
    { name: 'Mouse', details: 'Offbeat 2S', quantity: 1, price: 780 },
];

export const Table = () => {

    return (

        <div className="ecommerce-page">
            <header >

               
                    <nav className='navbar'>
                        <div className="logo">Shoppie</div>
                        <div>Home</div>
                        <div >Products</div>
                        <div>About us</div>
                        <div>Contacts</div>
                        <div>
                            {/* <FaSearch/>&nbsp;&nbsp;&nbsp; */}
                     
                            {/* <FaShoppingCart/> */}
                        {/* <div>
                        <FaSearch /></div>
                        <div>
                        <FaShoppingCart />
                        </div> */}
                        </div>
                       

                    </nav>

            </header><br />

            <table className="product-table">
                <thead>

                    <tr>
                        <th>Product Name</th>
                        <th>Product Details</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.details}</td>
                            <td>{product.quantity}</td>
                            <td>${product.price}</td>
                            {/* <td><button>Delete</button></td> */}
                            {/* <td className='trash-can' onClick={alert}><FaTrash/></td> */}
                        </tr>
                    ))}
                </tbody>
            </table><br />
            <div>
                <footer className='footer'>
                    <span className='text'>
                        GST Applicable | T&C Apply
                    </span>

                </footer>
            </div>
        </div>
    );
}

export default Table;
