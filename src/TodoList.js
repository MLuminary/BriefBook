import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import store from './store';
import {Input, Button, List} from 'antd';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators';

// import TodoItem from './TodoItem';

class TodoList extends Component {

  constructor(props) {
    super(props);
    // 当 state 和 Props  发生改变时， render 会重新执行一次
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    // this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    // 感知 store 的变化
    store.subscribe(this.handleStoreChange);
  }

  // 在组件即将被挂载之前执行的方法 只进行一次「ajax 请求」
  componentWillMount() {
    console.log('componentWillMount');
  }

  // 组件挂载
  render() {
    console.log('render');
    return (
      <Fragment>
        <div>
          {/*需要用 bind 修改 this, 不然会是 undefined*/}
          <Input
            style={{width: '300px', margin: '30px'}}
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            type="text"
            onChange={this.handleInputChange}/>
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{width: '300px', marginLeft: '30px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
        />
        {/*{this.getTodoItem()}*/}
      </Fragment>
    );
  }

  // 组件被挂载之后执行
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 组件被更新之前会更新
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    // 返回 true 表示组件需要被更新
    return true;
  }

  // 组件被更新之前,如果 shouldComponentUpdate 返回 true 才执行
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  //  组件更新完后会执行
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // getTodoItem() {
  //   return this.state.list.map((item, index) => {
  //     return (
  //       // 传递方法时要将方法的this绑定父组件
  //       <TodoItem
  //         key={item}
  //         content={item}
  //         index={index}
  //         handleItemDelete={this.handleItemDelete}
  //       />
  //     );
  //   });
  // }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);

    // // 异步问题
    // const value = e.target.value;
    // // 使用 setState 操控更改 state 中的数据
    // this.setState(() => ({
    //   inputValue: value
    // }));
  }

  handleStoreChange() {
    // store 变化后更新本地 state
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
    // this.setState((prevState) => ({
    //   list: [...prevState.list, prevState.inputValue],
    //   inputValue: ''
    // }));
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);

    // // immutable state 不允许我们做任何改变
    // // 数组拷贝
    // this.setState((prevState) => {
    //   const list = [...prevState.list];
    //   list.splice(index, 1);
    //   return {list};
    // });
  }
}

export default TodoList;