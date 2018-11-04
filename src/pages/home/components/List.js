import React , {Component} from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore} from '../style'
import { actionCreators } from '../store'

class List extends Component {

	render() {
		const { list } = this.props
		return (
			<div>
				{
					list.map((item, index) => {
						return (
							<ListItem key={index}>
								<img className='pic' src={item.get('imgUrl')} alt="pic"/>
								<ListInfo>
									<h3 className='title'>{item.get('title')}</h3>
									<p className='desc'>{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
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