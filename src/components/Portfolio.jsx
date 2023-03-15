import fbi from "../../assets/FBIProfilerapp.jpeg";
import put14in from "../../assets/Put14inLogo.png";
import FHW from "../../assets/Webrename.jpeg";
import social from "../../assets/SocialMediaStrat.jpeg";
import pocket from "../../assets/PocketFitness.png";
import weather from "../../assets/WeatherApp.jpeg";

export default function Portfolio() {
  return (
    <>
      <main className="flex justify-center">
        <a href="https://fbi-profiler.herokuapp.com/">
          <img className="h-48 w-96 object-scale-down" src={fbi} alt="" />
        </a>
        <a href="https://put14in.com/">
          <img className="h-48 w-96 object-scale-down" src={put14in} alt="" />
        </a>
        <a href="https://janorris65.github.io/First-Homework/">
          <img className="h-48 w-96 object-scale-down" src={FHW} alt="" />
        </a>
        <a href="https://www.linkedin.com/posts/joshua-norris-080b4729_stlpubliclibrary-stlmag-dailyarticle-activity-6988243975400828928--pO4?utm_source=share&utm_medium=member_desktop">
          <img className="h-48 w-96 object-scale-down" src={social} alt="" />
        </a>
        <a href="https://superlative-biscuit-9f6731.netlify.app/">
          <img className="h-48 w-96 object-scale-down" src={pocket} alt="" />
        </a>
        <a href="https://janorris65.github.io/HW6-weather-app/">
          <img className="h-48 w-96 object-scale-down" src={weather} alt="" />
        </a>
      </main>
    </>
  );
}
