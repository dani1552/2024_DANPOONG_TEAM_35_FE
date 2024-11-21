import React from "react";
import styled from "styled-components";
import calendarIcon from "../assets/icons/calendar.svg";
import searchIcon from "../assets/icons/search.svg";
import dropdownIcon from "../assets/icons/dropdown.svg";
import ModalBottom from "./Modal/ModalBottom";

export default function NewsModal() {
  return (
    <>
      <Container>
        <ModalContainer>
          <TopContainer>
            <TitleContainer>
              <Category>
                카테고리
                <DropdownIcon src={dropdownIcon} />
              </Category>
              <SearchInputWrapper>
                <SearchInput placeholder="검색어를 입력해주세요" />
                <SearchIcon src={searchIcon} />
              </SearchInputWrapper>
            </TitleContainer>
            <DateBox>
              <CalendarIcon src={calendarIcon} />
            </DateBox>
          </TopContainer>
          <MainContainer></MainContainer>
          <ModalBottom />
        </ModalContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  gap: 12px;
`;
const ModalContainer = styled.div`
  width: 600px;
  height: 580px;
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;
`;

const TopContainer = styled.div`
  display: flex;
  gap: 12px;
  position: relative;
`;

const TitleContainer = styled.div`
  width: 420px;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #717171;
  border-radius: 8px;
  overflow: hidden;
`;

const Category = styled.div`
  display: flex; /* Flexbox로 내부 정렬 */
  align-items: center;
  padding: 10px;
  font-size: 14px;
  background-color: white;
  border-right: 1px solid #717171;
  outline: none;
`;
const DropdownIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
  top: 24%;
  pointer-events: none;
`;
const SearchInputWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`;
const SearchInput = styled.input`
  border: none;
  padding: 10px;
  font-size: 14px;
  outline: none;
`;
const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 8px;
  top: 22%;
  pointer-events: none;
`;

const DateBox = styled.div`
  padding-left: 8px;
  flex: 1;
  height: 40px;
  border: 1px solid #717171;
  border-radius: 8px;
  line-height: 40px;
  font-size: 14px;
  color: #828282;
  z-index: 2;
  overflow: hidden;
  align-items: center;
  position: relative;
`;

const CalendarIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 8px;
  top: 26%;
`;

const MainContainer = styled.div`
  height: 400px;
  background-color: #d8d8d8;
  border-radius: 8px;
`;
