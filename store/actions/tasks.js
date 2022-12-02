export const getAllTasks = () => {
  return {
    type: 'GET_ALL_TASKS',
    fetch(apiTask, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + tokenStorage,
      },
    })
      .then(response => response.json())
      .then(async data => {
        console.log(data);
        setTasks(data.data);
      });
  };
};

export const decrement = () => {
  return {
    type: 'COUNT_DECRESE',
  };
};
