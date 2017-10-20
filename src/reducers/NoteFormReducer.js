import { CLIENT_UPDATE, NOTE_CREATE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  notes: ''
};

export default (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case CLIENT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case NOTE_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
