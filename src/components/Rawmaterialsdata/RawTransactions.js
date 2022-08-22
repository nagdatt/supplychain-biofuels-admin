import React from 'react'
import axios from 'axios'
export default function RawTransactions() {

    React.useEffect(()=>{
        axios.get("http://localhost:2000/admin/stockhistory?id=62fa061a130d5d44136176ad").then(res=>{
            console.log(res.data)
        })
    },[])
  return (
    <div>RawTransactions</div>
  )
}
