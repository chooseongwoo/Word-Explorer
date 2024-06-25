import styled from "styled-components";

export const Layout = styled.div`
  background-color: #abdff1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 40vh;

  @media (max-width: 768px) {
    gap: 30px;
    height: auto;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Big = styled.p`
  font-size: 64px;

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Small = styled.p`
  font-size: 25px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
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

  @media (max-width: 768px) {
    width: 50vw;
    font-size: 20px;
    height: 4vh;
  }

  @media (max-width: 480px) {
    width: 70vw;
    font-size: 18px;
    height: 3.5vh;
  }
`;

export const Recent = styled.div`
  width: 20vw;
  height: max-content;
  min-height: 60px;
  background-color: #f9f9f9;
  padding: 10px 20px;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 40vw;
  }

  @media (max-width: 480px) {
    width: 60vw;
  }
`;

export const RecentTitle = styled.p`
  font-size: 16px;
  color: gray;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const RecentWords = styled.div``;

export const RecentWord = styled.p`
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
