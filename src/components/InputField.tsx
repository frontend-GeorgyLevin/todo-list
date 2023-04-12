import React from 'react'
import { TTodo } from '../model/TodoProps'
type Props = {
    txt: string;
    setTxt: (s: string) => void;
    addToDo: () => void;
}

// const InputField = (txt: string, setTxt: void, addToDo: void) => {
function InputField(i: Props): JSX.Element {
  return (
    <label>
    <input value={i.txt} onChange={e => i.setTxt(e.target.value)}/>
    <button onClick={i.addToDo}>Add ToDo</button>
  </label>
  )
}

export default InputField