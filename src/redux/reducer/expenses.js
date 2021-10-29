import { ADD_EXPENSE } from "../action-types/expenses";

const initialState = {
	expenseList: [
		{
			title: "Gjorde ett utlägg",
			logo: "djdjd",
			createdAt: Date.now(),
			amount: 1345,
		},
		{
			title: "Gjorde ett utlägg",
			logo: "djdjd",
			createdAt: Date.now(),
			amount: 122,
		},
		{
			title: "Gjorde ett utlägg",
			logo: "djdjd",
			createdAt: Date.now(),
			amount: 3322,
		},
	],
};

export const expenseReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_EXPENSE: {
			console.log("from ADDEXPENSE REDUCER");
			return {
				...state,
				expenseList: [...state.expenseList, action.data],
			};
		}
		default:
			return state;
	}
};
