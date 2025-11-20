import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <nav className="h-22 flex items-center">
          <div className="header-links">
            <a href="#">Startseite</a>
            <a href="#">Kurse</a>
            <a href="#">Ausbildung</a>
            <a href="#">Über mich</a>
            <a href="#">Mehr entdecken</a>
          </div>
          <a className="ml-auto px-7" href="#"><img src="lang-uk.svg" alt="English" /></a>
          <div className="w-50 h-full flex items-center justify-center bg-[var(--kw-red)]">
            <img className="p-4 max-h-full" src="kaeswurm-logo.svg" alt="Kaeswurm Logo" />
          </div>
          
        </nav>
        <section id="hero">
            <h1>
              Line Dance lernen <br />
              mit Cheesy ist <br />
              easy!
            </h1>
            <a className="button mt-6" href="#">Aktuelle Events</a>
            <Image 
              src='/images/home-hero.jpg'
              alt="Cheesy instructing on an event"
              fill
              style={{ objectFit: 'cover', zIndex: -1 }}
            />
        </section>
        
      </header>

      <section id="fact-ticker">
          <blockquote>Tanz bedeutet für mich pure Lebensfreude und Ausdruck.</blockquote>
          <blockquote>Weltrekord auf der Schmittenhöhe - 929 Line Dancer auf 2000 Metern!</blockquote>
          <blockquote>Ich liebe es, Menschen durch Bewegung zu verbinden.</blockquote>
          <blockquote>Platzhalter 1</blockquote>
          <blockquote>Platzhalter 2</blockquote>
          <blockquote>Platzhalter 3</blockquote>
          <blockquote>Platzhalter 4</blockquote>
      </section>

      <section id="Home-Content">

        <div>
          <h2>Vision</h2>
          <img src="#" alt="Cheesy striking a pose" />
        </div>
        <div>
          <h3>Das bin ich!</h3>
          <p>
            Ich bin Cheesy: neugierig, offen und voller Leidenschaft für Musik und Tanz. Wenn Musik meine Stimmung hebt, wird sie zur Bewegung, zum Ausdruck und zum puren Lebensgefühl. Diese Freude am Line Dance möchte ich teilen – mit Menschen, die bereit sind, Neues zu entdecken und gemeinsam die Energie der Musik zu erleben.
          </p>
          <a href="#" className="button">Weiterlesen</a>
        </div>

        <div>
          <h2>Kurse</h2>
          <img src="#" alt="Cheesy at an award ceremony" />
        </div>
        <div>
          <h3>Meine Kurse</h3>
          <p>
            Line Dance verbindet Musik, Bewegung und Gemeinschaft. In meinen Kursen treffen sich Erwachsene jeden Alters, die Spaß an Musik haben und sich gerne bewegen. Hier findest du Ausgleich, Freude und Menschen, mit denen Tanzen einfach guttut.
          </p>
          <a href="#" className="button">Mehr Details</a>
        </div>

        <div>
          <h3>Wissen, das weiter tanzt</h3>
          <p>
            Manchmal reicht ein Kurs einfach nicht aus – deshalb habe ich mein Wissen, meine Erfahrungen und viele Tipps in meinem eigenen Buch gesammelt. Und wer ein bisschen frischen Wind beim Tanzen mag: Meine Fächer gibt’s auch hier.
          </p>
          <a href="#" className="button">Jetzt entdecken</a>
        </div>
        <div>
          <h2>Buch</h2>
          <img src="#" alt="Depiction of the Line Dance Book" />
        </div>

      </section>

      <section id="home-quote">
        <blockquote>
          "Wir machen keine Fehler, wir tanzen Variationen!"
        </blockquote>
        <div>- Astrid</div>
      </section>

      <footer>
        <div id="footer-slogan">
          <div>LineUp</div>
          <div>by</div>
          <div>Cheesy</div>
        </div>

        <img src="#" alt="Kaeswurm Logo" />

        <div id="contact-information-1">
          <div>
            <h4>Kontakt</h4>
            <ul>
              <li>
                <p>Email:</p>
                <a href="astrid@kaeswurm.de">astrid@kaeswurm.de</a>
              </li>
              <li>
                <p>Instagram:</p>
                <a href="https://www.instagram.com/astrid_kaeswurm">@astrid_kaeswurm</a>
              </li>
              <li>
                <p>Facebook:</p>
                <a href="https://www.facebook.com/LD.Cheesy">Astrid Kaeswurm</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Adresse</h4>
            <p>Marzoller Weg 21</p>
            <p>83451 Piding</p>
            <br />
            <p>Telefon:</p>
            <p>0170 3171206</p>
          </div>
        </div>

        <hr />

        <div id="contact-information-2">
          <p>© 2025 Astrid Kaeswurm – alle Rechte vorbehalten.</p>

          <div>
            <div>
              <a href="https://www.instagram.com/astrid_kaeswurm"><img src="#" alt="Instagram Logo" /></a>
              <a href="https://www.facebook.com/LD.Cheesy"><img src="#" alt="Facebook Logo" /></a>
            </div>
            <a href="#">Datenschutz</a>
            <a href="#">Impressum</a>
          </div>
        </div>

      </footer>
    </main>
  );
}