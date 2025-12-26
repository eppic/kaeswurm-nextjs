import React from 'react'
import Image from 'next/image'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import ButtonLink from '../components/ButtonLink'

export default function Kurse () {
  return (
    <main id='kurs'>
      <Hero
        src='/images/kurse-hero1.jpg'
        text='Kurse'
      >
        <div className='hero-gradient'/>
      </Hero>
      <Ticker>
        <li>Lerne die neuesten Choreografien mit Astrid Kaeswurm</li>
        <li>Mehr erfahren & buchen</li>
        <li>Kurse, Workshops & Veranstaltungen</li>
      </Ticker>

      <section id='kurs-content'>

        <div id='kurs-quote'>
          <p>Die Anmeldung sowie weitere Informationen erhältst du ganz einfach per E-Mail (siehe unten). <br />Ich freue mich, von dir zu hören!</p>
        </div>


        <div id='kurs-termine'>
          <h2 className='typo-h2'>Termine & Kurse Line Dance 2025/2026</h2>
          <div>
            <h3 className='typo-h3'>Regelmäßige Kurse:</h3>
            <div>
              <details>
                <summary><p>Line Dance in Piding, DE</p><img src="/fold.svg" alt="Fold Tab" /></summary>
                
                <ul>
                  <li>Kurs: 10er-Block</li>
                  <li>Leitung: Astrid „Cheesy“ Kaeswurm</li>
                  <li>Wann: Montag, 18:30-20:00 Uhr</li>
                  <li>Schnupperstunde: 18:30 Uhr (5 €)</li>
                  <li>Ort: Reichenhaller Str. 15, 83451 Piding</li>
                  <li>Preis: Einführungspreis 100 €</li>
                </ul>
              </details>
              <details>
                <summary><p>Line Dance im TSC Dance & Lifestyle in Salzburg, AT</p><img src="/fold.svg" alt="Fold Tab" /></summary>
                <ul>
                  <li>Termin: Dienstag, 18:00-21:00 Uhr</li>
                  <li>Ort: TSC Dance & Lifestyle</li>
                  <li>Adresse: Wiener Bundesstraße 15, 5300 Hallwang bei Salzburg</li>
                </ul>
              </details>
            </div>
            <h3 className='typo-h3'>Einzelveranstaltungen & Workshops:</h3>
            <div>
              <details>
                <summary><p>Line Dance Kurs in der Bar Oceans in Bad Reichenhall</p><img src="/fold.svg" alt="Fold Tab" /></summary>
                
                <ul>
                  <li>Termin: Samstag, 27.12.</li>
                  <li>Uhrzeit: 19:00-21:00 Uhr</li>
                  <li>Ort: Bar Oceans, Spielbank Bad Reichenhall</li>
                  <li>Leitung: Astrid Kaeswurm</li>
                  <li>Webseite</li>
                  <li>Facebook Informationen</li>
                </ul>
              </details>
              <details>
                <summary><p>Workshop bei den Saloon Sweepers in Velburg, DE</p><img src="/fold.svg" alt="Fold Tab" /></summary>
                
                <ul>
                  <li>Termin: Freitag, 27.03.2026 & Samstag, 28.03.2026</li>
                  <li>Workshops: Cheesy (Astrid Kaeswurm) & Kerstin</li>
                  <li>Musik & Recaps: DJ Gerhard</li>
                  <br />
                  <li>Zeitplan:</li>
                  <ul className='kurs-li-nodeco'>
                    <li>Freitag, 27.03.2026: 19:00-23:00 Uhr (Einlass ab 18:00 Uhr)</li>
                    <li>Samstag, 28.03.2026:</li>
                    <li>12:00-17:00 Uhr (Einlass ab 11:00 Uhr)</li>
                    <li>18:00-23:00 Uhr (Recaps & DJ Gerhard)</li>
                  </ul>
                  <br />
                  <li>Ort: Gasthaus „Zur Adelburg“, Zur Adelburg 4, 92366 Velburg / Hollerstetten</li>
                  <li>Preis: 35 € für beide Tage</li>
                  <li>Anmeldung bis: 15.02.2026</li>
                  <li>Teilnehmerzahl: begrenzt</li>
                  <li>Anmeldung & Infos: <a href="mailto:event@saloon-sweepers.de">event@saloon-sweepers.de</a></li>
                  <li>Kontakt: Sonja (WhatsApp) 0170 / 4816421</li>
                </ul>
              </details>
              <details>
                <summary><p>T-T-T-T - Tanz-Trainer-Tratsch-Treff in Piding, DE</p><img src="/fold.svg" alt="Fold Tab" /></summary>
                
                <ul>
                  <li>Termin: Freitag, 1. Mai</li>
                  <li>Uhrzeit: ab 10:00 Uhr</li>
                  <li>Ort: Neubichler Alm, Piding</li>
                  <li>Inhalt: Austausch & Treffen für Tanz-Trainer:innen</li>
                  <li>Facebook Informationen: <a href="https://www.facebook.com/events/3857535167793559" target="_blank" rel="noopener noreferrer">Event-Link</a></li>
                </ul>
              </details>
              <details>
                <summary><p>Internationaler Line Dance Flashmob 2026 in Piding, DE</p><img src="/fold.svg" alt="Fold Tab" /></summary>
                
                <ul>
                  <li>Termin: Samstag, 02. Mai</li>
                  <li>Uhrzeit: 18:00 Uhr</li>
                  <li>Event: Internationaler Line Dance Flashmob</li>
                  <li>Webseite</li>
                  <li>Facebook Informationen: <a href="https://www.facebook.com/events/665130752817202" target='_blank' rel="noopener noreferrer">Event-Link</a></li>
                </ul>
              </details>
              <details>
                <summary><p>Line Dance Ferien & Festival in Oberstaufen, DE</p><img src="/fold.svg" alt="Fold Tab" /></summary>
                
                <ul>
                  <li>Termin: Sonntag, 17. Mai – Sonntag, 31. Mai 2026</li>
                  <li>Event: Line Dance Ferien & Festival</li>
                  <li>Ort: Kurhaus Oberstaufen, Oberstaufen, DE</li>
                  <li>Adresse: Argenstraße 3, 87534 Oberstaufen, Deutschland</li>
                  <li>Programm: Line Dance Workshops, Abend‑Partys, DJ, Rahmen‑Programm, Wellness & Bewegung im Allgäu</li>
                  <br />
                  <li>Kosten (Auswahl):
                    <ul className='kurs-li-nodeco'>
                      <li>Tages‑Ticket ca. 45 €</li>
                      <li>Abend‑Ticket ab ca. 20 €</li>
                      <li>Paketpreise inkl. Hotelaufenthalt variieren nach Zimmer & Dauer</li>
                    </ul>
                  </li>
                  <br />
                  <li><a href="https://www.perfects-events.ch/" target='_blank' rel="noopener noreferrer">Flyer</a></li>
                </ul>
              </details>
              <details>
                <summary><p>Line Dance AlpFestival in Kaprun, AT</p><img src="/fold.svg" alt="Fold Tab" /></summary>
                
                  <ul>
                    <li>Termin: Donnerstag, 18. Juni – Sonntag, 21. Juni 2026</li>
                    <li>Event: Line Dance AlpFestival – Workshops, Live‑Bands, DJ & Weltrekord‑Attempt</li>
                    <li>Ort: Festival‑Gelände am Parkplatz Maiskogel, Kaprun, AT</li>
                    <li>Adresse: Kitzsteinhornplatz 8, 5710 Kaprun, Österreich</li>
                    <li>Programm‑Highlights: Line Dance Workshops, DJ‑Nights, Live‑Musik, Weltrekord‑Workshop auf der Schmittenhöhe (Samstag)</li>
                    <li>Kosten: Wochenend‑Pässe online erhältlich – Preis je nach Kategorie/Frühbucher</li>
                    <li><a href="https://www.zellamsee-kaprun.com" target='_blank' rel="noopener noreferrer">Tickets</a></li>
                  </ul>
              </details>
  
            </div>
          </div>
        </div>

        <div id='kurs-gallery'>
          <h2 className='typo-h2'>Unsere Line Dance Stunden – Sei dabei!</h2>
          <p>Werde Teil unserer Tanz-Community und erlebe Line Dance live! <br />Egal ob Anfänger oder Fortgeschritten - wir freuen uns auf dich und deine Moves.</p>
          <div className='kurs-img-box'>
            <div>
              <Image
                src="/images/gallery/1.jpg"
                alt='Woman Dancing'
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                src="/images/gallery/2.jpg"
                alt='Group Photo'
                
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                src="/images/gallery/3.jpg"
                alt='Man and Woman dancing'
                
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                src="/images/gallery/4.jpg"
                alt='Woman'
                
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                src="/images/gallery/5.jpg"
                alt='People Dancing'
                
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                src="/images/gallery/6.jpg"
                alt='Group Photo (Front)'
                
                width={400}
                height={400}
              />
            </div>
            <div>
              <Image
                src="/images/gallery/7.jpg"
                alt='Line Dancing'
                
                width={400}
                height={400}
              />
            </div>
            
          </div>

        </div>

        <div id='contact-section'>
          <Image
            src="/images/contact1.jpg"
            alt='Cheesy dancing'
            width={250}
            height={250}
          />
          <div>
            <h3 className='typo-h3'>Melde dich bei mir!</h3>
            <ButtonLink href="mailto:astrid@kaeswurm.de?subject=Kurse">Jetzt schreiben</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  )
}
