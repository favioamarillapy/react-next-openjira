import { UI_ADD_ENTRY, UI_CLOSE_SIDEBAR, UI_END_DRAGGING, UI_OPEN_SIDEBAR, UI_START_DRAGGING } from '../../types';

export const uiReducer = (state, action) => {

  switch (action.type) {
    case UI_OPEN_SIDEBAR:
      return { ...state, sideMenuOpen: true }

    case UI_CLOSE_SIDEBAR:
      return { ...state, sideMenuOpen: false }

    case UI_ADD_ENTRY:
      return { ...state, isAdding: action.payload }

    case UI_START_DRAGGING:
      return { ...state, isDragging: true }

    case UI_END_DRAGGING:
      return { ...state, isDragging: false }


    default:
      return state
  }

}
