import React, { Component } from 'react'
class AppContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokeDex: [] // you are defining pokeDex as an array
        }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData = async () => {
        console.log("did it fetch")
        const response = await fetch("https://pokeapi.co/ ") // this is the wrong url
        const json = await response.json();
        // console.log(json) // printing your json variable to the console is a good check
        this.setState({ pokeDex: json })
    }


    render() {  
        // you can access properties of an array using dot notation     
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
