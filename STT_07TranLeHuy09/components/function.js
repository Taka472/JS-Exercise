export default function event(state={count: 0}, action) {
    switch(action.type) {
      case 'inc': {
        return {count: state.count+1};
      }
      case 'des': {
        return {count: state.count-1};
      }
    }
  }