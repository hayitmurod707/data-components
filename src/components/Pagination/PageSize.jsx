import { bool, func, object } from 'prop-types';
import ReactSelect from 'react-select';
import styled from 'styled-components';
const options = {
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
      control: (styles, { isDisabled = false }) => ({
         ...styles,
         backgroundColor: isDisabled ? '#F9F6F3' : 'rgba(87, 98, 247, 0.1)',
         border: 'none',
         borderRadius: 10,
         boxShadow: 'none',
         cursor: isDisabled ? 'default' : 'pointer',
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
      singleValue: (styles, { isDisabled = false }) => ({
         ...styles,
         color: isDisabled ? '#696f85' : '#3c3c3c',
         fontSize: 15,
         fontWeight: 600,
         margin: 0,
      }),
      indicatorsContainer: styles => ({ ...styles, padding: '0 10px 0 8px' }),
      dropdownIndicator: (styles, { isDisabled = false }) => ({
         ...styles,
         alignItems: 'center',
         color: isDisabled ? '#696f85' : '#3c3c3c',
         display: 'flex',
         height: 23,
         justifyContent: 'center',
         margin: 0,
         padding: 0,
         width: 23,
         svg: {
            width: 16,
         },
         ':hover': {
            color: isDisabled ? '#696f85' : '#3c3c3c',
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
            backgroundColor: '#3a79f3',
            borderRadius: 3,
         },
      }),
      option: (styles, { isSelected, isFocused }) => ({
         ...styles,
         backgroundColor: isSelected
            ? '#3a79f3'
            : isFocused
            ? 'rgba(82, 85, 241, 0.1)'
            : '#ffffff',
         borderRadius: 8,
         color: isSelected ? '#ffffff' : isFocused ? '#252a3b' : '#252a3b',
         cursor: 'pointer',
         fontSize: 15,
         fontWeight: 600,
         height: 36,
         overflow: 'hidden',
         padding: '8px 12px',
         textOverflow: 'ellipsis',
         transition: 200,
         whiteSpace: 'nowrap',
         width: '100%',
         ':hover': {
            backgroundColor: isSelected ? '#3a79f3' : 'rgba(82, 85, 241, 0.1)',
         },
      }),
   },
};
const StyledPageSize = styled.div`
   align-items: center;
   display: flex;
   & h4 {
      color: #3c3c3c;
      font-size: 15px;
      font-weight: 600;
      margin: 0 0 0 16px;
   }
`;
const PageSize = ({
   isDisabled = false,
   onChange,
   value = { page: 1, count: 1, per_page: 1 },
}) => {
   const { page, count, per_page } = value;
   const end = page * per_page > count ? count : page * per_page;
   const start = (page - 1) * per_page + 1;
   return (
      <StyledPageSize>
         <ReactSelect
            {...options}
            isDisabled={isDisabled}
            value={{ label: per_page, value: per_page }}
            onChange={option => {
               onChange({ page: 1, per_page: option?.value, count });
            }}
         />
         <h4>
            {start} - {end} из {count}
         </h4>
      </StyledPageSize>
   );
};
PageSize.propTypes = {
   isDisabled: bool,
   onChange: func,
   value: object,
};
export default PageSize;
