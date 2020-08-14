import React from 'react'
const ItemOwner = ({item}) => {
   
    return (
        <>
        <td>{item.name}</td>
        <td> {item.business}</td>
        <td> {item.product}</td>
        <td> {item.amount}</td>
        <td>  {item.unids}</td>
        <td>   {item.sell}</td>
        </>
    )

}
export default ItemOwner