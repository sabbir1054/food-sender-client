import React from 'react';
import PageBanner from '../PageBanner/PageBanner';
import MyOrder from './MyOrder';

const MyOrders = () => {
    return (
        <div>
            <PageBanner text='Your Order Condition'></PageBanner>
            <MyOrder></MyOrder>
        </div>
    );
};

export default MyOrders;