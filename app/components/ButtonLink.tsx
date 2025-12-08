import Link from "next/link";
import React, {ReactNode} from "react";
import styles from "./ButtonLink.module.css";

type ButtonLinkProps = {
    href: string;
    children: React.ReactNode;
}

export default function ButtonLink ({ href, children}: ButtonLinkProps) {
    return (
        <Link 
            href={href}
            className={styles.button}
        >
            {children}
        </Link>
    )
}


