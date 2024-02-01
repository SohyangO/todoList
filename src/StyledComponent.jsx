import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;

export const MainTitle = styled.h1`
  display: inline-block;
  font-weight: 500;
`;
export const CheckWork = styled.p`
  margin-top: 20px;
  margin-left: 35px;
  font-size: 24px;
  font-weight: 600;
`;
export const Section = styled.section`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;

export const AddTodo = styled.div`
  display: flex;
  height: 120px;
  background-color: #f8e9ff;
  border-radius: 15px;
`;

export const AddInput = styled.div`
  display: flex;
  align-items: center;
  margin: auto 150px auto 30px;
`;
export const Add = styled.button`
  display: flex;
  align-items: center;
  float: right;
  margin: auto 20px auto auto;
  background-color: #ebbfff;
  border: transparent;
  border-radius: 13px;
  height: 60%;
  cursor: pointer;
`;
export const Input = styled.input`
  margin-left: 10px;
  margin-right: 15px;
  line-height: 2;
`;
export const Working = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin-top: 30px;
`;
export const TodoTitle = styled.p`
  font-size: 18px;
`;
export const Done = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const TodoCard = styled.div`
  width: 200px;
  margin: 20px 30px;
  border: 2px solid #e8bbfb;
  border-radius: 25px;
  padding: 5px 25px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
`;
export const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
`;
export const Button = styled.button`
  display: inline-block;
  background-color: transparent;
  padding: 10px;
  border: 2px solid darkviolet;
`;
export const Delete = styled.button`
  margin-right: 10px;
  background-color: #ff9f98;
  border: 2px solid #ff9f98;
  border-radius: 15px;
`;
export const Complete = styled.button`
  background-color: #98caff;
  border: 2px solid #98caff;
  border-radius: 15px;
`;
