import React from 'react';
import Slider from 'react-slick';
import { ProductCard } from "../../components"
import { products } from '../../utils/products';
import Profile from '../../LEIZY_SOCIALS.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import css from './AboutUsPage.module.css';

const AboutUsPage = () => {
    const images = [
        "/images/DracoHalfBody.png",
        "/images/Sunhiereferencesheet.png",
        "/images/DracoHalfBody2.png"
    ];

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (


        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto' }}>

            <h1>Sobre Mi</h1>
            <p>
               ¡Hola soy ItzLeizy!, Un artista apasionado por la ilustración y Arte conceptual para personajes. Disfruto mucho de crear, diseñar 
                Y explorar nuevas ideas que lleven a mundos increíbles. 
                Mi trabajo demuestra creatividad, dedicación e innovación.
            </p>

            <h2>Ejemplos</h2>
            
            <Slider {...carouselSettings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img 
                            src={src} 
                            alt={`Slide ${index + 1}`} 
                            style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
                        />
                    </div>
                    ))}
            </Slider>

            <h2>¿Interesado en comisiones?</h2>
            <div className={css.ProductList}>
                {products.map((product) => {
                    return <ProductCard key={product.id} product={product} className={css.ProductList__card}/>
                    
                })}
            </div>

            <div style={{ display: 'flex', marginTop: '40px', gap: '20px', color: 'black' }}>
                {/* Columna de redes sociales */}
                <div style={{ flex: 1 }}>
                    <h2>¡Puedes encontrarme aquí!</h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li>
                            <a href="https://twitch.com/ItzLeizy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'orange' }}>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/ItzLeizy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'orange' }}>
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com/@itzleizy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'orange' }}>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/itsleizy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'orange' }}>
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Columna de imagen */}
                <div style={{ flex: 1, textAlign: 'center' }}>
                <img src={Profile} alt="profile"
                        style={{ width: '70%', height: 'auto', borderRadius: '8px' }} 
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutUsPage;
