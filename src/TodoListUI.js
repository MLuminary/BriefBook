import React, {Component} from 'react';
import {Button, Input, List} from 'antd';

// UI 组件「傻瓜组件」
class TodoListUI extends Component {

  render() {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
          {/*需要用 bind 修改 this, 不然会是 undefined*/}
          <Input
            style={{width: '300px', marginRight: '10px'}}
            id="insertArea"
            className='input'
            value={this.props.inputValue}
            type="text"
            onChange={this.props.handleInputChange}/>
          <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{width: '300px', marginTop: '10px'}}
          bordered
          dataSource={this.props.list}
          renderItem={item => (
            <List.Item onClick={(index) => {
              this.props.handleItemDelete(index);
            }}>{item}</List.Item>)}
        />
        {/*{this.getTodoItem()}*/}
      </div>
    );
  }
}

export default TodoListUI;