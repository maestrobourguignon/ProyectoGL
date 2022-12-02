const initialState = {
  tasks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_TASKS':
      
    return {
        ...state,
        tasks: 
      };
    
    default:
      return state;
  }
};
