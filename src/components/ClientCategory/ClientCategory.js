import "../Style/style.css"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom/dist';
import "../Style/style.css";

const ClientCategory = ({ setCurrentStep }) => {
    setCurrentStep(2)
    const navigate = useNavigate();
    const Client = JSON.parse(localStorage.getItem('StoredClient'));

    const handleChooseCategory = (category) => {
        localStorage.setItem('selectedCategory', category);
        setCurrentStep(3);
        navigate('/clientSubCategory');
    };

    const handleGoBack = () => {
        localStorage.setItem('category', '');
        setCurrentStep(1);
        navigate('/');
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true, // Autoplay slides
        autoplaySpeed: 2500,
        arrows: false,
    };

    return (
        <div className="container-fluid">
            <h1 className="text-center text-dark ">Quelle est votre catégorie ?</h1>

            <div className="d-none d-md-block">
                {/* Display cards in a row on desktop screens */}
                <div className="row justify-content-center">
                    {Client.map((c, index) => (
                        <div key={index} className="col-md-3 mb-4 ">
                            <div className="card" style={{ backgroundImage: `url(${c.img})` }}>
                                <div className="card-overlay">
                                    <h2 className="card-title">{c.category}</h2>
                                    <button className="btn" onClick={() => handleChooseCategory(c.category)}>Choisir</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="d-block d-md-none">
                {/* Display cards in a slider on phone screens */}
                <Slider {...settings}>
                    {Client.map((c, index) => (
                        <div key={index} className="col-md-3 mb-4 ">
                            <div className="card" style={{ backgroundImage: `url(${c.img})` }}>
                                <div className="card-overlay">
                                    <h2 className="card-title">{c.category}</h2>
                                    <button className="btn" onClick={() => handleChooseCategory(c.category)}>Choisir</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="text-center">
                <button className="return-button" onClick={handleGoBack}>Retour</button>
            </div>
        </div>
    );
};

export default ClientCategory;
