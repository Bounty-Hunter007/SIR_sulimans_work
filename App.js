import './App.css';
import { useState } from 'react';

function App() {
                                      //states
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [editIndex, setEditIndex] = useState(-1); // Initialize with -1 to indicate no editing

  function addItem() {
    const tempList = [...list];
    tempList.push(userInput);
    setList(tempList);
    setUserInput('');
  }

  function UserInput_func(e) {
    setUserInput(e.target.value);
  }

  function deleteItem(index) {
    const tempList = [...list];
    tempList.splice(index, 1);
    setList(tempList);
  }

  function delete_All_func(index) {
    const tempList = [...list];
    tempList.splice( 0, tempList.length);
    setList(tempList);
  }
  function editItem(index) {
    setEditIndex(index); // Set the index of the item being edited
    setUserInput(list[index]); // Populate the input field with the current item text
  }

  function saveEdit(index) {
    const tempList = [...list];
    tempList[index] = userInput;
    setList(tempList);
    setEditIndex(-1); // Reset the edit index to indicate no editing
    setUserInput('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TO-DO LIST</h1>

        <body>
          <p>
            <p>
              <input onChange={UserInput_func} placeholder='Enter items' value={userInput} />
              {editIndex === -1 //CONDITIONAL randering
              ? ( <button onClick={addItem}>ADD ITEM</button>) //ternary operator
              : ( <button onClick={() => saveEdit(editIndex)}>SAVE</button>)//ternary operator
              } 
              {<button onClick={delete_All_func}>DELETE ALL</button> }
            </p>
            <ol>
              {list.map(function (item, index) {
                return (
                  <li key={index}>
                    {index === editIndex//CONDITIONAL randering
                     ? ( <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />) //ternary operator
                     : (item)//ternary operator
                    }
                    <button onClick={() => deleteItem(index)}>DELETE</button>

                    {index === editIndex //CONDITIONAL randering
                    ? ( <button onClick={() => saveEdit(index)}>SAVE</button>) //ternary opeator
                    : ( <button onClick={() => editItem(index)}>EDIT</button>) //ternary opeator
                    }
                  </li>
                );
              })}
            </ol>
          </p>
        </body>
      </header>
    </div>
  );
}

export default App;
