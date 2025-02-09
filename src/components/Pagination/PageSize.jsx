import { bool, func, number } from 'prop-types';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ReactSelect from 'react-select';
import styled from 'styled-components';
const StyledElement = styled.div`
   align-items: center;
   display: flex;
   & h4 {
      color: #3c3c3c;
      font-size: 16px;
      font-weight: 600;
      margin: 0 0 0 16px;
   }
`;
const selectOptions = {
   components: { IndicatorSeparator: () => null },
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
      {
         label: '50',
         value: 50,
      },
      {
         label: '100',
         value: 100,
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
         fontSize: 16,
         fontWeight: 600,
         margin: 0,
      }),
      placeholder: styles => ({
         ...styles,
         fontSize: 16,
         fontWeight: 600,
         margin: 0,
      }),
      indicatorsContainer: styles => ({ ...styles, padding: '0 10px 0 8px' }),
      dropdownIndicator: styles => ({
         ...styles,
         alignItems: 'center',
         backgroundColor: 'transparent',
         borderRadius: 13,
         color: '#949494',
         display: 'flex',
         height: 23,
         justifyContent: 'center',
         margin: 0,
         padding: 0,
         width: 23,
         svg: {
            width: 18,
         },
         ':hover': {
            color: '#949494',
         },
      }),
      menu: styles => ({
         ...styles,
         backgroundColor: '#ffffff',
         border: 'none',
         borderRadius: 12,
         boxShadow:
            '0 1px 20px 0 rgba(13, 46, 105, 0.07), 0 1px 20px 0 rgba(13, 46, 105, 0.07)',
         margin: 0,
         overflow: 'hidden',
         padding: 0,
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
            backgroundColor: '#5254f1',
            borderRadius: 3,
         },
      }),
      option: (styles, { isSelected, isDisabled, isFocused }) => ({
         ...styles,
         backgroundColor: isDisabled
            ? '#f7f8fc'
            : isSelected
            ? '#5254f1'
            : isFocused
            ? '#f1f1f1'
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
         fontSize: 16,
         fontWeight: 500,
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
               ? '#5254f1'
               : '#f1f1f1',
         },
      }),
   },
};
const Pagination = ({
   totalItemsCount = 1,
   isDisabled = false,
   onChange,
   page = 1,
   page_size = 1,
}) => {
   const { i18n } = useTranslation();
   const { language } = i18n;
   const value = useMemo(() => {
      const value = { label: page_size, value: page_size };
      return value;
   }, [page_size]);
   const state = useMemo(() => {
      const end =
         page * page_size > totalItemsCount
            ? totalItemsCount
            : page * page_size;
      const start = (page - 1) * page_size + 1;
      const suffix = language === 'uz' ? '/' : 'из';
      const state = `${start}-${end} ${suffix} ${totalItemsCount}`;
      return state;
   }, [language, page, page_size, totalItemsCount]);
   return (
      <StyledElement>
         <ReactSelect
            {...selectOptions}
            isDisabled={isDisabled}
            value={value}
            onChange={option => {
               onChange({ page: 1, page_size: option?.value });
            }}
         />
         <h4>{state}</h4>
      </StyledElement>
   );
};
Pagination.propTypes = {
   count: number,
   isDisabled: bool,
   onChange: func,
   page: number,
   page_size: number,
};
export default Pagination;
