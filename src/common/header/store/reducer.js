import * as constants from './constants'

const defaultSate = {
	focused: false
};

export default (state = defaultSate, action) => {
	if (action.type === constants.SEARCH_FOCUS) {
		return {
			focused: true
		}
	}

	if (action.type === constants.sEARCH_BLUR) {
		return {
			focused: false
		}
	}
	return state;
}