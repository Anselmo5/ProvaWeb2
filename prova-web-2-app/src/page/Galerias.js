import React from 'react'
import { useEffect, useState } from 'react';
import './Galerias.css'

const pets = [
  { id: 1, nome: "Tobby", especie: "Cachorro", idade: 4 },
  { id: 2, nome: "Mia", especie: "Gato", idade: 2 },
  { id: 3, nome: "Luna", especie: "Cachorro", idade: 1 },
  { id: 4, nome: "Nino", especie: "Gato", idade: 3 },
  { id: 5, nome: "Bolt", especie: "Cachorro", idade: 5 },
  { id: 6, nome: "Frajola", especie: "Gato", idade: 6 },
  { id: 7, nome: "Pipoca", especie: "Cachorro", idade: 2 },
  { id: 8, nome: "Tom", especie: "Gato", idade: 3 },
  { id: 9, nome: "Mel", especie: "Cachorro", idade: 1 },
  { id: 10, nome: "Bidu", especie: "Cachorro", idade: 7 },
  { id: 11, nome: "Salem", especie: "Gato", idade: 2 },
  { id: 12, nome: "Max", especie: "Cachorro", idade: 3 },
  { id: 13, nome: "Amora", especie: "Gato", idade: 5 },
  { id: 14, nome: "Nina", especie: "Cachorro", idade: 4 },
  { id: 15, nome: "Simba", especie: "Gato", idade: 2 }
];
const Galerias = () => {
const [Pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = () => {
      setTimeout(() => {
        setPets(pets);
      }); 
    };



    fetchPets();
    console.log("Página da galeria carregada")
  }, []);

  return (
    <div>
        <main className='FundoPets'>
          <div className='InfoPets'>
           <h2>Galerias de Pets</h2>
            <p>Total de pets disponivei: 15</p>
        </div>

        <ul>
          {pets.map(petsDados=> (
            <div className='alingCard'>
            <li key={petsDados.id}>
                  <div className='Cards'>
                    <div className='NomePet'>
                        <h2>{petsDados.nome}</h2>
                    </div>

                    <div className='sobrePet'>
                      <h3>Espécie:  <span>{petsDados.especie}</span></h3>
                      <h3>Idade: <span>{petsDados.idade}</span></h3>
                    </div>
                  </div>
            </li>
            </div>
          ))}
        </ul>
        </main>
    </div>
  )
}

export default Galerias
