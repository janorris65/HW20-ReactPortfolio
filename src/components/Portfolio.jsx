import fbi from "../../assets/FBIProfilerapp.jpeg";
import put14in from "../../assets/Put14inLogo.png";
import StaffEase from "../../assets/StaffEase.jpeg";
import social from "../../assets/SocialMediaStrat.jpeg";
import pocket from "../../assets/PocketFitness.png";
import weather from "../../assets/WeatherApp.jpeg";

export default function Portfolio() {
  return (
    <>
      <main className="grid grid-cols-2 justify-center gap-10">
        <card className="flex flex-row rounded-2xl border-2 border-stone-800 bg-slate-100 hover:drop-shadow-2xl">
          <figure>
            FBI Profiler
            <a href="https://fbi-profiler.herokuapp.com/">
              <img
                className="h-48 w-96 object-scale-down px-2"
                src={fbi}
                alt=""
              />
            </a>
            <a href="https://github.com/EllieWalsch/fbi-profiler">GitHub</a>
          </figure>
          <figcaption className="p-2">
            FBI Profiler is based on the work of Dan Korem and his book the Art
            of Profiling. It enables users to create a database of people and to
            store and compare the results of categories of questions between
            them. It uses express, handlebars, and SQL.
          </figcaption>
        </card>
        <card className="flex flex-row rounded-2xl border-2 border-stone-800 bg-slate-100 hover:drop-shadow-2xl">
          <figure>
            Put14in
            <a href="https://put14in.com/">
              <img
                className="h-48 w-96 object-scale-down px-2"
                src={put14in}
                alt=""
              />
            </a>
            <a className="px-2" href="/">
              GitHub:Confidential
            </a>
          </figure>
          <figcaption className="p-2">
            <p>
              Put14in is a larger company creation to incorporate nonprofit
              concepts and for profit concepts to achieve the goal of putting
              Ken Boyer in the Hall of Fame. Then continuing the interwoven
              storyline that will achieve it into threads born into ways that
              cannot be seen; Unseen kindness.
            </p>
            <p>
              The initial product launch is Exercise Neuroscience. In short,
              research is demonstrating benefit to cognition during physical
              activity. This product explores this idea of 'pushups and math'.
            </p>
          </figcaption>
        </card>
        <card className="flex flex-row rounded-2xl border-2 border-stone-800 bg-slate-100 hover:drop-shadow-2xl">
          <figure>
            StaffEase
            <a href="https://graceful-duckanoo-8813c2.netlify.app/">
              <img
                className="h-48 w-96 object-scale-down px-2"
                src={StaffEase}
                alt=""
              />
            </a>
            <a href="https://github.com/janorris65/StaffEaseJN">GitHub</a>
          </figure>
          <figcaption className="p-2">
            This is a React, MongoDB, Express, Nodejs, and GraphQL Apollo
            Server. A Database store and retrieve design behind a Stripe
            Paywall. Color Coded Reviews and active employee updates.
          </figcaption>
        </card>
        <card className="flex flex-row rounded-2xl border-2 border-stone-800 bg-slate-100 hover:drop-shadow-2xl">
          <figure>
            SLPL Project
            <a href="https://www.linkedin.com/posts/joshua-norris-080b4729_stlpubliclibrary-stlmag-dailyarticle-activity-6988243975400828928--pO4?utm_source=share&utm_medium=member_desktop">
              <img
                className="h-48 w-96 object-scale-down px-2"
                src={social}
                alt=""
              />
            </a>
            <a href="/">GitHub:Confidential</a>
          </figure>
          <figcaption className="p-2">
            <p>
              This is a project with the Saint Louis Public Library on search
              engine designs. It looks to solve, among many problems, bias in
              database construction.
            </p>
            <p>
              The current iteration is mathematically interesting but the
              outcome is deceptively simple with plenty of room to grow as the
              theory is robust.
            </p>
          </figcaption>
        </card>
        <card className="flex flex-row rounded-2xl border-2 border-stone-800 bg-slate-100 hover:drop-shadow-2xl">
          <figure>
            Pocket Fitness
            <a href="https://superlative-biscuit-9f6731.netlify.app/">
              <img
                className="h-48 w-96 object-scale-down px-2"
                src={pocket}
                alt=""
              />
            </a>
            <a href="https://github.com/janorris65/Pocket-Fitness">GitHub</a>
          </figure>
          <figcaption className="p-2">
            <p>
              Pocket Fitness is a fitness app that generates a random circuit
              workout from an api call and a few user inputs.
            </p>
            <p>It is written in JQuery with simple fetch calls to the api.</p>
          </figcaption>
        </card>
        <card className="flex flex-row rounded-2xl border-2 border-stone-800 bg-slate-100 hover:drop-shadow-2xl">
          <figure>
            Weather App
            <a href="https://janorris65.github.io/HW6-weather-app/">
              <img
                className="h-48 w-96 object-scale-down px-2"
                src={weather}
                alt=""
              />
            </a>
            <a href="https://github.com/janorris65/HW6-weather-app">GitHub</a>
          </figure>
          <figcaption className="p-2">
            <p>
              The Weather app is a javascript api call using the OpenWeather
              api. It is styled using basic CSS with local memory for storage of
              previously searched cities.
            </p>
          </figcaption>
        </card>
      </main>
    </>
  );
}
