import React from 'react'
import { TTodo } from '../model/TodoProps'
type Props = {
    txt: string;
    setTxt: (s: string) => void;
    addToDo: () => void;
}
type Foo = {
    (p: Props): JSX.Element;
}

const InputField: Foo = ({txt, setTxt, addToDo}) => {
  return (
    <label>
    <input value={txt} onChange={e => setTxt(e.target.value)}/>
    <button onClick={addToDo}>Add ToDo</button>
  </label>
  )
}

export default InputField