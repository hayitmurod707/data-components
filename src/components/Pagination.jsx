import { bool, func, number } from 'prop-types';
import { useTranslation } from 'react-i18next';
import ReactJSPagination from 'react-js-pagination';
import ReactSelect, { components } from 'react-select';
import styled, { keyframes } from 'styled-components';
const animation = keyframes`
   0% {
      opacity: 0.1;
      transform: scale(0.6);
   }
   100% {
      opacity: 1;
      transform: scale(1);
   }
`;
const StyledMenu = styled.div`
   & .react-select-menu {
      animation: ${animation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      background-color: #ffffff;
      border-radius: 12px;
      border: none;
      box-shadow: 0 1px 20px 0 rgba(13, 46, 105, 0.07),
         0 1px 20px 0 rgba(13, 46, 105, 0.07);
      margin: 0;
      overflow: hidden;
      padding: 0;
      transform-origin: bottom;
   }
`;
const Menu = props => (
   <StyledMenu>
      <components.Menu {...props} className='react-select-menu'>
         {props?.children}
      </components.Menu>
   </StyledMenu>
);
const StyledElement = styled.div`
   align-items: center;
   display: flex;
   justify-content: space-between;
   width: 100%;
   & .per-page {
      align-items: center;
      display: flex;
      & h4 {
         color: #3c3c3c;
         font-size: 15px;
         font-weight: 600;
         margin: 0 0 0 16px;
      }
   }
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
const selectOptions = {
   components: { IndicatorSeparator: () => null, Menu },
   isClearable: false,
   isMulti: false,
   isSearchable: false,
   maxMenuHeight: 230,
   menuPlacement: 'top',
   menuPortalTarget: document.body,
   options: [
      {
         label: '10',
         value: 10,
      },
      {
         label: '15',
         value: 15,
      },
      {
         label: '20',
         value: 20,
      },
      {
         label: '30',
         value: 30,
      },
   ],
   styles: {
      control: styles => ({
         ...styles,
         backgroundColor: '#ffffff',
         border: 'none',
         borderRadius: 10,
         boxShadow: 'none',
         color: 'rgb(37, 42, 59)',
         cursor: 'pointer',
         height: 40,
         minHeight: 40,
         minWidth: 70,
         outline: 'none',
         padding: 0,
         width: '100%',
         ':hover': {
            border: 'none',
         },
      }),
      valueContainer: styles => ({
         ...styles,
         display: 'flex',
         height: 42,
         padding: '10px 4px 10px 14px',
      }),
      singleValue: (styles, { data }) => ({
         ...styles,
         color: data?.isDisabled ? '#696f85' : '#252a3b',
         fontSize: 15,
         fontWeight: 600,
         margin: 0,
      }),
      placeholder: styles => ({
         ...styles,
         fontSize: 15,
         fontWeight: 600,
         margin: 0,
      }),
      indicatorsContainer: styles => ({ ...styles, padding: '0 10px 0 8px' }),
      dropdownIndicator: (styles, { selectProps }) => ({
         ...styles,
         alignItems: 'center',
         backgroundColor: '#3a79f3',
         borderRadius: 13,
         color: '#ffffff',
         display: 'flex',
         height: 23,
         justifyContent: 'center',
         margin: 0,
         padding: 0,
         transform: `rotate(${selectProps?.menuIsOpen ? '180deg' : 0})`,
         transformOrigin: 'center',
         transition: '0.4s transform',
         width: 23,
         svg: {
            width: 16,
         },
         ':hover': {
            color: '#ffffff',
         },
      }),
      menuPortal: styles => ({ ...styles, zIndex: 999 }),
      menuList: styles => ({
         ...styles,
         padding: 4,
         '::-webkit-scrollbar': {
            padding: '0 5px 0 0',
            width: 6,
         },
         '::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
         },
         '::-webkit-scrollbar-thumb': {
            backgroundColor: '#3a79f3',
            borderRadius: 3,
         },
      }),
      option: (styles, { isSelected, isDisabled, isFocused }) => ({
         ...styles,
         backgroundColor: isDisabled
            ? '#f7f8fc'
            : isSelected
            ? '#3a79f3'
            : isFocused
            ? 'rgba(82, 85, 241, 0.1)'
            : '#ffffff',
         borderRadius: 8,
         color: isDisabled
            ? '#696f85'
            : isSelected
            ? '#ffffff'
            : isFocused
            ? '#252a3b'
            : '#252a3b',
         cursor: isDisabled ? 'not-allowed' : 'pointer',
         fontSize: 15,
         fontWeight: 600,
         height: 36,
         overflow: 'hidden',
         padding: '8px 12px',
         textOverflow: 'ellipsis',
         transition: 200,
         transitionTimingFunction: 'cubic-bezier(0, 0, 1, 1)',
         whiteSpace: 'nowrap',
         width: '100%',
         ':hover': {
            backgroundColor: isDisabled
               ? '#f7f8fc'
               : isSelected
               ? '#3a79f3'
               : 'rgba(82, 85, 241, 0.1)',
         },
      }),
      noOptionsMessage: styles => ({
         ...styles,
         color: 'rgb(37, 42, 59)',
         cursor: 'not-allowed',
         fontSize: 16,
         fontWeight: 500,
         height: 36,
         padding: '9px 12px',
         textAlign: 'left',
         width: '100%',
      }),
   },
};
const defaultOptions = {
   getPageUrl: () => null,
   hideDisabled: true,
   itemsCountPerPage: 1,
   nextPageText: (
      <svg width='8' height='12' viewBox='0 0 8 12'>
         <path d='M6.83018 5.29019L2.59019 1.05019C2.49722 0.956464 2.38662 0.88207 2.26476 0.831301C2.1429 0.780533 2.0122 0.754395 1.88019 0.754395C1.74817 0.754395 1.61747 0.780533 1.49561 0.831301C1.37375 0.88207 1.26315 0.956464 1.17019 1.05019C0.983936 1.23756 0.879395 1.49101 0.879395 1.75519C0.879395 2.01938 0.983936 2.27283 1.17019 2.46019L4.71019 6.00019L1.17019 9.54019C0.983936 9.72756 0.879395 9.98101 0.879395 10.2452C0.879395 10.5094 0.983936 10.7628 1.17019 10.9502C1.26363 11.0429 1.37444 11.1162 1.49628 11.166C1.61812 11.2157 1.74858 11.241 1.88019 11.2402C2.01179 11.241 2.14226 11.2157 2.26409 11.166C2.38593 11.1162 2.49675 11.0429 2.59019 10.9502L6.83018 6.71019C6.92391 6.61723 6.99831 6.50663 7.04908 6.38477C7.09984 6.26291 7.12598 6.13221 7.12598 6.00019C7.12598 5.86818 7.09984 5.73748 7.04908 5.61562C6.99831 5.49376 6.92391 5.38316 6.83018 5.29019Z' />
      </svg>
   ),
   prevPageText: (
      <svg width='8' height='12' viewBox='0 0 8 12'>
         <path d='M1.16982 5.29019L5.40981 1.05019C5.50278 0.956464 5.61338 0.88207 5.73524 0.831301C5.8571 0.780533 5.9878 0.754395 6.11981 0.754395C6.25183 0.754395 6.38253 0.780533 6.50439 0.831301C6.62625 0.88207 6.73685 0.956464 6.82981 1.05019C7.01606 1.23756 7.12061 1.49101 7.12061 1.75519C7.12061 2.01938 7.01606 2.27283 6.82981 2.46019L3.28981 6.00019L6.82981 9.54019C7.01606 9.72756 7.12061 9.98101 7.12061 10.2452C7.12061 10.5094 7.01606 10.7628 6.82981 10.9502C6.73637 11.0429 6.62556 11.1162 6.50372 11.166C6.38188 11.2157 6.25142 11.241 6.11981 11.2402C5.98821 11.241 5.85774 11.2157 5.73591 11.166C5.61407 11.1162 5.50325 11.0429 5.40981 10.9502L1.16982 6.71019C1.07609 6.61723 1.00169 6.50663 0.950924 6.38477C0.900155 6.26291 0.874017 6.13221 0.874017 6.00019C0.874017 5.86818 0.900155 5.73748 0.950924 5.61562C1.00169 5.49376 1.07609 5.38316 1.16982 5.29019Z' />
      </svg>
   ),
   lastPageText: (
      <svg width='10.7' height='10.7' viewBox='0 0 10 10' fill='none'>
         <path d='M1.7 0.3C1.3 -0.0999998 0.7 -0.0999998 0.3 0.3C-0.0999998 0.7 -0.0999998 1.3 0.3 1.7L3.6 5L0.3 8.3C0.1 8.5 0 8.7 0 9C0 9.6 0.4 10 1 10C1.3 10 1.5 9.9 1.7 9.7L5.7 5.7C6.1 5.3 6.1 4.7 5.7 4.3L1.7 0.3ZM9 0C8.4 0 8 0.4 8 1V9C8 9.6 8.4 10 9 10C9.6 10 10 9.6 10 9V1C10 0.4 9.6 0 9 0Z' />
      </svg>
   ),
   firstPageText: (
      <svg width='10.7' height='10.7' viewBox='0 0 10 10' fill='none'>
         <path d='M9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3C9.3 -0.0999998 8.7 -0.0999998 8.3 0.3L4.3 4.3C3.9 4.7 3.9 5.3 4.3 5.7L8.3 9.7C8.5 9.9 8.7 10 9 10C9.3 10 9.5 9.9 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3ZM1 0C0.4 0 0 0.4 0 1V9C0 9.6 0.4 10 1 10C1.6 10 2 9.6 2 9V1C2 0.4 1.6 0 1 0Z' />
      </svg>
   ),
};
const Pagination = ({
   count,
   isDisabled,
   onChange,
   page,
   page_size,
   totalItemsCount,
}) => {
   const { i18n } = useTranslation();
   const { language } = i18n;
   const value = { label: page_size, value: page_size };
   const end = page * page_size > count ? count : page * page_size;
   const start = (page - 1) * page_size + 1;
   return count > 0 ? (
      <StyledElement>
         <div className='per-page'>
            <ReactSelect
               {...selectOptions}
               isDisabled={isDisabled}
               onChange={option => {
                  onChange({ page: 1, page_size: option?.value });
               }}
               value={value}
            />
            <h4 className='pagination-info'>
               {start}-{end} {language === 'uz' ? '/' : 'из'} {count}
            </h4>
         </div>
         <ReactJSPagination
            {...defaultOptions}
            activePage={page}
            totalItemsCount={totalItemsCount}
            onChange={page => {
               if (!isDisabled) {
                  onChange({ page, page_size });
               }
            }}
         />
      </StyledElement>
   ) : null;
};
Pagination.defaultProps = {
   count: 1,
   isDisabled: false,
   page: 1,
   page_size: 1,
   totalItemsCount: 1,
};
Pagination.propTypes = {
   count: number,
   isDisabled: bool,
   onChange: func.isRequired,
   page: number,
   page_size: number,
   totalItemsCount: number,
};
export default Pagination;
