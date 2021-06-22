import React ,{useEffect} from 'react'

export default function Check() {

useEffect(() => {
    window.location.href = `${window.localStorage.getItem("init_point")}`
}, [])

    return (
       <React.Fragment>
           <h2>Loading ... redirect sandBox MERCADOPAGO</h2>
       </React.Fragment>
    )
}
