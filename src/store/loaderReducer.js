import { SHOW_LOADER, HIDE_LOADER, SHOW_ERROR_MESSAGE, HIDE_ERROR_MESSAGE } from './types'

const initialState = {
   loading: true,
   error: false,
}

export const loaderReducer = (state = initialState, action) => {
   switch (action.type) {
      case SHOW_LOADER:
         return { ...state, loading: true }
      case HIDE_LOADER:
         return { ...state, loading: false }
      case SHOW_ERROR_MESSAGE:
         return { ...state, error: true }
      case HIDE_ERROR_MESSAGE:
         return { ...state, error: false }
      default: return state
   }
}


export default loaderReducer;