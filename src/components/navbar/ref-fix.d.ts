// Fix para el problema de los refs en React
declare module 'react' {
    interface RefCallback<T> {
        (instance: T | null): void;
    }
} 