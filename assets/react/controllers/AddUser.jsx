// import React from 'react';
// import axios from 'axios';
// import { useState } from "react";


// export default function AddUser() {

//     const [form, setForm] = useState({
//         name: '',
//         firstname: '',
//         address: '',
//         tel: '',
//         email: '',
//     });

//     function submitForm(){
//         axios
//             .post(`https://localhost:8000/api/users`, form)
//             .then((res) => {
//                 console.log(res);
//                 alert("L\'utilisateur à été ajouté");
//                // window.location = "https://localhost:8000/users";
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }

//     return <>
//     <div className="card w-75 m-auto mt-4">
//         <div className="link-dark d-flex justify-content-between w-75 m-auto mt-4">
//             <a className="link-dark" href="/"><span className="material-symbols-outlined">arrow_back</span></a>
//         </div>
//         <div className="card-body text-center">
//             <h1>Ajouter un utilisateur</h1>
//             <div className="container d-flex flex-column my-3 w-50">
//                 <input
//                     placeholder="Nom"
//                     className="m-2"
//                     value={form.name}
//                     onChange={e => {
//                         setForm({
//                         ...form,
//                         name: e.target.value
//                         });
//                     }}/>
//                 <input
//                     placeholder="Prénom"
//                     className="m-2"
//                     value={form.firstname}
//                     onChange={e => {
//                         setForm({
//                         ...form,
//                         firstname: e.target.value
//                         });
//                     }}/>
//                 <input
//                     placeholder="Adresse"
//                     className="m-2"
//                     value={form.address}
//                     onChange={e => {
//                         setForm({
//                         ...form,
//                         address: e.target.value
//                         });
//                     }}/>
//                 <input
//                     placeholder="Tel"
//                     className="m-2"
//                     type="tel"
//                     value={form.tel}
//                     onChange={e => {
//                         setForm({
//                         ...form,
//                         tel: e.target.value
//                         });
//                     }}/>
//                 <input
//                     placeholder="E-mail"
//                     className="m-2"
//                     type="email"
//                     value={form.email}
//                     onChange={e => {
//                         setForm({
//                         ...form,
//                         email: e.target.value
//                         });
//                     }}/>
//             </div>
//             <button 
//                 className="btn btn-warning text-center w-25" 
//                 onClick={()=> {submitForm(form)}}>Ajouter</button>
//             </div>
//         </div>
//     </>

// }
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, redirect} from "react-router-dom";

function AddUser() {
  const [name, setName] = useState('');
  const [firstname, setfirstname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [tel, setTel] = useState('');
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/api/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        firstname: firstname,
        email: email,
        address: address,
        tel: tel,
      })
    }).then((res) => res.json())
      .then((data) => {
        console.log(data);
        redirect("/users");
      });
  };
  return (
    <>
    <h1><strong>ADD USER</strong></h1>
      <form onSubmit={formSubmit}>
        <div class="d-flex justify-content-center">
          <div class="list-group">
            <div class="col-12">
              <label htmlFor="nom" class="form-label">
                Nom
              </label>
              <input
                class="form-control"
                type="text"
                id="nom"
                value={name}
                aria-describedby="nom"
                placeholder="Nom"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div class="col-12">
              <label htmlFor="prenom" class="form-label">
                Prenom
              </label>
              <input
                class="form-control"
                type="text"
                id="prenom"
                value={firstname}
                aria-describedby="prenom"
                placeholder="Prenom"
                onChange={(e) => {
                  setfirstname(e.target.value);
                }}
              />
            </div>
            <div class="col-12">
              <label htmlFor="email" class="form-label">Email</label>
              <input class="form-control"
                type="Email"
                className="form-control"
                id="email"
                value={email}
                aria-describedby="email"
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div class="col-12">
              <label className="mb-1" htmlFor="adresse" class="form-label">Adresse</label>
              <input class="form-control"
                type="text"
                value={address}
                className="form-control"
                id="adresse"
                aria-describedby="adresse"
                placeholder="adresse"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div class="col-12">
              <label htmlFor="tel" class="form-label">Numero de télephone</label>
              <input class="form-control"
                type="text"
                id="tel"
                aria-describedby="tel"
                value={tel}
                placeholder="télephone"
                onChange={(e) => {
                  setTel(e.target.value);
                }}
              />
            </div>

            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary">Ajouter</button>
            </div>
          </div>
        </div>

      </form>


      {/* <h2>Add user </h2>

      <form onSubmit={formSubmit}>
        <div>
          <div>
            <div>
              <label htmlFor="nom">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                value={name}
                aria-describedby="nom"
                placeholder="Nom"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="prenom">
                Prenom
              </label>
              <input
                type="text"
                id="prenom"
                value={firstname}
                aria-describedby="prenom"
                placeholder="Prenom"
                onChange={(e) => {
                  setfirstname(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="Email"
            className="form-control"
            id="email"
            value={email}
            aria-describedby="email"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label className="mb-1" htmlFor="adresse">Adresse</label>
          <input
            type="text"
            value={address}
            className="form-control"
            id="adresse"
            aria-describedby="adresse"
            placeholder="adresse"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="tel">Numero de télephone</label>
          <input
            type="text"
            id="tel"
            aria-describedby="tel"
            value={tel}
            placeholder="télephone"
            onChange={(e) => {
              setTel(e.target.value);
            }}
          />
        </div>

        <div>
          <div>
            <div>
              <label htmlFor="nompossession">
                Nom de possession
              </label>
              <input
                type="text"
                id="nompossession"
                aria-describedby="nomposs"
                placeholder="nom possession"
                value={possessionName}
                onChange={(e) => {
                  setPossessionName(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="valeur">
                Valeur de possession
              </label>
              <input
                type="float"
                className="form-control"
                id="valeur"
                aria-describedby="valeur"
                value={possessionValue}
                placeholder="valeur possession"
                onChange={(e) => {
                  setPossessionValue(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="typepossession">
                Type de possession
              </label>
              <input
                type="text"
                className="form-control"
                id="typepossession"
                aria-describedby="typeposs"
                value={possessionType}
                placeholder="type possession"
                onChange={(e) => {
                  setPossessionType(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <button type="submit">
            <strong>Ajouter</strong>
          </button>
        </div>

      </form> */}
    </>
  );
}
export default AddUser;