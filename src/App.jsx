import { Fragment, useState } from 'react';
import styled from 'styled-components';
import Bubbles from './components/Loading/Bubbles';
import Circular1 from './components/Loading/Circular1';
import Circular2 from './components/Loading/Circular2';
import Circular3 from './components/Loading/Circular3';
import Dotted1 from './components/Loading/Dotted1';
import Dotted2 from './components/Loading/Dotted2';
import Dotted3 from './components/Loading/Dotted3';
import Dotted4 from './components/Loading/Dotted4';
import Pagination from './components/Pagination';
const StyledHeader = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   & h1 {
      font-size: 32px;
      font-weight: 600;
      margin: 32px 0 0 0;
      text-align: center;
   }
   & p {
      font-size: 18px;
      font-weight: 500;
      margin: 24px 0 0 0;
      text-align: center;
      color: #768695;
      & a {
         align-items: center;
         background-color: #5254f1;
         border-radius: 10px;
         color: white;
         display: flex;
         font-size: 16px;
         justify-content: center;
         padding: 12px 24px;
         text-decoration: none;
      }
   }
`;
const StyledLoading = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 600px;
   justify-content: space-evenly;
`;
const App = () => {
   const [value, setValue] = useState({
      page: 1,
      count: 200,
      per_page: 10,
   });
   return (
      <Fragment>
         <StyledHeader>
            <h1>Data components</h1>
            <p>Data components for react application</p>
            <p>
               <a
                  href='https://github.com/hayitmurod707/data-components'
                  rel='noreferrer'
                  target='_blank'
               >
                  Github repository
               </a>
            </p>
         </StyledHeader>
         <div style={{ padding: '20px 300px' }}>
            <h2 style={{ textAlign: 'center' }}>Pagination</h2>
            <br />
            <Pagination value={value} onChange={setValue} />
         </div>
         <StyledLoading>
            <Bubbles />
            <Circular1 />
            <Circular2 />
            <Circular3 />
            <Dotted1 />
            <Dotted2 />
            <Dotted3 />
            <Dotted4 />
         </StyledLoading>
      </Fragment>
   );
};
export default App;
