import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/style.css"
export default function ClientSubCategory({ setCurrentStep }) {
    const selectedCategory = localStorage.getItem('selectedCategory');
    const Client = JSON.parse(localStorage.getItem('StoredClient'));

    setCurrentStep(3);
    const navigate = useNavigate();

    const handleChooseSubCategory = (subcategory) => {
        localStorage.setItem("SelectedSubCategory", subcategory);
        setCurrentStep(4);
        if (subcategory === "Start-up") {
            navigate('/startupType');
        } else if (subcategory === "Auto-entrepreneur" || subcategory === "Offline Busines" || subcategory === "Profession libérale") {
            navigate('/sectors');
        } else if (subcategory === "Questions/réponses") {
            navigate('/questionForm')
        } else {
            navigate('/Infos');
        }
    };
    const handleGoBack = () => {
        setCurrentStep(2);
        navigate('/clientCategory');
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
            <h1 className="text-center text-dark">Quelle est votre sous catégorie?</h1>
            <div className="d-none d-md-block">
                {Client.map((clientItem, index) => (
                    clientItem.category === selectedCategory && (
                        <div key={index} className="row justify-content-center">
                            {clientItem.subcategory.map((subcategory, subIndex) => (
                                <div key={subIndex} className="col-md-3 mb-4">
                                    <div className="card" style={{ backgroundImage: `url(${subcategory.img})` }}>
                                        <div className="card-overlay">
                                            <h2 className="card-title">{subcategory.title}</h2>
                                            <button className="btn" onClick={() => handleChooseSubCategory(subcategory.title)}>Choisir</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                ))}
            </div>
            <div className="d-block d-md-none">
               
                    {Client.map((clientItem, index) => (
                        clientItem.category === selectedCategory && (
                            <div key={index} className="row justify-content-center">
                                 <Slider {...settings}>
                                {clientItem.subcategory.map((subcategory, subIndex) => (
                                    <div  key={subIndex} className="col-md-3 mb-4"  >
                                        <div key={subIndex} className="card" style={{ backgroundImage: `url(${subcategory.img})` }}>
                                            <div className="card-overlay">
                                                <h2  className="card-title" >{subcategory.title}</h2>
                                                <button className="btn" onClick={() => handleChooseSubCategory(subcategory.title)}>Choisir</button>
                                            </div>
                                        </div>
                                    </div>
                                ))} </Slider>
                            </div>
                        )
                    ))}
               
            </div>
            <div className="text-center ">
                <button className="return-button" onClick={handleGoBack}>Retour</button>
            </div>
        </div>
    );

}
