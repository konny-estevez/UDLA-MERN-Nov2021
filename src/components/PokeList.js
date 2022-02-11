import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getData from "../utilities/methods";
const PokeList = () => {
  const url= "https://pokeapi.co/api/v2/pokemon";
  const [limit, setLimit] = useState();
  const [pokeData, setPokeData] = useState();
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20);
  const pageSizeHandler=(PageSize)=>{
    const newPageSize= parseInt(PageSize);
    setPageSize(newPageSize);
    getData(url,newPageSize,(page-1)*newPageSize)
      .then((res) => setPokeData(res))
      .catch(err=>console.log(err));
  }
  useEffect(() => {
    getData().then((res) => setPokeData(res));
  }, []);
  // "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
  const verificar = (poke) =>{
    let dato = poke.split(["/"])
    return dato[dato.length-2]
    
  }
  const renderList = () =>
    pokeData.results.map((pokemon, indx) => (
      <tr key={indx}>
        <td>{indx + 1}</td>
        <td>
          <Link to={`/${verificar(pokemon.url)}`}>
            {pokemon.name}
          </Link>
        </td>
        <td>{pokemon.url}</td>
      </tr>
    ));

  
  // console.log(pokemon.url)
  return (
    <div className="container">
      {pokeData && (
        <>
          <header>
            <h1>Pagination of PokeApi</h1>
            <p>Exist {pokeData.count} Pokemon </p>
          </header>
          <form className="container border border-primary rounded-3 p-3">
            <fieldset className="input-group mb-3">
              <label className="input-group-text" style={{"width":"5rem"}} htmlFor="fLimit">Limit:</label>
              <input className="form-control" type="number" value={pageSize} onChange={(e)=>pageSizeHandler(e.target.value)}/>
            </fieldset>
          </form>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Url</th>
              </tr>
            </thead>
            <tbody>
              {renderList()}
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
