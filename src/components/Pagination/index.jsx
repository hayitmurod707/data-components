import { Fragment, useState } from 'react';
import RCPagination from './RCPagination';
import ReactJSPagination from './ReactJSPagination';
import ReactPaginate from './ReactPaginate';
const Pagination = () => {
   const [activePage, setActivePage] = useState(2);
   const totalCount = 20;
   return (
      <Fragment>
         <h2 style={{ textAlign: 'center' }}>rc-pagination</h2>
         <br />
         <RCPagination
            current={activePage}
            onChange={setActivePage}
            total={totalCount}
         />
         <br />
         <h2 style={{ textAlign: 'center' }}>react-js-pagination</h2>
         <br />
         <ReactJSPagination
            activePage={activePage}
            onChange={setActivePage}
            totalItemsCount={totalCount}
            pageRangeDisplayed={3}
         />
         <br />
         <h2 style={{ textAlign: 'center' }}>react-paginate</h2>
         <br />
         <ReactPaginate
            forcePage={activePage - 1}
            onPageChange={({ selected }) => setActivePage(selected + 1)}
            pageCount={totalCount}
         />
      </Fragment>
   );
};
export default Pagination;
