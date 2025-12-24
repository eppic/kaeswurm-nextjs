import React from 'react';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import Image from 'next/image';

export default function Astrid() {
  return (
    <main id='astrid'>
      <Hero src='/images/astrid-hero.jpg' text='Über mich'>
        <div className="hero-gradient"/>
      </Hero>
      <Ticker>
        <li>Tanz bedeutet für mich pure Lebensfreude und Ausdruck.</li>
        <li>Weltrekord auf der Schmittenhöhe - 929 Line Dancer auf 2000 Metern!</li>
        <li>Ich liebe es, Menschen durch Bewegung zu verbinden.</li>
      </Ticker>

      <section id='astr-content'>
        <div className='astr-short'>
          <div className='astr-short-img'>
            <Image
              src="/images/astr-portrait1.jpg" 
              alt="Portrait of Astrid" 
              width={400}
              height={400}
            />   
          </div> 
          <div>
            <h2 className='typo-h2'>Hey, ich bin Astrid!</h2>
            <p>
              Begeisterte Tänzerin, Trainerin und Autorin im Bereich Line Dance. Seit meinem ersten Schritt auf dem Parkett trage ich Leidenschaft für Bewegung und Gemeinschaft im Herzen und ich darf andere Menschen dabei begleiten, ihren eigenen Groove zu finden.
            </p>
          </div>
        </div>

        <div className='astr-info'>
          <h3 className='typo-h3'>Mein Weg in Bewegung</h3>
          <p>
            Meine Tanzreise begann in den späten 1980er Jahren mit der klassischen Tanzschule in Bad Neuenahr-Ahrweiler -Formation Standard/Latein inklusive Tanzsportabzeichen Bronze bis Gold. 1996 entdeckte ich schließlich den Line Dance in Frankfurt am Main - ein Moment, der alles veränderte. Von 2007 bis 2011 folgte die Ausbildung zur Line Dance Trainerin (Examen NTA) und die Tätigkeit als NTA-Direktorin in Deutschland. 2010 erwarb ich die Lizenz als diplomierte Tanztrainerin für Country- und Westerntanz in Österreich. Seit 2012 leite ich den Tanzsportclub TSC Blau-Gold Bad Reichenhall. Darüber hinaus bilde ich unabhängig davon angehende Line-Dance-TrainerInnen aus, basierend auf meinem Buch “Von Anchor Step bis Weave”.
          </p>
        </div>

        <div className='astr-history'>
          <div className='astr-history-item'>
            <Image 
              src="/images/mauritius.jpg" 
              alt="People dancing on the beach"
              height={400}
              width={400}
            />
            <div className='astr-history-info'>
              <h3 className='typo-h3'>Mauritius Workshop</h3>
              <p>2024</p>
            </div>
          </div>
          <div className='astr-history-item'>
            <Image 
              src="/images/ausbildung-hero.jpg" 
              alt="Cheesy at an award ceremony"
              height={400}
              width={400}
            />
            <div className='astr-history-info'>
              <h3 className='typo-h3'>Mauritius Workshop</h3>
              <p>2024</p>
            </div>
          </div>
          <div className='astr-thumbnail-div'>
            <a href="https://www.facebook.com/share/v/1HRWN2FCg7/" target="_blank" rel="noopener noreferrer">
              <div>
                <Image
                  src="/images/facebook-thumbnail.svg"
                  alt='Thumbnail for Video'
                  width={40}
                  height={40}
                />
              </div>
            </a>
          </div>
        </div>

        <div className='astr-more'>
          <div>
            <h3 className='typo-h3'>Was mich antreibt</h3>
            <p>
              Ich bin überzeugt: Tanzen ist mehr als Schritte - es verbindet Menschen, schafft Freude und stärkt das Selbstvertrauen. Mit meinem Konzept möchte ich eine Umgebung schaffen, in der Jede und Jeder mit Spaß lernen kann. Mein Ansatz: Technik trifft Leichtigkeit vom Anchor Step bis zum Weave, klar strukturiert, herzlich und inklusiv.
            </p>

          </div>
          <div>
            <h3 className='typo-h3'>Ein kleiner persönlicher Einblick</h3>
            <p>
              Wenn ich nicht auf der Tanzfläche bin, genieße ich die Natur rund um Bad Reichenhall, lese gerne kreative Fachbücher oder lasse mich von Musikrichtungen inspirieren, die jenseits des Mainstreams liegen. Ich reise außerdem sehr gerne, entdecke neue Länder und Kulturen und freue mich besonders, wenn ich auf diesen Reisen auch tanzen und lehren darf. Tanzen heißt für mich: <span>“Offen sein für Neues, für Menschen, für das Leben.”</span>
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}