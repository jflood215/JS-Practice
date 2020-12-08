let isOnList;
fetch("./persondata.json")
  .then((res) => res.json)
  .then((json) => {
    isOnList = filterPeople(json);
    console.log(isOnList);
  });

function filterPeople(json) {
  const filteredList = json.filter(
    (persondata) =>
      persondata.gender == "Female" && persondata.carmodel == "Monte Carlo"
  );
  if (filteredList.length > 0) {
    return true;
  } else {
    return false;
  }
}

// Filtering with multiple conditions
