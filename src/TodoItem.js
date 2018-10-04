import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  // 父组件的 render 重新执行一次 子组件也会被重新执行一次
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // 提高组件的性能
  shouldComponentUpdate(nextProps) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const {content} = this.props;
    return (
      <div
        onClick={this.handleClick}>
        {content}
      </div>
    );
  }

  // 要从父组件接受参数，并且第一次存在于父组件中时不会执行
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  // 从页面中去除
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick() {
    const {handleItemDelete, index} = this.props;
    handleItemDelete(index);
  }
}

// 限定传进来的数值的格式
TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  deleteItem: PropTypes.func,
  index: PropTypes.number
};

// 传递默认值
TodoItem.defaultProps = {};

export default TodoItem;