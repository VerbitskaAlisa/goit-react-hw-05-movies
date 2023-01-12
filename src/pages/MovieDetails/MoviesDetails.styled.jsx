import styled from "styled-components";
import { Link } from "react-router-dom";

export const Box = styled.main`
   padding: 40px;
`;

export const FilmCard = styled.div`
  display: flex;
  padding-bottom: 40px;
  border-bottom: 3px solid red;
  margin-top: 40px;
`; 

export const Img = styled.img`
  margin-right: 30px;
`;

export const MainTitle = styled.h2`
   font-size: 34px;
`;

export const Text = styled.p`
   font-size: 24px;
`;

export const Title = styled.h3`
   font-size: 30px;
`;

export const AIBox = styled.div`
   display: flex;
   align-items: center;

`;

export const List = styled.ul`
  margin: 0;
`;

export const ListItem = styled.li`
   display: inline-block;
   border: 2px solid red;
   border-style: dashed;
   padding: 10px;
   :not(:last-child) {
      margin-right: 20px;
   }
   :hover {
     scale: 1.2;
   }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 24px;
`;

export const BackBtn = styled(Link)`
   border: 2px solid red;  
   padding: 10px;
   text-decoration: none;
   color: black;
`;