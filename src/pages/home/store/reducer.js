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
	],
	articleList: [
		{
			id: 1,
			url: '//upload-images.jianshu.io/upload_images/12100388-5a38510faf287b38?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
			title: '35 平开间，这样装修谁舍得出租',
			desc: '建面 35 平开间公寓，一个卫生间和阳台是单独的，其他区域大开间。阳台做了厨房还得兼顾晾衣服。开间兼顾卧室和会客功能 进门右手就是卫生间，虽小但是够...'
		},
		{
			id: 2,
			url: '//upload-images.jianshu.io/upload_images/12100388-5a38510faf287b38?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
			title: '35 平开间，这样装修谁舍得出租',
			desc: '建面 35 平开间公寓，一个卫生间和阳台是单独的，其他区域大开间。阳台做了厨房还得兼顾晾衣服。开间兼顾卧室和会客功能 进门右手就是卫生间，虽小但是够...'
		},
		{
			id: 3,
			url: '//upload-images.jianshu.io/upload_images/12100388-5a38510faf287b38?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
			title: '35 平开间，这样装修谁舍得出租',
			desc: '建面 35 平开间公寓，一个卫生间和阳台是单独的，其他区域大开间。阳台做了厨房还得兼顾晾衣服。开间兼顾卧室和会客功能 进门右手就是卫生间，虽小但是够...'
		},
		{
			id: 4,
			url: '//upload-images.jianshu.io/upload_images/12100388-5a38510faf287b38?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
			title: '35 平开间，这样装修谁舍得出租',
			desc: '建面 35 平开间公寓，一个卫生间和阳台是单独的，其他区域大开间。阳台做了厨房还得兼顾晾衣服。开间兼顾卧室和会客功能 进门右手就是卫生间，虽小但是够...'
		}
	]
})

export default (state = defaultState) => {
	return state
}