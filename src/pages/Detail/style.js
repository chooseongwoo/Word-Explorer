import styled from "styled-components";

export const Layout = styled.div`
  background-color: #abdff1;
  width: 100vw;
  height: 100vh;
  padding: 40px 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Word = styled.div`
  font-size: 80px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

export const WordSearch = styled.p`
  color: #3cb371;
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Line = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 10px 0px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Key = styled.p`
  color: blue;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Value = styled.p`
  font-size: 24px;
  color: red;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
