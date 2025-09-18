'use client';

import { Montserrat } from 'next/font/google';
import { useEffect } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function ModeloNegociosVendas() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={`${montserrat.className} min-h-screen`}
      style={{
        background: 'linear-gradient(180deg, #164A35 0%, #0E1F14 50%, #0A2405 100%)'
      }}>

      {/* Hero Section */}
      <section className="relative flex items-center px-4 md:px-6 overflow-hidden"
        style={{
          minHeight: '100vh',
          background: `linear-gradient(90deg, #164A35 0%, #0E1F14 30%, #0A2405 100%)`
        }}>

        {/* Golden Light Elements */}
        <div className="absolute top-20 left-10 w-32 h-20 opacity-30"
          style={{
            background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
            filter: 'blur(40px)',
            transform: 'rotate(-15deg)'
          }}
        />

        <div className="absolute bottom-32 right-16 w-40 h-24 opacity-25"
          style={{
            background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
            filter: 'blur(50px)',
            transform: 'rotate(25deg)'
          }}
        />

        <div className="absolute top-1/2 left-1/4 w-24 h-16 opacity-20"
          style={{
            background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
            filter: 'blur(35px)',
            transform: 'rotate(-30deg)'
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="flex flex-col items-center justify-center min-h-screen text-center">

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 lg:mb-8 leading-tight golden-text"
              style={{
                fontWeight: '700',
                textShadow: '0 2px 6px rgba(0,0,0,0.3)',
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '-0.02em',
                lineHeight: '1.1'
              }}>
              Modelo de Negócios & Venda
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 lg:mb-8 leading-tight text-white max-w-4xl"
              style={{
                fontWeight: '500',
                textShadow: '0 2px 6px rgba(0,0,0,0.3)',
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '-0.02em',
                lineHeight: '1.2'
              }}>
              O desenho operacional dos médicos que <span style={{ color: '#C6AD51', fontWeight: '600' }}>faturam 6 dígitos</span>.
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl mb-6 lg:mb-8 leading-relaxed text-white max-w-3xl" style={{ fontWeight: '300' }}>
              Vendas e Protocolos de Alto Valor para <strong>sair dos plantões com previsibilidade e margem</strong>.
            </p>

            {/* CTA Button */}
            <a href="https://api.whatsapp.com/send/?phone=5583987391092&text=Ol%C3%A1%2C+estou+interessado%28a%29+no+Modelo+de+Neg%C3%B3cios+%26+Vendas&type=phone_number&app_absent=0" className="w-full sm:w-auto group relative px-8 lg:px-10 py-3 lg:py-4 text-base lg:text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cta-button inline-block text-center">
              Quero estruturar meu modelo de 6 dígitos
            </a>

          </div>
        </div>
      </section>

      {/* Subtitle Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-6 text-white animate-on-scroll relative overflow-hidden"
        style={{
          background: `linear-gradient(90deg, #164A35 0%, #0E1F14 30%, #0A2405 100%)`,
          borderTop: '3px solid #D4AF37'
        }}>

        {/* Golden Light Elements */}
        <div className="absolute top-20 left-10 w-32 h-20 opacity-30"
          style={{
            background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
            filter: 'blur(40px)',
            transform: 'rotate(-15deg)'
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed" style={{ fontWeight: '400' }}>
            Em <span style={{ color: '#D4AF37', fontWeight: '600' }}>30–60 dias</span>, você instala um modelo de oferta, precificação e fechamento alinhado aos seus protocolos, agenda e estrutura — para <span style={{ color: '#D4AF37', fontWeight: '600' }}>cobrar o que vale, aumentar ticket e crescer com menos horas de consultório</span> (com ética e segurança).
          </p>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-6 text-white animate-on-scroll relative overflow-hidden"
        style={{
          background: `linear-gradient(90deg, #164A35 0%, #0E1F14 30%, #0A2405 100%)`,
          borderTop: '1px solid rgba(212, 175, 55, 0.3)'
        }}>

        {/* Golden Light Elements */}
        <div className="absolute bottom-32 right-16 w-40 h-24 opacity-25"
          style={{
            background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
            filter: 'blur(50px)',
            transform: 'rotate(25deg)'
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-12 text-center leading-tight"
            style={{ color: '#D4AF37', textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
            Para quem é
          </h2>
          <div className="text-left space-y-4 lg:space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed" style={{ fontWeight: '300' }}>
            <p><strong style={{ color: '#D4AF37' }}>•</strong> Médico que já gera resultado clínico, mas não consegue capturar valor no preço.</p>
            <p><strong style={{ color: '#D4AF37' }}>•</strong> Médico que sente travas para apresentar protocolos de alto valor de forma ética e clara.</p>
            <p><strong style={{ color: '#D4AF37' }}>•</strong> Médico que fecha pouco por falta de roteiro (objeções, ancoragem, follow-up).</p>
            <p><strong style={{ color: '#D4AF37' }}>•</strong> Médico decidido a sair dos plantões, construindo receita previsível e lucrativa no consultório.</p>
          </div>
        </div>
      </section>

      {/* O que te impede hoje */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-6 text-white animate-on-scroll relative overflow-hidden"
        style={{
          background: `linear-gradient(90deg, #164A35 0%, #0E1F14 30%, #0A2405 100%)`,
          borderTop: '1px solid rgba(212, 175, 55, 0.3)'
        }}>

        {/* Golden Light Elements */}
        <div className="absolute top-32 right-20 w-36 h-22 opacity-25"
          style={{
            background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
            filter: 'blur(45px)',
            transform: 'rotate(20deg)'
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-12 text-center leading-tight"
            style={{ color: '#D4AF37', textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
            O que te impede hoje
          </h2>
          <div className="text-left space-y-4 lg:space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed" style={{ fontWeight: '300' }}>
            <p><strong style={{ color: '#fca5a5' }}>•</strong> Consulta rica, oferta fraca (paciente não entende o valor).</p>
            <p><strong style={{ color: '#fca5a5' }}>•</strong> Protocolo ótimo, margem ruim (custos mal mapeados, bônus sem estratégia).</p>
            <p><strong style={{ color: '#fca5a5' }}>•</strong> Medo de falar de preço; conversa vira &quot;tabela&quot; em vez de transformação.</p>
            <p><strong style={{ color: '#fca5a5' }}>•</strong> Falta de pós-consulta comercial (perde reativação, upgrades e indicações).</p>
          </div>
        </div>
      </section>

      {/* Promessa - A Travessia (A → B) */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-6 animate-on-scroll relative overflow-hidden"
        style={{
          background: `linear-gradient(90deg, #164A35 0%, #0E1F14 30%, #0A2405 100%)`,
          borderTop: '1px solid rgba(212, 175, 55, 0.3)'
        }}>

        {/* Golden Light Elements */}
        <div className="absolute bottom-20 left-16 w-28 h-18 opacity-30"
          style={{
            background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
            filter: 'blur(38px)',
            transform: 'rotate(-25deg)'
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 lg:mb-20"
            style={{ color: '#FFFFFF', fontWeight: '700' }}> <span style={{ color: '#D4AF37' }}>Sua passagem do A → B</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Hoje */}
            <div className="p-6 lg:p-10 rounded-3xl border-2"
              style={{
                borderColor: '#dc2626',
                background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%)'
              }}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center"
                style={{ color: '#dc2626', fontWeight: '700' }}>
                Hoje (Ponto A):
              </h3>
              <div className="space-y-3 lg:space-y-4 text-base lg:text-lg" style={{ color: '#FFFFFF', fontWeight: '400' }}>
                <p><strong style={{ color: '#dc2626' }}>•</strong> Ticket pressionado; comparação por preço.</p>
                <p><strong style={{ color: '#dc2626' }}>•</strong> Protocolo sem valor; bônus desconexos.</p>
                <p><strong style={{ color: '#dc2626' }}>•</strong> Apresentação sem ancoragem; objeções travam.</p>
                <p><strong style={{ color: '#dc2626' }}>•</strong> Modelo de negócio ruim.</p>
              </div>
            </div>

            {/* Em 45 dias */}
            <div className="p-6 lg:p-10 rounded-3xl border-2"
              style={{
                borderColor: '#1f82f4ff',
                background: 'linear-gradient(135deg, rgba(55, 131, 212, 0.2) 0%, rgba(30, 114, 149, 0.1) 100%)'
              }}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center"
                style={{ color: '#1f82f4ff', fontWeight: '700' }}>
                Em 45 dias (Ponto B):
              </h3>
              <div className="space-y-3 lg:space-y-4 text-base lg:text-lg" style={{ color: '#FFFFFF', fontWeight: '400' }}>
                <p><strong style={{ color: '#D4AF37' }}>•</strong> Modelo de negócio correto.</p>
                <p><strong style={{ color: '#D4AF37' }}>•</strong> Precificação estratégica (custos, margem, parcelamento, garantia).</p>
                <p><strong style={{ color: '#D4AF37' }}>•</strong> Roteiro de venda consultiva (SPIN, ancoragem, fechamento, follow-up).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Intermediário */}
      <section className="py-12 px-4 md:px-6 text-center text-white animate-on-scroll"
        style={{
          borderTop: '1px solid rgba(212, 175, 55, 0.3)'
        }}>
        <a href="https://api.whatsapp.com/send/?phone=5583987391092&text=Ol%C3%A1%2C+estou+interessado%28a%29+no+Modelo+de+Neg%C3%B3cios+%26+Vendas&type=phone_number&app_absent=0" className="w-full sm:w-auto group relative px-8 sm:px-10 lg:px-12 py-4 lg:py-6 text-lg lg:text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cta-button inline-block text-center">
          Quero sair dos plantões com previsibilidade
        </a>
      </section>

      {/* Como funciona */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-6 text-white animate-on-scroll relative overflow-hidden"
        style={{
          background: `linear-gradient(90deg, #164A35 0%, #0E1F14 30%, #0A2405 100%)`,
          borderTop: '1px solid rgba(212, 175, 55, 0.3)'
        }}>

        {/* Golden Light Elements */}
        <div className="absolute top-24 left-12 w-32 h-20 opacity-25"
          style={{
            background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
            filter: 'blur(42px)',
            transform: 'rotate(-20deg)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 lg:mb-20"
            style={{ color: '#D4AF37', fontWeight: '700', textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
            Como funciona
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                number: "1",
                title: "Posicionar a Oferta",
                description: "Clareza do problema, promessa e prova. Da linguagem técnica à linguagem de decisão do paciente."
              },
              {
                number: "2",
                title: "Roteirizar a Conversa",
                description: "SPIN Selling adaptado à clínica: situação, problema, implicações e necessidade de solução."
              },
              {
                number: "3",
                title: "Orquestrar o Stack de Valor",
                description: "Entregáveis, bônus e garantias coerentes com o protocolo (sem inflar custo)."
              },
              {
                number: "4",
                title: "Tornar o Preço Inevitável",
                description: "Ancoragem (antes/depois, custo da inação), opções boas vs. melhores, condições."
              },
              {
                number: "5",
                title: "Conduzir o Fechamento",
                description: "Sinais de compra, roteiros de objeções (preço, tempo, parceiro), convite claro."
              },
              {
                number: "6",
                title: "Operar o Follow-up",
                description: "Sequências de D+1/D+3/D+7, retomada de interessados e reativação."
              },
            ].map((step, index) => (
              <div key={index} className="group flex flex-col items-center p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4"
                style={{
                  borderColor: '#D4AF37',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}>
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4"
                  style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)' }}>
                  <span className="text-2xl font-bold" style={{ color: '#0E1F14' }}>{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-center mb-4" style={{ color: '#D4AF37' }}>{step.title}</h3>
                <p className="text-base text-center" style={{ color: '#FFFFFF', fontWeight: '400' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que você recebe */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-6 text-white animate-on-scroll relative overflow-hidden"
        style={{
          background: `linear-gradient(90deg, #164A35 0%, #0E1F14 30%, #0A2405 100%)`,
          borderTop: '1px solid rgba(212, 175, 55, 0.3)'
        }}>

        {/* Golden Light Elements */}
        <div className="absolute bottom-28 right-20 w-38 h-24 opacity-30"
          style={{
            background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
            filter: 'blur(48px)',
            transform: 'rotate(30deg)'
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-12 text-center leading-tight"
            style={{ color: '#D4AF37', textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
            O que você recebe
          </h2>

          <div className="text-left space-y-4 lg:space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed mb-12" style={{ fontWeight: '300' }}>
            <p><strong style={{ color: '#D4AF37' }}>•</strong> Blueprint do Protocolo de Alto Valor (estrutura, marcos e entregáveis).</p>
            <p><strong style={{ color: '#D4AF37' }}>•</strong> Planilha de Precificação (custos, margem, cenários, parcelamento).</p>
            <p><strong style={{ color: '#D4AF37' }}>•</strong> Roteiro de Venda Consultiva (SPIN + ancoragem + fechamento).</p>
            <p><strong style={{ color: '#D4AF37' }}>•</strong> Templates de Proposta (1:1 e 1→N) editáveis.</p>
            <p><strong style={{ color: '#D4AF37' }}>•</strong> Sequência de Follow-up (D+1/D+3/D+7) com micro-CTA.</p>
          </div>

          <div className="p-6 lg:p-8 rounded-2xl border-2 mb-8"
            style={{
              borderColor: '#D4AF37',
              background: 'rgba(212, 175, 55, 0.1)'
            }}>
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center" style={{ color: '#D4AF37' }}>
              Bônus (por tempo limitado)
            </h3>
            <div className="space-y-3 lg:space-y-4 text-base lg:text-lg" style={{ fontWeight: '300' }}>
              <p><strong style={{ color: '#D4AF37' }}>•</strong> Scripts de Objeções (preço/tempo/autoridade/necessidade).</p>
            </div>
          </div>

          <div className="text-center">
            <a href="https://api.whatsapp.com/send/?phone=5583987391092&text=Ol%C3%A1%2C+estou+interessado%28a%29+no+Modelo+de+Neg%C3%B3cios+%26+Vendas&type=phone_number&app_absent=0" className="w-full sm:w-auto group relative px-8 sm:px-10 lg:px-12 py-4 lg:py-6 text-lg lg:text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cta-button inline-block text-center">
              Quero os roteiros e a planilha de precificação
            </a>
          </div>
        </div>
      </section>

      {/* Ganhos concretos */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-6 text-white animate-on-scroll relative overflow-hidden"
        style={{
          background: `linear-gradient(90deg, #164A35 0%, #0E1F14 30%, #0A2405 100%)`,
          borderTop: '1px solid rgba(212, 175, 55, 0.3)'
        }}>

        {/* Golden Light Elements */}
        <div className="absolute top-1/2 right-1/4 w-26 h-18 opacity-20"
          style={{
            background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
            filter: 'blur(36px)',
            transform: 'rotate(-35deg)'
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-12 text-center leading-tight"
            style={{ color: '#D4AF37', textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
            Ganhos concretos
          </h2>
          <div className="text-left space-y-4 lg:space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed" style={{ fontWeight: '300' }}>
            <p><strong style={{ color: '#D4AF37' }}>•</strong> Ticket médio ↑ com custo e margem sob controle.</p>
            <p><strong style={{ color: '#D4AF37' }}>•</strong> Taxa de fechamento ↑ (apresentação com ancoragem e convite).</p>
            <p><strong style={{ color: '#D4AF37' }}>•</strong> LTV ↑ com upgrades e reativação bem-feita.</p>
            <p><strong style={{ color: '#D4AF37' }}>•</strong> Previsibilidade: metas semanais de consulta, receita e lucratividade.</p>
            <p><strong style={{ color: '#D4AF37' }}>•</strong> Trilha real para sair dos plantões com base em números — não em esperança.</p>
          </div>
        </div>
      </section>

      {/* Riscos pra quem fica de fora */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-6 text-center text-white animate-on-scroll relative overflow-hidden"
        style={{
          background: `linear-gradient(90deg, #164A35 0%, #0E1F14 30%, #0A2405 100%)`,
          borderTop: '1px solid rgba(212, 175, 55, 0.3)'
        }}>

        {/* Golden Light Elements */}
        <div className="absolute top-16 right-24 w-34 h-22 opacity-28"
          style={{
            background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
            filter: 'blur(44px)',
            transform: 'rotate(18deg)'
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-12"
            style={{ color: '#D4AF37', textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
            Riscos pra quem fica de fora
          </h2>

          <div className="text-left space-y-4 lg:space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed" style={{ fontWeight: '300' }}>
            <p><strong style={{ color: '#fca5a5' }}>•</strong> Continuar competindo por preço (erosão de margem).</p>
            <p><strong style={{ color: '#fca5a5' }}>•</strong> Ofertas que não diferenciam (paciente não enxerga valor).</p>
            <p><strong style={{ color: '#fca5a5' }}>•</strong> Conversas sem roteiro → perda no &quot;quase&quot;.</p>
            <p><strong style={{ color: '#fca5a5' }}>•</strong> Falta de pós-comercial → cancelamentos, baixo LTV, atraso no crescimento.</p>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-6 text-center text-white animate-on-scroll relative overflow-hidden"
        style={{
          background: `linear-gradient(90deg, #164A35 0%, #0E1F14 30%, #0A2405 100%)`,
          borderTop: '1px solid rgba(212, 175, 55, 0.3)'
        }}>

        {/* Golden Light Elements */}
        <div className="absolute bottom-20 right-16 w-32 h-20 opacity-25"
          style={{
            background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
            filter: 'blur(42px)',
            transform: 'rotate(25deg)'
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-12"
            style={{ color: '#D4AF37', textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
            Garantia
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed" style={{ fontWeight: '400' }}>
            Experimente por <span style={{ color: '#D4AF37', fontWeight: '600' }}>7 dias</span>. Se não fizer sentido para sua realidade, <span style={{ color: '#D4AF37', fontWeight: '600' }}>reembolso sem burocracia</span>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-6 text-white animate-on-scroll relative overflow-hidden"
        style={{
          background: `linear-gradient(90deg, #164A35 0%, #0E1F14 30%, #0A2405 100%)`,
          borderTop: '1px solid rgba(212, 175, 55, 0.3)'
        }}>

        {/* Golden Light Elements */}
        <div className="absolute top-1/2 right-1/3 w-28 h-18 opacity-20"
          style={{
            background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
            filter: 'blur(40px)',
            transform: 'rotate(-30deg)'
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 lg:mb-16 text-center leading-tight"
            style={{ color: '#D4AF37', textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
            FAQ
          </h2>

          <div className="space-y-8 lg:space-y-12">
            {[
              {
                question: "E se eu travo para falar de preço?",
                answer: "Você terá roteiros de ancoragem e uma sequência de conversa que posiciona valor antes do número."
              },
              {
                question: "Funciona sem tráfego pago?",
                answer: "Sim. O módulo é sobre modelo e venda; funciona com orgânico e pode escalar com pago."
              },
              {
                question: "Serve para qualquer especialidade?",
                answer: "Sim. Você adapta o modelo e as garantias ao seu contexto e limites éticos."
              },
              {
                question: "Isso ajuda a sair dos plantões?",
                answer: "Com certeza, em menos de 100 dias."
              }
            ].map((faq, index) => (
              <div key={index} className="border-l-4 pl-6 lg:pl-8" style={{ borderColor: '#D4AF37' }}>
                <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{ color: '#D4AF37' }}>
                  {faq.question}
                </h3>
                <p className="text-lg lg:text-xl leading-relaxed" style={{ fontWeight: '300' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-6 text-center text-white animate-on-scroll relative overflow-hidden"
        style={{
          background: `linear-gradient(90deg, #164A35 0%, #0E1F14 30%, #0A2405 100%)`,
          borderTop: '1px solid rgba(212, 175, 55, 0.3)'
        }}>

        {/* Golden Light Elements */}
        <div className="absolute top-20 left-16 w-36 h-24 opacity-30"
          style={{
            background: 'linear-gradient(45deg, #D4AF37, #F4D03F)',
            filter: 'blur(46px)',
            transform: 'rotate(-22deg)'
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 lg:mb-12" style={{ fontWeight: '300' }}>
            <p>Imagine sua próxima consulta: protocolo claro, oferta sólida, conversa leve — e o sim acontecendo com tranquilidade.</p>
            <p className="mt-4" style={{ color: '#D4AF37' }}>Se hoje você entrega muito e captura pouco, o que falta não é esforço — é <strong> o modelo de negócio correto</strong>.</p>
          </div>

          <a href="https://api.whatsapp.com/send/?phone=5583987391092&text=Ol%C3%A1%2C+estou+interessado%28a%29+no+Modelo+de+Neg%C3%B3cios+%26+Vendas&type=phone_number&app_absent=0" className="w-full sm:w-auto group relative px-8 sm:px-10 lg:px-12 py-4 lg:py-6 text-lg lg:text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cta-button inline-block text-center">
            Quero estruturar meu modelo de 6 dígitos agora
          </a>
        </div>
      </section>

    </div>
  );
}