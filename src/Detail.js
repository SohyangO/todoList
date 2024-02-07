import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams(); // useParams 훅을 사용하여 URL 파라미터 가져오기
  const { id } = params; // URL에서 가져온 파라미터 중 id 가져오기
  const todoItem = todoList.find((item) => item.id === id); // id를 기반으로 투두 아이템 찾기

  return (
    <div>
      <h2>Detail Page</h2>
      {todoItem ? (
        <div>
          <p>ID: {todoItem.id}</p>
          <p>Todo: {todoItem.todo}</p>
          <p>Detail: {todoItem.detail}</p>
          <p>Deadline: {todoItem.deadLine}</p>
        </div>
      ) : (
        <p>해당하는 투두 아이템을 찾을 수 없습니다.</p>
      )}
    </div>
  );
}
