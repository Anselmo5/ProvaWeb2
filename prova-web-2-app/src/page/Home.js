import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className='FundoHome'>
      <div>
        <section className='home-container'>
          <h1>Bem-vindo ao <span>PetFinder</span></h1>
          <p>Conectamos você a pets incriveis que estão progurando um novo lar!</p>
          <Link to="/galerias" className="btn-home">Explorar Galeria</Link>
        </section>
      </div>
    </main>
    
  );
}


