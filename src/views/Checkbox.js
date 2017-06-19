import React from 'react';

export default function Checkbox(props) {
  function _updateDone(event) {
    props.updateDone(event.target.checked);
  }
  return (<input
            type="checkbox"
            checked={props.done}
            disabled={props.disabled}
            onChange={_updateDone}
            />);
}
