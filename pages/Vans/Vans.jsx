import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

const Vans = () => {
  const [searchparam, setSearchParam] = useSearchParams();
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const typeFilter = searchparam.get("type");
  console.log(typeFilter);
  console.log(vans.filter((van) => van.type === typeFilter));

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);
  const toFilter = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;
  console.log(typeFilter);
  const vanElements = toFilter.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={van.id} state={{ search: searchparam.toString() }}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error){
    return (
      <h1>Error</h1>
    )
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className={
            typeFilter === "luxury"
              ? `van-type luxury ${"selected"}`
              : `van-type luxury`
          }
          onClick={() => {
            setSearchParam({ type: "luxury" });
          }}
        >
          Luxury
        </button>
        <button
          className={
            typeFilter === "simple"
              ? `van-type simple ${"selected"}`
              : `van-type simple`
          }
          onClick={() => {
            setSearchParam({ type: "simple" });
          }}
        >
          Simple
        </button>
        <button
          className={
            typeFilter === "rugged"
              ? `van-type rugged ${"selected"}`
              : `van-type rugged`
          }
          onClick={() => {
            setSearchParam({ type: "rugged" });
          }}
        >
          Rigged
        </button>
        {typeFilter ? (
          <button
            className="van-type clear-filters"
            onClick={() => {
              setSearchParam("?");
            }}
          >
            {" "}
            Clear
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
