import styled from "styled-components";

export const ReviewsList = styled.ul`
    padding: 0;
`;

export const ReviewsCard = styled.li`
   padding: 20px;
   border: 2px solid red;

   :not(:last-child) {
    margin-bottom: 20px;
   }
`;

export const Author = styled.p`
   font-size: 26px;
   font-weight: 700;
`;
    
