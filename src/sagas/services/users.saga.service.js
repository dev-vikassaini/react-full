function service() {
  const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => data.products)
      .catch((e) => e);
  };

  return {
    getUsers,
  };
}

const usersService = service();
export default usersService;
