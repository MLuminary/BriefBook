import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultSate = fromJS({
	focused: false,
	hotKeyList: []
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
		return state.set('hotKeyList', action.data)
	}
	return state;
}