import React, { useEffect, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ENTRY_ADD, ENTRY_LOAD, ENTRY_UPDATED } from '../../types'
import { entryReducer, EntryContext } from './'
import { entriesApi } from '../../api'


const INITIAL_STATE = {
  entries: []
}

export const EntryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(entryReducer, INITIAL_STATE)

  const refreshEntries = async () => {
    const { data } = await entriesApi.get('/entries')
    dispatch({ type: ENTRY_LOAD, payload: data.data })
  }

  useEffect(() => {
    refreshEntries()
  }, []);

  const addEntry = async (description, status) => {
    const newEntry = {
      createdAt: Date.now(),
      status: 'backlog',
      description
    }

    const { data } = await entriesApi.post('/entries', newEntry)

    dispatch({ type: ENTRY_ADD, payload: data })
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
