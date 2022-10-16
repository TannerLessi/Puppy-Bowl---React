import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { fetchAllPuppies } from "../Ajaxhelper/puppies";

import styles from "../styles/Dogs.module.css";

function Dogs() {
  const navigate = useNavigate();
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function getAllPuppies() {
      const puppies = await fetchAllPuppies();
      setDogs(puppies);
    }

    getAllPuppies();
  }, []);

  return (
    <div className={styles.alldogs}>
      {dogs.map((dog) => {
        return (
          // with this return statement i am grabbing the dog name, id, and img from the api and placing it on my home page
          <div className={styles.dogs} key={dog.id}>
            <p>{dog.name}</p>
            <p>#{dog.id}</p>
            <img className={styles.img} src={dog.imageUrl} />
            <button
              class="pure-button pure-button-active"
              href="#"
              className={styles.button}
              // clicking the details button grabs the specific dog by id
              onClick={() => {
                navigate(`/dogs/${dog.id}`);
              }}
            >
              See Details
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default Dogs;
