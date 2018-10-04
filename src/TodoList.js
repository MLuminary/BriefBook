import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          {/*需要用 bind 修改 this, 不然会是 undefined*/}
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            type="text"
            onChange={this.handleInputChange}/>
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        // 传递方法时要将方法的this绑定父组件
        <TodoItem
          key={index}
          content={item}
          index={index}
          handleItemDelete={this.handleItemDelete}
        />
      );
    });
  }

  handleInputChange(e) {
    // 异步问题
    const value = e.target.value;
    // 使用 setState 操控更改 state 中的数据
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
  }

  handleItemDelete(index) {
    // immutable state 不允许我们做任何改变
    // 数组拷贝
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list};
    });
  }
}

export default TodoList;