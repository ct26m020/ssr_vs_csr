// Fake-Datenbank. Die 300 ms Verzögerung simulieren eine echte DB-Abfrage,
// damit man im Network-Tab den Unterschied zwischen CSR und SSR gut sieht.

export interface Product {
  id: number
  emoji: string
  name: string
  description: string
  price: number
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const products: Product[] = [
  { id: 1, emoji: '☕', name: 'Espresso-Bohnen Arabica', description: 'Dunkel geröstet, schokoladig, 1 kg.', price: 18.9 },
  { id: 2, emoji: '🫖', name: 'Gusseisen-Teekanne', description: 'Hält Tee lange warm, 0,8 l.', price: 34.5 },
  { id: 3, emoji: '⌨️', name: 'Mechanische Tastatur', description: 'Brown Switches, deutsches Layout.', price: 89.0 },
  { id: 4, emoji: '🖱️', name: 'Ergonomische Maus', description: 'Vertikal, kabellos, leise Tasten.', price: 45.0 },
  { id: 5, emoji: '🎧', name: 'Noise-Cancelling Kopfhörer', description: '30 h Akku, faltbar.', price: 199.0 },
  { id: 6, emoji: '📓', name: 'Notizbuch Dotted A5', description: '160 Seiten, 100 g/m² Papier.', price: 12.9 }
]
