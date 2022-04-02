import { ENTRY_LIST, ENTRY_ADD } from '../../types';

export const entryReducer = (state, action) => {

  console.log(state, action);

  switch (action.type) {
    case ENTRY_LIST:
      return { ...state }
      break;

    case ENTRY_ADD:
      return { state, entries: [...state.entries, action.payload] }
      break;

    default:
      return state
      break;
  }

}
