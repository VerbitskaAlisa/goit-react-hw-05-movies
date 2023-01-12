import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 24px;
  text-decoration: none;
  padding: 5px;
  &:not(:last-child) {
    margin-right: 40px;
  }
  &.active {
    border-bottom: 2px solid rgb(234, 134, 144);;
  }

  :hover:not(.active) {
    border-bottom: 1px solid black;
  }
`;

export const Box = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
`;

export const Header = styled.header`
   background-color: white;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   padding-top: 20px;
   padding-left: 20px;
   padding-bottom: 20px;
`;