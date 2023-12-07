import React, {useEffect} from 'react';
import {BsCheck, BsXLg} from "react-icons/bs";

const EditModal = ({editIndex, data, setEditModalStatus,
                       handleUpdateSpecificElements
                       , setNewConsumptionItem, newConsumptionItem,
                       newCost, setNewCost}) => {

    let targetData = data.find(({index})=> index===editIndex);

    useEffect(() => {
        if (targetData) {
            setNewConsumptionItem(targetData.consumptionItem);
            setNewCost(targetData.cost);
        }
    }, [targetData, setNewConsumptionItem, setNewCost]);

    return (
        <div className="flex flex-col content-center m-10 justify-center items-center">
            <div className="w-1/2 m-2">
                <p>지출항목</p>
                <input className="border-b-amber-300 border-b-2" value={newConsumptionItem}
                       onChange={(e) => setNewConsumptionItem(e.target.value)}
                />
            </div>
            <div className="w-1/2 m-2">
                <p>비용</p>
                <input className="border-b-amber-300 border-b-2" value={newCost}
                       onChange={(e) => setNewCost(Number(e.target.value))}
                />
            </div>
            <div className="flex flex-row">
                <div className="bg-emerald-700 w-20 flex flex-row m-10 p-3 items-center justify-between text-white
            rounded-md shadow-gray-600 shadow duration-500 hover:shadow-lg hover:shadow-gray-600"
                     onClick={() => {
                         handleUpdateSpecificElements()
                     }}
                >
                    <p>변경</p>
                    <BsCheck/>
                </div>

                <div className="bg-emerald-700 w-20 flex flex-row m-10 p-3 items-center justify-between text-white
            rounded-md shadow-gray-600 shadow duration-500 hover:shadow-lg hover:shadow-gray-600"
                     onClick={() => setEditModalStatus(false)}
                >
                    <p>취소</p>
                    <BsXLg/>
                </div>

            </div>
        </div>
    );
};

export default EditModal;