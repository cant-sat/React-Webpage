import Konami from "react-konami-code";
import DeveloperPanel from "../cantAPI/devPanel";

function Live() {


  return (
    <div className="m-2">
      LIVE
      <Konami>
        <DeveloperPanel />
      </Konami>
    </div>
  );
}



export default Live;
