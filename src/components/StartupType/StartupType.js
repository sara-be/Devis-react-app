import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function StartupType({ setCurrentStep }) {
    setCurrentStep(3);
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedStartup, setSelectedStartup] = useState('');
    const [autreActive, setAutreActive] = useState(false);
    const [autreValue, setAutreValue] = useState('');
    const Client = JSON.parse(localStorage.getItem('StoredClient'));
    const navigate = useNavigate();

    const handleGoBack = () => {
        setCurrentStep(3);
        navigate(-1);
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedStartup(value);
        setErrorMessage('');
        setAutreActive(value === 'Autre');
        setAutreValue(''); // Clear autreValue when selecting a different option
    };

    const handleAutreChange = (event) => { // when changing value in Autre input
        const value = event.target.value;
        setAutreValue(value);
        setSelectedStartup(value); 
        setErrorMessage('');
    };
    

    const handleNext = () => {
        if (selectedStartup && selectedStartup !== 'Autre') {
            localStorage.setItem('SelectedStartup', selectedStartup);
            navigate('/Infos');
        } else {
            setErrorMessage('Veuillez choisir un Start-up avant de continuer.');
        }
    };

    return (
        <div className="container text-center">
            <h1>Quel est le type de votre Start-up?</h1>
            <Form.Select value={selectedStartup} onChange={handleChange}>
                <option value=''>Type  de votre StartUp</option>
                {Client.map((clientItem, index) => (
                    clientItem.subcategory.find(sub => sub.title === "Start-up") && (
                        clientItem.subcategory
                            .filter(sub => sub.title === "Start-up")[0]
                            .type.map((t, i) => (
                                <option key={i}>{t}</option>
                            ))
                    )
                ))}
                <option value="Autre">Autre</option>
            </Form.Select>

            {autreActive && (
                <Form.Control
                    type="text"
                    value={autreValue}
                    onChange={handleAutreChange}
                    placeholder="Autre type de Start-up"
                    className="mt-2"
                />
            )}

            {errorMessage && (
                <div style={{ color: 'red', marginTop: '5px' }}>
                    {errorMessage}
                </div>
            )}

            <div className="text-center mt-3">
                <Button className="return-button m-2" onClick={handleGoBack}>Retour</Button>
                <Button className="next-button m-2" onClick={handleNext}>Suivant</Button>
            </div>
        </div>
    );
}
