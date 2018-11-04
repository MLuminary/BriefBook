import React , {Component} from 'react'
import { connect } from 'react-redux'

import { actionCreators } from './store'

import { HomeWrapper, HomeLeft, HomeRight } from './style'

import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import Topic from './components/Topic'

class Home extends Component {

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4541/9883913ce16b7812d68ce670c791a657d9a68eff.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.initHomeData()
	}
}

const mapDispatchToProps = (dispatch) => ({
	initHomeData() {
		dispatch(actionCreators.initHomeData())
	}
})

export default connect(null, mapDispatchToProps)(Home)