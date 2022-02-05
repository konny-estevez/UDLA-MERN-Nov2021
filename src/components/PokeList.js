import { useEffect, useState } from "react";
import getData from "../utilities/methods";
const PokeList = () => {
  const [pokeData, setPokeData] = useState();
  useEffect(() => {
    getData().then((res) => setPokeData(res));
  }, []);

  const renderList = () =>
    pokeData.results.map((pokemon, indx) => (
      <tr>
        <td>{indx+1}</td>
        <td>{pokemon.name}</td>
        <td>{pokemon.url}</td>
      </tr>
    ));
  return (
    <div className="container">
      {pokeData && (
        <>
          <header>
            <h1>Pagination of PokeApi</h1>
            <p>Exist {pokeData.count} Pokemon </p>
          </header>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Url</th>
              </tr>
            </thead>
            <tbody>
                { renderList()}
            </tbody>
          </table>

          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <button aria-hidden="true">Previous</button>
              </li>
              <li className="page-item">1</li>
              <li className="page-item">2</li>
              <li className="page-item">3</li>
              <li className="page-item">
                <button aria-hidden="true">Next</button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default PokeList;
