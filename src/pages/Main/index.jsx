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
        const koreanRegex = /^[가-힣]+$/;
        if (!koreanRegex.test(word)) {
          alert("한글만 입력 가능합니다.");
          return;
        }

        const newWords = [...recentWords, word];
        setRecentWords(newWords);
        localStorage.setItem("words", JSON.stringify({ words: newWords }));
        console.log(localStorage.getItem("words"));
        history("detail/" + word);
        setWord("");
      } else {
        alert("단어를 입력해주세요.");
      }
    }
  };

  const onWordClick = (word) => {
    history("detail/" + word);
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
              placeholder="단어를 입력하세요."
              onChange={(e) => {
                setWord(e.target.value);
              }}
              onKeyDown={onPressedEnter}
              aria-label="단어 검색"
            />
            <S.Recent>
              <S.RecentTitle>최근 검색 단어</S.RecentTitle>
              <S.RecentWords>
                {recentWords.map((word, index) => (
                  <S.RecentWord
                    key={index}
                    onClick={() => onWordClick(word)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        onWordClick(word);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`최근 검색 단어: ${word}`}
                  >
                    {word}
                  </S.RecentWord>
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
