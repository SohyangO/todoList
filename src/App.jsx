import { useState } from "react";
import * as T from "./StyledComponent.jsx";
import { v4 } from "uuid";
import "./GlobalStyle.jsx";

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

  const handleAddButtonClick = () => {
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
      <T.Header className="App">
        <T.MainTitle>My Todo List</T.MainTitle>
      </T.Header>
      <T.Section>
        <T.AddTodo>
          <T.AddInput>
            할 일 :&nbsp;
            <T.Input value={todo} onChange={inputTodo} />
            세부내용 :&nbsp; <T.Input value={detail} onChange={inputDetail} />
            마감날짜 :&nbsp;{" "}
            <T.Input
              type="date"
              value={deadLine}
              onChange={(event) => setDeadLine(event.target.value)}
            />
          </T.AddInput>
          <T.Add onClick={handleAddButtonClick}>추가하기</T.Add>
        </T.AddTodo>
        <select value={sortOrder} onChange={sortList}>
          <option value="asc" selected>
            오름차순
          </option>
          <option value="desc" selected>
            내림차순
          </option>
        </select>
        <T.Working>
          <T.CheckWork>Working...🔥</T.CheckWork>
          {todoList.map((item) => {
            if (!item.isDone) {
              return [
                <T.TodoCard isDone={item.isDone} className="todoCard">
                  <strong>
                    <T.TodoTitle>{item.todo}</T.TodoTitle>
                  </strong>
                  <p>{item.detail}</p>
                  <time>
                    {new Date(item.deadLine).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <T.Btns>
                    <T.Delete onClick={() => deleteList(item.id)}>
                      삭제하기
                    </T.Delete>
                    <T.Complete onClick={() => changeState(item.id)}>
                      {item.isDone ? "취소" : "완료"}
                    </T.Complete>
                  </T.Btns>
                </T.TodoCard>,
              ];
            }
          })}
        </T.Working>
        <T.Done>
          <T.CheckWork>Done..!🥳</T.CheckWork>
          {todoList.map((item) => {
            if (item.isDone) {
              return [
                <T.TodoCard isDone={item.isDone} key={item.id}>
                  <strong>
                    <T.TodoTitle>{item.todo}</T.TodoTitle>
                  </strong>
                  <p>{item.detail}</p>
                  <time>
                    {new Date(item.deadLine).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <T.Btns>
                    <T.Delete onClick={handleDeleteButtonClick(item.id)}>
                      삭제하기
                    </T.Delete>
                    <T.Complete onClick={() => changeState(item.id)}>
                      {item.isDone ? "취소" : "완료"}
                    </T.Complete>
                  </T.Btns>
                </T.TodoCard>,
              ];
            }
          })}
        </T.Done>
      </T.Section>
    </div>
  );
}

export default App;
