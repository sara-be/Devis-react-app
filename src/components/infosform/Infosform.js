
import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-international-phone/style.css';
import { PhoneInput } from 'react-international-phone';
import "./Infosform.css";

export default function Infos({ setCurrentStep, setForm, Form }) {
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telephoneError, setTelephoneError] = useState("");
  const navigate = useNavigate();

  const handlechange = (id, value) => {
    let isValidInput = true;
    let error = "";

    switch (id) {
      case "Nom":
        isValidInput = /^[a-zA-Z]+\s*[a-zA-Z]*$/.test(value);
        error = isValidInput ? "" : `Invalide ${id}`;
        setNameError(error);
        break;
      case "Prénom":
        isValidInput = /^[a-zA-Z]+\s*[a-zA-Z]*$/.test(value);
        error = isValidInput ? "" : `Invalide ${id}`;
        setLastNameError(error);
        break;
      case "Email":
        isValidInput = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        error = isValidInput ? "" : `Invalide ${id}`;
        setEmailError(error);
        break;
      case "Téléphone":
        isValidInput = /^\+\d{1,3}\d{9}$/.test(value);
        error = isValidInput ? "" : `Invalide ${id}`;
        setTelephoneError(error);
        break;
      default:
        break;
    }

    setForm((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleconfirmer = (e) => {
    e.preventDefault();
    if (nameError || lastNameError || emailError || telephoneError) {
      toast.error("Vous devez remplir tous les champs");
    } else if (!Form.Nom || !Form.Prénom || !Form.Email || !Form.Téléphone) {
      toast.error("Vous devez remplir tous les champs");
    } else {
      localStorage.setItem("Form", JSON.stringify(Form));
      setCurrentStep(5);
      navigate("/Confirmation");
    }
  };

  const handleGoBack = () => {
    setCurrentStep(3);
    navigate("/clientSubCategory");
  };

  return (
    <div className="container-fluid rounded d-flex justify-content-center align-items-center">
      <div className="col-sm-10 col-md-6 col-lg-4">
        <h1 className='headerQF text-center mb-4'>Informations</h1>
        <form className="border p-4 rounded border-secondary">
          <div className="form-group mb-1">
            <label htmlFor="name">Nom</label>
            <input type="text" id="Nom" className={`form-control ${nameError && 'is-invalid'}`} onChange={(e) => handlechange("Nom", e.target.value)} value={Form.Nom || ''} required />
            {nameError && <div className="invalid-feedback">{nameError}</div>}
          </div>
          <div className="form-group mb-1">
            <label htmlFor="lastName">Prénom</label>
            <input type="text" id="Prénom" className={`form-control ${lastNameError && 'is-invalid'}`} onChange={(e) => handlechange("Prénom", e.target.value)} value={Form.Prénom || ''} required />
            {lastNameError && <div className="invalid-feedback">{lastNameError}</div>}
          </div>
          <div className="form-group mb-1">
            <label htmlFor="Email">Email</label>
            <input type="email" id="Email" className={`form-control ${emailError && 'is-invalid'}`} onChange={(e) => handlechange("Email", e.target.value)} value={Form.Email || ''} required />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
          </div>
          <div className="form-group mb-1">
            <label htmlFor="telephone">Téléphone :</label>
            <PhoneInput defaultCountry="US" type="tel" id="Téléphone" className={`form-control ${telephoneError && 'is-invalid'}`} onChange={(value) => handlechange("Téléphone", value)} value={Form.Téléphone || ''} rules={{ required: true }} />
            {telephoneError && <div className="invalid-feedback">{telephoneError}</div>}
          </div>
          <div className="button-container">
            <button className="styled-button" onClick={handleGoBack}>Retour</button>
            <button className="styled-button" onClick={handleconfirmer}>Confirmer</button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
}
