import { useLocation } from "react-router-dom";
import { Entry } from "../components/Entry/Entry";

export const CurrentEntry = () => {
  const location = useLocation();
  const data = location.state.data;
  return (
    <Entry data={data}/>
  );
};
