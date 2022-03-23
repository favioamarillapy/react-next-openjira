import { UI_CLOSE_SIDEBAR, UI_OPEN_SIDEBAR } from '../../types';

export const uiReducer = (state, action) => {

  switch (action.type) {
    case UI_OPEN_SIDEBAR:
      return { ...state, sideMenuOpen: true }
      break;

    case UI_CLOSE_SIDEBAR:
      return { ...state, sideMenuOpen: false }
      break;

    default:
      return state
      break;
  }

}
