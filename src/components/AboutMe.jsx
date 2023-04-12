import me from "../../assets/SelfBW.jpg";
import factory from "../../assets/Factory.jpg";
import football from "../../assets/Ifootball.jpeg";
export default function AboutMe() {
  return (
    <>
      <section className="flex flex-col gap-4">
        <card className="flex flex-row justify-center rounded-2xl border-2 border-stone-800 bg-slate-100 hover:drop-shadow-2xl">
          <a href="/">
            <img
              className="h-48 w-96 object-scale-down p-2 drop-shadow-lg"
              src={me}
              alt=""
            />
          </a>
          <div className="flex flex-col px-2">
            <p>
              I started a new path a number a years ago to grow with, grow from,
              and grow others.
            </p>
            <p>
              I felt it best to set a path of responsibility as best I could
              whenever I could, from wherever I am, by whoever I am, with
              whatever I have, however I can, and why ever I know.
            </p>
          </div>
        </card>
        <card className="flex flex-row justify-center rounded-2xl border-2 border-stone-800 bg-slate-100 hover:drop-shadow-2xl">
          <div className="flex flex-col px-2">
            <p>
              My working career is filled with transformative situations made,
              not given, from circumstances of trial, error, confidence,
              aspiration and critical thinking.
            </p>
            <p>
              I am proud of setting this factory production record many third
              shift nights ago. We rewrote our work instructions along some
              innovative lines and experienced a simple truth of working
              together.
            </p>
            <p>
              I have created brand new consumer products, discovered chemical
              reactions unknown, and created new classes of molecules.
            </p>
            <p>
              I have a personal best of 32 hours working continuously on the
              clock.
            </p>
          </div>
          <a href="/">
            <img
              className="h-48 w-96 object-scale-down p-2 drop-shadow-lg"
              src={factory}
              alt=""
            />
          </a>
        </card>
        <card className="flex flex-row justify-center rounded-2xl border-2 border-stone-800 bg-slate-100 hover:drop-shadow-2xl">
          <a href="/">
            <img
              className="h-48 w-96 object-scale-down p-2 drop-shadow-lg"
              src={football}
              alt=""
            />
          </a>
          <div className="flex flex-col px-2">
            <p>
              I played D1 football at the Univerity of Illinois. Contributions
              at this level can have all the complexity of what it takes to
              perform simplified down to output in yearly revenue and wins and
              losses.
            </p>
            <p>
              Understanding the necessity of simple definite outcomes allowed me
              to clearly see a path to earning two college degree in Mathematics
              and Chemistry.
            </p>
          </div>
        </card>
      </section>
    </>
  );
}
