import { ADD_EXPENSE } from "../action-types/expenses";

const initialState = {
	expenseList: [],
};

export const expenseReducer = (state = { initialState }, action) => {
	switch (action.type) {
		case ADD_EXPENSE: {
			return {
				...state,
				expenseList: [...state.expenseLsit, action.data],
			};
		}
		default:
			return state;
	}
};
