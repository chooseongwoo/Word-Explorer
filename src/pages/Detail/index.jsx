import React from "react";
import * as S from "./style";
import { Link, useNavigate } from "react-router-dom";

const Detail = () => {
  return (
    <S.Layout>
      <S.Header>
        <S.Word>Hello</S.Word>
        <a
          href="https://www.google.com"
          style={{ textDecorationColor: "#3cb371" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.WordSearch>{"<"}- 더 자세히 알아보기</S.WordSearch>
        </a>
      </S.Header>
      <ul>
        <S.Line>
          <S.Key>정의:</S.Key>
          <S.Value>an expression of greeting</S.Value>
        </S.Line>
        <S.Line>
          <S.Key>정의:</S.Key>
          <S.Value>an expression of greeting</S.Value>
        </S.Line>
        <S.Line>
          <S.Key>정의:</S.Key>
          <S.Value>an expression of greeting</S.Value>
        </S.Line>
      </ul>
    </S.Layout>
  );
};

export default Detail;
