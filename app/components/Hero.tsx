import { ReactNode } from "react";
import Image from "next/image";

type HeroProps = {
    src?: string;
    text: string;
    blank?: boolean;
    children?: ReactNode;
};

export default function Hero({ src, text, blank = false, children }: HeroProps) {
    return (
        <section id="hero">
            {!blank && src && (
                <Image
                    src={src}
                    alt="Hero Image"
                    fill
                    priority
                />
            )}

            <h1 className="typo-h1">{text}</h1>

            {children}
        </section>
    );
}
