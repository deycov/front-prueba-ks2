import React from "react";

function useLocalStorage(KEY, initialValue){
  const [list, setList] = React.useState([]);
  const [load, setLoad] = React.useState(false)
  const [err, setErr] = React.useState(false)

  React.useEffect(()=>{
    try {
      const dataLocalStorage = localStorage.getItem(KEY);
      let infoLocal;

      if (!dataLocalStorage) {
        localStorage.setItem(KEY, JSON.stringify(initialValue));
        infoLocal = [];
      } else {
        infoLocal = JSON.parse(dataLocalStorage);
        setList(infoLocal);
        setLoad(false);
      }
    } catch (e) {
      console.error("este fue el error:" + e);
      setErr(true);
      setLoad(false);
    }

  }, [])

  const addNewUser = (newData) => {
    localStorage.setItem(KEY, JSON.stringify(newData));
    setList(newData);
  };

  return { list, addNewUser, load, err };
}

export default useLocalStorage;