// Simulación de una base de datos de productos

export async function getProductById(id: string) {
    // En un caso real, esto sería una llamada a una API o base de datos
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simular latencia

    // Producto de ejemplo
    return {
        id,
        name: "X-Loop Shield Pro - Urban Edition",
        price: 129.99,
        originalPrice: 179.99,
        discount: 28,
        description:
            "Las gafas X-Loop Shield Pro representan la fusión perfecta entre el estilo urbano y la funcionalidad deportiva. Diseñadas para quienes viven su vida sin compromisos, estas gafas de sol ofrecen una protección UV superior y un look inconfundible que destaca en cualquier entorno.",
        features: [
            "Diseño oversized con estilo shield para máxima protección",
            "Lentes polarizadas con tecnología anti-reflejo",
            "Montura ultraligera de TR90 resistente a impactos",
            "Protección UV400 que bloquea 100% de rayos UVA y UVB",
            "Patillas ajustables con insertos de goma antideslizante"
        ],
        category: "Urban",
        rating: 4.8,
        reviewCount: 124,
        colors: [
            { name: "Negro Mate", hex: "#121212", selected: true },
            { name: "Azul Eléctrico", hex: "#0047AB", selected: false },
            { name: "Rojo Fuego", hex: "#B22222", selected: false },
            { name: "Dorado", hex: "#FFD700", selected: false }
        ],
        images: [
            {
                src: "/placeholder.svg?height=800&width=800",
                alt: "X-Loop Shield Pro - Vista frontal"
            },
            {
                src: "/placeholder.svg?height=800&width=800",
                alt: "X-Loop Shield Pro - Vista lateral"
            },
            {
                src: "/placeholder.svg?height=800&width=800",
                alt: "X-Loop Shield Pro - Vista trasera"
            },
            {
                src: "/placeholder.svg?height=800&width=800",
                alt: "X-Loop Shield Pro - Detalle"
            }
        ]
    };
}

export async function getRelatedProducts() {
    // En un caso real, esto sería una llamada a una API o base de datos
    await new Promise((resolve) => setTimeout(resolve, 300)); // Simular latencia

    // Productos relacionados de ejemplo
    return [
        {
            id: "urban-shield-x1",
            name: "Urban Shield X1",
            price: 99.99,
            originalPrice: 129.99,
            discount: 23,
            image: "/placeholder.svg?height=500&width=500",
            category: "Urban"
        },
        {
            id: "vg-butterfly-urban",
            name: "VG Butterfly - Colección Urbana",
            price: 149.99,
            image: "/placeholder.svg?height=500&width=500",
            category: "Fashion"
        },
        {
            id: "air-force-aviator",
            name: "Air Force Aviator - Blue Edition",
            price: 119.99,
            originalPrice: 159.99,
            discount: 25,
            image: "/placeholder.svg?height=500&width=500",
            category: "Sport"
        },
        {
            id: "locs-classic-blackmatte",
            name: "Locs Classic - BlackMatte Series",
            price: 89.99,
            originalPrice: 109.99,
            discount: 18,
            image: "/placeholder.svg?height=500&width=500",
            category: "Urban"
        }
    ];
}
