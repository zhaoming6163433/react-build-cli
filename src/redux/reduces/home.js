const INITALLOGO = 'home/INITALLOGO';
const CHANGEHISTORY = 'home/CHANGEHISTORY';
const SAVE_LIST = 'home/SAVE_LIST';

const initialState = {
  movelogo: false,
  mylist: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITALLOGO:
      return {
        ...state,
        movelogo: false,
      };
    case CHANGEHISTORY:
      return {
        ...state,
        movelogo: true,
        text: action.text
      };
    case SAVE_LIST:
      return {
        ...state,
        mylist: action.list
      };
    default:
      return state;
  }
}

export function saveList(mylist) {
  return {
    type: SAVE_LIST,
    list: mylist
  };
}

export function changeRoute() {
  return {
    type: CHANGEHISTORY,
    text: 'showDocs'
  };
}
export function initalLogo() {
  return {
    type: INITALLOGO
  };
}
