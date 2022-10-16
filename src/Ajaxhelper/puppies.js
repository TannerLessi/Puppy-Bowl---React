const cohortName = "2209-FTB-PT-WEB-FT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPuppies = async () => {
  const response = await fetch(`${APIURL}players`);
  const result = await response.json();
  return result.data.players;
};

export const fetchPuppyById = async (Id) => {
  const response = await fetch(`${APIURL}players/${Id}`);
  const result = await response.json();
  return result.data.player;
};

export const createPuppy = async (name, breed) => {
  const response = await fetch(`${APIURL}players`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      breed,
    }),
  });
  const result = await response.json;
  return result;
};

export const deletePuppyById = async (Id) => {
  const response = await fetch(`${APIURL}players/${Id}`, {
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};
