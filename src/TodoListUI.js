import React from 'react';
import {Button, Input, List} from 'antd';

// 无状态组件 「就是一个函数」,性能更优,不需要 render 渲染
const TodoListUI = (props) => {
  return (
    <div style={{paddingTop: '10px', paddingLeft: '10px'}}>
      <div>
        {/*需要用 bind 修改 this, 不然会是 undefined*/}
        <Input
          style={{width: '300px', marginRight: '10px'}}
          id="insertArea"
          className='input'
          value={props.inputValue}
          type="text"
          onChange={props.handleInputChange}/>
        <Button type="primary" onClick={props.handleBtnClick()}>提交</Button>
      </div>
      <List
        style={{width: '300px', marginTop: '10px'}}
        bordered
        dataSource={props.list}
        renderItem={item => (
          <List.Item onClick={(index) => {
            props.handleItemDelete(index);
          }}>{item}</List.Item>)}
      />
      {/*{this.getTodoItem()}*/}
    </div>
  );
};


// // UI 组件「傻瓜组件」
// class TodoListUI extends Component {
//
//   render() {
//     return (
//       <div style={{marginTop: '10px', marginLeft: '10px'}}>
//         <div>
//           {/*需要用 bind 修改 this, 不然会是 undefined*/}
//           <Input
//             style={{width: '300px', marginRight: '10px'}}
//             id="insertArea"
//             className='input'
//             value={this.props.inputValue}
//             type="text"
//             onChange={this.props.handleInputChange}/>
//           <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//         </div>
//         <List
//           style={{width: '300px', marginTop: '10px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={item => (
//             <List.Item onClick={(index) => {
//               this.props.handleItemDelete(index);
//             }}>{item}</List.Item>)}
//         />
//         {/*{this.getTodoItem()}*/}
//       </div>
//     );
//   }
// }

export default TodoListUI;