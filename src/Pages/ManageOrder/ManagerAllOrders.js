import React from 'react';
import PageBanner from '../PageBanner/PageBanner';
import ManageOrder from './ManageOrder';

const ManagerAllOrders = () => {
    return (
        <div>
            <PageBanner text='Manage Your All Order Here (Admin)'></PageBanner>
            <ManageOrder></ManageOrder>
        </div>
    );
};

export default ManagerAllOrders;