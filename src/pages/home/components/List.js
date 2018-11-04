import React , {Component} from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo } from '../style'

class List extends Component {

	render() {
		const { list } = this.props
		return (
			<div>
				{
					list.map(item => {
						return (
							<ListItem key={item.get('id')}>
								<img className='pic' src={item.get('imgUrl')} alt="pic"/>
								<ListInfo>
									<h3 className='title'>{item.get('title')}</h3>
									<p className='desc'>{item.get('desc')}</p>
								</ListInfo>
							</ListItem>
						)
					})
				}
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		list: state.getIn(['home','articleList'])
	}
}

export default connect(mapStateToProps, null)(List)