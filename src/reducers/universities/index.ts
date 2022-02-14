import { SET_UNIVERSITIES, SET_UNIVERSITIES_LOADING } from '../../utils/action_types';

const INITIAL_STATE = {
  universities: [],
  loading: false
};
  
export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_UNIVERSITIES:
      return {
        ...state,
        universities: action.payload,
      };
    case SET_UNIVERSITIES_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
