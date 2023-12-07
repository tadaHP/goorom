import React from 'react';
import {MdCreate} from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";

const LowerBody = ({data, setData, setEditModalStatus, setEditIndex, setRemoveMessage}) => {


    const handleRemoveData = (removeElement) => {
        setData(data.filter(({index}) => index !== removeElement));
        setRemoveMessage(true);
    };

    const handleEditData = (editElement) => {
        setEditIndex(editElement);
        setEditModalStatus(true);
    };



    return (
        <div>
            {data.map(({consumptionItem, cost, index}) => (
                <div key={index} className="flex flex-row border-2 mx-10 mb-4 py-3 duration-500 hover:scale-110">
                    <p className="w-1/2 ml-4">{consumptionItem}</p>
                    <div className="w-1/2 flex flex-row justify-between ml-4">
                        <p>{cost}</p>
                        <div className="flex flex-row justify-evenly">
                            <MdCreate color="green" size="1.5rem" className="mr-2"
                                      onClick={() => handleEditData(index)}/>
                            <BsFillTrashFill color="red" size="1.5rem" className="mr-4"
                                             onClick={() => handleRemoveData(index)}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LowerBody;