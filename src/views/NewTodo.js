import React from 'react';

import Checkbox from './Checkbox';
import InputText from './InputText';

export default function NewTodo(props) {
  return (<div className="todo new">
      <Checkbox disabled={true} />
      <InputText
        placeholder="New todo"
        onBlurOrSubmit={props.addTodo}
        value={props.newTodoTitle}
        onChange={props.updateNewTodoTitle}
        />
    </div>);
}
