export const WHATSAPP_NUMBER = '5511973484819'
export const WHATSAPP_DISPLAY = '+55 11 97348-4819'

export function whatsappUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export type StoreHour = { d: string; h: string }

export type Store = {
  name: string
  addr: string
  mapsUrl: string
  hours: StoreHour[]
}

export const stores: Store[] = [
  {
    name: 'iPlanet Itaim Bibi',
    addr: 'R. Clodomiro Amazonas, 1158 — Itaim Bibi, São Paulo — SP',
    mapsUrl: 'https://maps.google.com/?q=R.+Clodomiro+Amazonas,+1158,+Itaim+Bibi,+São+Paulo',
    hours: [
      { d: 'Seg–Sex', h: '10h–18h30' },
      { d: 'Sábado', h: '10h–15h' },
    ],
  },
  {
    name: 'iPlanet São Caetano',
    addr: 'R. Santa Catarina, 40 — Quiosque 1, Centro, São Caetano do Sul — SP, 09510-120',
    mapsUrl: 'https://maps.google.com/?q=R.+Santa+Catarina,+40,+Centro,+São+Caetano+do+Sul',
    hours: [
      { d: 'Seg–Sex', h: '10h–18h' },
      { d: 'Sábado', h: '10h–18h' },
    ],
  },
]

export type Category = { id: string; label: string; shape: string }

export const categories: Category[] = [
  { id: 'iphone', label: 'iPhone', shape: 'iphone' },
  { id: 'mac', label: 'Mac', shape: 'mac' },
  { id: 'ipad', label: 'iPad', shape: 'ipad' },
  { id: 'watch', label: 'Apple Watch', shape: 'watch' },
  { id: 'airpods', label: 'AirPods', shape: 'airpods' },
  { id: 'acc', label: 'Acessórios', shape: 'acc' },
  { id: 'seminovos', label: 'Seminovos', shape: 'iphone' },
  { id: 'troca', label: 'Trade-in', shape: 'airtag' },
]

export type Product = {
  id: string
  title: string
  desc?: string
  price?: string
  priceOld?: string
  img?: string
  imgFit?: 'contain' | 'cover'
  eyebrow?: string
  novo?: boolean
  seminovo?: boolean
  last?: boolean
  hero?: boolean
  wide?: boolean
  dark?: boolean
  tint?: [string, string?]
}

export const novidades: Product[] = [
  {
    id: 'iphone17pro', novo: true, hero: true, dark: true,
    title: 'iPhone 17 Pro',
    desc: 'Pro em tudo. Lacrado, com nota fiscal. <strong>12x de R$ 833</strong> sem juros.',
    tint: ['#1a1a2e', '#0f0f1a'],
    img: '/assets/products/iphone-17-pro-natural.jpg',
    imgFit: 'contain',
  },
  {
    id: 'iphoneair', novo: true, eyebrow: 'ZERO NA CAIXA',
    title: 'iPhone Air',
    desc: 'Azul · 256GB · A19.',
    price: 'R$ 8.499 · 12x R$ 708',
    img: '/assets/products/iphone-air-blue.jpg',
  },
  {
    id: 'iphone16', novo: true, eyebrow: 'ZERO NA CAIXA',
    title: 'iPhone 16',
    desc: 'Lavanda · 128GB · A18.',
    price: 'R$ 7.499 · 12x R$ 624',
    img: '/assets/products/iphone-16-purple.jpg',
  },
  {
    id: 'macbookair', novo: true, eyebrow: 'ZERO NA CAIXA',
    title: 'MacBook Air',
    desc: '13" · M3 · 8GB · 256GB.',
    price: 'R$ 9.299 · 12x R$ 774',
    img: '/assets/products/macbook-air-pair.jpg',
  },
  {
    id: 'ipadair', novo: true, eyebrow: 'ZERO NA CAIXA',
    title: 'iPad Air',
    desc: '11" · M2 · Wi-Fi · 128GB.',
    price: 'R$ 6.299 · 12x R$ 524',
    img: '/assets/products/ipad-purple.jpg',
  },
  {
    id: 'watchultra', novo: true, eyebrow: 'ZERO NA CAIXA',
    title: 'Apple Watch Ultra 2',
    desc: 'Titânio preto · Pulseira Alpine.',
    price: 'R$ 8.799 · 12x R$ 733',
    img: '/assets/products/watch-ultra-blue.jpeg',
  },
]

