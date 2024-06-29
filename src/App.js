 import './App.css';
import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from './components/services/Services';
import Infos from './components/infosform/Infosform';
import Progressbar from './components/ProgressBar/Progressbar';
import ClientCategory from './components/ClientCategory/ClientCategory';
import {  HashRouter as Router,  Routes, Route } from 'react-router-dom';
import ClientSubCategory from './components/ClientSubCategory/ClientSubCategory';
import StartupType from './components/StartupType/StartupType';
import Sectors from './components/Sectors/Sectors';
import QuestionForm from './components/QuestionForm/QuestionForm';
import Confirmation from './components/Confirmation/Confirmation';
// import Preloader from './components/Preloader/Preloader';
import ConfirmationQF from './components/ConfirmationQF/ConfirmationQF';
function App() {
  const Client = [
    { "category": "Particulier", "subcategory": [{ "title": "Auto-entrepreneur", "img": "https://media.istockphoto.com/id/1130480436/fr/photo/jeune-homme-parlant-au-t%C3%A9l%C3%A9phone-dans-son-bureau-%C3%A0-la-maison.jpg?b=1&s=612x612&w=0&k=20&c=Fz9gQQbfEQx-6yglZwvUW_kOr4gl2pJvslDmGYvkD9c=", "secteurs": ["Services de conseil en marketing", "Services de design graphique", "Services de photographie", "Services de développement web", "Services de formation", "Services de coaching", "Services de jardinage", "Services de réparation et de maintenance"] }, { "title": "Profession libérale", "img": "https://images.pexels.com/photos/6205607/pexels-photo-6205607.jpeg?auto=compress&cs=tinysrgb&w=600", "secteurs": ["Services informatiques", "Services techniques", "Services éducatifs", "Services artistiques", "Services de santé mentale", "Services médicaux et paramédicaux", "Services de conseil", "Services comptables et fiscaux", "Services juridiques"] }, { "title": "Offline Busines", "img": "https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=600", "secteurs": ["Restauration", "Bâtiment", "Transport", "Santé", "Éducation", "Tourisme", "Beauté", "Artisanat", "Sécurité", "Recyclage"] }], "img": "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { "category": "Entreprise", "subcategory": [{ "title": "Start-up", "type": ["Startups sociales", "E-Commerce", "Technologie Financière", "Technologie de la santé", "SaaS", "Biotechnologie", "Education"], "img": "https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?auto=compress&cs=tinysrgb&w=600" }, { "title": "TPE-PME", "img": "/images/tpe-pme.png" }, { "title": "Grande Entreprise/Multi-nationale", "img": "https://media.istockphoto.com/id/178447404/fr/photo/b%C3%A2timents-daffaires-moderne.jpg?b=1&s=612x612&w=0&k=20&c=e4slfHvdNeGj7I5RRuXpt6Xyhe4RGr-nYzPF3KCS1Xc=" }], "img": "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { "category": "Association/NGO", "subcategory": [{ "title": "Prestation", "img": "https://media.istockphoto.com/id/1339357905/fr/photo/l%C3%A9quipe-daffaires-c%C3%A9l%C3%A8bre-le-succ%C3%A8s-avec-un-high-five.webp?b=1&s=170667a&w=0&k=20&c=X2EIZNnHj0udn1uQyHkizT4CptCAbWpDNyooajrhoeE=" }, { "title": "Questions/réponses", "img": "https://images.pexels.com/photos/5428826/pexels-photo-5428826.jpeg?auto=compress&cs=tinysrgb&w=600" }], "img": "https://media.istockphoto.com/id/1344903849/fr/photo/les-gens-en-papier-encha%C3%AEnent-avec-les-c%C5%93urs-concept-de-travail-d%C3%A9quipe-et-damour.jpg?b=1&s=612x612&w=0&k=20&c=8NiYWJ0Rmb6aNwLJAFAbx9iynItW2wC06B3C0u2SK6A=" }
  ]

  // Stockage dans le local storage
  localStorage.setItem('StoredClient', JSON.stringify(Client));
  const [Form, setForm] = useState({ Nom: "", Prénom: "", Email: "", Téléphone: "" });
  const [service, setService] = useState("")
  const [complete, setComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>

      {/* <Preloader /> */}
      <div className="App">
        <Progressbar setCurrentStep={setCurrentStep} currentStep={currentStep}complete={complete} />
        <Router hashType="slash"> {/* Use HashRouter with hashType="slash" */}
          <Routes>
            <Route path="/" element={<Service setCurrentStep={setCurrentStep} setService={setService} />} />
            <Route path="/clientCategory" element={<ClientCategory setCurrentStep={setCurrentStep}  />} />
            <Route path="/clientSubCategory" element={<ClientSubCategory setCurrentStep={setCurrentStep}  />} />
            <Route path="/startupType" element={<StartupType setCurrentStep={setCurrentStep}/>} />
            <Route path="/sectors" element={<Sectors  setCurrentStep={setCurrentStep} Client={Client} />} />
            <Route path="questionForm" element={<QuestionForm  setCurrentStep={setCurrentStep}/>} />
            <Route path="/Confirmation" element={<Confirmation setForm={setForm} setComplete={setComplete}setCurrentStep={setCurrentStep} Form={Form} Service={service} />} />
            <Route path="/Infos" element={<Infos Form={Form} setCurrentStep={setCurrentStep} setForm={setForm} />} />
            <Route path="/confirmationQF" element={<ConfirmationQF setComplete={setComplete} setCurrentStep={setCurrentStep}/>} />
          </Routes>
        </Router>
      </div>
    </>

  )
}

export default App;
