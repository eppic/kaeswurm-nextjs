import React from 'react'
import Hero from '../components/Hero'
import Ticker from '../components/Ticker'
import Image from 'next/image'
import ButtonLink from '../components/ButtonLink'

export default function Shop () {
  return (
    <main id='shop'>
      <Hero blank text='Shop'></Hero>
      <Ticker>
        <li>Wir feiern das 15-jährige Jubiläum des Buches mit einer Neuauflage, die derzeit erarbeitet wird und noch im Jubiläumsjahr 2026 erscheinen wird.</li>
      </Ticker>

      <section id='shop-content'>
        <div className='shop-info'>
          <h2 className='typo-48'>
            Wichtige Informationen zur Bestellung
          </h2>
          <p>
            Für weitere Informationen oder eine Bestellung senden Sie bitte eine E-Mail. Nach Eingang Ihrer Nachricht erhalten Sie von mir die <span>Zahlungsinformationen</span>. Der Versand erfolgt nach Zahlungseingang jeweils am Freitag. <br /> Ihre Bestellung wird per E-Mail mit einer Bestellbestätigung inkl. aller relevanten Informationen beantwortet.
          </p>
          <p>
            Die Versandkosten richten sich nach dem Lieferland. <br/> Für Lieferungen innerhalb Deutschlands und Österreichs wird ein pauschales Porto berechnet.<br/>Bei internationalen Sendungen (z. B. Schweiz, Nicht-EU) werden die Versandkosten individuell ermittelt und vorab mitgeteilt. <br/> USA ist aktuell nicht möglich.
          </p>
        </div>

        <div id='shop-items'>

          <div className='shop-item'>
            <div className='shop-item-img-box'>
              <Image
                src="/images/shop/book-de.png"
                alt='Line Dance Buch (Deutsch)'
                fill
              />
              <div className='shop-item-bg' />
              <div className='shop-item-disclaimer typo-h3'>DE Version</div>
            </div>
            <div className='shop-item-name'>
              <h3 className='typo-h3'>Von Anchor Step bis Weave - Das Referenzbuch für Line Dance <span className='typo-p'>von Astrid Kaeswurm</span></h3>
            </div>
            <div className='shop-item-price typo-h3'>
              35,-€ zzgl. Versandkosten
            </div>
          </div>

          <div className='shop-item'>
            <div className='shop-item-img-box'>
              <Image
                src="/images/shop/facher-blau-de.png"
                alt='Line Dance Fächer in Blau (Deutsch)'
                fill
              />
              <div className='shop-item-bg' />
            </div>
            <div className='shop-item-name'>
              <h3 className='typo-h3'>Fächer „Wie fing der an?“ <span className='typo-p'>in Royal-Blau, Baumwollbespannung, Steg aus Birnenholz, Inkl. Samtbeutel</span> </h3>
            </div>
            <div className='shop-item-price typo-h3'>
              12,-€ zzgl. Versandkosten
            </div>
          </div>


          <div className='shop-item'>
            <div className='shop-item-img-box'>
              <Image
                src="/images/shop/facher-de.png"
                alt='Line Dance Fächer in Rot (Deutsch)'
                fill
              />
              <div className='shop-item-bg' />
            </div>
            <div className='shop-item-name'>
              <h3 className='typo-h3'>Fächer „Wie fing der an?“ <span className='typo-p'>in Burgundy-Rot, Baumwollbespannung, Plastiksteg, De. Version</span> </h3>
            </div>
            <div className='shop-item-price typo-h3'>
              6,-€ zzgl. Versandkosten
            </div>
          </div>

          <div className='shop-item'>
            <p>
              Dieses Buch schließt eine lang bestehende Lücke: Es ist eines der ersten deutsch-sprachigen Fachbücher zur Tanztechnik im Line Dance. Praxisnah, verständlich und zeitgemäß vermittelt Astrid Kaeswurm technisch korrektes Wissen, das im Training sofort anwendbar ist. Dabei orientiert sich der Inhalt an der aktuellen Entwicklung des Line Dance und wird kontinuierlich weitergedacht. Das Buch dient als wertvolle Unterstützung im Training, ersetzt jedoch weder Gruppen-training noch Ausbildung, sondern sorgt für Klarheit, Verständnis und viele „Aha-Momente“.
            </p>
          </div>

          <div className='shop-item'>
            <div className='shop-item-img-box'>
              <Image
                src="/images/shop/book-en.png"
                alt='Line Dance Book (English)'
                fill
              />
              <div className='shop-item-bg' />
              <div className='shop-item-disclaimer typo-h3'>Engl. Version</div>
            </div>
            <div className='shop-item-name'>
              <h3 className='typo-h3'>From Anchor Step to Weave - A Reference Book for Line Dancers <span className='typo-p'>by Astrid Kaeswurm</span></h3>
            </div>
            <div className='shop-item-price typo-h3'>
              35,-€ zzgl. Versandkosten
            </div>
          </div>

          <div className='shop-item'>
            <div className='shop-item-img-box'>
              <Image
                src="/images/shop/facher-en.png"
                alt='Line Dance Folding Fan in red (English)'
                fill
              />
              <div className='shop-item-bg' />
              <div className='shop-item-disclaimer typo-h3'>Engl. Version</div>
            </div>
            <div className='shop-item-name'>
              <h3 className='typo-h3'>Folding Fan „How does it start?” <span className='typo-p'>In burgundy red, cotton fabric, plastic ribs, English version</span></h3>
            </div>
            <div className='shop-item-price typo-h3'>
              6,-€ zzgl. Versandkosten
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
            <ButtonLink href="mailto:astrid@kaeswurm.de?subject=Bestellung&body=Ich%20möchte%20folgende%20Inhalte%20bestellen:%0A%0A-%20[HIER%20INHALTE%20AUFLISTEN]%0A%0A%0AMeine%20Adresse:%0A%0AVor-%20und%20Nachname:%20%0AStraße%20und%20Hausnummer:%20%0APLZ und Wohnort:%20">Jetzt bestellen</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  )
}
