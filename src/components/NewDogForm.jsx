import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { createPuppy } from "../Ajaxhelper/puppies";

import styles from "../styles/NewDogForm.module.css";

// this form uses useState to add new dogs w/ their(name and breed) to the puppybowlAPI

export default function NewDogForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.NewDogForm}>
        <form
          className="pure-form pure-form-aligned"
          onSubmit={async (e) => {
            e.preventDefault();
            const result = await createPuppy(name, breed);
            navigate("/");
          }}
        >
          <h3 className={styles.header}>Create a New Dog</h3>
          <div className={styles.form}>
            <label className={styles.label} for="aligned-name">
              Name
            </label>
            <input
              value={name}
              type="text"
              placeholder="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className={styles.form}>
            <label className={styles.label} for="aligned-name">
              Breed
            </label>
            <input
              value={breed}
              onChange={(e) => {
                setBreed(e.target.value);
              }}
              type="text"
              placeholder="breed"
            />
          </div>
          <div className={styles.formSubmit}>
            <button className="pure-button pure-button-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
