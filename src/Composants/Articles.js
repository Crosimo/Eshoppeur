import React, { Component } from 'react';
import styles from "./Articles.module.css"
class Articles extends Component {
    
    quelCouleur(e) {
        let couleur = "";

        if (e.stock === 0) {
            couleur = `${styles.divid} ${styles.dead}`
        } else if (e.stock === 1) {
            couleur = `${styles.divid} ${styles.chaud}`
        } else if (e.stock>1) {
            couleur = `${styles.divid} ${styles.normal}`
        }
        return couleur
    }
   
    render() {
        
        return (
            <React.Fragment>
            <h1>Argent : { this.props.objet.argent >0 ? this.props.objet.argent: 0 }</h1>
                <div className={ styles.flexeur}>
                    {this.props.objet.articles.map((e, i) => {
                    
                    return( <div key={Math.random()}>
                    <img className={styles.imagerie} src= {e.url} alt = "article"></img>
                        <div className={this.quelCouleur(e)}>
                       
                        <h1>{e.nom}</h1>
                        <p>Prix : {e.prix}</p>
                            {e.stock>0  ? <p>Stock : {e.stock} unités</p> : <p>We are out of stock</p>}
                           {( e.stock>0 && this.props.objet.argent>0 )&& <button onClick={()=>
                              {this.props.acheter(e)  }
                        }>Acheter</button>}
                    </div>
                </div>)
                })}  
            </div>
            </React.Fragment>
        );
    }
}
export default Articles;