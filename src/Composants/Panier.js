import React, { Component } from 'react';

class Panier extends Component {
    render() {
        return (
            <div>
                {this.props.objet.panier.map((e) => {
                    
                 return   <p key = {Math.random()}>Produit :{e.nom} || Unités : {1} <button onClick = {()=>this.props.rendre(e)}> Rendre </button>  </p>
                })}
             {console.log(this.props.objet.panier)}
            </div>
        );
    }
}

export default Panier;
