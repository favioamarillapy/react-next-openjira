import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ENTRY_ADD, ENTRY_UPDATED } from '../../types'

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


  const addEntry = (description) => {
    const newentry = {
      _id: uuidv4(),
      createdAt: Date.now(),
      status: 'backlog',
      description
    }

    dispatch({ type: ENTRY_ADD, payload: newentry })
  }

  const updatedEntry = (entry) => {
    dispatch({ type: ENTRY_UPDATED, payload: entry })
  }

  return (
    <EntryContext.Provider value={{
      ...state,
      addEntry, updatedEntry
    }}>
      {children}
    </EntryContext.Provider>
  )
}
