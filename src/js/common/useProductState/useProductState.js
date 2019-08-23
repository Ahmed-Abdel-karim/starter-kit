// @ts-nocheck
import { useReducer, useState, useEffect } from 'react';
import { getProducts, getDeals } from '../../Api';

// this is the component that holds the products state

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, active: action.payload, page: 1 };
    case 'NEXT':
      return { ...state, page: state.page + 1 };
    case 'PREV':
      return { ...state, page: state.page - 1 };
    default:
      return state;
  }
};

export default function useProductState(props) {
  const [{ page, active }, dispatch] = useReducer(reducer, { page: 1, active: '' });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (active) {
      setProducts(props.deals ? getDeals(active, page, props.pageSize) : getProducts(active, page, props.pageSize));
    }
  }, [page, active]);

  const setFilter = value => dispatch({ type: 'SET_FILTER', payload: value });
  const handleNext = () => dispatch({ type: 'NEXT' });
  const handlePrev = () => dispatch({ type: 'PREV' });

  return {
    setFilter,
    handleNext,
    handlePrev,
    page,
    active,
    products
  };
}
