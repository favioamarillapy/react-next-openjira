import { UI_ADD_ENTRY, UI_CLOSE_SIDEBAR, UI_OPEN_SIDEBAR } from '../../types';

export const uiReducer = (state, action) => {

  switch (action.type) {
    case UI_OPEN_SIDEBAR:
      return { ...state, sideMenuOpen: true }
      break;

    case UI_CLOSE_SIDEBAR:
      return { ...state, sideMenuOpen: false }
      break;

    case UI_ADD_ENTRY:
      return { ...state, isAdding: action.payload }
      break;


    default:
      return state
      break;
  }

}
