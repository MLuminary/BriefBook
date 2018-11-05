import React , {PureComponent} from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore} from '../style'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {

	render() {
		const { list } = this.props
		return (
			<div>
				{
					list.map((item, index) => {
						return (
							<Link key={index} to='/detail'>
								<ListItem key={index}>
									<img className='pic' src={item.get('imgUrl')} alt="pic"/>
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
									</ListInfo>
								</ListItem>
							</Link>
						)
					})
				}
				<LoadMore onClick={this.props.getMoreList}>更多文字</LoadMore>
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		list: state.getIn(['home','articleList'])
	}
}

const mapDispatchToProps = (dispatch) => ({
	getMoreList() {
		dispatch(actionCreators.getMoreList())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(List)