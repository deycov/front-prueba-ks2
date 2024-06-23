import React from "react";
import useLocalStorage from "./useLocalStorage";
const UsersContext = React.createContext();
function UsersProvider({ children }) {
  const {
    list,
    addNewUser,
    load,
    err,
  } = useLocalStorage("PRUEBAKS2", [
    {id: 1, name: "Adrian", email: "a@a.com", status: 'activo'},
    {id: 2, name: "Arianna", email: "a@c.com", status: 'activo'},
    {id: 3, name: "Pedro", email: "p@c.com", status: 'inactivo'},
  ]);

  const [searchStatus, setSearchStatus] = React.useState('');

  const [dataChange, setDataChange] = React.useState({});

  const count = list.length;

  const filtered = list.filter((user) => user.status !== searchStatus);

  const validate = (status) => {
    const newData = [...list];
    const index = newData.findIndex((user) => user.status === status);
    newData[index].status = true;
    addNewUser(newData);
  };

  const change = (data, id) => {
    const newData = [...list];
    const index = newData.findIndex((user) => user.id === id);
    const user = newData[index];
    newData[index] = {
      ...user,
      ...data
    }
    addNewUser(newData);
  };

  const erase = (id) => {
    const newData = [...list];
    const index = newData.findIndex((user) => user.id === id);
    newData.splice(index, 1);
    addNewUser(newData);
  };

  const add = (newUser) => {
    const newData = [...list];
    newData.push(newUser);
    addNewUser(newData);
  };

  return (
    <UsersContext.Provider
      value={{
        searchStatus,
        setSearchStatus,
        filtered,
        validate,
        dataChange,
        setDataChange,
        change,
        erase,
        add,
        load,
        err,
        count,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export { UsersContext, UsersProvider };