export interface CarModel {
  id: string;
  name: string;
  badge: string;
  image: string;
  availableColors: {
    name: string;
    hex: string;
  }[];
}

export const KOENIGSEGG_MODELS: CarModel[] = [
  {
    id: 'ccgt',
    name: 'CCGT1',
    badge: 'THE UNCROWNED KING',
    image: '/ccgt.png',
    availableColors: [
      { name: 'Crystal White', hex: '#F4F4F4' },
      { name: 'Naked Carbon', hex: '#1C1C1C' }
    ]
  },
  {
    id: 'sedairspear',
    name: "SEDAIR'S SPEAR",
    badge: 'THE RECORD DESTROYER',
    image: '/sedair-spear.png',
    availableColors: [
      { name: 'Sweet Mandarin', hex: '#FF5E00' },
      { name: 'Crystal White', hex: '#F4F4F4' },
      { name: 'Naked Carbon', hex: '#1C1C1C' },
      { name: 'Ghost Gold', hex: '#BFA15F' }
    ]
  },
  {
    id: 'jesko-absolut',
    name: 'JESKO ABSOLUT',
    badge: 'THE FASTEST KOENIGSEGG EVER',
    image: '/absolut.png',
    availableColors: [
      { name: 'Crystal White', hex: '#F4F4F4' },
      { name: 'Naked Carbon', hex: '#1C1C1C' },
      { name: 'Ghost Gold', hex: '#BFA15F' }
    ]
  },
  {
    id: 'jesko-attackt',
    name: 'JESKO ATTACK',
    badge: 'THE BEAST',
    image: '/jeskoattack.png',
    availableColors: [
      { name: 'Sweet Mandarin', hex: '#FF5E00' },
      { name: 'Crystal White', hex: '#F4F4F4' },
      { name: 'Naked Carbon', hex: '#1C1C1C' },
      { name: 'Neon Blue', hex: '#2a1cf1' }
    ]
  },
  {
    id: 'cc850',
    name: 'CC850',
    badge: 'THE CHRONOGRAPH ONE',
    image: '/cc850.png',
    availableColors: [
      { name: 'Silver Heritage', hex: '#C0C0C0' },
      { name: 'Nero Essence', hex: '#0D0D0D' },
      { name: 'Maranello Red', hex: '#A80000' }
    ]
  },
  {
    id: 'gemera',
    name: 'GEMERA',
    badge: 'THE WORLD\'S FIRST MEGA-GT',
    image: '/gemera.png',
    availableColors: [
      { name: 'Grey Matter', hex: '#5A6166' },
      { name: 'Sunset Orange', hex: '#D64513' },
      { name: 'Desert Sand', hex: '#C2B299' },
      { name: 'Pebble Beach Green', hex: '#036d4d' }
    ]
  }
];
