import React from 'react'
import data from '../Data/data'
import { useState } from 'react'
import ItemOwner from './itemOwner'
import '../css/owner.css'


const Owner = () => {
    console.log(data)
    const [dataOwner, setDataOwner] = useState(data)
   
    const maxSale = () => {
       const arrSells= data.map(item=>item.sell)
       console.log(arrSells)
       const maxdd=Math.max(...arrSells)
       console.log(maxdd)
       const indexMax = arrSells.indexOf(maxdd)
       console.log(indexMax)
       console.log(data[indexMax])
       const objMax= data[indexMax]
       console.log(objMax)
       setDataOwner([objMax])
    }
    const maxUnits = () => {
        const arrUnids= data.map(item=>item.unids)
        const maxUnids=Math.max(...arrUnids)
        console.log(maxUnids)
        const indexMax = arrUnids.indexOf(maxUnids)
        console.log(indexMax)
        console.log(data[indexMax])
        const objMax= data[indexMax]
        console.log(objMax)
        setDataOwner([objMax])
     }
    const minSale = () => {
        const arrSells= data.map(item=>item.sell)
        const mindd=Math.min(...arrSells)
        console.log(mindd)
        const indexMin = arrSells.indexOf(mindd)
        console.log(indexMin)
        console.log(data[indexMin])
        const objMin= data[indexMin]
        console.log(objMin)
        setDataOwner([objMin])
     }
     const minUnits = () => {
        const arrUnits= data.map(item=>item.unids)
        const mindd=Math.min(...arrUnits)
        console.log(mindd)
        const indexMin = arrUnits.indexOf(mindd)
        console.log(indexMin)
        const objMin= data[indexMin]
        setDataOwner([objMin]) 
     }
     const ascOrderUnits = () => {
         const datasort = dataOwner.sort((a,b) => b.unids-a.unids)
        console.log(datasort)
        setDataOwner(datasort)  
     }
    return(
        <div>
            <header>
                <h1>Stock</h1>
            </header>
            <body>
                <section className='sectionbody'>
                    <div  className='btns'>
                        <button onClick={maxSale} class="btn btn-success">Quien vendio mas</button>
                        <button onClick={minSale} class="btn btn-success">Quien vendio menos</button>
                        <button onClick={maxUnits} class="btn btn-success">Quien tiene mas Unds.</button>
                        <button onClick={minUnits} class="btn btn-success">Quien tiene menos Unds.</button>
                        <button onClick={ascOrderUnits} class="btn btn-success">Ordenar de mayor a menor por Unds.</button>
                    </div>
                    <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Propietario</th>
                            <th>Empresa</th>
                            <th>Producto</th>
                            <th>Monto(S/.)</th>
                            <th>Unidades</th>
                            <th>Ventas</th>
                        </tr>
                        </thead>
                        <tbody>
                            { 
                                dataOwner.map(item => {
                                    return  (
                                        <tr>
                                            <ItemOwner item={item} />
                                        </tr>)
                                    }  
                                ) 
                            }
                        </tbody>
                    </table>
                    </div> 
                </section>
            </body>
        </div>
        
    )

}
export default Owner;