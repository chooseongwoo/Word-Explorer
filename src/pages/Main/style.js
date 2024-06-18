import styled from "styled-components";

export const Layout = styled.div`
  background-color: #abdff1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 40vh;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Big = styled.p`
  font-size: 64px;
`;
export const Small = styled.p`
  font-size: 25px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 30vw;
  height: 5vh;
  font-size: 24px;
  background-color: white;
  border: 3px solid gray;
  border-radius: 10px;
  padding-left: 10px;
  outline: none;
  &:focus {
    border: 3px solid green;
  }
`;

export const Recent = styled.div`
  width: 20vw;
  height: max-content;
  min-height: 60px;
  background-color: #f9f9f9;
  padding: 10px 20px;
  border-radius: 15px;
`;

export const RecentTitle = styled.p`
  font-size: 16px;
  color: gray;
`;

export const RecentWords = styled.div``;

export const RecentWord = styled.p``;
