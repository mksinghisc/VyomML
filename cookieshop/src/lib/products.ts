export type Product = {
  id: string
  name: string
  description: string
  price: number // in cents
  image: string
}

export const products: Product[] = [
  {
    id: 'classic-chocolate-chip',
    name: 'Classic Chocolate Chip',
    description: 'Crispy edges, chewy center, loaded with semi-sweet chips.',
    price: 399,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5df0d3a1?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'double-chocolate',
    name: 'Double Chocolate',
    description: 'Rich cocoa dough with dark chocolate chunks.',
    price: 449,
    image: 'https://images.unsplash.com/photo-1541592553160-82008b127ccb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'oatmeal-raisin',
    name: 'Oatmeal Raisin',
    description: 'Hearty oats, juicy raisins, a hint of cinnamon.',
    price: 379,
    image: 'https://images.unsplash.com/photo-1589985270826-4b4f1d0b4d3b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'peanut-butter',
    name: 'Peanut Butter',
    description: 'Creamy peanut butter cookie with a classic criss-cross.',
    price: 429,
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop'
  }
]