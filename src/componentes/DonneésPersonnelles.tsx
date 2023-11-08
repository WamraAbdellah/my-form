import React, { useState, ChangeEvent } from "react";

const DonnéesPersonnelles = () => {
  const [nom, setNom] = useState<string>("");
  const [prénom, setPrénom] = useState<string>("");
  const [adresse, setAdresse] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleNomChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNom(e.target.value);
  };

  const handlePrénomChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrénom(e.target.value);
  };

  const handleAdresseChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdresse(e.target.value);
  };

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleTelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTel(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const isNameValid = (name: string) => {
    const isUppercase = /^[A-Z]+$/.test(name);
    const hasNoDigits = !/\d/.test(name);
    return isUppercase && hasNoDigits;
  };

  const isPrénomValid = (prénom: string) => {
    // Vérifie que le prénom commence par une majuscule suivie de lettres minuscules
    return /^[A-Z][a-z]*$/.test(prénom);
  };

  const isTelValid = (tel: string) => {
    return /^0[1-9]\d{8}$/.test(tel);
  };

  const isEmailValid = (email: string) => {
    return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
  };

  return (
    <div className="container">
      <br />
      <h1 className="title1">Données personnelles</h1>
      <div className="ob">
        <label htmlFor="titre">Titre du CV :</label>
        <input
          type="text"
          id="titre"
          placeholder="Ex. Titre de CV"
          required></input>
        <br />
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          placeholder="Ex.  DUBOIS"
          required
          value={nom}
          onChange={handleNomChange}
        />
        {nom && !isNameValid(nom) && (
          <p style={{ color: "red" }}>
            Le nom ne doit contenir que des lettres majuscules et aucune chiffre.
          </p>
        )}<br></br>

        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          placeholder="Ex. Ahmed"
          required
          value={prénom}
          onChange={handlePrénomChange}
        />
        {prénom && !isPrénomValid(prénom) && (
          <p style={{ color: "red" }}>
            Le prénom doit commencer par une majuscule et être suivi de lettres minuscules.
          </p>
        )}<br></br>

        <label htmlFor="adresse">Adresse :</label>
        <br />
        <input
          type="text"
          id="adresse"
          placeholder="Ex. 12 Rue Ibn Tachfine, Hay Riad , Rabat "
          required
          value={adresse}
          onChange={handleAdresseChange}
        /><br></br>

        <label htmlFor="age">Age :</label>
        <br />
        <input
          type="number"
          min={18}
          max={100}
          id="age"
          placeholder="Ex. 20"
          required
          value={age}
          onChange={handleAgeChange}
        /><br></br>

        <label htmlFor="tel">Tél :</label>
        <input
          type="text"
          id="tel"
          placeholder="Ex.06 00 00 00 00"
          required
          value={tel}
          onChange={handleTelChange}
        />
        {tel && !isTelValid(tel) && (
          <p style={{ color: "red" }}>
            Le numéro de téléphone doit être au format  06 *********.
          </p>
        )}<br></br>

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          placeholder="Ex. yourmail@gmail.com"
          required
          value={email}
          onChange={handleEmailChange}
        />
        {email && !isEmailValid(email) && (
          <p style={{ color: "red" }}>
            L'adresse e-mail doit être au format yourmail@gmail.com.
          </p>
        )}<br></br>
      </div>
      <label htmlFor="sexe">sexe:</label>
      <br />
      <br />
      <div className="sexe">
        <input type="radio" name="sexe" value="homme" id="homme" />
        <label>Homme</label>
        <input type="radio" name="sexe" value="femme" id="femme" />
        <label>femme</label>
      </div>
    </div>
  );
};

export default DonnéesPersonnelles;
