import React, { Component } from 'react'
class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokeDex: []
        }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData = async () => {
        console.log("did it fetch")
        const response = await fetch("https://pokeapi.co/ ")
        const json = await response.json();
        this.setState({ pokeDex: json })
    }


    render() {       
        return (  
                      
            this.state.pokeDex.results.map((pokemon, idx) => {
                return (
                    <div key = {idx}>
                        
                        <p>{pokemon.name}</p>
                        <p>{pokemon.url}</p>
                    </div>
                )
            })
        )

    }

}
export default AppContainer;
