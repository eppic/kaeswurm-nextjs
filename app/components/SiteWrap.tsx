import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SiteWrap.module.css"

export function Header() {
  return (
    <header>
      <nav className="typo-link">
        <ul>
          <li><Link href="/">Startseite</Link></li>
          <li><Link href="/kurse">Kurse</Link></li>
          <li><Link href="/ausbildung">Ausbildung</Link></li>
          <li><Link href="/astrid">Über mich</Link></li>
          <li><button>Mehr entdecken</button></li>
        </ul>
      </nav>

      <Link href="#" className="ml-auto">
        <Image 
          src="lang-uk.svg" 
          alt="English" 
          height={20}
          width={20}
        />
      </Link>

      <div className="header-logo">
        <Image 
          src="kaeswurm-logo.svg" 
          alt="Kaeswurm Logo"
          width={20}
          height={20}
        />
      </div>
    </header>
  )
}


export function Footer() {
    return (
      <footer>
        <div>
          <div id="footer-slogan">
            <div>LineUp</div>
            <div>by</div>
            <div>Cheesy</div>
          </div>

          <div>
            <Image fill src="kaeswurm-logo.svg" alt="Kaeswurm Logo" />
          </div>

          <div id="contact-information">
            <div>
              <h4>Kontakt</h4>
              <ul>
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
            <div>
              <h4>Adresse</h4>
              <p>Marzoller Weg 21</p>
              <p>83451 Piding</p>
              <br />
              <p>Telefon:</p>
              <p>0170 3171206</p>
            </div>
          </div>
        </div>
        <hr />
        <div id="footer-bottom">
          <p>© 2025 Astrid Kaeswurm – alle Rechte vorbehalten.</p>

            <div>
              <a href="https://www.instagram.com/astrid_kaeswurm"><Image fill src="social/instagram.svg" alt="Instagram Logo" /></a>
              <a href="https://www.facebook.com/LD.Cheesy"><Image fill src="social/facebook.svg" alt="Facebook Logo" /></a>
            </div>
            <Link href="#">Datenschutz</Link>
            <Link href="#">Impressum</Link>

        </div>

      </footer>
    )
}