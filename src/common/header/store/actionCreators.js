import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
})

const hotKeyList = (data) => ({
	type: constants.GET_HOTKEY_LIST,
	data: fromJS(data)
})

export const getHotKeyList = () => {
	return dispatch => {
		axios.get('/api/hotKeyList.json').then( res => {
			const data = res.data
			dispatch(hotKeyList(data.data))
		})
	}
}