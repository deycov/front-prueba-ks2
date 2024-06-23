import React from "react";
import { UsersContext } from "../../hooks/useUsersContext";

function CreateUser() {
  const { add, change, count, setError, dataChange, setDataChange } = React.useContext(UsersContext);
  const [formData, setFormData] = React.useState({
    name: '',
    email: ''
  });

  React.useEffect(()=>{
    setFormData(dataChange);
  },[dataChange])

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const randomValue = () => {
    return Math.random() >= 0.5;
  }

  const createStatus = () => {
    if(randomValue())
      return 'activo';
    else
      return 'inactivo';
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.id = count + 1;
    formData.status = createStatus();
    if(formData.name && formData.email && (formData.email.includes('@') && formData.email.includes('.com'))){
      !dataChange.name ? add(formData) : change(formData, dataChange.id);
      setFormData({
        name: '',
        email: ''
      });
      setDataChange({});
    }else{
      setError(true)
    }
  };

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name">Nombre:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder=""
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email">Correo Electronico:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=""
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default CreateUser;