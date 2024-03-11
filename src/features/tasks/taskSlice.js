import { createSlice } from '@reduxjs/toolkit';

const initialState = [
	{
		id: '1',
		title: 'task 1',
		description: 'Task 1 descript',
		completed: false,
	},
	{
		id: '2',
		title: 'task 2',
		description: 'Task 2 descript',
		completed: false,
	},
];

const taskSlice = createSlice({
	name: 'Tasks',
	initialState: initialState,
	reducers: {
		addtTask: (state, action) => {
			state.push(action.payload);
		},
		editTask: (state, action) => {
			const { id, title, description } = action.payload;
			const foundTask = state.find((task) => task.id === id);
			if (foundTask) {
				foundTask.title = title;
				foundTask.description = description;
			}
		},
		deleteTask: (state, action) => {
			const taskFound = state.find((task) => task.id === action.payload);
			if (taskFound) {
				state.splice(state.indexOf(taskFound), 1);
			}
		},
	},
});

export const { addtTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
