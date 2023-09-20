import "./App.css"; // Import your CSS file
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState();

  function userInput_Func(e) {
    setUserInput(e.target.value);
  }

  function addItem_Func() {
    const tempList = [...list];
    tempList.push(userInput);
    setList(tempList);
    setUserInput("");
  }

  function deleteAll_Func() {
    const tempList = [...list];
    tempList.splice(0, list.length);
    setList(tempList);
  }

  function deleteItem(index) {
    const tempList = [...list];
    tempList.splice(index, 1);
    setList(tempList);
  }

  function editItem(index) {
    const valuee = list[index];
    setUserInput(valuee);
    setEditMode(true);
    setCurrentIndex(index);
  }

  function updateItem_Func() {
    const tempList = [...list];
    tempList[currentIndex] = userInput;
    setList(tempList);
    setEditMode(false);
    setUserInput("");
  }

  return (
    <div className="App">
      <body>
        <div className="main_container">
          <div className="task-card">
            <header className="task-list-header">
              <h1 className="text-center">TO-DO LIST</h1>
            </header>
            <div>
              <input
                id="new-task-input"
                onChange={userInput_Func}
                placeholder="ENTER THE ITEMS"
                value={userInput}
              />

              {!editMode ? (
                <button
                  onClick={addItem_Func}
                  className="btn-primary"
                  id="new-task-submit"
                >
                  ADD ITEM
                </button>
              ) : (
                <button
                  onClick={updateItem_Func}
                  className="btn-primary"
                  id="new-task-update"
                >
                  SAVE
                </button>
              )}

              <button
                onClick={deleteAll_Func}
                className="btn-danger"
                id="new-task-REMOVE_ALL"
              >
                DELETE ALL
              </button>
            </div>

            <section className="task-list" id="task-list">
              <h2 className="H2">Tasks</h2>
              <div className="text-center list " id="tasks_ol">
                <ol id="tasks_ol">
                  {list.map(function (item, index) {
                    return (
                      <li
                        className="task_li"
                        key={index}
                        style={
                          currentIndex === index && editMode
                            ? { backgroundColor: "lightgreen" }
                            : {}
                        }
                      >
                        {item}

                        <button
                          id="delete_btn"
                          onClick={() => deleteItem(index)}
                        >
                          Delete
                        </button>
                        <button id="edit_btn" onClick={() => editItem(index)}>
                          Edit
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </section>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
