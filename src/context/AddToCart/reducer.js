/* eslint-disable no-case-declarations */
export const itensReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const alreadyHave = state.items.filter(
        (each) => each.name === action.payload.name,
      );
      if (alreadyHave.length > 0) {
        return { ...state };
      }
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((each) => each.id !== action.payload.id),
      };
    default:
      return { ...state };
  }
};
