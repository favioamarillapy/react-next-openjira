import { ENTRY_LIST } from '../../types';

export const uiReducer = (state, action) => {

  switch (action.type) {
    case ENTRY_LIST:
      return { ...state }
      break;

    default:
      return state
      break;
  }

}
