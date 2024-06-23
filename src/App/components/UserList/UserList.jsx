import React from "react";
import UserItem from "../UserItem/UserItem";
import { UsersContext } from "../../hooks/useUsersContext";

function UsersList() {
  const { filtered, setSearchStatus} = React.useContext(UsersContext)

  return(
    <>
      <div className="flex items-center justify-between my-3">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={()=>{
            setSearchStatus('inactivo');
          }}
        > Usuarios Activos </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={()=>{
            setSearchStatus('activo');
          }}
        > Usuarios Inactivos </button>
         <button className="bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={()=>{
            setSearchStatus('');
          }}
        > Todos </button>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Nombre</th>
            <th className="py-3 px-6 text-center">Correo</th>
            <th className="py-3 px-6 text-right">Acciones</th>
          </tr>
        </thead>
        {filtered.map((user) => (
          <UserItem key={user.id} {...user}/>
        ))}
      </table>
    </> 
  )
}

export default UsersList;