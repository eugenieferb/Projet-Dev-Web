import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    // Définir les options de la requête GET
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', // Spécifier le type de contenu JSON
        // Autres en-têtes si nécessaire
      }
    };

    fetch('/api/users', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUsers(data)
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);


  const handleDelete = (userId) => {
    fetch(`/api/users/${userId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((error) =>
        console.error("Erreur", error)
      );
  };

  return (
    <div class="d-flex flex-column align-items-center">
      <h1 className=''><strong>ALL USERS</strong></h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Email</th>
            <th scope="col">Adresse</th>
            <th scope="col">Telephone</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <Link to={`/users/${user.id}`} className="">
                  {user.name}{' '}
                </Link>
              </td>
              <td>{user.firstname}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.tel}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // <div className=''>
    //   <h1 className=''><strong>All users</strong></h1>
    //   <table className="">
    //     <thead>
    //       <tr>
    //         <th>ID</th>
    //         <th>Nom</th>
    //         <th>Prénom</th>
    //         <th>Email</th>
    //         <th>Adresse</th>
    //         <th>Telephone</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {users.map((user) => (
    //         <tr key={user.id}>
    //           <td>{user.id}</td>
    //           <td>
    //             <Link to={`/users/${user.id}`} className="">
    //               {user.name}{' '}
    //             </Link>
    //           </td>
    //           <td>{user.firstname}</td>
    //           <td>{user.email}</td>
    //           <td>{user.address}</td>
    //           <td>{user.tel}</td>
    //           <td>
    //             <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Supprimer
    //             </button>
    //           </td>
    //         </tr>
    //        ))}
    //      </tbody>
    //   </table>
    // </div>
  );
};

export default User;