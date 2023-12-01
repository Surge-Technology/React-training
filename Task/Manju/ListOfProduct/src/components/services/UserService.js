// const USERS_REST_API_URL='http:localhost:8080/getProductDeatils';

// class UserService{
//     getUsers(){
//         axios.get(USERS_REST_API_URL);
//     }
// }
// export default new UserService();

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../product.css';
import { FaSearch, FaShoppingCart ,FaTrash} from 'react-icons/fa'

const Table = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http:localhost:8080/getProductDeatils')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {/* Render your data here */}

      <div className="ecommerce-page">
            <header >
                    <nav className='navbar'>
                        <div className="logo">Shoppie</div>
                        <div>Home</div>
                        <div >Products</div>
                        <div>About us</div>
                        <div>Contacts</div>
                        <div>
                            <FaSearch/>&nbsp;&nbsp;&nbsp;
                     
                            <FaShoppingCart/>
                        
                        </div>
                       

                    </nav>

            </header><br />

            <table className="product-table">
                <thead>

                    <tr>
                        <th>Product_Id</th>
                        <th>Product_Name</th>
                        
                        <th>Product_Price</th>
                        <th>Product_Qnty</th>
                    </tr>
                </thead>
                <tbody>
                
     
                    {/* {products.map((product, index) => ( */}
                    {data.map(item =>
                        <tr key={data}>
                            <td>{data.Product_Id}</td>
                            <td>{data.Product_Name}</td>
                            <td>${data.Product_Price}</td>
                            <td>{data.Product_Qnty}</td>
                            <td className='trash-can' onClick={alert}><FaTrash/></td>
                        </tr>
                    )
                    }
            
                
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
      
    </div>
  );
};

export default Table;
