import Image from "next/image";
import ButtonLink from "@/app/components/ButtonLink";

export default function Home() {
  return (
    <main>
      <h1 className="typo-h1">Vision</h1>
      <ButtonLink href="/astrid">Weiterlesen</ButtonLink>

      <br />

      <a className="typo-link">Startseite</a>
      <p className="typo-promo">Weltrekord auf der ...</p>
      <br />
      <p className="typo-p">Ich bin Cheesy, neugierig, offen und voller Leidenschaft</p>
      <br />
      <h2 className="typo-h2">Das bin ich!</h2>
    </main>
  );
}
