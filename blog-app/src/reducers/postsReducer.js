import _ from 'lodash';

export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
      case 'DLETE_POST':
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
