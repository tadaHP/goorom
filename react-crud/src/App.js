import './App.css';
import Header from "./components/header/header";
import Consumption from "./components/consumption/consumption";
import Body from "./components/body/body";
import React, {useEffect, useState} from "react";
import CreateMessage from "./components/header/createMessage";
import EditMessage from "./components/header/editMessage";
import DeleteMessage from "./components/header/deleteMessage";

function App() {
    const [data, setData] = useState(() => {
        const storedData = localStorage.getItem("data");
        return storedData ? JSON.parse(storedData) : [];
    });
    const [totalAmount, setTotalAmount] = useState(0)
    const [createMessage, setCreateMessage] = useState(false);
    const [editMessage, setEditMessage] = useState(false);
    const [removeMessage, setRemoveMessage] = useState(false);

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data));
        if (data.length !== 0) {
            setTotalAmount(data.reduce((accumulator, current) => accumulator + parseInt(current.cost), 0));
        } else {
            setTotalAmount(0);
        }
    }, [data]);

    useEffect(() => {
        if (createMessage) {
            setTimeout(() => {
                setCreateMessage(false);
            }, 3000);
        }
        if (editMessage) {
            setTimeout(() => {
                setEditMessage(false);
            }, 3000);
        }
        if (removeMessage) {
            setTimeout(() => {
                setRemoveMessage(false);
            }, 3000);
        }

    }, [createMessage, editMessage, removeMessage]);

    return (
        <div className="App bg-amber-200 h-screen">
            {createMessage && <CreateMessage/>}
            {editMessage && <EditMessage/>}
            {removeMessage && <DeleteMessage/>}

            <Header></Header>
            <Body
                data={data}
                setData={setData}
                setCreateMessage={setCreateMessage}
                setEditMessage={setEditMessage}
                setRemoveMessage={setRemoveMessage}
            />
            <Consumption totalAmount={totalAmount}/>
        </div>
    );
}

export default App;
