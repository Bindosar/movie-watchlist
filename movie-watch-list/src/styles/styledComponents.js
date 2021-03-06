import styled from "styled-components";

export const MoviesListStyled = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: space-around; */
`;

export const MovieStyled = styled.div`
  display: block;
  margin: 10px;
  width: 250px;
  border-style: solid;
  border-width: 1px;
  padding: 10px;
  text-align: center;
`;

export const MovieImageStyled = styled.img`
  object-fit: cover;
  position: relative;
  width: 100%;
`;

export const MovieActionsButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const SearchBarStyled = styled.input`
  width: 80%;
`;

export const NotWatchedList = styled.h1`
  margin-left: 50px;
`;
