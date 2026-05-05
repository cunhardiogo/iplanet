export const WHATSAPP_NUMBER = '5511973484819'
export const WHATSAPP_DISPLAY = '+55 11 97348-4819'

export function whatsappUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export type StoreHour = { d: string; h: string }

export type Store = {
  name: string
  shortName: string
  addr: string
  shortAddr: string
  neighborhood: string
  mapsUrl: string
  hours: StoreHour[]
}

export const stores: Store[] = [
  {
    name: 'iPlanet Itaim Bibi',
    shortName: 'Itaim Bibi',
    addr: 'R. Clodomiro Amazonas, 1158 — Itaim Bibi, São Paulo — SP',
    shortAddr: 'R. Clodomiro Amazonas, 1158',
    neighborhood: 'Itaim Bibi · São Paulo',
    mapsUrl: 'https://maps.google.com/?q=R.+Clodomiro+Amazonas,+1158,+Itaim+Bibi,+São+Paulo',
    hours: [
      { d: 'Seg–Sex', h: '10h–18h30' },
      { d: 'Sábado', h: '10h–15h' },
    ],
  },
  {
    name: 'iPlanet São Caetano',
    shortName: 'São Caetano',
    addr: 'R. Santa Catarina, 40 — Quiosque 1, Centro, São Caetano do Sul — SP, 09510-120',
    shortAddr: 'R. Santa Catarina, 40 — Quiosque 1',
    neighborhood: 'Centro · São Caetano do Sul',
    mapsUrl: 'https://maps.google.com/?q=R.+Santa+Catarina,+40,+Centro,+São+Caetano+do+Sul',
    hours: [
      { d: 'Seg–Sex', h: '10h–18h' },
      { d: 'Sábado', h: '10h–18h' },
    ],
  },
]

export type Category = { id: string; label: string; shape: string; href: string }

export const categories: Category[] = [
  { id: 'iphone',    label: 'iPhone',      shape: 'iphone',  href: '#novidades' },
  { id: 'mac',       label: 'Mac',         shape: 'mac',     href: '#novidades' },
  { id: 'ipad',      label: 'iPad',        shape: 'ipad',    href: '#novidades' },
  { id: 'watch',     label: 'Apple Watch', shape: 'watch',   href: '#novidades' },
  { id: 'airpods',   label: 'AirPods',     shape: 'airpods', href: '#acessorios' },
  { id: 'acc',       label: 'Acessórios',  shape: 'acc',     href: '#acessorios' },
  { id: 'seminovos', label: 'Seminovos',   shape: 'iphone',  href: '#seminovos' },
  { id: 'troca',     label: 'Trade-in',    shape: 'airtag',  href: '#troca' },
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
    desc: 'Pro em tudo. Lacrado, com nota fiscal. <strong>18x de R$ 555</strong> sem juros.',
    tint: ['#1a1a2e', '#0f0f1a'],
    img: '/assets/products/iphone-17-pro-natural.jpg',
    imgFit: 'contain',
  },
  {
    id: 'iphoneair', novo: true, eyebrow: 'ZERO NA CAIXA',
    title: 'iPhone Air',
    desc: 'Azul · 256GB · A19.',
    price: 'R$ 8.499 · 18x R$ 472',
    img: '/assets/products/iphone-air-blue.jpg',
  },
  {
    id: 'iphone16', novo: true, eyebrow: 'ZERO NA CAIXA',
    title: 'iPhone 16',
    desc: 'Lavanda · 128GB · A18.',
    price: 'R$ 7.499 · 18x R$ 417',
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
  { id: 'whatsapp', icon: 'whats',  title: 'Atendimento humano, direto no <em>WhatsApp</em>.' },
  { id: 'parcel',   icon: 'card',   title: 'Até <em>18x sem juros</em> em iPhones lacrados. PIX com 5% off.' },
  { id: 'frete',    icon: 'box',    title: '<em>Frete grátis</em> ou retire na loja.' },
]

/* ── SUPER PROMOÇÃO — featured offer ── */
export type SuperPromo = {
  flag: string
  titleAccent: string
  titleRest: string
  desc: string
  price: string
  installments: string
  bonus: string
  ctaPrimary: string
  ctaSecondary: string
  img: string
  bg: string
}

export const superPromo: SuperPromo = {
  flag: 'OFERTA RELÂMPAGO · ATÉ DOMINGO',
  titleAccent: 'iPhone 16',
  titleRest: 'em 18x sem juros.',
  desc: 'Sem entrada. Lacrado, com nota fiscal e garantia Apple. Estoque limitado.',
  price: 'R$ 7.499',
  installments: '18x R$ 417',
  bonus: '+ AirPods Pro 2 com 30% off na compra junta.',
  ctaPrimary: 'Quero meu iPhone',
  ctaSecondary: 'Ver detalhes',
  img: '/assets/products/iphone-16-purple.jpg',
  bg: 'linear-gradient(135deg, #fff5e6 0%, #ffe6e8 30%, #f0e0ff 65%, #e0f0ff 100%)',
}

export const quickLinks = [
  'Como funciona o trade-in',
  'Garantia iPlanet',
  'Política de devolução',
  'Acompanhar pedido',
  'Vender pra iPlanet',
  'Falar no WhatsApp',
]
