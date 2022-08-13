import { Component } from "react"

class List extends Component{
    constructor(props) {
        super(props)
        this.state={
            products :  ['sabun', 'sampo', 'pasta gigi'],
            productsInfo : [{id:1,brand: 'sabun'},
                            {id: 2, brand: 'sampo'},
                            {id: 3, brand: 'pasta gigi'}]
        }
    }

    render(){
        
        return(
            <div>
                <ul>
                    {this.state.products.map(p => <li>{p}</li>)}
                    {/* object */}
                    {this.state.productsInfo.map(p => <li key={p.id}>id = {p.id} brand = {p.brand}</li>)}
                </ul>
            </div>
        )
    }
}

export default List;