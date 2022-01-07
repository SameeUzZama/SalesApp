export const productReducer = (state = { product: [] }, action) => {
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      product: [...action.data],
    };
  }
  return state;
};
