import {fromJS} from 'immutable'

const defaultState = fromJS({
	hotSpecial: [
		{
			id: 1,
			url: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
			txt: '简书电影'
		},
		{
			id: 2,
			url: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
			txt: '简书电影'
		},
		{
			id: 3,
			url: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
			txt: '简书电影'
		},
		{
			id: 4,
			url: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
			txt: '简书电影'
		},
		{
			id: 5,
			url: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
			txt: '简书电影'
		},
		{
			id: 6,
			url: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
			txt: '简书电影'
		}
	]
})

export default (state = defaultState) => {
	return state
}