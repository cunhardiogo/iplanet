import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'iPlanet — Loja Apple em São Paulo',
  description: 'iPhone, Mac, iPad e acessórios Apple zero na caixa e seminovos revisados. Lojas em Itaim Bibi e São Caetano do Sul. Atendimento pelo WhatsApp.',
  openGraph: {
    title: 'iPlanet — Tudo Apple. Mais perto.',
    description: 'Zero na caixa ou seminovo revisado. Você escolhe — e a gente entrega, parcela e atende no WhatsApp.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
