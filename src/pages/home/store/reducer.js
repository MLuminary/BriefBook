import { fromJS } from 'immutable'
import { INIT_HOME_DATA } from './constants'

const defaultState = fromJS({
	hotSpecial: [],
	articleList: [],
	recommendList: []
})

export default (state = defaultState, action) => {
	if (action.type === INIT_HOME_DATA) {
		return state.merge({
			hotSpecial: action.hotSpecial,
			articleList: action.articleList,
			recommendList: action.recommendList
		})
	}
	return state
}