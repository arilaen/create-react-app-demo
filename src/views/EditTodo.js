import React from 'react';

export default function EmptyTodo(props) {
  return (<div className="todo empty">
      <Checkbox disabled={true} />
      <InputText
        placeholder="New todo"
        onBlurOrSubmit={props.addTodo}
        value={props.newTodoTitle}
        onChange={props.updateNewTodoTitle}
        />
    </div>);
}
