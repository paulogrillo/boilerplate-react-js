import {useState} from 'react';
// user = hooks

export function Counter(){

const [counter, setCounter] = useState(0);
// Imutabilidade e set

// O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências a objetos.

function increment(){
setCounter(counter + 1);
}

    return(
    <div>
        <h2>{counter}</h2>
        <button 
        type="button" 
        onClick={increment}>
            increment 
        </button>
    </div>
    );
}