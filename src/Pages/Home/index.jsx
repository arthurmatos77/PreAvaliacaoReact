import { Link } from 'react-router-dom'
import './style.css'

function Home() {
return (
<>
<h2>PreAvaliacao</h2>
    <Link to='/exercicio1'>
        <button>Navegar para Exercicio1</button>
    </Link>
</>
)
}

export default Home