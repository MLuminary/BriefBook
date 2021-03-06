import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultSate = fromJS({
	focused: false,
	hotKeyList: [],
	mouseIn: false,
	page: 1,
	totalPage: 1
})

export default (state = defaultSate, action) => {
	if (action.type === constants.SEARCH_FOCUS) {
		// immutable 对象的 set 方法，会结合之前 immutable 对象的值和设置的值，返回一个全新的对象
		return state.set('focused', true)
	}

	if (action.type === constants.SEARCH_BLUR) {
		return state.set('focused', false)
	}

	if (action.type === constants.GET_HOTKEY_LIST) {
		return state.merge({
			'hotKeyList': action.data,
			'totalPage': action.totalPage
		})
	}

	if (action.type === constants.MOUSE_IN) {
		return state.set('mouseIn', true)
	}

	if (action.type === constants.MOUSE_OUT) {
		return state.set('mouseIn', false)
	}

	if (action.type === constants.CHANGE_PAGE) {
		const { totalPage } = state.toJS()
		if (action.data < totalPage) {
			return state.set('page', action.data + 1)
		} else {
			return state.set('page', 1)
		}
	}
	return state;
}