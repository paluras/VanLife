import { useOutletContext } from "react-router-dom";

const VanHostInfo = () => {

    const vanHost = useOutletContext()
  return <><h2>{vanHost.name}</h2></>;
};


export default VanHostInfo