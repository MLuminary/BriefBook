import axios from 'axios'
import { fromJS } from 'immutable'
import { INIT_HOME_DATA, ADD_HOME_LIST } from './constants'

const initHomeDataAction = (result) => ({
	type: INIT_HOME_DATA,
	hotSpecial: fromJS(result.topicList),
	articleList: fromJS(result.articleList),
	recommendList: fromJS(result.recommendList)
})

const addHomeList = (result) => ({
	type: ADD_HOME_LIST,
	data: fromJS(result)
})

export const initHomeData = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then(res => {
			let result = res.data.data
			dispatch(initHomeDataAction(result))
		})
	}
}

export const getMoreList = () => {
	return (dispatch) => {
		axios.get('/api/homeList.json').then((res) => {
			const result = res.data.data
			dispatch(addHomeList(result))
		})
	}
}

