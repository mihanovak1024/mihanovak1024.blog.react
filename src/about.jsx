import React from "react";
import "./index.css";

export class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <hr />
        <div className="Article">
          <p>
            My name is <Emphasize text="Miha Novak" /> (it’s a <b>male</b> name,
            I kid you not), and I’m a 26-year-old Software Engineer based in
            Slovenia, Europe.
          </p>
          <p>
            I’ve been programming professionally since my <b>20th</b> birthday.
          </p>
          <p>
            In the last year I have been working on a startup with a friend,
            developing a home-based arm exercising tool for post-stroke
            patients, called HomeClinico. Previous 6 years I was working in Ad
            Technology space witnessing <Emphasize text="world class" /> trends
            in Mobile Advertisement sphere.
          </p>
          <p>
            The number <Emphasize text="1024" /> next to my name comes from a
            codename that my University entitled me with and I was so fond of
            it, I decided to use it everywhere, so it kind of became my
            signature.
          </p>
          <img
            className="Article__Image"
            src="/images/about/miha_classy.jpg"
          ></img>
          <h1>Interests</h1>
          <hr />
          <p>
            My passion is tackling interesting problems the company is facing
            and helping to <Emphasize text="grow" /> their{" "}
            <Emphasize text="revenue" /> streams. I love building solutions that
            have a direct impact on revenue, since it’s the most important
            metric for every company to have.
          </p>
          <p>
            I’d consider myself a generalist as I like to get my hands dirty on
            all fronts. Being a generalist also lets me interconnect the best
            practices of every field. You can read more about this on the bottom
            of this page.
          </p>
          <h2>Serious Projects</h2>
          <p>
            Currently I only have one serious project in my arsenal;
            HomeClinico. It is a startup/side-project that’s solving a problem
            of COVID-19 and the lack of physiotherapists. HomeClinico is a
            home-based arm exercising tool for post-stroke patients and elderly
            with daily guided exercises.
          </p>
          <h2>Prototypes</h2>
          <p>
            I like to tinker around different programming challenges and try to
            prototype my ideas. To name a few:
            <ul>
              <li>
                a RBPi brains of an automatic beer dispenser + Android app for
                payments/statistics + BE server
              </li>
              <li>
                an automated YouTube music decoder and downloader with Google
                Spreadsheet integration called Jukebox Transporter
              </li>
              <li>a Flutter Counter app called CountOnMe (group project)</li>
              <li>
                an automated Slovenian real estate scrapper on a DigitalOcean
                droplet + Android app
              </li>
            </ul>
          </p>
          <p>
            and for everything I’ve received from the community, I wanted to
            give a little back, thus the idea for Programmer’s guide Slovenia
            was born (and well appreciated too). Since there were several
            requests from people without Facebook accounts, I did a Bookmarklet
            for Facebook post extracting, but due to Privacy concerns, it wasn’t
            used.
          </p>
          <p>
            As I had a rising interest in startups, I also read all of{" "}
            <Emphasize text="Paul Graham’s" /> essays on startups and gathered
            notes of each essay on one place.
          </p>
          <p>
            A bit more detailed descriptions of the architectural design and
            flow of these programs can be seen on my Portfolio page.
          </p>

          <h1>Professional Experience</h1>
          <hr />

          <p>
            I really do fell lucky and proud, at the same time, to work
            alongside such talented people for these amazingly successful
            companies:
            <ul>
              <li>
                Infinum (Web/Mobile development agency — Croatian employer of
                the year 2015 and 2019) - 2015
              </li>
              <li>
                Outfit7 (the creator of Talking Tom and one of world’s best
                Mobile Advertising Mediation) - 2015-2021
              </li>
            </ul>
          </p>

          <h2>Infinum</h2>
          <p>
            Back in 2015 I started my <Emphasize text="Android Developer" />{" "}
            journey at Infinum and I accumulated a hefty amount of Android
            development knowledge. I worked on Android projects for clients
            alongside Infinum’s artists, project leads, developers and clients.
          </p>
          <p>
            I’m really thankful to my mentor Željko Plesac who helped me kick
            start my Android career really fast.
          </p>

          <h2>Outfit7</h2>
          <p>
            During my 6 year working experience in Outfit7, I’ve been
            responsible for{" "}
            <Emphasize text="technical Android side of Mobile advertisement" />,
            and I’ve developed a great interest towards it to such extent that
            I’ve decided to write a whole blog about it.
          </p>
          <p>
            I became exposed to advanced topics of Digital Advertising
            Technology which include:
            <ul>
              <li>
                <Emphasize text="eaderbidding" />
              </li>
              <li>Ad Mediation</li>
              <li>
                <Emphasize text="Ad Revenue Optimisations" />
              </li>
              <li>Server-to-server and SDK integrations</li>
              <li>Ad Creative Rendering Engine creation</li>
            </ul>
          </p>
          <p>
            In Outfit7 I built my own Android projects from ground up with
            initial technical specifications included and even orchestrated some
            of the project cross-platform (backend, iOS) members. A few of my
            responsibilities:
            <ul>
              <li>
                Ad complete refactor of Server-to-Server Android Ad engine
              </li>
              <li>
                complete refactor of the legacy ad library to a new, more
                modular and testable approach
              </li>
              <li>
                creation of our very own{" "}
                <Emphasize text="Consent Management Platform" /> for several
                legislations such as GDPR TCF2.0, CCPA, COPPA,…
              </li>
              <li>
                prototype of <Emphasize text="Headerbidding" /> Ad solution in
                collaboration with MaxAds
              </li>
            </ul>
          </p>
          <p>
            Thanks to my great mentors and managers Nevena Veljković, Marko
            Pistotnik and <Emphasize text="Matic Standeker" />, I’ve advanced
            both mentally and professionally! Thanks for all the great advices
            and help, I really do appreciate it!
          </p>
          <h1>Career Switch</h1>
          <hr />
          <p>
            Being an Android developer for the past <b>7 years</b>, I wanted to
            see what else is out there. I decided to pursue the career of a
            FullStack Engineer as it forces you to know all the specifics of
            <ul>
              <li>Frontend Engineer</li>
              <li>Backend Engineer</li>
              <li>DevOps Engineer</li>
            </ul>
          </p>
          <p>
            and later on gives you the possibility for easier transitioning into
            any of the above specialised fields or just staying as a FullStack
            Engineer.
          </p>
          <p>
            This career switch would be the best choice in order to really
            become a <Emphasize text="generalist" /> and tackle any problem
            thrown in my face.
          </p>
        </div>
      </div>
    );
  }
}

function Emphasize(props) {
  return <span className="Article__Sequence--Emphasize">{props.text}</span>;
}
