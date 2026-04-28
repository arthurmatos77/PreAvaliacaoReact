import './style.css'


import { Link } from 'react-router-dom'

import './style.css'

import { useState } from 'react'



function Exercicio1 () {

 const [nome, setNome] = useState("")

 const [preco, setPreco] = useState("")

 const [resultado, setResultado] = useState("")



 function handleSubmit(event) {

event.preventDefault()

 const valor = parseFloat(preco)



 setResultado(`O produto ${nome} custa R$ ${valor.toFixed(2)}`)

 }



 return (

 <>

<h2>Colocar nome e preço</h2>


 <form onSubmit={handleSubmit}>

 <label>Nome</label>

 <input

type="text"

value={nome}

onChange={(e) => setNome(e.target.value)}

 />



 <label>Preço</label>

 <input

type="number"

value={preco}

onChange={(e) => setPreco(e.target.value)}

 />

 <p>{resultado}</p>



<button type="submit">Enviar</button>

</form>



 <Link to="/home">

 <button>Navegar para Home</button>

 </Link>

 </>
 )

}


export default Exercicio1 

