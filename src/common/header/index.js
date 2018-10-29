import React from 'react'
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style'
import {CSSTransition} from 'react-transition-group'

import * as actionCreators from './store/actionCreators'

import {connect} from 'react-redux'

const Header = (props) => {
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
					in={props.focused}
					timeout={200}
					classNames="slide"
				>
					<NavSearch
						className={props.focused ? 'focused' : ''}
						onFocus={props.handleInputFocus}
						onBlur={props.handleInputBlur}>

					</NavSearch>
				</CSSTransition>
				<i className={props.focused ? 'iconfont focused zoom' : 'iconfont zoom'}>
					&#xe614;
				</i>
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
)}

// 获取 props
const mapStateToProps = (state) => {
	return {
		focused: state.header.focused
	}
}

// dispatch action
const MapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.searchFoucus())
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur())
		}
	}
}

export default connect(mapStateToProps, MapDispatchToProps)(Header)