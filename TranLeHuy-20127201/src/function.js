export default function event(state=[{}], action) {
    switch(action.type) {
      case 'add': {
        return state.push();
      }
      case 'del': {
        return state;
      }
    }
  }