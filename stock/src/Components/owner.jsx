import React from 'react'
import data from '../Data/data'
import { useState } from 'react'
import MaxSell from './maxSell'
import ItemOwner from './itemOwner'


const Owner = () => {
    console.log(data)
    const [dataOwner, setDataOwner] = useState(data)
    //const [maxSell, setMaxSell] = useState([])

    const moreSale = () => {
       const arrSells= data.map(item=>item.sell)
       const maxdd=Math.max(...arrSells)
       console.log(maxdd)
       const indexMax = arrSells.indexOf(maxdd)
       console.log(indexMax)
       console.log(dataOwner[indexMax])
       const objMax= dataOwner[indexMax]
       console.log(objMax)
       setDataOwner([objMax])
      /*  return(
           <div>
                {
                    <MaxSell maxsell={dataOwner} />
                }
           </div>
          
       ) */

    }
    return(
        <div>
            <header>
                <h1>Stock</h1>
            </header>
            <body>
                <section>
                    <div>
                        <button onClick={moreSale}>Quien vendio mas</button>
                        <button>Quien vendio menos</button>
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
                             return  ( <tr>
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