import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

export default function Post(props) {
    
    const [state, setState] = useState();
    const [callback, setCallback] = useState({});
    let history = useHistory();

    useEffect(() => {
        if(state){

            const body = JSON.stringify(state);

            console.log(state)
            fetch(props.url, {
                method: "post",
                body,
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(res => {
                console.log(res)
                return res.json()
            }).then(data => {
                if(data.redirect){
                    history.push(data.url)
                    return;
                }
                setCallback(data)
            }).catch(err => console.log(err));
           
        }
    }, [state, setCallback])

    return (
        <div>
            {props.children(setState, callback)}
        </div>
    )
}
