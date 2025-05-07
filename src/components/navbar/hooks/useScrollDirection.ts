"use client";
import { useState, useEffect, useRef } from 'react';

type ScrollDirection = 'up' | 'down' | null;

export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
    const blocking = useRef(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
        prevScrollY.current = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > prevScrollY.current ? "down" : "up";

            // Verificamos si debemos actualizar la dirección y si no estamos bloqueando
            if (
                !blocking.current &&
                ((scrollY > prevScrollY.current && scrollY > 10) ||
                    (scrollY < prevScrollY.current && scrollY <= 10))
            ) {
                setScrollDirection(direction);
                // Bloqueamos las actualizaciones por un tiempo corto para evitar rebotes
                blocking.current = true;
                setTimeout(() => {
                    blocking.current = false;
                }, 250);
            }

            prevScrollY.current = scrollY > 0 ? scrollY : 0;
        };

        const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return scrollDirection;
} 