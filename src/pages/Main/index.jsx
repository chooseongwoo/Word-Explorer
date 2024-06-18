import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const history = useNavigate();
  const [word, setWord] = useState("");
  const [recentWords, setRecentWords] = useState([]);

  useEffect(() => {
    const savedWords = JSON.parse(localStorage.getItem("words"));
    if (savedWords && savedWords.words) {
      setRecentWords(savedWords.words);
    }
  }, []);

  const onPressedEnter = (e) => {
    if (e.key === "Enter") {
      if (word) {
        const newWords = [...recentWords, word];
        setRecentWords(newWords);
        localStorage.setItem("words", JSON.stringify({ words: newWords }));
        console.log(localStorage.getItem("words"));
        history("detail/" + word);
        setWord("");
      } else {
        alert("영단어를 입력해주세요.");
      }
    }
  };
  return (
    <S.Layout>
      <S.Content>
        <S.Title>
          <S.Big>Word Explorer</S.Big>
          <S.Small>당신의 단어 탐험 파트너</S.Small>
        </S.Title>
        <div>
          <S.Main>
            <S.SearchBar
              value={word}
              type="text"
              placeholder="영단어를 입력하세요."
              onChange={(e) => {
                setWord(e.target.value);
              }}
              onKeyDown={onPressedEnter}
            />
            <S.Recent>
              <S.RecentTitle>최근 검색 단어</S.RecentTitle>
              <S.RecentWords>
                {recentWords.map((word) => (
                  <S.RecentWord>{word}</S.RecentWord>
                ))}
              </S.RecentWords>
            </S.Recent>
          </S.Main>
        </div>
      </S.Content>
    </S.Layout>
  );
};

export default Main;
