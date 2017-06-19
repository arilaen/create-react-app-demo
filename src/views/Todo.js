import React from 'react';

import Checkbox from './Checkbox';
import InputText from './InputText';

function updateStatus(todo, done) {
  return Object.assign({}, todo, { done });
}

function updateTitle(todo, title) {
  return Object.assign({}, todo, { title });
}

export default function Todo(props) {
  function _updateDone(done) {
    props.updateTodo(updateStatus(props.todo, done));
  }
  function _updateTitle(event) {
    props.updateTodo(updateTitle(props.todo, event.target.value));
  }
  function _handleTodoClick(event) {
    if (!props.done && !props.editing) {
      props.updateEditingTodo(props.todo, true);
    }
  }
  function _handleTitleChange(event) {
    props.updateEditingTodo(props.todo, false);
  }
  const { title, editing, done } = props.todo;
  const classes = 'todo' + (done ? ' done' : '');
  return (
    <div className={classes}>
      <Checkbox
        done={done}
        updateDone={_updateDone} />
      { editing ? <InputText
                    value={title}
                    onChange={_updateTitle}
                    onBlurOrSubmit={_handleTitleChange}
                    />:
      <span onClick={_handleTodoClick}>{ title }</span> }
    </div>);
}