export const seminovos: Product[] = [
  {
    id: 'sn-hero', wide: true, hero: true,
    title: 'Seminovos iPlanet',
    desc: 'Revisados por quem entende. Bateria 90%+ ou trocada. <strong>1 ano de garantia iPlanet</strong>. Por menos.',
    tint: ['#e3f0ee', '#d4e7e3'],
    img: '/assets/products/iphone-15-lineup.jpg',
    imgFit: 'contain',
  },
  {
    id: 'sn15pro', seminovo: true,
    title: 'iPhone 15 Pro 256GB',
    desc: 'Titânio preto · Bateria 94%.',
    priceOld: 'De R$ 9.499 (zero)',
    price: 'R$ 5.890 · 12x R$ 491',
    img: '/assets/products/iphone-15-pro-black.png',
  },
  {
    id: 'sn14plus', seminovo: true,
    title: 'iPhone 14 Plus 128GB',
    desc: 'Meia-noite · Bateria 92%.',
    priceOld: 'De R$ 6.999 (zero)',
    price: 'R$ 3.890 · 12x R$ 324',
    img: '/assets/products/iphone-14-plus-midnight.jpg',
  },
  {
    id: 'snse', seminovo: true,
    title: 'iPhone SE 64GB',
    desc: 'Preto · Bateria nova.',
    priceOld: 'De R$ 3.799 (zero)',
    price: 'R$ 1.990 · 12x R$ 166',
    img: '/assets/products/iphone-se-black.jpg',
  },
  {
    id: 'snmac', seminovo: true,
    title: 'MacBook Pro 14"',
    desc: 'M3 · 16GB · 512GB · 18 ciclos.',
    priceOld: 'De R$ 16.999 (zero)',
    price: 'R$ 9.490 · 12x R$ 790',
    img: '/assets/products/macbook-pro-pair.jpg',
  },
  {
    id: 'snwatch', seminovo: true, last: true,
    title: 'Apple Watch S10 42mm',
    desc: 'Estelar · Pulseira nova.',
    price: 'R$ 2.490 · 12x R$ 207',
    img: '/assets/products/watch-se-pink.jpeg',
  },
]

export const acessorios: Product[] = [
  { id: 'airpodspro2', title: 'AirPods Pro 2', desc: 'USB-C · Cancelamento ativo.', price: 'R$ 1.999 · 12x R$ 167', img: '/assets/products/airpods-pro-2.png' },
  { id: 'charger20', title: 'Carregador 20W USB-C', desc: 'Original Apple.', price: 'R$ 199 · à vista', img: '/assets/products/charger-20w.png' },
  { id: 'magcable', title: 'Cabo MagSafe Watch', desc: 'USB-C · 1m trançado.', price: 'R$ 349 · 6x R$ 58', img: '/assets/products/watch-magsafe-cable.png' },
  { id: 'milanese', title: 'Pulseira Milanese', desc: 'Aço · 3 cores.', price: 'R$ 599 · 12x R$ 50', img: '/assets/products/watch-band-milanese.png' },
  { id: 'sportloop', title: 'Pulseira Sport Loop', desc: 'Nylon · 3 cores pastel.', price: 'R$ 379 · 12x R$ 32', img: '/assets/products/watch-band-sport-loop-pastel.png' },
  { id: 'alpine', title: 'Pulseira Alpine', desc: 'Para Watch Ultra.', price: 'R$ 749 · 12x R$ 62', img: '/assets/products/watch-band-alpine-orange.png' },
]

export type Feature = { id: string; icon: string; title: string }

export const features: Feature[] = [
  { id: 'garantia', icon: 'shield', title: '<em>1 ano de garantia</em> iPlanet em todo seminovo.' },
  { id: 'whatsapp', icon: 'whats', title: 'Atendimento humano, direto no <em>WhatsApp</em>.' },
  { id: 'parcel', icon: 'card', title: 'Em até <em>12x sem juros</em>. PIX com 5% off.' },
  { id: 'frete', icon: 'box', title: '<em>Frete grátis</em> ou retire na loja.' },
]

export const quickLinks = [
  'Como funciona o trade-in',
  'Garantia iPlanet',
  'Política de devolução',
  'Acompanhar pedido',
  'Vender pra iPlanet',
  'Falar no WhatsApp',
]
