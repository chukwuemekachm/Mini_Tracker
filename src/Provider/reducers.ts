export const tasksReducer = {
  updateTask(currentTasks, updatedTask) {
    const tasks = currentTasks.filter(task => task.id != updatedTask.id);
    return [...tasks, updatedTask];
  },
  createTask(currentTasks, newTask) {
    return [...currentTasks, newTask];
  }
};

export const boardsReducer = {
  createBoard(currentBoards, newBoard) {
    return [...currentBoards, newBoard];
  }
};
