import React from "react";

const UserTable = (props) => ( 
    
    <table>
        <thead>
            <tr>
                <th> Nom </th>
                <th> Nom utilisateur </th>
                <th> Actions </th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map((user) => (
                    <tr key={user.id}>
                        <td> {user.name} </td>
                        <td> {user.username} </td>
                        <td>
                            <button   
                                onClick={() => {
                                    props.editRow(user)
                                }}
                                button className="button muted-button"
                            > 
                                Modifier 
                            </button>
                            <button
                            onClick={ () => props.deleteUser(user.id)} 
                                className="button muted-button"
                            > 
                                Supprimer 
                            </button>
                        </td>
                    </tr>
                ))
            ): (
                <tr>
                    <td colSpan={3}> Pas d'utilisateur </td>
                </tr>
            )}
            <tr>
                <td> Nom </td>
                <td> Nom utilisateur </td>
                
            </tr>
        </tbody>
    </table>

)



export default UserTable