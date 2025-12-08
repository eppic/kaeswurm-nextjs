import Image from "next/image";
import ButtonLink from "@/app/components/ButtonLink";

export default function Home() {
  return (
    <main>
      <h1>test</h1>
      <br /><br /><br /><br /><br /><br /><br />
      <ButtonLink href="/astrid">Weiterlesen</ButtonLink>

      <br />

      <a className="typo-link">Startseite</a>
      <p className="typo-promo">Weltrekord auf der ...</p>
      <br />
      <p className="typo-p">Ich bin Cheesy, neugierig, offen und voller Leidenschaft <br /> Musik und Tanz. <br /> sie zur Bewegung</p>
      <br />
      <h2 className="typo-h2">Das bin ich!</h2>
      <h1 className="typo-h1">Vision</h1>
    </main>
  );
}
