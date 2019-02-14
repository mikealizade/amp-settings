export default (state = [], action) => {
  const { type } = action;

  switch (type) {
    case 'SUBMIT_FORM_SUCCESS':
      return [
        ...state,
        ...action.res
      ];
    default:
      return state;
  }
};
