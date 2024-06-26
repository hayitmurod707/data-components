import styled, { keyframes } from 'styled-components';
const animation1 = keyframes`
   0% {
		-webkit-clip-path: polygon(
			0% 0%,
			0% 0%,
			0% 0%,
			50% 50%,
			0% 0%,
			0% 0%,
			0% 0%
		);
		clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
	}
	50% {
		-webkit-clip-path: polygon(
			0% 0%,
			0% 100%,
			0% 100%,
			50% 50%,
			100% 0%,
			100% 0%,
			0% 0%
		);
		clip-path: polygon(
			0% 0%,
			0% 100%,
			0% 100%,
			50% 50%,
			100% 0%,
			100% 0%,
			0% 0%
		);
	}
	100% {
		-webkit-clip-path: polygon(
			0% 0%,
			0% 100%,
			100% 100%,
			50% 50%,
			100% 100%,
			100% 0%,
			0% 0%
		);
		clip-path: polygon(
			0% 0%,
			0% 100%,
			100% 100%,
			50% 50%,
			100% 100%,
			100% 0%,
			0% 0%
		);
	}
`;
const animation2 = keyframes`
	to {
		transform: rotate(1turn);
	}
`;
const StyledElement = styled.div`
   border-radius: 50%;
   border: 4px solid transparent;
   height: 44px;
   position: relative;
   width: 44px;
   & div {
      animation: ${animation1} 1s linear alternate infinite,
         ${animation2} 0.6s linear infinite;
      border-radius: 50%;
      border: 4px solid #5254f1;
      box-sizing: border-box;
      height: 44px;
      left: -4px;
      position: relative;
      top: -4px;
      width: 44px;
   }
`;
const Circular2 = () => (
   <StyledElement>
      <div></div>
   </StyledElement>
);
export default Circular2;
