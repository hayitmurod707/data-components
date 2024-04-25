import { Fragment } from 'react';
import styled from 'styled-components';
import Bubbles from './components/Loading/Bubbles';
import Circular1 from './components/Loading/Circular1';
import Circular2 from './components/Loading/Circular2';
import Circular3 from './components/Loading/Circular3';
import Dotted1 from './components/Loading/Dotted1';
import Dotted2 from './components/Loading/Dotted2';
import Dotted3 from './components/Loading/Dotted3';
import Dotted4 from './components/Loading/Dotted4';
const StyledLoading = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   height: 600px;
   justify-content: space-evenly;
`;
const App = () => {
   return (
      <Fragment className='App'>
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
