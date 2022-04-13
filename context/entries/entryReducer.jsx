import { ENTRY_LIST, ENTRY_ADD, ENTRY_UPDATED, ENTRY_LOAD } from '../../types';

export const entryReducer = (state, action) => {

  switch (action.type) {
    case ENTRY_LIST:
      return { ...state }

    case ENTRY_LOAD:
      return {
        ...state,
        entries: [...action.payload]
      }

    case ENTRY_ADD:
      return {
        ...state, entries:
          [...state.entries, action.payload]
      }

    case ENTRY_UPDATED:
      return {
        ...state,
        entries: state.entries.map(entry => {
          if (entry._id === action.payload._id) return action.payload
          if (entry._id !== action.payload._id) return entry
        })
      }


    default:
      return state
  }

}
