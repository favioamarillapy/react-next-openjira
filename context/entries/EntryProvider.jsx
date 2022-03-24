import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { entryReducer, EntryContext } from './'

const INITIAL_STATE = {
  entries: [
    {
      _id: uuidv4(),
      description: '42i34mn34923bsf sdfoi0909 ifjashd ds900d ',
      status: 'backlog',
      createdAt: Date.now()
    },
    {
      _id: uuidv4(),
      description: 'asdiahjsd ajshdklj adlkjahsdaskdoinasdbn ',
      status: 'progress',
      createdAt: Date.now() - 100000
    },
    {
      _id: uuidv4(),
      description: 'asda.sdopak s asd8972490823kjndsdnfs9098',
      status: 'finished',
      createdAt: Date.now() - 1000000
    }
  ]
}

export const EntryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(entryReducer, INITIAL_STATE)

  return (
    <EntryContext.Provider value={{ ...state }}>
      {children}
    </EntryContext.Provider>
  )
}
