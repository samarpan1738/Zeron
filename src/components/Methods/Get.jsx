import React, {useState, useEffect} from 'react'

export default function Get(props) {

    const [state, setState] = useState({data: null, loading: true});

    useEffect(() => {
        fetch(props.url).then(res => res.json()).then(data => setState({data, loading:false}))
    }, [props.url])

    return (
        <div>
            {props.children(state)}
        </div>
    )
}
