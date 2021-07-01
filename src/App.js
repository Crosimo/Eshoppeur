import React, { Component } from 'react';
import Articles from './Composants/Articles';
import Panier from "./Composants/Panier"
class App extends Component {
    state = {
        argent: 20,
        panier: [],
        articles: [
            { nom: "Ananas", prix: 5, stock: 2, url: "/images/ananas.jpg", key: Math.random() },
            { nom: "Fraise", prix: 2.5, stock: 20, url: "./images/fraise.jpg", key: Math.random() },
            { nom: "Pomme", prix: 3.25, stock: 5, url: "./images/guoyave.jpg" ,key: Math.random() },
        ]
    }
    acheterHandler(gratuit) {
        this.setState((prevState) => {
            return {
                ...prevState,
                argent: prevState.argent -= gratuit.prix,
                panier: [...prevState.panier, gratuit],
            }
            
        })
        gratuit.stock -= 1;
    }

    rendreHandler(rend) {
        this.state.panier.splice(rend, 1)
        this.setState((prevState) => {
            console.log(prevState.panier);
            return {
                ...prevState,
                argent: prevState.argent += rend.prix,
            }
           
        })
        rend.stock += 1
       
    }
    render() {
        
        return (
            <div>
                <Articles objet={this.state} acheter={this.acheterHandler.bind(this)} />
                
                <Panier objet={this.state} rendre={ this.rendreHandler.bind(this) }/>
            </div>
        );
    }
}
export default App;
