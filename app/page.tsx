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
              className="hero-bg object-cover"
            />
        </section>
        
      </header>

      <section id="fact-ticker">
          <div className="ticker-container">
            <ul>
              <li>Tanz bedeutet für mich pure Lebensfreude und Ausdruck.</li>
              <li>Weltrekord auf der Schmittenhöhe - 929 Line Dancer auf 2000 Metern!</li>
              <li>Ich liebe es, Menschen durch Bewegung zu verbinden.</li>
              <li>Platzhalter 1</li>
              <li>Platzhalter 2</li>
            </ul>
            <ul aria-hidden="true">
              <li>Tanz bedeutet für mich pure Lebensfreude und Ausdruck.</li>
              <li>Weltrekord auf der Schmittenhöhe - 929 Line Dancer auf 2000 Metern!</li>
              <li>Ich liebe es, Menschen durch Bewegung zu verbinden.</li>
              <li>Platzhalter 1</li>
              <li>Platzhalter 2</li>
            </ul>
          </div>
      </section>

      <section id="Home-Content">

        <div className="home-imagebox">
          <h2>Vision</h2>
          <Image
            src="/images/home-aboutme.jpg"
            alt="Cheesy striking a pose"
            fill
            className="object-cover"
          />
        </div>
        <div className="home-textbox">
          <h3>Das bin ich!</h3>
          <p>
            Ich bin Cheesy: neugierig, offen und voller Leidenschaft für Musik und Tanz. Wenn Musik meine Stimmung hebt, wird sie zur Bewegung, zum Ausdruck und zum puren Lebensgefühl. Diese Freude am Line Dance möchte ich teilen – mit Menschen, die bereit sind, Neues zu entdecken und gemeinsam die Energie der Musik zu erleben.
          </p>
          <a href="#" className="button">Weiterlesen</a>
        </div>

        <div className="home-imagebox">
          <h2>Kurse</h2>
          <Image
            src="/images/home-award.jpg"
            alt="Cheesy at an award ceremony"
            fill
            className="object-cover"
          />
        </div>
        <div className="home-textbox">
          <h3>Meine Kurse</h3>
          <p>
            Line Dance verbindet Musik, Bewegung und Gemeinschaft. In meinen Kursen treffen sich Erwachsene jeden Alters, die Spaß an Musik haben und sich gerne bewegen. Hier findest du Ausgleich, Freude und Menschen, mit denen Tanzen einfach guttut.
          </p>
          <a href="#" className="button">Mehr Details</a>
        </div>

        <div className="home-textbox">
          <h3>Wissen, das weiter tanzt</h3>
          <p>
            Manchmal reicht ein Kurs einfach nicht aus – deshalb habe ich mein Wissen, meine Erfahrungen und viele Tipps in meinem eigenen Buch gesammelt. Und wer ein bisschen frischen Wind beim Tanzen mag: Meine Fächer gibt’s auch hier.
          </p>
          <a href="#" className="button">Jetzt entdecken</a>
        </div>
        <div className="home-imagebox">
          <h2>Buch</h2>
          <Image
            src="/images/book-hands.jpg"
            alt="Depiction of the Line Dance book"
            fill
            className="object-cover"
          />
        </div>

      </section>

      <section id="home-quote" className="h-100 bg-[var(--kw-green)] flex justify-center items-center">
        <div className="text-[var(--background)] font-bold w-[70%] flex flex-col gap-7">
          <blockquote className="text-left text-4xl">
            "Wir machen keine Fehler, wir tanzen Variationen!"
          </blockquote>
          <div className="text-right text-2xl">- Astrid</div>
        </div>
      </section>

      <footer className="flex flex-col overflow-hidden">
        <div className="flex flex-row h-100 items-center gap-20">
          <div id="footer-slogan" className="ml-5 text-8xl font-bold">
            <div>LineUp</div>
            <div>by</div>
            <div>Cheesy</div>
          </div>

          <div className="flex items-center justify-center h-24 ml-auto relative">
            <img className="h-18" src="kaeswurm-logo.svg" alt="Kaeswurm Logo" />
            <div className="footer-circle fc-sm"></div> 
          </div>

          <div id="contact-information" className="relative flex justify-center gap-10 mr-20 text-[var(--background)]">
            <div className="flex-none">
              <h4 className="pb-3">Kontakt</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <p>Email:</p>
                  <a href="mailto://astrid@kaeswurm.de">astrid@kaeswurm.de</a>
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
            <div className="flex-none">
              <h4 className="pb-3">Adresse</h4>
              <p>Marzoller Weg 21</p>
              <p>83451 Piding</p>
              <br />
              <p>Telefon:</p>
              <p>0170 3171206</p>
            </div>
            <div className="footer-circle fc-lg"></div> 
          </div>
        </div>
        <hr />
        <div id="footer-bottom" className="flex h-20 items-center gap-10 p-6 px-10 text-[var(--background)]">
          <p className="text-[var(--foreground)]">© 2025 Astrid Kaeswurm – alle Rechte vorbehalten.</p>

            <div className="flex ml-auto gap-4 ">
              <a href="https://www.instagram.com/astrid_kaeswurm"><img src="social/instagram.svg" alt="Instagram Logo" /></a>
              <a href="https://www.facebook.com/LD.Cheesy"><img src="social/facebook.svg" alt="Facebook Logo" /></a>
            </div>
            <a href="#">Datenschutz</a>
            <a href="#">Impressum</a>

        </div>

      </footer>
    </main>
  );
}