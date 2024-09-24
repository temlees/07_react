import React from 'react';

function App() {
  const { useState } = React;

  const [list, setList] = useState([
    { id: 1, name: "안녕", checked: false },
    { id: 2, name: "안녕", checked: false },
  ]);

  const [message, setMessage] = useState("");
  const [colormessage, setColorMessage] = useState("");
  const [nextId, setNextId] = useState(3);
  const [color, setColor] = useState("black");
  const [backgroundColor, setBackgroundColor] = useState("white");

  const textChange = (e) => {
    setMessage(e.target.value);
  };

  const textColor = (e) => {
    setColorMessage(e.target.value);
  };

  const clickPlus = () => {
    const plusName = list.concat({
      id: nextId,
      name: message,
      checked: false, 
    });
    setNextId(nextId + 1);
    setMessage("");
    setList(plusName);
  };

  const onClickRemove = (id) => {
    const change = list.filter((name) => name.id !== id);
    setList(change);
  };

  const clickColor = (colormessage) => {
    setColor(colormessage);
  };

  const darkMode = () => {
    setBackgroundColor(backgroundColor === "white" ? "black" : "white");

  };

  const Check = (id) => {
    const updatedList = list.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setList(updatedList);
  };

  const nameList = list.map((name) => {
    return (
      <div key={name.id}>
        <input
          type="checkbox"
          checked={name.checked}
          onChange={() => Check(name.id)}
        />
        <label
          style={{
            color,
            textDecoration: name.checked ? "line-through" : "none"
          }}
        >
          {name.name}
        </label>
        <button onClick={() => onClickRemove(name.id)}>삭제</button> {/*매개변수가 있으면 ()=> 사용해야한다*/ }
        <br />
      </div>
    );
  });

  return (
    <div style={{ backgroundColor }}>
      <h3>todolist</h3>
      <button onClick={darkMode}>다크모드</button>
      {nameList}
      <br />
      <input value={message} onChange={textChange} />
      <button onClick={clickPlus}>추가</button>
      <input value={colormessage} onChange={textColor} />
      <button onClick={() => clickColor(colormessage)}>색변경</button>
    </div>
  );
}



export default App;