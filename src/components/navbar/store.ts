"use client";
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartState {
    items: CartItem[];
    totalItems: number;
    totalAmount: number;
    addItem: (item: CartItem) => void;
    removeItem: (itemId: number) => void;
    updateQuantity: (itemId: number, quantity: number) => void;
    clearCart: () => void;
}

// Crear el store con persistencia para mantener el carrito
export const useStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            totalItems: 0,
            totalAmount: 0,
            addItem: (item: CartItem) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((i) => i.id === item.id);

                if (existingItem) {
                    // Si el ítem ya existe, actualizamos su cantidad
                    const updatedItems = currentItems.map((i) =>
                        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                    );

                    set(() => ({
                        items: updatedItems,
                        totalItems: get().totalItems + 1,
                        totalAmount: get().totalAmount + item.price,
                    }));
                } else {
                    // Si el ítem no existe, lo añadimos
                    set(() => ({
                        items: [...currentItems, { ...item, quantity: 1 }],
                        totalItems: get().totalItems + 1,
                        totalAmount: get().totalAmount + item.price,
                    }));
                }
            },
            removeItem: (itemId: number) => {
                const currentItems = get().items;
                const itemToRemove = currentItems.find((i) => i.id === itemId);

                if (itemToRemove) {
                    set(() => ({
                        items: currentItems.filter((i) => i.id !== itemId),
                        totalItems: get().totalItems - itemToRemove.quantity,
                        totalAmount: get().totalAmount - (itemToRemove.price * itemToRemove.quantity),
                    }));
                }
            },
            updateQuantity: (itemId: number, quantity: number) => {
                const currentItems = get().items;
                const itemToUpdate = currentItems.find((i) => i.id === itemId);

                if (itemToUpdate) {
                    const quantityDiff = quantity - itemToUpdate.quantity;

                    const updatedItems = currentItems.map((i) =>
                        i.id === itemId ? { ...i, quantity } : i
                    );

                    set(() => ({
                        items: updatedItems,
                        totalItems: get().totalItems + quantityDiff,
                        totalAmount: get().totalAmount + (itemToUpdate.price * quantityDiff),
                    }));
                }
            },
            clearCart: () => {
                set(() => ({
                    items: [],
                    totalItems: 0,
                    totalAmount: 0,
                }));
            },
        }),
        {
            name: 'locs-cart-storage', // nombre para localStorage
        }
    )
); 