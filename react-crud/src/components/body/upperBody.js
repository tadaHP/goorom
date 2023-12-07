import React from 'react';
import {MdSend} from "react-icons/md";

const UpperBody = ({item, setItem, cost, setCost, handleAddElement}) => {

    return (
        <div>
            <div className="flex m-10">
                <div className="w-1/2 mr-5">
                    <h3 className="text-amber-400">지출항목</h3>
                    <input
                        className="border-b-2 border-amber-400 pr-3r w-full"
                        placeholder="예) 렌트비"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                    />
                </div>
                <div className="w-1/2">
                    <h3 className="text-amber-400">비용</h3>
                    <input
                        className="border-b-2 border-amber-400 w-full"
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                    />
                </div>
            </div>
            <div className="bg-emerald-700 w-20 flex flex-row m-10 p-3 items-center justify-between text-white
            rounded-md shadow-gray-600 shadow duration-500 hover:shadow-lg hover:shadow-gray-600"
                 onClick={handleAddElement}
            >
                <p>생성</p>
                <MdSend color="white"/>
            </div>
        </div>
    );
};

export default UpperBody