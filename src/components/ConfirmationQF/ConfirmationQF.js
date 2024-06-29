import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

export default function Confirmation({setCurrentStep ,  setComplete}) {
  setCurrentStep(5) // removed useEffect because it runs a warning
  const navigate = useNavigate();

  const formData = JSON.parse(localStorage.getItem("formData"));
  const { nomComplet, numeroTelephone, votreMessage } = formData;
  const service = localStorage.getItem("selectedService");
  const selectedCategory = localStorage.getItem("selectedCategory");
  const selectedSubCategory = localStorage.getItem("SelectedSubCategory");
  const notify = () => toast("Vos informations ont été envoyées !");
  const notifyerror=()=>toast("Vos informations ont pas envoyées !")

  const handleSend = (e) => {
    e.preventDefault();

    //the Email details 
    const Serviceid = "service_tv8jfdr";
    const Templateid = "template_ejrd656";
    const publicKey = "demKCJhSs9qaBrKeJ";
    // create a new object that contains the dynamic  template params 
    const tamplateparams = {
      Nom_Complete: formData.nomComplet,
      Telephone: formData.numeroTelephone,
      message: formData.votreMessage,
      to_name: "Allo Baba Agence"
    }
    //send this infos to the email 
    emailjs.send(Serviceid, Templateid, tamplateparams, publicKey).then((res) => {
      console.log("email sent successfully ", res);
      notify()
      setComplete(true);

    }).catch((error) => {
      console.log("error sending email: ", error);
      notifyerror()
    })

  };


  const handleBack = () => {
    navigate(-1);
    setComplete(false); };

  return (
    <>
      <div className="table-container">
        <table className="styled-table">
            <tr>
              <th>Nom complet</th>
              <td>{nomComplet}</td>
            </tr>
            <tr>
              <th>Numéro de téléphone</th>
              <td>{numeroTelephone}</td>
            </tr>
            <tr>
              <th>Message</th>
              <td>{votreMessage}</td>
            </tr>
            <tr>
              <th>Service</th>
              <td>{service}</td>
            </tr>
            <tr>
              <th>Catégorie</th>
              <td>{selectedCategory}</td>
            </tr>
            <tr>
              <th>Sous-catégorie</th>
              <td>{selectedSubCategory}</td>
            </tr>
        </table>
      </div>
      <div className="button-container">
        <button className="styled-button" onClick={handleBack}>
          Retour
        </button>
        <button className="styled-button" onClick={(e)=>handleSend(e)}>
          Envoyer
        </button>
        <ToastContainer/>
      </div>
    </>
  );
}
