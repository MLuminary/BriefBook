import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes';
import axios from 'axios/index';

// ACTION 统一管理

// 监听 input 改变并发送 action
export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});
// 添加 item
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

// 删除item
export const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index
});

// 初始化state
export const getInitlISTAction = data => ({
  type: INIT_LIST_ACTION,
  data
});

// 获得数据
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('http://localhost:8080/list').then(res => {
      const data = res.data;
      const action = getInitlISTAction(data);
      dispatch(action);
    });
  }
}