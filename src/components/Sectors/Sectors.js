import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Sectors({ setCurrentStep, Client }) {
    setCurrentStep(3);
    const navigate = useNavigate();
    const storedClient = Client;
    const selectedSubCategory = localStorage.getItem('SelectedSubCategory');

    const [selectedSector, setSelectedSector] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [autreActive, setAutreActive] = useState(false);
    const [autreValue, setAutreValue] = useState('');

    const handleSectorChange = (event) => { // handle changefor the select
        const selectedSector = event.target.value;

        if (selectedSector === 'autre') { // Choosing Autre option
            setAutreActive(true);
            setSelectedSector('');
        } else {                            //Choosing Another option
            setSelectedSector(selectedSector);
            setAutreActive(false);
            setAutreValue('');
        }
        setErrorMessage('');
    };

    const handleAutreChange = (event) => {  // Change input Autre
        const value = event.target.value;
        setSelectedSector(value);
        setAutreValue(value);
    };

    const handleNext = () => { // Pass to the other page
        if (selectedSector) {
            localStorage.setItem('SelectedSector', selectedSector); // Local storage of the selected sector value
            navigate('/Infos');
        } else {
            setErrorMessage('Veuillez choisir un secteur d\'activités avant de continuer.');
        }
    };


    const handleGoBack = () => { // Return to the previous page
        setCurrentStep(3);
        navigate(-1);
    };

    return (
        <div className="container text-center">
            <h1>Quel est votre secteur d'activités?</h1>
            {storedClient && storedClient.map(client => {
    return (
        client.subcategory && client.subcategory.map(subcategory => {
            return (
                subcategory.title === selectedSubCategory && (
                    <div key={subcategory.title}>
                        <Form.Select value={selectedSector} onChange={handleSectorChange}>
                            <option value="">Sélectionner un secteur</option>
                            {subcategory.secteurs && subcategory.secteurs.map((sector, i) => {
                                return (
                                    <option key={i} value={sector}>{sector}</option>
                                );
                            })}
                            <option value="autre">Autre</option>
                        </Form.Select>
                    </div>
                )
            );
        })
    );
})}
            {autreActive && (
                <Form.Control
                    type="text"
                    value={autreValue}
                    onChange={handleAutreChange}
                    placeholder="Autre secteur d'activités"
                    className="mt-2"
                />
            )}
            {errorMessage && (
                <div style={{ color: 'red', marginTop: '5px' }}>
                    {errorMessage}
                </div>
            )}
            <div className="text-center mt-3">
                <Button className="return-button bg-secondary m-2" onClick={handleGoBack}>Retour</Button>
                <Button className="next-button m-2" onClick={handleNext}>Suivant</Button>
            </div>
        </div>
    );
}
