import React, { useEffect, useState } from 'react';

const PossessionIndex = () => {
    const [possessions, setPossessions] = useState([]);

    useEffect(() => {
        const fetchPossessions = async () => {
            try {
                const response = await fetch('/api/possession');
                const data = await response.json();
                setPossessions(data);
            } catch (error) {
                console.error('Error fetching possessions:', error);
            }
        };

        fetchPossessions();
    }, []);

    return (
        <div class="d-flex flex-column align-items-center">
            <h1 className=''><strong>ALL POSSESSIONS</strong></h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Valeur</th>
                        <th scope="col">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {possessions.map((possession) => (
                        <tr key={possession.id}>
                            <td>{possession.name}</td>
                            <td>{possession.value}</td>
                            <td>{possession.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>



        //   <div>
        //     <h2>Possessions</h2>
        //     <table>
        //       <thead>
        //       <tr>
        //         <th>Nom</th>
        //         <th>Valeur</th>
        //         <th>Type</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {possessions.map((possession) => (
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

export default PossessionIndex;