import React, { useState } from "react";

const Todo = () => {
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);
    const [input, setInput] = useState('');

    const addToList = () => {
        if (input) {
            setList([...list, { item: input, complete: false }]);
            setNum(num + 1);
        }
    }

    const changeTask = index => {
        list[index].complete ? setNum(num + 1) : setNum(num - 1);
        list[index].complete = !list[index].complete;
        setList(list);
    }

    const inputChange = e => setInput(e.target.value)

    const line = { textDecoration: 'line-through' };

    return (
        <div>
            <h1>Todo-List</h1>
            <h5>{num} tasks todo from {list.length} tasks</h5>
            <input size="35" placeholder="enter task" onChange={inputChange} />
            <button onClick={addToList}> ADD TO LIST </button>
            <ul>
                {
                    list.map(
                        (item, index) =>
                            <li style={(item.complete) ? line : {}} key={index} onClick={() => changeTask(index)}>{item.item}</li>
                    )
                }
            </ul>
        </div>
    );
}


export default Todo;