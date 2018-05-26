export default (state = [], action) => {
  const { type } = action;

  switch (type) {
    case 'FETCH_GUITARISTS_SUCCESS':
      return [
        ...state,
        ...action.response
      ];
    default:
      return state;
  }
};
