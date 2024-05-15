import { Fragment, useState } from 'react';
import Pagination from './Pagination';
const Paginate = () => {
   const [value, setValue] = useState({
      page: 1,
      page_count: 20,
      per_page: 10,
   });
   return (
      <Fragment>
         <h2 style={{ textAlign: 'center' }}>Pagination</h2>
         <br />
         <Pagination onChange={setValue} value={value} />
      </Fragment>
   );
};
export default Paginate;
