'use client';

import Image from "next/image";
import { Montserrat } from 'next/font/google';
import { useEffect } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function EfeitoPrimeiraEscolha() {
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
        background: 'linear-gradient(180deg, #164A35 0%, #0E1F14 30%, #000000 100%)'
      }}>

      {/* Hero Section - Layout A Travessia */}
      <section className="relative flex items-center px-4 md:px-6 overflow-hidden"
        style={{
          minHeight: '100vh',
          background: `linear-gradient(90deg, #164A35 0%, #0E1F14 30%, #000000 100%)`
        }}>

        {/* Golden Light Rectangles */}
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

        {/* Ambient Golden Lights - More visible atmospheric lighting */}
        <div className="absolute top-20 left-20 w-40 h-28 opacity-35 z-5"
          style={{
            background: '#C6AD51',
            filter: 'blur(120px)',
            transform: 'rotate(-25deg)',
            borderRadius: '50%'
          }}
        />

        <div className="absolute bottom-32 right-32 w-36 h-24 opacity-30 z-5"
          style={{
            background: '#C6AD51',
            filter: 'blur(100px)',
            transform: 'rotate(20deg)',
            borderRadius: '50%'
          }}
        />

        <div className="absolute top-1/3 right-16 w-32 h-20 opacity-40 z-5"
          style={{
            background: '#C6AD51',
            filter: 'blur(90px)',
            transform: 'rotate(-15deg)',
            borderRadius: '50%'
          }}
        />

        <div className="absolute bottom-1/3 left-12 w-35 h-22 opacity-25 z-5"
          style={{
            background: '#C6AD51',
            filter: 'blur(110px)',
            transform: 'rotate(30deg)',
            borderRadius: '50%'
          }}
        />

        <div className="absolute top-1/2 left-1/3 w-28 h-18 opacity-20 z-5"
          style={{
            background: '#C6AD51',
            filter: 'blur(80px)',
            transform: 'rotate(-35deg)',
            borderRadius: '50%'
          }}
        />

        <div className="absolute top-1/4 left-1/2 w-24 h-16 opacity-15 z-5"
          style={{
            background: '#C6AD51',
            filter: 'blur(70px)',
            transform: 'rotate(45deg)',
            borderRadius: '50%'
          }}
        />

        {/* Main Studio Light - From top edge covering everything */}
        <div className="absolute -top-40 left-0 w-full h-[60vh] pointer-events-none z-5"
          style={{
            background: 'radial-gradient(ellipse at center top, #D4AF37 0%, rgba(212, 175, 55, 0.4) 20%, rgba(212, 175, 55, 0.2) 40%, rgba(212, 175, 55, 0.1) 60%, transparent 100%)',
            filter: 'blur(60px)',
            mixBlendMode: 'screen',
            opacity: 0.25
          }}
        />

        {/* Vignette Effect - Subtle edge darkening */}
        <div className="absolute inset-0 pointer-events-none z-15"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.3) 100%)',
            mixBlendMode: 'multiply'
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="flex flex-col items-center justify-center min-h-screen text-center">

            {/* Main Title */}
            <div className="mb-6 lg:mb-8" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <Image
                src="/tituloEscolha.svg"
                alt="Efeito Primeira Escolha"
                width={600}
                height={300}
                className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
                priority
              />
            </div>

            {/* Subtitle with PNL */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 lg:mb-8 leading-tight text-white max-w-4xl"
              data-aos="fade-up" data-aos-duration="800" data-aos-delay="400"
              style={{
                fontWeight: '500',
                textShadow: '0 2px 6px rgba(0,0,0,0.3)',
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '-0.02em',
                lineHeight: '1.2'
              }}>
              Deixe de ser apenas mais um no Instagram e torne-se o médico que é <span style={{color: '#C6AD51', fontWeight: '600'}}>lembrado primeiro</span>, atraindo pacientes certos e saindo dos plantões com <span style={{color: '#C6AD51', fontWeight: '600'}}>segurança e previsibilidade</span>.
            </h2>

            {/* CTA Button */}
            <a href="https://api.whatsapp.com/send/?phone=5583987391092&text=Ol%C3%A1%2C+estou+interessado%28a%29+no+Efeito+Primeira+Escolha&type=phone_number&app_absent=0" className="w-full sm:w-auto group relative px-8 lg:px-10 py-3 lg:py-4 text-base lg:text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cta-button inline-block text-center"
              data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
              Quero ser a primeira escolha
            </a>

          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-6 text-white"
        data-aos="fade-up" data-aos-duration="600"
        style={{
          background: 'linear-gradient(180deg, #0E1F14 0%, #1a3f20 100%)',
          borderTop: '3px solid #D4AF37'
        }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-12 text-center leading-tight"
            data-aos="slide-up" data-aos-duration="400" data-aos-delay="200"
            style={{color: '#D4AF37', textShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
            Para quem é
          </h2>
          <div className="text-left space-y-4 lg:space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed" style={{fontWeight: '300'}}>
            <p data-aos="fade-up" data-aos-delay="300"><strong style={{color: '#D4AF37'}}>•</strong> Médico que ainda não se posicionou no digital e reconhece a necessidade de se posicionar.</p>
            <p data-aos="fade-up" data-aos-delay="400"><strong style={{color: '#D4AF37'}}>•</strong> Médico que atende particular e quer pacientes certos com ticket maior.</p>
            <p data-aos="fade-up" data-aos-delay="500"><strong style={{color: '#D4AF37'}}>•</strong> Médico que publica com frequência, mas não converte em agenda.</p>
            <p data-aos="fade-up" data-aos-delay="600"><strong style={{color: '#D4AF37'}}>•</strong> Médico que deseja sair dos plantões sem perder faturamento.</p>
            <p data-aos="fade-up" data-aos-delay="700"><strong style={{color: '#D4AF37'}}>•</strong> Médico que quer comunicar com ética e liderança clínica.</p>
          </div>
        </div>
      </section>

      {/* Promessa - A Travessia (A → B) */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-6" data-aos="fade-up" data-aos-duration="600" style={{backgroundColor: '#f8f9fa'}}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 lg:mb-20"
            data-aos="slide-up" data-aos-duration="400" data-aos-delay="200"
            style={{color: '#0E1F14', fontWeight: '700'}}> <span style={{color: '#D4AF37'}}>A Travessia (Lado A → Lado B)</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* De */}
            <div className="p-6 lg:p-10 rounded-3xl border-2"
              data-aos="fade-right" data-aos-duration="600" data-aos-delay="300"
              style={{
                borderColor: '#dc2626',
                background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%)'
              }}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center"
                style={{color: '#dc2626', fontWeight: '700'}}>
                Lado A:
              </h3>
              <div className="space-y-3 lg:space-y-4 text-base lg:text-lg" style={{color: '#0E1F14', fontWeight: '400'}}>
                <p><strong style={{color: '#dc2626'}}>•</strong> Perfil genérico; mensagem difusa.</p>
                <p><strong style={{color: '#dc2626'}}>•</strong> Seguidores desqualificados e DMs vazias.</p>
                <p><strong style={{color: '#dc2626'}}>•</strong> Preço questionado; agenda imprevisível.</p>
                <p><strong style={{color: '#dc2626'}}>•</strong> Conteúdo sem CTA; esforço sem retorno.</p>
              </div>
            </div>

            {/* Para */}
            <div className="p-6 lg:p-10 rounded-3xl border-2"
              data-aos="fade-left" data-aos-duration="600" data-aos-delay="300"
              style={{
                borderColor: '#1f82f4ff',
                background: 'linear-gradient(135deg, rgba(55, 131, 212, 0.2) 0%, rgba(30, 114, 149, 0.1) 100%)'
              }}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center"
                style={{color: '#1f82f4ff', fontWeight: '700'}}>
                Lado B:
              </h3>
              <div className="space-y-3 lg:space-y-4 text-base lg:text-lg" style={{color: '#0E1F14', fontWeight: '400'}}>
                <p><strong style={{color: '#D4AF37'}}>•</strong> Proposta de valor cristalina (pra quem, o que resolve, próximo passo).</p>
                <p><strong style={{color: '#D4AF37'}}>•</strong> Funil editorial 7D rodando (Stories, Reels, Carrossel, Estático).</p>
                <p><strong style={{color: '#D4AF37'}}>•</strong> Bio + CTA que pedem ação; DMs que viram agenda.</p>
                <p><strong style={{color: '#D4AF37'}}>•</strong> Autoridade percebida: você se torna a primeira escolha.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Benefícios práticos */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-6 text-white"
        data-aos="fade-up" data-aos-duration="600"
        style={{
          background: 'linear-gradient(180deg, #1a3f20 0%, #0E1F14 100%)'
        }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 lg:mb-20"
            data-aos="slide-up" data-aos-duration="400" data-aos-delay="200"
            style={{color: '#D4AF37', fontWeight: '700', textShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
            Benefícios práticos
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              "Clareza em 1 frase: pra quem você fala, o que resolve e qual é o próximo passo.",
              "Perfil que converte: bio, destaques e CTA que instalam preferência.",
              "Conteúdo intencional: pauta de 7 dias que atrai quem paga e adere.",
              "Autoridade percebida: antes de comparar, o paciente pensa \"é ele(a)\".",
              "Previsibilidade: leads/dia, agendamentos/semana e taxa de fechamento sob controle.",
              "Caminho para sair dos plantões com faturamento previsível."
            ].map((benefit, index) => (
              <div key={index} className="group flex items-start space-x-3 sm:space-x-4 p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4"
                data-aos="fade-up" data-aos-duration="600" data-aos-delay={300 + (index * 100)}
                style={{
                  borderColor: '#D4AF37',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}>
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)'}}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-lg sm:text-xl font-semibold" style={{color: '#FFFFFF', fontWeight: '600'}}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O custo de não ter */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-6 text-center text-white opacity-0 animate-fadeInUp"
        style={{
          background: `
            linear-gradient(135deg, #1a3f20 0%, #0E1F14 50%, #2d5c32 100%),
            radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%)
          `
        }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-12"
            style={{color: '#D4AF37', textShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
            O risco de não fazer
          </h2>

          <div className="text-left space-y-4 lg:space-y-6 text-lg sm:text-xl md:text-2xl leading-relaxed" style={{fontWeight: '300'}}>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Continuar trocando tempo por plantão e atraindo público errado.</p>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Crescer seguidores sem crescer faturamento.</p>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Ficar preso ao ciclo de preço questionado e agenda instável.</p>
            <p><strong style={{color: '#fca5a5'}}>•</strong> Cansaço de postar sem retorno → abandono do digital.</p>
          </div>
        </div>
      </section>


      {/* Chamada final */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 md:px-6 text-center text-white opacity-0 animate-fadeInUp"
        style={{
          background: 'linear-gradient(90deg, #164A35 0%, #0E1F14 30%, #000000 100%)'
        }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 lg:mb-12" style={{fontWeight: '300'}}>
            <p>Imagine abrir seu Instagram daqui a 30 dias: bio clara, destaques profissionais, DMs com perguntas certas e agenda com pacientes que se reconhecem no seu trabalho.</p>
            <p className="mt-4" style={{color: '#D4AF37'}}>Se hoje você sente que faz tudo "certo" e mesmo assim não fecha, o que falta não é esforço — é <strong>posicionamento que programa a preferência</strong>.</p>
          </div>

          <a href="https://api.whatsapp.com/send/?phone=5583987391092&text=Ol%C3%A1%2C+estou+interessado%28a%29+no+Efeito+Primeira+Escolha&type=phone_number&app_absent=0" className="w-full sm:w-auto group relative px-8 sm:px-10 lg:px-12 py-4 lg:py-6 text-lg lg:text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cta-button inline-block text-center">
            Quero ser a primeira escolha agora
          </a>
        </div>
      </section>

    </div>
  );
}