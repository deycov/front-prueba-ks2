import React from 'react'

import { UsersProvider } from './hooks/useUsersContext.jsx';
import UsersList from './components/UserList/UserList.jsx';
import CreateUser from './components/CreateUser/CreateUser.jsx';

// import Form from './components/form.jsx';



function App() {
  return (
    <UsersProvider>
      <div className="container mx-auto px-4 py-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center">
          <div className="bg-blue-300 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Lista de usuarios</h3>
            <UsersList />
          </div>

          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Formulario</h3>
            <CreateUser />
          </div>
        </div>
      </div>
    </UsersProvider>
  )
}

export default App
