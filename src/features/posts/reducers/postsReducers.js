import { SCRAP_SUCCESS } from "../actions/postsActionTypes";

const initialState = {
  posts: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SCRAP_SUCCESS:
      return {
        ...state,
        posts: action.payload
      };

    default:
      return state;
  }
};
