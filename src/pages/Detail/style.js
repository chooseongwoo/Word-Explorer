import styled from "styled-components";

export const Layout = styled.div`
  background-color: #abdff1;
  width: 100vw;
  height: 100vh;
  padding: 40px 40px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Word = styled.div`
  font-size: 80px;
  font-weight: 600;
`;

export const WordSearch = styled.p`
  color: #3cb371;
  font-size: 24px;
`;

export const Line = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 10px 0px 10px 0px;
`;

export const Key = styled.p`
  color: blue;
  font-size: 25px;
`;

export const Value = styled.p`
  font-size: 25px;
  color: red;
`;
