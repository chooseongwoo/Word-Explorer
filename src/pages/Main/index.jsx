import React from "react";
import * as S from "./style";

const Main = () => {
  return (
    <S.Layout>
      <S.Content>
        <S.Title>
          <S.Big>Word Explorer</S.Big>
          <S.Small>당신의 단어 탐험 파트너</S.Small>
        </S.Title>
        <div>
          <S.Main>
            <S.SearchBar type="text" placeholder="영단어를 입력하세요." />
            <S.Recent>
              <S.RecentTitle>최근 검색 단어</S.RecentTitle>
              <S.RecentWords>
                <S.RecentWord>fdsf</S.RecentWord>
                <S.RecentWord>fdsf</S.RecentWord>
                <S.RecentWord>fdsf</S.RecentWord>
                <S.RecentWord>fdsf</S.RecentWord>
              </S.RecentWords>
            </S.Recent>
          </S.Main>
        </div>
      </S.Content>
    </S.Layout>
  );
};

export default Main;
