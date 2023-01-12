import styled from "styled-components";

export const GalleryBox = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0;
`;

export const StyledItem = styled.li`
    text-decoration: none;
    color: black;
    opasity: 1;
    transition: all 0.3s ease-out;

    :hover {
      opacity: 0.6;
      scale: 1.1;
    }
`;