import React, { useState } from 'react';
import './styles/main.css';
import UserTable from './tables/UserTable';
// import { useState } from 'react';

const App = () =>{

    const usersData = [
      {id: 1, name: 'Marius', username: 'theNothing'},
      {id: 2, name: 'Niemet', username: 'brokeDev'},
    ]

    const [users, SetUsers] = useState(usersData)

    const addUser = (user) => {
      user.id = users.length + 1 SetUsers([...users, user]) 
    }
    
    return(
        <div className="container">
            <h1> CRUD Application avec les Hooks </h1>
            <div className="flex-row">
                <div className="flex-large">
                    <h2> Nouvel etudiant </h2>
                </div>
                <div className="flex-large">
                    <h2> Liste des utilisateurs </h2>
                    <UserTable users={users}/> 
                </div>
            </div>
        </div>
    )

}

export default App