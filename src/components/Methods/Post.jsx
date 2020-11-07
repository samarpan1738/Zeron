import React, {useState, useEffect} from 'react'

export default function Post(props) {
    
    const [state, setState] = useState();
    const [callback, setCallback] = useState({wow:"hahah"});
    useEffect(() => {
        if(state){
            const body =
                    
           fetch(props.url, {
                method: "post",
                body:  JSON.stringify(state),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(res => res.json()).then(data => setCallback(data)).catch(err => console.log(err));
           
        }
    }, [state, setCallback])

    return (
        <div>
            {props.children(setState, callback)}
        </div>
    )
}
