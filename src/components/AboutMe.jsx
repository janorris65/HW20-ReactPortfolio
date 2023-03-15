import me from "../../assets/SelfBW.jpg";
export default function AboutMe() {
  return (
    <>
      <section className="flex justify-center">
        <a href="/">
          <img className="h-48 w-96 object-scale-down" src={me} alt="" />
        </a>
        <p>
          I started this company a number a years ago to grow with, grow from,
          and grow others. After graduating with two degrees; I felt it best to
          set a path of responsibility.
        </p>
      </section>
    </>
  );
}
