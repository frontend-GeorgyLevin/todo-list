import React from 'react'
type Props = {
    txt: string;
    setTxt: (s: string) => void;
    addTodo: () => void;
}
type Foo = {
    (p: Props): JSX.Element;
}

const InputField: Foo = ({txt, setTxt, addTodo}) => {
  return (
    <label>
    <input value={txt} onChange={e => setTxt(e.target.value)}/>
    <button onClick={addTodo}>Add Todo</button>
  </label>
  )
}

export default InputField