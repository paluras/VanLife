import { useEffect, useState } from "react";
import { NavLink, Link, useParams, Outlet } from "react-router-dom";

const VansHostDetail = () => {
  const params = useParams();
  const [vanHost, setVanHost] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanHost(data.vans));
  }, [params.id]);
;
  if (!vanHost) {
    return <h1>Loading...</h1>;
  }

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  };

  const style = ({isActive}) =>isActive? activeStyle : null

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={vanHost.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${vanHost.type}`}>
              {vanHost.type}
            </i>
            <h3>{vanHost.name}</h3>
            <h4>${vanHost.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
            <NavLink style={style} end to=".">Details</NavLink>
            <NavLink  style={style}to="pricing">Pricing</NavLink>
            <NavLink style={style} to="photo"> Photos</NavLink>
        </nav>
        <Outlet context={vanHost} />
      </div>
    </section>
  );
};

export default VansHostDetail;
