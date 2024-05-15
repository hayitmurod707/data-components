import styled from 'styled-components';
export const StyledComponent = styled.div`
   align-items: center;
   display: flex;
   justify-content: space-between;
   width: 100%;
   & .pagination {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      & li {
         border-radius: 12px;
         cursor: pointer;
         font-size: 15px;
         font-weight: 600;
         height: 38px;
         margin: 0 2px;
         overflow: hidden;
         width: 38px;
         &:first-child {
            margin: 0 2px 0 0;
         }
         &:last-child {
            margin: 0 0 0 2px;
         }
         &:hover {
            & a {
               background-color: #3a79f3;
               color: #ffffff;
               & svg {
                  & path {
                     fill: #ffffff;
                  }
               }
            }
         }
         & a {
            align-items: center;
            border-radius: 12px;
            color: #3c3c3c;
            display: flex;
            height: 38px;
            justify-content: center;
            text-decoration: none;
            width: 38px;
            & svg {
               & path {
                  fill: #3c3c3c;
               }
            }
         }
      }
      & li.active {
         & a {
            background-color: #3a79f3;
            color: #ffffff;
         }
      }
   }
`;
