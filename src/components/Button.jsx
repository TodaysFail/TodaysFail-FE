import React from 'react';

export default function Button({ text, handleClick, disabled }) {
  return (
    <button disabled={disabled} onClick={handleClick}>
      {text}
    </button>
  );
}
