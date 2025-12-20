import React from "react";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

type HeroProps = {
    src: string;
    text: string;
    btnhref?: string;
    btnch?: string;
}

export default function Hero ({ src, text, btnhref, btnch}: HeroProps) {
    return (
        <section id="hero" >
            <Image
                src={src}
                alt="Hero Image"
                fill
                priority
            />

            <h1 className="typo-h1">
                {text}
            </h1>

            {btnhref && (
                <div className="hero-button">
                    <ButtonLink href={btnhref}>{btnch}</ButtonLink>
                </div>
            )}

        </section>
    )
}
