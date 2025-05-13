import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {

  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);

  const sortedCast = [...actors, ...actresses].sort((a, b) => a.name.localeCompare(b.name))

  const fetchActors = () => {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then(res => setActors(res.data)).catch(error => console.error("Errore di caricamento Attori ", error));
  }

  const fetchActresses = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then(res => setActresses(res.data)).catch(error => console.error("Errore di caricamento Attori ", error));
  }

  useEffect(() => {
    fetchActors();
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
                    <div className="card">
                      <div className="card-header">
                        <img
                          src={actor.image}
                          alt={`actor ${actor.name}`}
                          className='card-img-top'
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{actor.name}</h5>
                        <p className="card-text">{actor.birth_year} - {actor.nationality}</p>
                        <p className="card-text">{actor.biography}</p>
                        <p className="card-text">
                          <em>{actor.awards.join(", ")}</em>
                        </p>
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
                    <div className="card">
                      <div className="card-header">
                        <img
                          src={actress.image}
                          alt={`actress ${actress.name}`}
                          className='card-img-top'
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{actress.name}</h5>
                        <p className="card-text">{actress.birth_year} - {actress.nationality}</p>
                        <p className="card-text">{actress.biography}</p>
                        <p className="card-text">
                          <em>{actress.awards}</em>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="row g-3">
              {sortedCast.map(pers => (
                <div
                  className="col-12"
                  key={`pers-${pers.id}`}
                >
                  <div className="card">
                    <div className="card-header">
                      <img
                        src={pers.image}
                        alt={`pers ${pers.name}`}
                        className='card-img-top'
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{pers.name}</h5>
                      <p className="card-text">{pers.birth_year} - {pers.nationality}</p>
                      <p className="card-text">{pers.biography}</p>
                      <p className="card-text">
                        <em>{pers.awards}</em>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
