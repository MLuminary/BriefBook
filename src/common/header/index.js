import React, {Component} from 'react'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
} from './style'
import {CSSTransition} from 'react-transition-group'

import * as actionCreators from './store/actionCreators'

import {connect} from 'react-redux'

class Header extends Component {

	// 热门搜索样式
	getListArea() {
		const {focused, hotKeyList} = this.props
		if (focused) {
			return (
				<SearchInfo>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{
							hotKeyList.map((item) => {
								return <SearchInfoItem key={item}>{item}</SearchInfoItem>
							})
						}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null
		}
	}


	render() {
		return (
			<HeaderWrapper>
				<Logo/>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载 App</NavItem>
					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<NavItem className='right'>登录</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={this.props.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={this.props.focused ? 'focused' : ''}
								onFocus={this.props.handleInputFocus}
								onBlur={this.props.handleInputBlur}>

							</NavSearch>
						</CSSTransition>
						<i className={this.props.focused ? 'iconfont focused zoom' : 'iconfont zoom'}>
							&#xe614;
						</i>
						{this.getListArea(this.props.focused)}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className="writting">
						<i className="iconfont">&#xe615;</i>
						写文章
					</Button>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}

// 获取 props
const mapStateToProps = (state) => {
	return {
		focused: state.get('header').get('focused'),
		hotKeyList: state.getIn(['header','hotKeyList'])
	}
}

// dispatch action
const MapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.searchFocus())
			dispatch(actionCreators.getHotKeyList())
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur())
		}
	}
}

export default connect(mapStateToProps, MapDispatchToProps)(Header)