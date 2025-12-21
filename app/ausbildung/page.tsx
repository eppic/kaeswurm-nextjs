import React from 'react';
import Hero from '@/app/components/Hero';
import Ticker from '@/app/components/Ticker';
import Image from 'next/image';


export default function Ausbildung() {
  return (
    <main id='ausb'>
      <Hero src='/images/kurse-hero.jpg' text='Ausbildung' />
      <Ticker />
      
      <section id='ausb-text'>
        <h2 className='typo-h2'>Line-Dance-Trainer*innen-Ausbildung</h2>
        <p>nach Astrid Kaeswurm</p>
        <p>
          Eine zeitgemäße Ausbildung für alle, die Line Dance professionell unterrichten möchten – praxisnah, strukturiert und stilübergreifend (Country, Modern & Mixed). Du erwirbst fundierte didaktische und methodische Kenntnisse, die dich befähigen, Gruppen sicher anzuleiten und Unterricht abwechslungsreich zu gestalten. Neben Technik, Musikalität und Choreografie stehen auch Unterrichtsaufbau, Kommunikation und der souveräne Umgang mit unterschiedlichen Leistungsniveaus im Fokus.
        </p>
      </section>

      <section id='ausb-skills'>
        <h2 className='typo-h2'>Das lernst du</h2>
        <div>
          
          <div className='ausb-skills-box'>
            <div>
              <Image
                src="/images/icons/smiley.svg"
                alt='Happy Face'
                height={50}
                width={50}
              />
              <h3>Didaktik & Unterricht</h3>
            </div>
            <ul>
              <li>
                Zielgruppen definieren und sinnvoll ansprechen 
              </li>
              <li>
                Aufbau moderner Line-Dance-Unterrichtseinheiten
              </li>
              <li>
                Raumorientierung, Flächennutzung und Anpassung von Choreografien
              </li>
              <li>
                Auswahl und Analyse geeigneter Musik & Tänze
              </li>
            </ul>
          </div>
          
          <div className='ausb-skills-box'>
            <div>
              <Image
                src="/images/icons/smiley.svg"
                alt='Happy Face'
                height={50}
                width={50}
              />
              <h3>Ablauf & Umfang</h3>
            </div>
            <ul>
              <li>
                <span>24 Stunden</span> Gesamtumfang (32 Lerneinheiten inkl. Praxis- & Übungsstunden)
              </li>
              <li>
                Durchführung an zwei aufeinander aufbauenden Wochenenden
              </li>
              <li>
                Die Wochenenden sind <span>nicht</span> einzeln buchbar
              </li>
            </ul>
          </div>

          <div className='ausb-skills-box'>
            <div>
              <Image
                src="/images/icons/smiley.svg"
                alt='Happy Face'
                height={50}
                width={50}
              />
              <h3>Technik & Körperarbeit</h3>
            </div>
            <ul>
              <li>
                Grundhaltung und saubere Bewegung
              </li>
              <li>
                Fußpositionen und Gewichtsverlagerung
              </li>
              <li>
                Passende Tänze für unterschiedliche Levels
              </li>
            </ul>
          </div>

          <div className='ausb-skills-box'>
            <div>
              <Image
                src="/images/icons/smiley.svg"
                alt='Happy Face'
                height={50}
                width={50}
              />
              <h3>Prüfung & Abschluss</h3>
            </div>
            <p>Die Ausbildung schließt mit einer dreiteiligen Prüfung ab:</p>
            <ul>
              <li>
                schriftlich
              </li>
              <li>
                mündlich
              </li>
              <li>
                praktische Lehrprobe (Kolloquium)
              </li>
            </ul>
            <p>Nach erfolgreichem Abschluss erhältst du ein Zertifikat. Regelmäßige Weiterbildung wird empfohlen.</p>
          </div>

          <div className='ausb-skills-box'>
            <div>
              <Image
                src="/images/icons/smiley.svg"
                alt='Happy Face'
                height={50}
                width={50}
              />
              <h3>Hinweis</h3>
            </div>
            <p>
              Diese Trainer:innen-Ausbildung ist eine <span>private Qualifikation</span> und wird <span>nicht von offiziellen Sportverbänden anerkannt.</span>
            </p>
          </div>

          <div className='ausb-skills-box'>
            <div>
              <Image
                src="/images/icons/smiley.svg"
                alt='Happy Face'
                height={50}
                width={50}
              />
              <h3>Praxis</h3>
            </div>
            <ul>
              <li>
                Schrittfolgen, Tanzarten und Variationen
              </li>
              <li>
                Anwendung des Gelernten im realen Unterrichtssetting
              </li>
            </ul>
          </div>

          <div className='ausb-skills-box'>
            <div>
              <Image
                src="/images/icons/smiley.svg"
                alt='Happy Face'
                height={50}
                width={50}
              />
              <h3>Kosten</h3>
            </div>
              <p>Die Gesamtkosten betragen 400 €. Diese setzen sich zusammen aus 350 € für die Ausbildung und 50 € für die Prüfung.</p>
              <p><span>Prüfung auch ohne vorherige Kursteilnahme möglich</span></p>
          </div>

          <div className='ausb-youtube-video'>
            <a href="https://www.youtube.com/watch?v=TrCtzYnDlOQ" target="_blank" rel="noopener noreferrer">hier video</a>
          </div>
        </div>

      </section>

      <section className='ausb-faq'>
        <h2 className='typo-h2'>Häufig gestellte Fragen</h2>
        <div>
          <div>
            <Image
              src="/images/icons/circle.svg"
              alt='Circle'
              width={50}
              height={50}
            />
            <h3>Brauche ich Vorkenntnisse oder Tanzerfahrung?</h3>
            <p>Grundlegende Line-Dance-Erfahrung ist von Vorteil, aber keine formale Ausbildung oder Trainerlizenz erforderlich. Die Inhalte sind so aufgebaut, dass sowohl ambitionierte Tänzer:innen als auch bereits unterrichtende Personen davon profitieren.</p>
          </div>
          <div>
            <Image
              src="/images/icons/hash.svg"
              alt='Circle'
              width={50}
              height={50}
            />
            <h3>Ab welchem Alter kann ich an der Ausbildung teilnehmen?</h3>
            <p>Die Line-Dance-Trainer:innen-Ausbildung richtet sich an Teilnehmer:innen ab 18 Jahren. Voraussetzung ist die Freude am Tanzen und der Wunsch, Line Dance professionell unterrichten zu möchten - unabhängig vom bisherigen Werdegang.</p>
          </div>
          <div>
            <Image
              src="/images/icons/triangle.svg"
              alt='Circle'
              width={50}
              height={50}
            />
            <h3>Ist die Ausbildung offiziell anerkannt?</h3>
            <p>Die Ausbildung ist eine private Qualifikation nach Astrid Kaeswurm und nicht von offiziellen Sportverbänden anerkannt. Sie vermittelt jedoch praxisnahe Kompetenzen, die für den professionellen Unterricht von Line Dance erforderlich sind.</p>
          </div>
        </div>
      </section>

      <section className='ausb-gallery'>
        <h3>Bereits abgeschlossene Line Dance Ausbildung </h3>
        <p>Die folgenden Bilder zeigen die Absolventinnen und Absolventen der erfolgreich abgeschlossenen Line-Dance-Ausbildung.</p>

        <div>
          <Image
            src="/images/ausb/gallery/1.jpg"
            alt='Woman Dancing'
            width={200}
            height={200}
          />
          <Image
            src="/images/ausb/gallery/2.jpg"
            alt='Group Photo in a row'
            width={200}
            height={200}
          />
          <Image
            src="/images/ausb/gallery/3.jpg"
            alt='Line Dancing'
            width={200}
            height={200}
          />
          <Image
            src="/images/ausb/gallery/4.jpg"
            alt='Woman Dancing'
            width={200}
            height={200}
          />
          <Image
            src="/images/ausb/gallery/5.jpg"
            alt='Line Dancing'
            width={200}
            height={200}
          />
          <Image
            src="/images/ausb/gallery/6.jpg"
            alt='Line Dancing'
            width={200}
            height={200}
          />
          <Image
            src="/images/ausb/gallery/7.jpg"
            alt='Man and Woman dancing'
            width={200}
            height={200}
          />
        </div>
      </section>

      <section className='ausb-gallery-neubichler-alm'>
        <Image
          src="/images/alm/1.jpg"
          alt='Dancing Room at Neubichler Alm'
          width={200}
          height={200}
        />
        <div>
          <h3>Neubichler Alm</h3>
          <p>
            Für unsere Ausbildung habe ich die idyllische Neubichler Alm im Salzburger Land ausgewählt - ein Ort, der Ruhe, Natur und Inspiration vereint. Hier kannst du dich ganz auf den Unterricht konzentrieren, in den Pausen wandern, durchatmen oder einfach die atemberaubende Bergkulisse genießen. Abends wird gemeinsam gegessen, getanzt und gelacht - denn Line Dance verbindet!
          </p>
        </div>
      </section>

      <section id='ausb-email'>
        <h2 className='typo-h2'>Bleib auf dem Laufenden</h2>
        <p>
          Du möchtest mehr Informationen zur Line-Dance-Trainer:innen-Ausbildung nach Astrid Kaeswurm erhalten? <br/> Trage hier deine E-Mail-Adresse ein und wir informieren dich über Inhalte, Termine und Ablauf.
        </p>


      </section>



    </main>
  )
}