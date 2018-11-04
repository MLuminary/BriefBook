import React , {Component} from 'react'
import { connect } from 'react-redux'

import { TopicWrapper, TopicItem } from '../style'

class Topic extends Component {

	render() {
		const { list } = this.props
		return (
			<TopicWrapper>
				{
					list.map(item => (

						<TopicItem key={item.get('id')}>
							<img className="topic-pic" src={item.get('url')} alt={item.get('txt')}/>
							{item.get('txt')}
						</TopicItem>
					))
				}
			</TopicWrapper>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		list: state.get('home').get('hotSpecial')
	}
}

export default connect(mapStateToProps, null)(Topic)