import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <nav className="typo-link">
        <ul>
          <li><Link href="/">Startseite</Link></li>
          <li><Link href="/kurse">Kurse</Link></li>
          <li><Link href="/ausbildung">Ausbildung</Link></li>
          <li><Link href="/astrid">Über mich</Link></li>
          <li><Link href="/shop">Shop</Link></li>
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
        <div id="footer-top">
          <div id="footer-slogan" className="typo-h1">
            <div>LineUp</div>
            <div>by</div>
            <div>Cheesy</div>
          </div>

          <div id="footer-logo">
            <div className="footer-circle fc-sm"></div>
            <Image
              src="kaeswurm-logo.svg" 
              alt="Kaeswurm Logo" 
              height={20}
              width={20}
            />
          </div>

          <div id="contact-information">
            <div className="footer-circle fc-lg"></div>
            <div>
              <h4 className="typo-promo">Kontakt</h4>
              <ul>
                <li>
                  <p>Email:</p>
                  <a href="mailto:astrid@kaeswurm.de">astrid@kaeswurm.de</a>
                </li>
                <li>
                  <p>Instagram:</p>
                  <a href="https://www.instagram.com/astrid_kaeswurm" target="_blank" rel="noopener noreferrer">@astrid_kaeswurm</a>
                </li>
                <li>
                  <p>Facebook:</p>
                  <a href="https://www.facebook.com/LD.Cheesy" target="_blank" rel="noopener noreferrer">Astrid Kaeswurm</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="typo-promo footer-mobile-kontakt">Kontakt</h4>
              <h4 className="typo-promo footer-desktop-kontakt">Adresse</h4>
              <p>Marzoller Weg 21</p>
              <p>83451 Piding</p>
              <br />
              <p>Telefon:</p>
              <p>0170 3171206</p>
              <p className="email-information">E-Mail: astrid@kaeswurm.de</p>
            </div>
          </div>
        </div>

        <hr className="mt-auto"/>

        <div id="footer-bottom">
          <p>© 2025 Astrid Kaeswurm – alle Rechte vorbehalten.</p>

          <div className="footer-social-icons">
            <a href="https://www.instagram.com/astrid_kaeswurm" target="_blank" rel="noopener noreferrer">
              <Image 
                src="social/instagram.svg" 
                alt="Instagram Logo" 
                height={20}
                width={20}
              />
            </a>
            <a href="https://www.facebook.com/LD.Cheesy" target="_blank" rel="noopener noreferrer">
              <Image 
                src="social/facebook.svg" 
                alt="Facebook Logo" 
                height={20}
                width={20}
              />
            </a>
          </div>
          <Link className="text-[var(--text-color-contrast)]" href="/impressum">Datenschutz</Link>
          <Link className="text-[var(--text-color-contrast)]" href="/impressum">Impressum</Link>

        </div>
        <Image
          src="footer-mobile-shape.svg" 
          alt="Background Vector" 
          height={200}
          width={200}
          className="footer-mobile-shape"
        />
      </footer>
    )
}