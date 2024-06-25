import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useParams } from "react-router-dom";
import { wordlResult } from "../../Data/wordResult";

const Detail = () => {
  const { id } = useParams();
  const [wordInfo, setWordInfo] = useState(null);

  useEffect(() => {
    const foundWord = wordlResult.words.find((wordObj) => wordObj.단어 === id);
    setWordInfo(foundWord);
  }, [id]);

  if (!wordInfo) {
    return <h1>Loading...</h1>;
  }

  return (
    <S.Layout>
      <S.Header>
        <S.Word>{wordInfo.단어}</S.Word>
        <a
          href={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${wordInfo.단어}`}
          style={{ textDecorationColor: "#3cb371" }}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${wordInfo.단어}에 대해 더 자세히 알아보기`}
        >
          <S.WordSearch>{"<"}- 더 자세히 알아보기</S.WordSearch>
        </a>
      </S.Header>
      <ul>
        <S.Line>
          <S.Key>품사:</S.Key>
          <S.Value>{wordInfo.품사}</S.Value>
        </S.Line>
        <S.Line>
          <S.Key>동의어:</S.Key>
          <S.Value>{wordInfo.동의어}</S.Value>
        </S.Line>
        <S.Line>
          <S.Key>관련어:</S.Key>
          <S.Value>{wordInfo.관련어}</S.Value>
        </S.Line>
        <S.Line>
          <S.Key>파생어:</S.Key>
          <S.Value>{wordInfo.파생어}</S.Value>
        </S.Line>
        <S.Line>
          <S.Key>예문:</S.Key>
          <S.Value>{wordInfo.예문}</S.Value>
        </S.Line>
      </ul>
    </S.Layout>
  );
};

export default Detail;
