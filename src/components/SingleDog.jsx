import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { fetchPuppyById, deletePuppyById } from "../Ajaxhelper/puppies";

import styles from "../styles/SingleDog.module.css";

function SingleDog() {
  const navigate = useNavigate();

  const { dogId } = useParams();

  const [singleDog, setSingleDog] = useState({});

  useEffect(() => {
    async function getPuppyById() {
      const puppy = await fetchPuppyById(dogId);
      setSingleDog(puppy);
    }
    getPuppyById();
  }, []);
  async function deleteDog() {
    const result = await deletePuppyById(singleDog.id);
    //after you delete a dog it takes you back to home page
    navigate("/");
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.singleDog}>
          <h4 className={styles.name}>{singleDog.name}</h4>
          <h5 className={styles.breed}>{singleDog.breed}</h5>
          <img className={styles.dogImg} src={singleDog.imageUrl} />
          <button
            class="pure-button pure-button-active"
            href="#"
            className={styles.deleteButton}
            onClick={deleteDog}
          >
            Delete Dog
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleDog;
