import { bool, func, number } from 'prop-types';
import { memo } from 'react';
import styled from 'styled-components';
import PageSize from './PageSize';
import Paginate from './Pagination';
const StyledPaginate = styled.div`
   align-items: center;
   display: flex;
   justify-content: space-between;
   width: 100%;
`;
const Pagination = memo(
   props =>
      props?.totalItemsCount > 0 && (
         <StyledPaginate>
            <PageSize {...props} />
            <Paginate {...props} />
         </StyledPaginate>
      )
);
Pagination.propTypes = {
   isDisabled: bool,
   onChange: func,
   page: number,
   page_size: number,
   totalItemsCount: number,
};
export default Pagination;
