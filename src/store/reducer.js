const defaultSate = {
  focused: false
};

export default (state = defaultSate, action) => {
  if (action.type === 'search_focus') {
    return {
      focused: true
    }
  }

  if (action.type === 'search_blur') {
    return {
      focused: false
    }
  }
  return state;
}