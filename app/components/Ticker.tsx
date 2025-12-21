import React, { ReactNode } from "react";

type TickerProps = {
    children: ReactNode;
}

export default function Ticker ({children}:TickerProps) {
    return (
        <section id="ticker" >
            <div className="ticker-container">
                <ul>
                    {children}
                </ul>
                <ul aria-hidden="true">
                    {children}
                </ul>
            </div>
        </section>
    )
}
