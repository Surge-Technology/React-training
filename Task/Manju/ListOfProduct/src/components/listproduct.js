// import React, {useState as UseState, useEffect } from 'react';
// import './product.css'

// const  application = () => {
//     const [users, setUsers] = useState([]);
//     const [Product_Id, setProduct_Id] = useState([]);
//     const [Product_Name, setProduct_Name] = useState([]);
//     const [Product_Price, setProduct_Price] = useState([]);
//     const [Product_Qnty, setProduct_Qnty] = useState([]);
//     const [list,setList]=useState([]);

//     useEffect(() => {

//         fetch('http:localhost:8080/getProductDeatils')
//             .then(res => res.json())
//             .then((result) => {
//                 setList(result);
//                 alert('result');
//             })
//          return (
//             <div>


//                 <table className="product-table">
//                     <thead>

//                         <tr>
//                             <th>Product_Id</th>
//                             <th>Product_Name</th>

//                             <th>Product_Price</th>
//                             <th>Product_Qnty</th>
//                         </tr>
//                     </thead>
//                     <tbody>


//                         {/* {products.map((product, index) => ( */}
//                         {users.map(user => (
//                             <tr key={user.id}>
//                                 <td>{user.Product_Id}</td>
//                                 <td>{user.Product_Name}</td>
//                                 <td>${user.Product_Price}</td>
//                                 <td>{user.Product_Qnty}</td>
//                                 {/* <td className='trash-can' onClick={alert}><FaTrash /></td> */}
//                             </tr>
//                         )
//                         )
//                         }
//                     </tbody>
//                 </table><br />
//                 <div>
//                     <footer className='footer'>
//                         <span className='text'>
//                             GST Applicable | T&C Apply
//                         </span>

//                     </footer>
//                 </div>
//             </div>

//         );
//     },)}
// export default application;