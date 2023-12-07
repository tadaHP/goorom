import React from 'react';

const Consumption = (totalAmount) => {
    console.log(totalAmount)
    return (
        <div className="flex justify-end mr-10 font-bold text-4xl">
            <h2>총 지출: {totalAmount.totalAmount}원</h2>
        </div>
    );
};

export default Consumption;