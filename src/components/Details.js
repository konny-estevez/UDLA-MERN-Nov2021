import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
    const [datoPoke, setDatoPoke] = useState()
    let url = "";
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setDatoPoke(res.data))
    }, []);
    if(datoPoke){
        url = datoPoke.sprites.front_default
        console.log(url)
    }
    console.log(datoPoke)
    return (
        <>{ datoPoke &&
            <div className="card" styles={{ "width": "18rem" }}>
                <img  src={url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{datoPoke.name}</h5>
                    <p className="card-text">Height: {datoPoke.height}</p>
                    <p className="card-text">Weight: {datoPoke.weight}</p>
                    <p className="card-text">Base Experience: {datoPoke.base_experience}</p>
                    <Link to={"/"}>
                        <button className="btn btn-primary">
                            HOME
                        </button>
                    </Link>


                </div>
            </div>
            }
        </>
    );
}
export default Details;