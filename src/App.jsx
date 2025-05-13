import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {

  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);

  const fetchActors = () => {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then(res => setActors(res.data)).catch(error => console.error("Errore di caricamento Attori ", error));
  }

  const fetchActresses = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then(res => setActresses(res.data)).catch(error => console.error("Errore di caricamento Attori ", error));
  }

  useEffect(() => {
    fetchActors();
  }, [])

  useEffect(() => {
    fetchActresses();
  }, [])

  return (
    <>
      <div className="container">
        <header className='text-center my-4'>
          <h1>Cast Fetching</h1>
        </header>

        <main>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 text-center">
              <h3>Attori</h3>
              <div className="row g-3">
                {actors.map(actor => (
                  <div
                    className="col-12"
                    key={`actor-${actor.id}`}
                  >
                    <div className="card d-flex">
                      <div className="act-image">
                        <img
                          src={actor.image}
                          alt={`actor ${actor.name}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-md-6 text-center">
              <h3>Attrici</h3>
              <div className="row g-3">
                {actresses.map(actress => (
                  <div
                    className="col-12"
                    key={`actress-${actress.id}`}
                  >
                    <div className="card d-flex">
                      <div className="act-image">
                        <img
                          src={actress.image}
                          alt={`actress ${actress.name}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
