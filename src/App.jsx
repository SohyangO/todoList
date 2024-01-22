import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  const [todo, setTodo] = useState("");
  const [detail, setDetail] = useState("");
  const [isDone, setIsDone] = useState(false);

  const inputTodo = (event) => {
    // 제목에 내용 입력 시 실시간으로 출력
    setTodo(event.target.value);
  };
  const inputDetail = (event) => {
    setDetail(event.target.value);
  };

  const addTodo = () => {
    // 추가하기 버튼 클릭 시 추가하기
    if (todo.length === 0) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (detail.length === 0) {
      alert("내용을 입력해주세요.");
      return;
    }
    setTodo("");
    setDetail("");
    const newTodo = {
      id: todoList.length + 1,
      todo,
      detail,
      isDone: false,
    };
    console.log(newTodo);
    console.log(todoList);
    return setTodoList([...todoList, newTodo]);
  };

  const deleteList = (id) => {
    const removedCard = todoList.filter((item) => item.id !== id);
    setTodoList(removedCard);
  };

  const changeState = (id) => {
    //todo의 isDone 값을 업데이트하여 버튼 문구 변경
    const updateState = todoList.map((newTodo) =>
      newTodo.id === id ? { ...newTodo, isDone: !newTodo.isDone } : newTodo
    );
    setTodoList(updateState);
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
      <div className="working">
        <p>Working</p>
      </div>
      {todoList.map((item) => {
        return [
          <div key={item.id} className="ing">
            <p>{item.todo}</p>
            <p>{item.detail}</p>
            <p>{item.id}</p>
            <button className="delete" onClick={() => deleteList(item.id)}>
              삭제하기
            </button>
            <button className="complete" onClick={() => changeState(item.id)}>
              {item.isDone ? "취소" : "완료"}
            </button>
          </div>,
        ];
      })}
      <div className="done">
        <p>Done!</p>
      </div>
    </div>
  );
}

export default App;
