import React from "react";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

type HeroProps = {
    src: string;
    text: string;
    btnhref?: string;
    btnch?: string;
    overlay?: number;
}

export default function Hero ({ src, text, btnhref, btnch, overlay}: HeroProps) {
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
                <div>
                    <ButtonLink href={btnhref}>{btnch}</ButtonLink>
                </div>
            )}

            {overlay === 1 && <div className="hero-img-overlay"></div>}
        </section>
    )
}