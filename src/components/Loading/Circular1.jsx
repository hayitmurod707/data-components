import styled, { keyframes } from 'styled-components';
const circular = keyframes`
   to {
      transform: rotate(360deg);
   }
`;
const Circular1 = styled.div`
   animation: ${circular} 0.6s linear infinite;
   border-radius: 50%;
   border: 4px solid rgba(82, 85, 241, 0.25);
   border-top-color: #5254f1;
   height: 44px;
   width: 44px;
`;
export default Circular1;
