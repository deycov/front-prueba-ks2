import React from "react";
import { UsersContext } from "../../hooks/useUsersContext";

function UserItem({id, name, email}) {
  const { erase, setDataChange } = React.useContext(UsersContext);
  return(
    <tbody className="text-gray-600 text-sm font-light">
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <span className="font-medium">{name}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <span>{email}</span>
        </td>
        <td className="py-3 px-6 text-right">
          <div className="flex space-x-4">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={()=>{
                setDataChange({
                  id,
                  name,
                  email
                });
              }}
            >Editar</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={()=>{
                erase(id);
              }}
            >Eliminar</button>
          </div>
        </td>
      </tr>
    </tbody>
  )
}

export default UserItem;