import React from 'react';
import css from './App.module.css';

function App() {
  return (
    <div className={css.App}>
      {/* Hero Section */}
      <header className={css.App_hero}>
        <h1>¡Bienvenido a la cueva del oso!</h1>
        <p>Artista-Gamer-Gritón</p>
        <a
          className={css.App_cta}
          href="#gallery"
          style={{
            padding: '10px 20px',
            backgroundColor: 'orange',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '16px',
          }}
        >
          ¡Conóceme!
        </a>
      </header>

      {/* About Me Section */}
      <section style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <h1>¿Quién soy?</h1>
        <p>
          ¡Hola soy ItzLeizy!, Un artista apasionado por la ilustración y Arte conceptual para personajes. Disfruto mucho de crear, diseñar 
                Y explorar nuevas ideas que lleven a mundos increíbles. 
                Mi trabajo demuestra creatividad, dedicación e innovación.
        </p>
      </section>

      {/* Gallery Section */}
      <section id="gallery" style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
        <h2>Un poco de mi trabajo...</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          <img
            src="/images/artwork1.png"
            alt="Artwork 1"
            style={{ width: '400px', height: 'auto', borderRadius: '8px' }}
          />
          <img
            src="/images/artwork2.png"
            alt="Artwork 2"
            style={{ width: '600px', height: 'auto', borderRadius: '8px' }}
          />
          <img
            src="../../images/artwork3.png"
            alt="Artwork 3"
            style={{ width: '300px', height: 'auto', borderRadius: '8px' }}
          />
          <img
            src="../../images/artwork4.png"
            alt="Artwork 4"
            style={{ width: '400px', height: 'auto', borderRadius: '8px' }}
          />
        </div>
      </section>

      {/* Contact Section */}
      <footer style={{ padding: '20px', backgroundColor: 'orange', color: '#black', textAlign: 'center' }}>
        <h2>Contactos</h2>
        <p>
          ¿Te interesa trabajar conmigo? ¡Puedes contactarme por aqui!
        </p>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <li>
            <a
              href="mailto:leizycommissions@gmail.com"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/itsleizy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/itzleizy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Twitter
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
