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
		const {focused, hotKeyList, mouseIn, page, handleMouseIn, handleMouseOut, handlePage} = this.props
		const newList = hotKeyList.toJS()
		const pageList = []

		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				if (newList[i]) {
					pageList.push(
						<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
					)
				}
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={() => handlePage(page, this.spin)}>
							<i ref={(icon) => this.spin = icon} className="iconfont spin">&#xe851;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
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

// 换一换标签动画
const exchangeRotate = (spin) => {
	let originRotate = spin.style.transform.replace(/[^0-9]/ig, '')
	console.log(originRotate)

	if (originRotate) {
		originRotate = parseInt(originRotate, 10) + 360
	} else {
		originRotate = 0
	}

	spin.style.transform = `rotate(${originRotate}deg)`
}

// 获取 props
const mapStateToProps = (state) => {
	return {
		focused: state.get('header').get('focused'),
		hotKeyList: state.getIn(['header','hotKeyList']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		page: state.getIn(['header', 'page'])
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
		},
		handleMouseIn() {
			dispatch(actionCreators.mouseIn())
		},
		handleMouseOut() {
			dispatch(actionCreators.mouseOut())
		},
		handlePage(page, spin) {
			exchangeRotate(spin)
			dispatch(actionCreators.changePage(page))
		}
	}
}

export default connect(mapStateToProps, MapDispatchToProps)(Header)