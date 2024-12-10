import { LuPlane, LuRocket } from "react-icons/lu";
import { MdOutlineSatelliteAlt } from "react-icons/md";

function Projects() {
  return (
    <div className="*:min-h-[calc(100vh-3.5rem-6vw)] *:flex-auto *:w-[calc(94vw)] *:m-[3vw] *:p-5 *:border-2 *:rounded-xl *:bg-slate-600 *:border-slate-700 text-slate-200 text-center flex flex-col items-center justify-center">
      <div className="grid grid-rows-10 grid-cols-10">
        <div className="col-span-10 border-b-2 border-slate-400 mx-24 centerContent text-4xl font-medium font-mono tracking-widest">
          CanSat <MdOutlineSatelliteAlt className="inline mx-5 text-5xl" />
        </div>
        <div className="row-span-9 col-span-5  flex flex-col items-center justify-center">
          <div className="mb-16 text-3xl font-medium">What is CanSat?</div>
          <div className="flex-col text-justify w-[35vw] text-2xl h-[30vh]">
            CanSat is a competition where members compete to make a sattelite
            the size of a standard Can (155mm high and 66mm across) The top 10
            teams get to have the privilige of having their CanSat actually
            launched about 1km high. You can read more about CanSat on{" "}
            <a href="https://www.cansatverseny.hu/" className="underline">
              the official hungarian CanSat website
            </a>{" "}
            which is the competition we are compiting in but there are also
            CanSat competitions all across europe in ESA member states.
          </div>
        </div>
        <div className="row-span-9 col-span-5  flex flex-col items-center justify-center">
          <div className="mb-16 text-3xl font-medium">
            Our relation to CanSat
          </div>
          <div className="flex-col text-justify w-[35vw] h-[30vh] text-2xl">
            The whole CAN'T has a lot of connection with CanSat, we initially
            signed up to CanSat under the name CAN'T but then we just decided
            our other projects are related enough to just be under the same
            CAN'T umbrella. So this is how CAN'T was started, with a bad joke
            made in 2023 before we signed up to CanSat because we had no idea
            for a name. We unfortunately didn't make it to the top 10 in the
            2023-24 competition and we decided to unite with another CanSat team
            for the 2024-25 competition, so you will find our members in the
            SIGMASAT cansat team. We are also planning to compete under the
            CAN'T name in 2025.
          </div>
        </div>
      </div>

      <div className="">
        <div>
          AGAC <LuRocket className="inline" />
        </div>
        <div>b</div>
      </div>

      <div className="">
        <div>
          Cant fly <LuPlane className="inline" />
        </div>
        <div>c</div>
      </div>
    </div>
  );
}

export default Projects;
