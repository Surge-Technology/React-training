import React from 'react';
import OrderHistoryTable from './Orderhistory';
import Footer from '../components/footer';
const MainApp = () => {
  const orders = [
    {
      id: 1,
      orderNumber: '1234',
      date: '2023-05-10',
      itemsPurchased: 'Shirt, Pants, Shoes',
      totalPrice: '$100',
      status: 'Delivered',
    },
    {
      id: 2,
      orderNumber: '5678',
      date: '2023-05-05',
      itemsPurchased: 'Sweater, Jeans, Boots',
      totalPrice: '$75',
      status: 'Processing',
    },
    {
        id: 3,
        orderNumber: '1098',
        date: '2023-04-06',
        itemsPurchased: 'Watch,Ring,ball',
        totalPrice: '$175',
        status: 'Delivered',
      },
      {
        id: 4,
        orderNumber: '7777',
        date: '2023-01-16',
        itemsPurchased: 'Dresser,hair drier ',
        totalPrice: '$55',
        status: 'Delivered',
      },
      {
        id: 5,
        orderNumber: '2505',
        date: '2022-06-06',
        itemsPurchased: 'Airpods',
        totalPrice: '$200',
        status: 'cancelled',
      },
      {
        id: 6,
        orderNumber: '4040',
        date: '2022-04-08',
        itemsPurchased: 'Piggy bank,Polisher,Keyboard',
        totalPrice: '$225',
        status: 'Delivered',
      },
  ];

  return (
    <div>
      <h1>Order History</h1>
      <br/>
      <OrderHistoryTable orders={orders} />
      <div>
                <footer className='footer'>
                    <span className='text'>
                        GST Applicable | T&C Apply
                    </span>

                </footer>
            </div>
    </div>
  );
};

export default MainApp;
