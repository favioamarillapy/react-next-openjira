import { useReducer } from 'react'
import { UI_ADD_ENTRY, UI_CLOSE_SIDEBAR, UI_END_DRAGGING, UI_OPEN_SIDEBAR, UI_START_DRAGGING } from '../../types'
import { UIContext, uiReducer } from './'

const UI_INITIAL_STATE = {
  sideMenuOpen: false,
  isAdding: false,
  isDragging: false
}

export const UiProvider = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSidebar = () => {
    dispatch({ type: UI_OPEN_SIDEBAR })
  }

  const closeSidebar = () => {
    dispatch({ type: UI_CLOSE_SIDEBAR })
  }

  const setIsAdding = (flag) => {
    dispatch({ type: UI_ADD_ENTRY, payload: flag })
  }

  const startDragging = () => {
    dispatch({ type: UI_START_DRAGGING })
  }

  const endDragging = () => {
    dispatch({ type: UI_END_DRAGGING })
  }

  return (
    <UIContext.Provider value={{
      ...state,
      openSidebar, closeSidebar, setIsAdding,
      startDragging, endDragging
    }}>
      {children}
    </UIContext.Provider>
  )
}