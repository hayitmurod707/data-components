import { bool, func, object } from 'prop-types';
import styled from 'styled-components';
import PageSize from './PageSize';
import Paginate from './Paginate';
const StyledComponent = styled.div`
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
         user-select: none;
         width: 38px;
         &:first-child {
            margin: 0 2px 0 0;
         }
         &:last-child {
            margin: 0 0 0 2px;
         }
         &:hover:not(.disabled):not(.active) {
            & a {
               background-color: rgba(87, 98, 247, 0.1);
               color: #3a79f3;
               & svg {
                  & path {
                     fill: #3a79f3;
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
      & li.disabled {
         & a {
            background-color: #f9f6f3;
            color: #696f85;
            cursor: not-allowed;
            & svg {
               & path {
                  fill: #696f85;
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
const Pagination = ({ isDisabled = false, onChange, value = {} }) => (
   <StyledComponent>
      <PageSize isDisabled={isDisabled} onChange={onChange} value={value} />
      <Paginate isDisabled={isDisabled} onChange={onChange} value={value} />
   </StyledComponent>
);
Pagination.propTypes = {
   isDisabled: bool,
   onChange: func,
   value: object,
};
export default Pagination;
