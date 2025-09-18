'use client';

import { Montserrat } from 'next/font/google';
import { useEffect } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function MedicosResultado() {
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
              Médicos de Resultado
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
              Da excelência clínica à <span style={{color: '#C6AD51', fontWeight: '600'}}>autoridade lucrativa</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl mb-6 lg:mb-8 leading-relaxed text-white max-w-3xl" style={{fontWeight: '300'}}>
              <strong>Do plantão à liberdade.</strong>
            </p>

            {/* CTA Button */}
            <a href="https://api.whatsapp.com/send/?phone=5583987391092&text=Ol%C3%A1%2C+estou+interessado%28a%29+na+mentoria&type=phone_number&app_absent=0" className="w-full sm:w-auto group relative px-8 lg:px-10 py-3 lg:py-4 text-base lg:text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cta-button inline-block text-center">
              Quero ser um Médico de Resultado
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
            <span style={{color: '#D4AF37', fontWeight: '600'}}>Mentoria intensiva de 6 meses</span> para médicos que querem aprimorar sua capacitação técnica, posicionar-se como 1ª escolha no digital, encantar na experiência e vender protocolos de alto valor com ética — <span style={{color: '#D4AF37', fontWeight: '600'}}>construindo agenda, margem e liberdade</span>.
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
            <p><strong style={{color: '#D4AF37'}}>•</strong> Médico que já entrega resultado clínico, mas ainda não é a 1ª opção percebida no digital.</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Médico com agenda oscilando entre semanas cheias e vazias.</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Médico que sente segurança técnica, mas quer capturar valor com protocolo e preço bem posicionados.</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Médico decidido a sair dos plantões com previsibilidade em consultório.</p>
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
            <p><strong style={{color: '#fca5a5'}}>•</strong> Conteúdo que não chama o paciente certo (e não pede próxima ação).</p>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Recepção e WhatsApp sem roteiro (leads esfriam, no-show dói).</p>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Consulta rica, mas oferta difusa (paciente não entende o valor).</p>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Falta de métricas operacionais (não se enxerga onde a receita escapa).</p>
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
                <p><strong style={{color: '#dc2626'}}>•</strong> Perfil genérico; DMs vazias.</p>
                <p><strong style={{color: '#dc2626'}}>•</strong> Agenda imprevisível; no-show alto.</p>
                <p><strong style={{color: '#dc2626'}}>•</strong> Conversa de preço defensiva.</p>
                <p><strong style={{color: '#dc2626'}}>•</strong> Sem plano de pós-consulta e reativação.</p>
              </div>
            </div>

            {/* Em 120 dias */}
            <div className="p-6 lg:p-10 rounded-3xl border-2"
              style={{
                borderColor: '#1f82f4ff',
                background: 'linear-gradient(135deg, rgba(55, 131, 212, 0.2) 0%, rgba(30, 114, 149, 0.1) 100%)'
              }}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center"
                style={{color: '#1f82f4ff', fontWeight: '700'}}>
                Em 120 dias (Ponto B):
              </h3>
              <div className="space-y-3 lg:space-y-4 text-base lg:text-lg" style={{color: '#FFFFFF', fontWeight: '400'}}>
                <p><strong style={{color: '#D4AF37'}}>•</strong> Posicionamento nítido: bio + CTA + pauta que instala preferência.</p>
                <p><strong style={{color: '#D4AF37'}}>•</strong> Show-up ↑, no-show ↓ com confirmação ativa e equipe roteirizada.</p>
                <p><strong style={{color: '#D4AF37'}}>•</strong> Protocolo de alto valor e precificação estratégica.</p>
                <p><strong style={{color: '#D4AF37'}}>•</strong> Modelo de encantamento que vira review, retorno e indicação — LTV em alta.</p>
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
        <a href="https://api.whatsapp.com/send/?phone=5583987391092&text=Ol%C3%A1%2C+estou+interessado%28a%29+na+mentoria&type=phone_number&app_absent=0" className="w-full sm:w-auto group relative px-8 sm:px-10 lg:px-12 py-4 lg:py-6 text-lg lg:text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cta-button inline-block text-center">
          Quero começar minha virada
        </a>
      </section>

      {/* O Método GMBV */}
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
            style={{color: '#D4AF37', fontWeight: '700', textShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
            O Método GMBV
          </h2>
          <p className="text-xl text-center mb-12 text-gray-300">
            (4 frentes que trabalham em conjunto)
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                number: "1",
                title: "Técnica na prática",
                description: "Como aprender a avaliar e conduzir seu paciente de maneira simples, prática, objetiva e direta, de forma integral."
              },
              {
                number: "2",
                title: "Posicionamento",
                description: "Mensagem, bio, destaques e funil editorial que convoca o paciente ideal e conduz ao agendamento."
              },
              {
                number: "3",
                title: "Gestão & Marketing",
                description: "Estruturação de uma jornada do paciente para que ele seja atraído e retido em seu negócio."
              },
              {
                number: "4",
                title: "Modelo de Negócios & Venda",
                description: "Modelo de oferta, precificação, ancoragem, técnicas de venda, psicologia das vendas e venda consultiva para capturar valor com ética."
              }
            ].map((step, index) => (
              <div key={index} className="group flex flex-col items-center p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4"
                style={{
                  borderColor: '#D4AF37',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}>
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4"
                  style={{background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)'}}>
                  <span className="text-2xl font-bold" style={{color: '#0E1F14'}}>{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-center mb-4" style={{color: '#D4AF37'}}>{step.title}</h3>
                <p className="text-base text-center" style={{color: '#FFFFFF', fontWeight: '400'}}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Secundário */}
      <section className="py-12 px-4 md:px-6 text-center text-white animate-on-scroll"
        style={{
          borderTop: '1px solid rgba(212, 175, 55, 0.3)'
        }}>
        <a href="https://api.whatsapp.com/send/?phone=5583987391092&text=Ol%C3%A1%2C+estou+interessado%28a%29+na+mentoria&type=phone_number&app_absent=0" className="w-full sm:w-auto group relative px-8 sm:px-10 lg:px-12 py-4 lg:py-6 text-lg lg:text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cta-button inline-block text-center">
          Quero fazer parte do médicos de resultado
        </a>
      </section>

      {/* Benefícios concretos */}
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
            Benefícios concretos
          </h2>
          <div className="text-left space-y-4 lg:space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed" style={{fontWeight: '300'}}>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Liberdade para aproveitar o tempo com a família.</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Faturamento de seis dígitos.</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Modelo de negócio já validado.</p>
            <p><strong style={{color: '#D4AF37'}}>•</strong> Previsibilidade mensal — caminho real para sair dos plantões.</p>
          </div>
        </div>
      </section>

      {/* Se ficar como está */}
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
            Se ficar como está
          </h2>

          <div className="text-left space-y-4 lg:space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed" style={{fontWeight: '300'}}>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Rotina exaustiva nos plantões.</p>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Sem tempo de qualidade com a família.</p>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Comparação por preço (atraindo o público errado).</p>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Sem posicionamento.</p>
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
            Experimente por <span style={{color: '#D4AF37', fontWeight: '600'}}>7 dias</span>. Se não fizer sentido para sua realidade, <span style={{color: '#D4AF37', fontWeight: '600'}}>reembolso sem burocracia</span>.
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
                question: "E se eu travo para falar de preço?",
                answer: "Você recebe roteiros e ancoragens que posicionam valor antes do número e conduzem ao convite."
              },
              {
                question: "Funciona sem tráfego pago?",
                answer: "Sim. Implementamos orgânico com intenção e, se fizer sentido, escalamos com pago."
              },
              {
                question: "Minha equipe é pequena; consigo rodar?",
                answer: "Sim. Com esse modelo de negócio e estabelecimento de processos na empresa, é possível atingir alta performance com poucas pessoas na equipe."
              },
              {
                question: "Isso me ajuda a sair dos plantões?",
                answer: "Com certeza, em menos de 100 dias."
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
            <p>Imagine sua rotina em 100 dias: Você cuida do seu lifestyle pela manhã, trabalha durante a tarde e fica em casa com a família durante a noite, faturando mais de 6 dígitos todos os meses — <span style={{color: '#D4AF37', fontWeight: '600'}}>você no comando do próprio crescimento, sem dependência do governo</span>.</p>
            <p className="mt-6">Se hoje você acredita que a medicina acabou, sinto-lhe informar, mas estamos vivenciando a época onde os médicos realmente podem viver o extraordinário (se dominarem os 5 pilares de um médico de resultado) ou estar fadado ao fracasso nos plantões.</p>
            <p className="mt-4" style={{color: '#D4AF37', fontWeight: '600', fontSize: '1.2em'}}>De que lado você quer pertencer?</p>
          </div>

          <a href="https://api.whatsapp.com/send/?phone=5583987391092&text=Ol%C3%A1%2C+estou+interessado%28a%29+na+mentoria&type=phone_number&app_absent=0" className="w-full sm:w-auto group relative px-8 sm:px-10 lg:px-12 py-4 lg:py-6 text-lg lg:text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cta-button inline-block text-center">
            Quero ser um Médico de Resultado
          </a>
        </div>
      </section>

    </div>
  );
}