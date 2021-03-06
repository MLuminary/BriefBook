import React, {Component} from 'react'
import {GlobalStyle} from './style'
import {GlobalIconFont} from './statics/iconfont/iconfont'

import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'

import store from './store'
import {Provider} from 'react-redux'

import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<GlobalIconFont/>
					<GlobalStyle/>
					<BrowserRouter>
						<div>
							<Header/>
							<Route path='/' exact component={Home}></Route>
							<Route path='/detail' exact component={Detail}></Route>
						</div>
					</BrowserRouter>
				</div>
			</Provider>
		)
	}
}

export default App
