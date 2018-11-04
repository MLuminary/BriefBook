import { fromJS } from 'immutable'
import { INIT_HOME_DATA, ADD_HOME_LIST } from './constants'

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
	if (action.type === ADD_HOME_LIST) {
		return state.set('articleList', state.get('articleList').concat(action.data))
	}
	return state
}