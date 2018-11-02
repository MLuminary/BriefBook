import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

const HOTKEY_PAGESIZE = 10

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
})

export const mouseIn = () => ({
	type: constants.MOUSE_IN
})

export const mouseOut = () => ({
	type: constants.MOUSE_OUT
})

export const changePage = (page) => ({
	type: constants.CHANGE_PAGE,
	data: page
})

const hotKeyList = (data) => ({
	type: constants.GET_HOTKEY_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / HOTKEY_PAGESIZE)
})

export const getHotKeyList = () => {
	return dispatch => {
		axios.get('/api/hotKeyList.json').then( res => {
			const data = res.data
			dispatch(hotKeyList(data.data))
		})
	}
}