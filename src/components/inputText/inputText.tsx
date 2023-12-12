import { useState } from "react";

export default function InputText({initialValue = "Hello Cory"}:{
    initialValue?: string;
}){
    const [value, setValue] = useState(initialValue);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)  => {
        setValue(event.target.value);
    }
    return (<input type= "text" value={value} onChange={handleChange} />)

};
