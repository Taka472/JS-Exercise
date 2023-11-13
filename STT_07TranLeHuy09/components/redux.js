import { createStore } from 'redux';

export var increase = { type: 'inc' }
export var decrease = { type: 'des' }

const event = (state={count: 0}, action) => {
  switch(action.type) {
    case 'inc': {
      return {count: state.count+1};
    }
    case 'des': {
      return {count: state.count-1};
    }
  }
}

export var store = createStore(event);