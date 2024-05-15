import { bool, func, object } from 'prop-types';
import PageSize from './PageSize';
import Paginate from './Paginate';
import { StyledComponent } from './StyledComponents';
const Pagination = ({
   isDisabled = false,
   onChange,
   value = { page: 1, page_count: 1, per_page: 1 },
}) => {
   return (
      <StyledComponent>
         <PageSize isDisabled={isDisabled} onChange={onChange} value={value} />
         <Paginate isDisabled={isDisabled} onChange={onChange} value={value} />
      </StyledComponent>
   );
};
Pagination.propTypes = {
   isDisabled: bool,
   onChange: func,
   value: object,
};
export default Pagination;
