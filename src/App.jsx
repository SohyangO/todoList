import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  const [todo, setTodo] = useState("");
  const [detail, setDetail] = useState("");
  const [isDone, setIsDone] = useState(false);

  const inputTodo = (event) => {
    setTodo(event.target.value);
  };
  const inputDetail = (event) => {
    setDetail(event.target.value);
  };

  const addTodo = () => {
    setTodo("");
    setDetail("");
    const newTodo = {
      id: todoList.length + 1,
      todo,
      detail,
      isDone: false,
    };
    return setTodoList([...todoList, newTodo]);
  };

  const onDelete = (id) => {
    const removedCard = todoList.filter((item) => item.id !== id);
    setTodoList(removedCard);
  };

  return (
    <div>
      <header className="App">
        <h1>My Todo List</h1>
        <p>React</p>
      </header>
      <div className="addTodo">
        <div className="addInput">
          제목 <input value={todo} onChange={inputTodo} />
          내용 <input value={detail} onChange={inputDetail} />
        </div>
        <button className="add" onClick={addTodo}>
          추가하기
        </button>
      </div>
      <div className="working">Working</div>
      {todoList.map((item) => {
        return [
          <div key={item.id} className="ing">
            <p>{item.todo}</p>
            <p>{item.detail}</p>
            <button className="delete" onClick={() => onDelete(item.id)}>
              삭제하기
            </button>
            <button className="complete">완료</button>
          </div>,
        ];
      })}
      <div className="done">Done!</div>
    </div>
  );
}

export default App;
