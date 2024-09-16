import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userResponse = await fetch(`/api/users/${id}`);
        const userData = await userResponse.json();
        setUser(userData);
        console.log(userData);
        // const possessionsResponse = await fetch(`/api/users/${id}/possessions`);
        // const possessionsData = await possessionsResponse.json();
        // setPossessions(possessionsData);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div class="d-flex flex-row">
      <div class="UserPossession flex-column d-flex align-items-center">
        <h2>User</h2>
        <table class="table">
          <tbody>
            <tr>
              <th scope="row">Nom</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th scope="row">Prenom</th>
              <td>{user.firstname}</td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th scope="row">Adresse</th>
              <td>{user.address}</td>
            </tr>
            <tr>
              <th scope="row">Tel</th>
              <td>{user.tel}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="UserPossession flex-column d-flex align-items-center">
        <h2>Possession</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Valeur</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            {user.possessions?.map((possession) => (
              <tr key={possession.id}>
                <td>{possession.name}</td>
                <td>{possession.value}</td>
                <td>{possession.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    // <div class="d-flex flex-column align-items-center">
    //     <h1 className=''><strong>ALL POSSESSIONS</strong></h1>
    //     <table class="table">
    //         <thead>
    //             <tr>
    //                 <th scope="col">Nom</th>
    //                 <th scope="col">Valeur</th>
    //                 <th scope="col">Type</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {possessions.map((possession) => (
    //                 <tr key={possession.id}>
    //                     <td>{possession.name}</td>
    //                     <td>{possession.value}</td>
    //                     <td>{possession.type}</td>
    //                 </tr>
    //             ))}
    //         </tbody>
    //     </table>
    // </div>


    // <div>
    //   <h2>User</h2>
    //   <table>
    //     <tbody>
    //       <tr>
    //         <th>Nom</th>
    //         <td>{user.name}</td>
    //       </tr>
    //       <tr>
    //         <th>Prenom</th>
    //         <td>{user.firstname}</td>
    //       </tr>
    //       <tr>
    //         <th>Email</th>
    //         <td>{user.email}</td>
    //       </tr>
    //       <tr>
    //         <th>Adresse</th>
    //         <td>{user.address}</td>
    //       </tr>
    //       <tr>
    //         <th>Tel</th>
    //         <td>{user.tel}</td>
    //       </tr>
    //     </tbody>
    //   </table>




    //   <h3>Possession </h3>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Nom</th>
    //         <th>Valeur</th>
    //         <th>Type</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {user.possessions?.map((possession) => (
    //         <tr key={possession.id}>
    //           <td>{possession.name}</td>
    //           <td>{possession.value}</td>
    //           <td>{possession.type}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};


export default UserDetails;