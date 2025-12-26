import React from 'react';
import Hero from '@/app/components/Hero';
import Ticker from '@/app/components/Ticker';
import Image from 'next/image';
import ButtonLink from '../components/ButtonLink';

export default function Ausbildung() {
  return (
    <main id='ausb'>
      <Hero src='/images/ausbildung-hero.jpg' text='Ausbildung'>
        <div className='ausb-hero-info'>
          <div><h2 className='typo-h3'>Unsere nächsten Termine</h2> <img src="/warning.svg" alt="Warning Icon" /></div>
          <ul>
            <li>05. & 06. September 2026</li>
            <li>19. & 20. September 2026</li>
          </ul>
          <p>Die Ausbildung findet an den genannten Wochenenden statt.</p>
        </div>
        <div className='hero-gradient'/>
      </Hero>
      <Ticker>
        <li>Die Kurse im Frühling 2026 sind ausgebucht.</li>
        <li>------------</li>
        <li>Für die Termine im Herbst 2026 sind noch freie Plätze verfügbar.</li>
        <li>------------</li>
      </Ticker>
      
      <section className='ausb-content' id='ausb-content'>
        <div id='ausb-text'>
          <h2 className='typo-h2'>Line-Dance-Trainer*innen-Ausbildung</h2>
          <p>nach Astrid Kaeswurm</p>
          <p>
            Eine zeitgemäße Ausbildung für alle, die Line Dance professioneller unterrichten wollen - praxisnah, strukturiert und stilübergreifend (Country, Modern & Mixed). Der Lehrgang wurde von einer Line-Dance-Trainerin für Line Dancer entwickelt und orientiert sich an den Erfahrungen aus dem Unterricht mit ganz unterschiedlichen Gruppen. <br />Du erhältst fundierte didaktische und methodische Impulse, die dich dabei unterstützen, Gruppen sicher anzuleiten und deinen Unterricht abwechslungsreich zu gestalten. Neben Technik, Musikalität und Choreografie stehen auch Unterrichtsaufbau, Kommunikation und der Umgang mit verschiedenen Leistungsniveaus im Fokus.
          </p>
        </div>

        <div id='ausb-skills'>
          <h2 className='typo-h2'>Das lernst du</h2>
          <div>
            
            <div className='ausb-skills-box'>
              <div>
                <Image
                  src="/images/icons/i-0.jpg"
                  alt='Book with Lightbulb'
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
                  src="/images/icons/i-1.jpg"
                  alt='Clock'
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
                  src="/images/icons/i-6.jpg"
                  alt='Gear'
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
                  src="/images/icons/i-4.jpg"
                  alt='Lightbulb'
                  height={50}
                  width={50}
                />
                <h3>Prüfung & Abschluss</h3>
              </div>
              <p>Die Ausbildung schließt mit einer dreiteiligen Prüfung ab:</p>
              <ul className='ausb-bold'>
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
                  src="/images/icons/i-5.jpg"
                  alt='Lupe'
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
                  src="/images/icons/i-3.jpg"
                  alt='Book'
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
                  src="/images/icons/i-2.jpg"
                  alt='Money Chat Bubble'
                  height={50}
                  width={50}
                />
                <h3>Kosten</h3>
              </div>
                <p>Die Kursgebühr beträgt 350 €.</p>
                <p>Hinzu kommen <span>50 € Prüfgebühren</span>, falls der Teilnehmer an der Prüfung teilnehmen möchte.</p>
                <p>Die Entscheidung zur Prüfung kann am Tag der Prüfung getroffen werden; die Gebühr fällt nur dann an.</p>
                <p><span>Insgesamt würden somit 400 € anfallen.</span></p>
                <p>In den Kursgebühren enthalten sind:</p>
                <ul>
                  <li>Alle Unterrichtsmaterialien</li>
                  <li>Das Line-Dance-Buch</li>
                  <li>Getränke während der Schulung</li>
                </ul>
            </div>

          </div>

        </div>

        <div className='ausb-faq'>
          <h2 className='typo-h2'>Häufig gestellte Fragen</h2>
          <div className='ausb-faq-box'>
            <div>
              <div>
                <Image
                  src="/images/icons/circle.svg"
                  alt='Circle'
                  width={30}
                  height={30}
                />
                <h3 className="typo-h3">Brauche ich Vorkenntnisse oder Tanzerfahrung?</h3>
              </div>
              <p>Grundlegende Line-Dance-Erfahrung ist von Vorteil, aber keine formale Ausbildung oder Trainerlizenz erforderlich. Die Inhalte sind so aufgebaut, dass sowohl ambitionierte Tänzer:innen als auch bereits unterrichtende Personen davon profitieren.</p>
            </div>
            <div>
              <div>
                <Image
                  src="/images/icons/hash.svg"
                  alt='Circle'
                  width={30}
                  height={30}
                />
                <h3 className="typo-h3">Ab welchem Alter kann ich an der Ausbildung teilnehmen?</h3>
              </div>
              <p>Die Line-Dance-Trainer:innen-Ausbildung richtet sich an Teilnehmer:innen ab 18 Jahren. Voraussetzung ist die Freude am Tanzen und der Wunsch, Line Dance professionell unterrichten zu wollen - unabhängig vom bisherigen Werdegang.</p>
            </div>
            <div>
              <div>
                <Image
                  src="/images/icons/triangle.svg"
                  alt='Circle'
                  width={30}
                  height={30}
                />
                <h3 className="typo-h3">Ist die Ausbildung offiziell anerkannt?</h3>
              </div>
              <p>Die Ausbildung basiert auf dem Fachbuch "Von Anchor Step bis Weave" von Astrid Kaeswurm. <br />Die Ausbildung wird von offiziellen Sportverbänden nicht anerkannt. Sie vermittelt jedoch praxisnahe Kompetenzen, die Trainer*innen von Linedance-Gruppen kennen sollten.</p>
            </div>
          </div>
        </div>

        <div className='ausb-gallery'>
          <h3 className='typo-h2'>Blicke hinter die Kulissen der Ausbildung</h3>
          <p>Hier siehst du Eindrücke aus den Ausbildungen der letzten Jahre: von den ersten Schritten in der Praxis bis zu besonderen Momenten hinter den Kulissen.</p>

          <div>
            <Image
              src="/images/ausb/gallery/1.jpg"
              alt='People sitting at a table'
              width={560}
              height={300}
            />
            <Image
              src="/images/ausb/gallery/2.jpg"
              alt='Man sitting at a table'
              width={560}
              height={300}
            />
            <Image
              src="/images/ausb/gallery/3.jpg"
              alt='Line Dance Practice'
              width={560}
              height={300}
            />
            <Image
              src="/images/ausb/gallery/4.jpg"
              alt='Group Photo'
              width={560}
              height={300}
            />
            <Image
              src="/images/ausb/gallery/5.jpg"
              alt='Line Dancing'
              width={560}
              height={300}
            />
          </div>
        </div>

      </section>

      <section id='ausb-alm'>
        <div>
          <Image
            src="/images/ausb/alm-1.jpg"
            alt='Dancing Room at Neubichler Alm'
            width={850}
            height={600}
          />
        </div>
        <div>
          <h3 className='typo-h2'>Neubichler Alm</h3>
          <p>
            Für unsere Ausbildung habe ich die idyllische Neubichler Alm im Salzburger Land ausgewählt - ein Ort, der Ruhe, Natur und Inspiration vereint. Hier kannst du dich ganz auf den Unterricht konzentrieren, in den Pausen wandern, durchatmen oder einfach die atemberaubende Bergkulisse genießen. Abends wird gemeinsam gegessen, getanzt und gelacht - denn Line Dance verbindet!
          </p>
            <a href="https://maps.app.goo.gl/wjtHTf9QJ4hUsYaN8" target="_blank" rel="noopener noreferrer">auf Karte anzeigen</a>
        </div>
      </section>

        <div id='contact-section'>
          <Image
            src="/images/contact1.jpg"
            alt='Cheesy dancing'
            width={250}
            height={250}
          />
          <div>
            <h3 className='typo-h3'>Melde dich bei mir!</h3>
            <ButtonLink href="mailto:astrid@kaeswurm.de?subject=Ausbildung">Jetzt schreiben</ButtonLink>
          </div>
        </div>
        
    </main>
  )
}