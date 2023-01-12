import styled from "styled-components";
import { Link } from "react-router-dom";

export const Poster = styled.img`
  display: block;
  width: 250px;
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    opasity: 1;
    transition: all 0.3s ease-out;

    :hover {
      opacity: 0.6;
      scale: 1.1;
    }
`;

export const Name = styled.p`
    width: 250px;
`;