import Image from "next/image";
import ButtonLink from "@/app/components/ButtonLink";
import Hero from "@/app/components/Hero";
import Ticker from "./components/Ticker";

export default function Home() {
  return (
    <main id="home">
      <Hero src='/images/home-hero.jpg' text="Line Dance lernen mit Cheesy ist easy!" btnhref='/kurse' btnch='Aktuelle Events' overlay={1}/>
      <Ticker />

      <div className="home-boxes">
        <div className="home-img">
          <h2 className="typo-h1">Vision</h2>
          <Image
            src="/images/home-aboutme.jpg"
            alt="Cheesy striking a pose"
            fill
          />
        </div>

        <div className="home-box">
          <div>
            <h3 className="typo-h2">Das bin ich!</h3>
            <p>
              Ich bin Cheesy: neugierig, offen und voller Leidenschaft für Musik und Tanz. Wenn Musik meine Stimmung hebt, wird sie zur Bewegung, zum Ausdruck und zum puren Lebensgefühl. Diese Freude am Line Dance möchte ich teilen – mit Menschen, die bereit sind, Neues zu entdecken und gemeinsam die Energie der Musik zu erleben.
            </p>
            <div><ButtonLink href="/astrid">Weiterlesen</ButtonLink></div>
          </div>
        </div>


        <div className="home-img">
          <div className="home-img-overlay"></div>
          <h2 className="typo-h1">Kurse</h2>
          <Image
            src="/images/home-award.jpg"
            alt="Cheesy at an award ceremony"
            fill
          />
        </div>

        <div className="home-box">
          <div>
            <h3 className="typo-h2">Meine Kurse</h3>
            <p>
              Line Dance verbindet Musik, Bewegung und Gemeinschaft. In meinen Kursen treffen sich Erwachsene jeden Alters, die Spaß an Musik haben und sich gerne bewegen. Hier findest du Ausgleich, Freude und Menschen, mit denen Tanzen einfach guttut.
            </p>
            <div><ButtonLink href="/kurse">Mehr Details</ButtonLink></div>
          </div>
        </div>

        <div className="home-img">
          <div className="home-img-overlay"></div>
          <h2 className="typo-h1">Buch</h2>
          <Image
            src="/images/book-hands.jpg"
            alt="Depiction of the Line Dance book"
            fill
          />
        </div>

        <div className="home-box">
          <div>
            <h3 className="typo-h2">Wissen, das weiter tanzt</h3>
            <p>
              Manchmal reicht ein Kurs einfach nicht aus – deshalb habe ich mein Wissen, meine Erfahrungen und viele Tipps in meinem eigenen Buch gesammelt. Und wer ein bisschen frischen Wind beim Tanzen mag: Meine Fächer gibt’s auch hier.
            </p>
            <div><ButtonLink href="/buch">Jetzt entdecken</ButtonLink></div>
          </div>
        </div>
      </div>

      <div id="home-quote">
        <div>
          <div><blockquote className="typo-h2">“Wir machen keine Fehler, wir tanzen Variationen!”</blockquote></div>
          <div><p className="typo-h2">- Astrid</p></div>
        </div>
      </div>
    </main>
  );
}
