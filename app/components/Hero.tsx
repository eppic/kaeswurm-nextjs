import React, { ReactNode } from "react";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

type HeroProps = {
    src: string;
    text: string;
    children?: ReactNode;
}

export default function Hero ({ src, text, children}: HeroProps) {
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

            {children}

        </section>
    )
}