import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css"; // Importer le fichier CSS pour le style

function Footer() {
  return (
    <footer className="footer text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="footer-header">Contactez-nous</h2>
            <ul className="list-unstyled contact-list">
              <li>
                <a href="mailto:contact@allobaba.co">
                  <i className="bi bi-envelope"></i>&nbsp;
                  <span>Email : contact@allobaba.co</span>
                </a>
              </li>
              <li>
                <a href="tel:+212664072360">
                  <i className="bi bi-telephone-fill"></i>&nbsp;
                  <span>Téléphone : +212 664072360</span>
                </a>
              </li>
              <li>
                <i className="bi bi-calendar"></i>&nbsp;
                <span>Horaires : Du Lundi au Samedi - 10h:00 à 17h:00</span>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/PnPtqJJNKtukxrTXA" target="_blank" rel="noopener noreferrer" className="address-link">
                  <i className="bi bi-geo-alt-fill"></i>&nbsp;
                  <span>26, 5ème étage, Rue Mouslim, Résidence Boukar, Marrakech 40000, Maroc.</span>
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} className="text-md-right">
            
            <h2 className="footer-header">Réseaux sociaux</h2>
            <ul className="list-inline social-media-list">
              <li className="list-inline-item">
                <a href="https://web.facebook.com/AlloBaba.ma">
                  <i className="bi bi-facebook fs-3"></i>&nbsp;
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/AlloBaba_">
                  <i className="bi bi-twitter fs-3"></i>&nbsp;
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/company/allobaba/">
                  <i className="bi bi-linkedin fs-3"></i>&nbsp;
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr /> 
        <Row>
          <Col>
            <div className="text-center">
              &copy;{new Date().getUTCFullYear()} TOUS DROITS RÉSERVÉS - ALLOBABA HOLDING
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
