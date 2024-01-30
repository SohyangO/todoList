import { useState } from "react";
import "./App.css";
import { v4 } from "uuid";

function App() {
  const [todoList, setTodoList] = useState([]);

  const [todo, setTodo] = useState("");
  const [detail, setDetail] = useState("");
  const [deadLine, setDeadLine] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const inputTodo = (event) => {
    // 제목에 내용 입력 시 실시간으로 출력
    setTodo(event.target.value);
  };
  const inputDetail = (event) => {
    setDetail(event.target.value);
  };

  const handleAddButtonClick = (data) => {
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
      id: v4(),
      todo,
      detail,
      isDone: false,
      deadLine,
    };
    return setTodoList([...todoList, newTodo]);
  };

  const handleDeleteButtonClick = (id) => () => {
    deleteList(id);
  };
  const deleteList = (id) => {
    //삭제 버튼 클릭 시 해당 id 값이랑 일치하는 카드만 필터링해서 삭제
    const removedCard = todoList.filter((item) => item.id !== id);
    setTodoList(removedCard);
  };

  const changeState = (id) => {
    //todo의 isDone 값을 업데이트하여 버튼 문구 변경
    const updateState = todoList.map((newTodo) =>
      newTodo.id === id ? { ...newTodo, isDone: !newTodo.isDone } : newTodo
    );
    setTodoList(updateState); // setIsDone으로 상태관리 시, 모든 카드가 다 바뀜! setTodoList로 해야 해!
  };

  const sortList = (event) => {
    const nextSortOrder = event.target.value;
    setSortOrder(nextSortOrder);
    if (nextSortOrder === "asc") {
      setTodoList((todoList) =>
        [...todoList].sort(
          (a, b) => new Date(a.deadLine) - new Date(b.deadLine)
        )
      );
      return;
    }
    setTodoList((todoList) =>
      [...todoList].sort((a, b) => new Date(b.deadLine) - new Date(a.deadLine))
    );
  };

  return (
    <div>
      <header className="App">
        <h1>My Todo List</h1>
      </header>
      <section>
        <div className="addTodo">
          <div className="addInput">
            할 일 :&nbsp;
            <input value={todo} onChange={inputTodo} />
            세부내용 :&nbsp; <input value={detail} onChange={inputDetail} />
            마감날짜 :&nbsp;{" "}
            <input
              type="date"
              value={deadLine}
              onChange={(event) => setDeadLine(event.target.value)}
            />
          </div>
          <button className="add" onClick={handleAddButtonClick}>
            추가하기
          </button>
        </div>
        <select value={sortOrder} onChange={sortList}>
          <option value="asc" selected>
            오름차순
          </option>
          <option value="desc" selected>
            내림차순
          </option>
        </select>
        <div className="working">
          <p className="checkWork">Working...🔥</p>
          {todoList.map((item) => {
            if (!item.isDone) {
              return [
                <div key={item.id} className="todoCard">
                  <strong>
                    <p>{item.todo}</p>
                  </strong>
                  <p>{item.detail}</p>
                  <time>
                    {new Date(item.deadLine).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <div className="btns">
                    <button
                      className="delete"
                      onClick={() => deleteList(item.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="complete"
                      onClick={() => changeState(item.id)}
                    >
                      {item.isDone ? "취소" : "완료"}
                    </button>
                  </div>
                </div>,
              ];
            }
          })}
        </div>
        <div className="done">
          <p className="checkWork">Done..!🥳</p>
          {todoList.map((item) => {
            if (item.isDone) {
              return [
                <div key={item.id} className="todoCard">
                  <strong>
                    <p>{item.todo}</p>
                  </strong>
                  <p>{item.detail}</p>
                  <time>
                    {new Date(item.deadLine).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <div className="btns">
                    <button
                      className="delete"
                      onClick={handleDeleteButtonClick(item.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="complete"
                      onClick={() => changeState(item.id)}
                    >
                      {item.isDone ? "취소" : "완료"}
                    </button>
                  </div>
                </div>,
              ];
            }
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
