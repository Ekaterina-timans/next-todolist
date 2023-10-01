import { useState, memo, useCallback, useRef } from "react";
import Button from "./Button";

export default memo(function Form({addItem}) {
    const 
        [value, setValue] = useState('-'),
        ref = useRef(''),
        onClick = useCallback(() => {setValue(''); addItem(ref.current);}, [addItem]);
    
    ref.current = value;
    console.debug('Form render');
    return <fieldset>
        <legend>Form</legend>
        <input value={value} onInput={evt => setValue(evt.target.value)}/>
        <Button onClick={onClick}>Add</Button>
      </fieldset>
  });