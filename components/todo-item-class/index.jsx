import { useState, useCallback } from "react";
import Form from "./Form";
import List from "./List";
import { Item } from "./Item";

export default function ToDoApp() {
    const 
        [list, setList] = useState([new Item('111'), new Item('222')]),
        addItem = useCallback(text => setList(old => old.concat(new Item(text))), []),
        delItem = useCallback(id => setList(old => old.filter(item => id!==item.id)), []);
        
    return <>
        <Form addItem={addItem}/>
        <List list={list} delItem={delItem}/>
      </>
}