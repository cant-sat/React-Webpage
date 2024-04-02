import Konami from "react-konami-code";
import DeveloperPanel from "../cantAPI/devPanel";

function live() {


  return (
    <div className="m-2">
      LIVE
      <Konami>
        <DeveloperPanel />
      </Konami>
    </div>
  );
}



export default live;
