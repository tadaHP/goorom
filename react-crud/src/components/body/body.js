import React, {useState} from 'react';
import UpperBody from "./upperBody";
import LowerBody from "./lowerBody";
import { BsFillTrashFill } from "react-icons/bs";
import Modal from 'react-modal';
import EditModal from "./editModal";


const Body = ({data, setData, setCreateMessage, setEditMessage, setRemoveMessage}) => {
    const [item, setItem] = useState("")
    const [cost, setCost] = useState(0)

    //handle edit modal
    const [editModalStatus, setEditModalStatus] = useState(false);
    const [editIndex, setEditIndex] = useState()
    const [newConsumptionItem, setNewConsumptionItem] = useState();
    const [newCost, setNewCost] = useState();


    const handleUpdateSpecificElements = () => {
        setData(data.map(({consumptionItem, cost, index}) => {
            if (index === editIndex) {
                return {
                    "consumptionItem": newConsumptionItem,
                    "cost": newCost,
                    "index": index
                };
            } else {
                return {consumptionItem, cost, index};
            }
        }));
        setEditModalStatus(false);
        setEditMessage(true);
    };

    const handleAddElement = () => {
        const newData = {
            "consumptionItem": item,
            "cost": cost,
            "index": Date.now().toString()
        };
        if (newData.consumptionItem && newData.cost) {
            setData([newData, ...data]);
            setCreateMessage(true);
        }
    };

    const handleRemoveAllData = () => {
        setData([]);
        setRemoveMessage(true);
    };

    return (
        <div className="bg-white flex flex-col m-10 mt-0">
            <UpperBody
                item={item}
                setItem={setItem}
                cost={cost}
                setCost={setCost}
                handleAddElement={handleAddElement}
            />
            <LowerBody
                data={data}
                setData={setData}
                setEditModalStatus={setEditModalStatus}
                setEditIndex={setEditIndex}
                setRemoveMessage={setRemoveMessage}
            />
            <Modal
                isOpen={editModalStatus}
                style={{
                    content: {
                        top: '20%',
                        bottom: '50%'
                    }
                }}
            >
                <EditModal editIndex={editIndex} data={data} setEditModalStatus={setEditModalStatus}
                           handleUpdateSpecificElements={handleUpdateSpecificElements}
                           setNewConsumptionItem={setNewConsumptionItem}
                           newConsumptionItem={newConsumptionItem}
                           newCost={newCost}
                           setNewCost={setNewCost}
                />
            </Modal>
            <div
                className="bg-emerald-700 w-32 flex flex-row m-10 p-3 items-center justify-between text-white
            rounded-md shadow-gray-600 shadow duration-500 hover:shadow-lg hover:shadow-gray-600"
                onClick={handleRemoveAllData}
            >
                <p>목록 지우기</p>
                <BsFillTrashFill color="white"/>
            </div>

        </div>
    );
};

export default Body;