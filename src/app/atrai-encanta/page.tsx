'use client';

import { Montserrat } from 'next/font/google';
import { useEffect } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function AtraiEncanta() {
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
              Atrai & Encanta
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
              Ative conteúdo que <span style={{color: '#C6AD51', fontWeight: '600'}}>chama</span> e entregue encantamento que <span style={{color: '#C6AD51', fontWeight: '600'}}>retém</span>.
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl mb-6 lg:mb-8 leading-relaxed text-white max-w-3xl" style={{fontWeight: '300'}}>
              Gestão & Marketing para médicos que querem <strong>previsibilidade, autoridade e pacientes fiéis</strong> — para sair dos plantões com segurança.
            </p>

            {/* CTA Button */}
            <a href="https://api.whatsapp.com/send/?phone=5583987391092&text=Ol%C3%A1%2C+estou+interessado%28a%29+no+Atrai+%26+Encanta&type=phone_number&app_absent=0" className="w-full sm:w-auto group relative px-8 lg:px-10 py-3 lg:py-4 text-base lg:text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cta-button inline-block text-center">
              Quero atrair e encantar agora
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
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed" style={{fontWeight: '400'}}>
            Em <span style={{color: '#D4AF37', fontWeight: '600'}}>30–60 dias</span>, você instala um sistema simples que atrai o público certo, conduz até o agendamento e cria uma experiência memorável que faz o paciente voltar e indicar — com <span style={{color: '#D4AF37', fontWeight: '600'}}>processos claros, equipe alinhada e números sob controle</span>.
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
            style={{color: '#D4AF37', textShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
            Para quem é
          </h2>
          <div className="text-left space-y-4 lg:space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed" style={{fontWeight: '300'}}>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Médico que já entrega resultado clínico, mas sente que a operação oscila (semanas lotadas ↔ vazias).</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Médico que perde força no WhatsApp/telefone (demora, mensagens soltas, follow-up falho).</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Médico que quer uma experiência 5⭐ do contato ao pós, sem complicar a equipe.</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Médico decidido a sair dos plantões construindo previsibilidade em consultório.</p>
          </div>
        </div>
      </section>

      {/* O que te segura hoje */}
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
            style={{color: '#D4AF37', textShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
            O que te segura hoje
          </h2>
          <div className="text-left space-y-4 lg:space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed" style={{fontWeight: '300'}}>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Conteúdo que informa, mas não chama o paciente certo.</p>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Captação sem roteiro: leads entram e esfriam.</p>
            <p><strong style={{color: '#fca5a5'}}>•</strong> No-show alto por ausência de confirmação inteligente.</p>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Entrega clínica ótima, porém sem padrão de experiência.</p>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Falta de métricas operacionais (onde se perde tempo e dinheiro).</p>
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
            style={{color: '#FFFFFF', fontWeight: '700'}}> <span style={{color: '#D4AF37'}}>Sua passagem do A → B</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Hoje */}
            <div className="p-6 lg:p-10 rounded-3xl border-2"
              style={{
                borderColor: '#dc2626',
                background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%)'
              }}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center"
                style={{color: '#dc2626', fontWeight: '700'}}>
                Hoje (Ponto A):
              </h3>
              <div className="space-y-3 lg:space-y-4 text-base lg:text-lg" style={{color: '#FFFFFF', fontWeight: '400'}}>
                <p><strong style={{color: '#dc2626'}}>•</strong> Agenda imprevisível; mensagens sem resposta.</p>
                <p><strong style={{color: '#dc2626'}}>•</strong> Pacientes chegam &quot;curiosos&quot;, não &quot;decididos&quot;.</p>
                <p><strong style={{color: '#dc2626'}}>•</strong> Equipe insegura sobre o que falar e quando falar.</p>
                <p><strong style={{color: '#dc2626'}}>•</strong> Pós-consulta tímido; indicações acontecem &quot;por sorte&quot;.</p>
              </div>
            </div>

            {/* Em 45 dias */}
            <div className="p-6 lg:p-10 rounded-3xl border-2"
              style={{
                borderColor: '#1f82f4ff',
                background: 'linear-gradient(135deg, rgba(55, 131, 212, 0.2) 0%, rgba(30, 114, 149, 0.1) 100%)'
              }}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center"
                style={{color: '#1f82f4ff', fontWeight: '700'}}>
                Em 45 dias (Ponto B):
              </h3>
              <div className="space-y-3 lg:space-y-4 text-base lg:text-lg" style={{color: '#FFFFFF', fontWeight: '400'}}>
                <p><strong style={{color: '#D4AF37'}}>•</strong> Calendário estável com confirmação ativa (D-2/D-1/D0).</p>
                <p><strong style={{color: '#D4AF37'}}>•</strong> Mensagens que avançam: DM/WhatsApp com próximo passo claro.</p>
                <p><strong style={{color: '#D4AF37'}}>•</strong> Roteiros simples para recepção e atendimento (mesma linguagem, zero fricção).</p>
                <p><strong style={{color: '#D4AF37'}}>•</strong> Pós-consulta padronizado que vira review, retorno e indicação.</p>
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
        <a href="https://api.whatsapp.com/send/?phone=5583987391092&text=Ol%C3%A1%2C+estou+interessado%28a%29+no+Atrai+%26+Encanta&type=phone_number&app_absent=0" className="w-full sm:w-auto group relative px-8 sm:px-10 lg:px-12 py-4 lg:py-6 text-lg lg:text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cta-button inline-block text-center">
          Quero começar minha virada
        </a>
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
            style={{color: '#D4AF37', textShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
            O que você recebe
          </h2>

          <div className="text-left space-y-4 lg:space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed mb-12" style={{fontWeight: '300'}}>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Mapa da Jornada do Paciente (do primeiro contato ao pós).</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Roteiros plug-and-play (DM, WhatsApp, telefone) para avanço rápido.</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Sequência de confirmação 72h pronta (D-2/D-1/D0).</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Checklists de experiência (recepção, sala, entrega, encerramento).</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Kit Pós-consulta (mensagens 7/30/90 + pedido de review/NPS + indicação).</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Planilha-painel com indicadores de operação (show-up, fechamento, CAC, LTV).</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Pautas que &quot;chamam&quot; (orgânico/pago) com ganchos e CTAs prontos.</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Mini playbook da equipe (quem faz o quê, quando e como).</p>
          </div>

          <div className="p-6 lg:p-8 rounded-2xl border-2 mb-8"
            style={{
              borderColor: '#D4AF37',
              background: 'rgba(212, 175, 55, 0.1)'
            }}>
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center" style={{color: '#D4AF37'}}>
              Bônus (por tempo limitado)
            </h3>
            <div className="space-y-3 lg:space-y-4 text-base lg:text-lg" style={{fontWeight: '300'}}>
              <p><strong style={{color: '#D4AF37'}}>•</strong> Modelos de automação para WhatsApp Business (confirmação, lembretes, pós).</p>
              <p><strong style={{color: '#D4AF37'}}>•</strong> Prompts de IA para personalizar mensagens e acelerar respostas.</p>
            </div>
          </div>

          <div className="text-center">
            <a href="https://api.whatsapp.com/send/?phone=5583987391092&text=Ol%C3%A1%2C+estou+interessado%28a%29+no+Atrai+%26+Encanta&type=phone_number&app_absent=0" className="w-full sm:w-auto group relative px-8 sm:px-10 lg:px-12 py-4 lg:py-6 text-lg lg:text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cta-button inline-block text-center">
              Quero começar minha virada
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
            style={{color: '#D4AF37', textShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
            Ganhos concretos
          </h2>
          <div className="text-left space-y-4 lg:space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed" style={{fontWeight: '300'}}>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Show-up maior e no-show menor sem estressar a equipe.</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Fechamento melhor com scripts consultivos e próximos passos explícitos.</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> LTV em alta por continuidade, retorno e indicação.</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Previsibilidade real: você enxerga o funil leads → consultas → receita.</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Trilha para sair dos plantões com base em números, não esperança.</p>
          </div>
        </div>
      </section>

      {/* Se mantiver como está (Riscos) */}
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
            style={{color: '#D4AF37', textShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
            Se mantiver como está
          </h2>

          <div className="text-left space-y-4 lg:space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed" style={{fontWeight: '300'}}>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Pagar por leads que não viram consulta.</p>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Queimar horários nobres por falta de confirmação.</p>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Mensagens truncadas que desistem do paciente certo.</p>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Crescer volume sem margem; equipe cansada; reputação oscilando.</p>
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
            style={{color: '#D4AF37', textShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
            Garantia
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed" style={{fontWeight: '400'}}>
            Experimente por <span style={{color: '#D4AF37', fontWeight: '600'}}>7 dias</span>. Se não fizer sentido para a sua realidade, <span style={{color: '#D4AF37', fontWeight: '600'}}>reembolso sem burocracia</span>.
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
            style={{color: '#D4AF37', textShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
            FAQ
          </h2>

          <div className="space-y-8 lg:space-y-12">
            {[
              {
                question: "E se minha equipe for enxuta?",
                answer: "Roteiros e checklists curtos permitem rodar mesmo com 1–2 pessoas. Automação cobre o restante."
              },
              {
                question: "Preciso de um CRM caro?",
                answer: "Não. Você recebe uma planilha-painel inicial e instruções para evoluir quando fizer sentido."
              },
              {
                question: "Quando sinto efeito no no-show?",
                answer: "Em geral, entre 2 e 4 semanas após a sequência 72h e confirmação ativa."
              },
              {
                question: "Serve para minha especialidade?",
                answer: "Sim. Ajustamos a linguagem e o fluxo, respeitando limites éticos."
              },
              {
                question: "Isso ajuda mesmo a sair dos plantões?",
                answer: "Sim — quando show-up, fechamento e LTV crescem de forma consistente, você tem base real para sair dos plantões."
              }
            ].map((faq, index) => (
              <div key={index} className="border-l-4 pl-6 lg:pl-8" style={{borderColor: '#D4AF37'}}>
                <h3 className="text-xl lg:text-2xl font-bold mb-3" style={{color: '#D4AF37'}}>
                  {faq.question}
                </h3>
                <p className="text-lg lg:text-xl leading-relaxed" style={{fontWeight: '300'}}>
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
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 lg:mb-12" style={{fontWeight: '300'}}>
            <p>Imagine abrir sua agenda no próximo mês e enxergar comparecimento alto, equipe segura no roteiro e pacientes que voltam e indicam.</p>
            <p className="mt-4" style={{color: '#D4AF37'}}>Se hoje você &quot;faz de tudo&quot; e mesmo assim perde no detalhe, o que falta não é vontade — é <strong>processo</strong>.</p>
          </div>

          <a href="https://api.whatsapp.com/send/?phone=5583987391092&text=Ol%C3%A1%2C+estou+interessado%28a%29+no+Atrai+%26+Encanta&type=phone_number&app_absent=0" className="w-full sm:w-auto group relative px-8 sm:px-10 lg:px-12 py-4 lg:py-6 text-lg lg:text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cta-button inline-block text-center">
            Quero atrair e encantar agora
          </a>
        </div>
      </section>

    </div>
  );
}