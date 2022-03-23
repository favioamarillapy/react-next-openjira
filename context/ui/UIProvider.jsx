import { useReducer } from 'react'
import { UIContext, uiReducer } from './'

export const UiProvider = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, { sideMenuOpen: false })

  return (
    <UIContext.Provider value={{ sideMenuOpen: false }}>
      {children}
    </UIContext.Provider>
  )
}