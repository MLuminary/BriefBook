import axios from 'axios'
import { fromJS } from 'immutable'
import { INIT_HOME_DATA } from './constants'

const initHomeDataAction = (result) => ({
	type: INIT_HOME_DATA,
	hotSpecial: fromJS(result.topicList),
	articleList: fromJS(result.articleList),
	recommendList: fromJS(result.recommendList)
})

export const initHomeData = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then(res => {
			let result = res.data.data
			dispatch(initHomeDataAction(result))
		})
	}
}

