import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes';

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
