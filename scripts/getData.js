const getData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Ошибка получения данных");
      }
    })
    .then((data) => console.log(data))
    .catch((error) => {
      console.error(error.message);
    })
    .finally(() => console.log("finally"));
};
getData();
