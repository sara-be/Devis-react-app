import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/style.css";
import { useNavigate } from "react-router-dom";

export default function Services({ setCurrentStep, setService }) {
  const Services = [
    { id: 1, name: "Marketing Digitale", img: "https://media.istockphoto.com/id/1452731336/fr/photo/m%C3%A9gaphone-de-couleur-bleue-se-d%C3%A9marquant-de-la-foule.webp?b=1&s=170667a&w=0&k=20&c=rEWLZIr7V6-qatE0RaQdfR7_4hE3lQt8F4ugn0eKhxE=" },
    { id: 2, name: "Développement web/mobile", img: "https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" },
    { id: 3, name: "Audio-visuel", img: "https://media.istockphoto.com/id/1413985906/fr/photo/audio-vid%C3%A9o-t%C3%A9l%C3%A9-timeline-avec-boutons-indicateurs-basculer-les-commutateurs-en-gros-plan.webp?b=1&s=170667a&w=0&k=20&c=qwDlmgzsaQKs2RkWhEbf3aQt6pT2XAaP_0QqhN1eoK0=" },
    { id: 4, name: "Design/Infographie", img: "https://media.istockphoto.com/id/1483745473/fr/photo/le-graphiste-travaille-sur-un-ordinateur-portable-avec-un-stylo-num%C3%A9rique-scruter.webp?b=1&s=170667a&w=0&k=20&c=B54QtisN4d73Wca1VHQ8QUErUSGii-0tVNrP1OUC3VA=" },
    { id: 5, name: "Montage des vidéos", img: "https://images.pexels.com/photos/5628244/pexels-photo-5628244.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 6, name: "Formation/Coaching", img: "https://media.istockphoto.com/id/1093925980/fr/photo/groupe-heureux-des-personnes-qui-apprennent-le-g%C3%A9nie-logiciel-et-affaires-au-cours-de-la.webp?b=1&s=170667a&w=0&k=20&c=ao1F_74f1S04RPOWGLN1SmIVvCYrvIfXQptE7Nz2wJg=" }
  ];


  setCurrentStep(1);
  
  const navigate = useNavigate();
  const handleSave = (name) => {
    setCurrentStep(2);
    navigate("/clientCategory");
    localStorage.setItem("selectedService", name);
    setService(name);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3.5,
    slidesToScroll: 0,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true, // Autoplay slides
    autoplaySpeed: 2000, // Delay between slides in milliseconds
    arrows: false, // Show navigation arrows
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 0,
          centerMode: true,
          focusOnSelect: true
        }
      }
    ]
  };


  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark ">Nos Services </h1>

      <Slider {...settings}>
        {Services.map((service) => (
          <div key={service.id} className="col-md-4 mb-4 m-10 ">
            <div className="card" style={{ backgroundImage: `url(${service.img})` }}>
              <div className="card-overlay">
                <h2 className="card-title" >{service.name}</h2>
                <button onClick={() => handleSave(service.name)} className="btn">
                  Choisir
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
