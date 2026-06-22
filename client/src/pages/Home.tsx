import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ nome: '', tipo: '' });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de simular um empréstimo. Nome: ${formData.nome}, Tipo: ${formData.tipo}`;
    const phone = '5511976924871';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Navbar */}
      <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="ARYA PROMOTORA" className="h-12" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-accent transition">Home</button>
            <button onClick={() => scrollToSection('servicos')} className="hover:text-accent transition">Serviços</button>
            <button onClick={() => scrollToSection('empresa')} className="hover:text-accent transition">Empresa</button>
            <button onClick={() => scrollToSection('simulador')} className="hover:text-accent transition">Simulador</button>
            <button onClick={() => scrollToSection('contato')} className="hover:text-accent transition">Contato</button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-background border-t border-border p-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-accent transition py-2">Home</button>
            <button onClick={() => scrollToSection('servicos')} className="block w-full text-left hover:text-accent transition py-2">Serviços</button>
            <button onClick={() => scrollToSection('empresa')} className="block w-full text-left hover:text-accent transition py-2">Empresa</button>
            <button onClick={() => scrollToSection('simulador')} className="block w-full text-left hover:text-accent transition py-2">Simulador</button>
            <button onClick={() => scrollToSection('contato')} className="block w-full text-left hover:text-accent transition py-2">Contato</button>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-bold mb-6 uppercase tracking-widest text-sm">MELHOR SERVIÇO</p>
              <h1 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                SOLUÇÕES<br />FINANCEIRAS <span className="text-accent">COMPLETAS</span>
              </h1>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                Crédito consignado, portabilidade e muito mais com as melhores taxas do mercado
              </p>
              <button
                onClick={() => scrollToSection('simulador')}
                className="btn-primary"
              >
                SIMULE AGORA
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="/manus-storage/hero-image_2a87627e.jpg"
                alt="Casal feliz"
                className="rounded-2xl shadow-2xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Empresa Section */}
      <section id="empresa" className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/assets/logo.png"
                alt="ARYA PROMOTORA"
                className="w-64 h-auto"
              />
            </div>
            <div>
              <h2 className="section-title">CONHEÇA A ARYA PROMOTORA</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A ARYA PROMOTORA é uma empresa correspondente bancária que busca inovação em seus serviços, facilidades e benefícios para seus clientes. Atuando com Crédito Consignado, Portabilidade, Cartão de Crédito Consignado, Refinanciamento, serviços para Governo e Prefeitura, além de Antecipação de FGTS.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Busca uma solução financeira com taxas competitivas e aprovação simplificada? Se você é aposentado, pensionista do INSS ou servidor público, nossos serviços são para você.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                CNPJ: 55.217.867/0001-95
              </p>
              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="btn-primary"
                >
                  SAIBA MAIS
                </button>
                <button
                  onClick={() => scrollToSection('simulador')}
                  className="px-6 py-3 border-2 border-accent text-accent rounded font-semibold hover:bg-accent/10 transition"
                >
                  SIMULADOR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 md:py-24">
        <div className="container">
          <h2 className="section-title text-center mb-12">SOLUÇÕES FINANCEIRAS PARA VOCÊ:</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Crédito Consignado',
                desc: 'Busca uma solução financeira com taxas competitivas e aprovação simplificada? Se você é aposentado ou pensionista do INSS, nosso crédito consignado é para você.'
              },
              {
                title: 'Portabilidade',
                desc: 'Transfira seu empréstimo consignado para o banco com as melhores condições e reduza suas parcelas mensais.'
              },
              {
                title: 'Cartão Consignado',
                desc: 'Quer um cartão de crédito sem anuidade e com descontos diretamente no seu salário? Descubra o nosso cartão consignado com opções de saque flexíveis.'
              },
              {
                title: 'Refinanciamento',
                desc: 'Renegocie suas dívidas com condições especiais e organize sua vida financeira com parcelas que cabem no seu orçamento.'
              },
              {
                title: 'Governo e Prefeitura',
                desc: 'Soluções especiais para servidores públicos federais, estaduais e municipais com as melhores taxas do mercado.'
              },
              {
                title: 'Antecipação de FGTS',
                desc: 'Precisa de acesso rápido aos seus fundos do FGTS sem análise de crédito? As prestações são quitadas através do débito do saldo da sua conta de FGTS.'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-card p-6 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-accent mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container">
          <h2 className="section-title text-center mb-12">DEPOIMENTOS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria Silva',
                text: 'Quero agradecer a ARYA PROMOTORA, que é uma empresa séria e consolidada no sistema financeiro. O atendimento foi excelente e consegui resolver minha situação financeira rapidamente.',
                image: '/manus-storage/client1_b345f1ca.jpg'
              },
              {
                name: 'João Santos',
                text: 'Excelente atendimento e condições muito boas. A ARYA PROMOTORA me ajudou a conseguir o crédito que eu precisava com taxas justas e sem complicação.',
                image: '/manus-storage/client2_8dcb4b2b.jpg'
              },
              {
                name: 'Ana Costa',
                text: 'Recomendo muito! A ARYA PROMOTORA oferece um atendimento personalizado e soluções que realmente funcionam. Meu processo foi rápido e sem burocracia.',
                image: '/manus-storage/client3_5443091a.jpg'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-background p-6 rounded-lg text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold mb-3">{testimonial.name}</h3>
                <p className="text-gray-300 text-sm italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulador Section */}
      <section id="simulador" className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">SIMULADOR DE EMPRÉSTIMO</h2>
              <p className="text-gray-300 mb-8">Simule seu empréstimo e fale com um especialista</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nome completo</label>
                  <input
                    id="nome"
                    type="text"
                    placeholder="Digite o seu nome"
                    value={formData.nome}
                    onChange={handleFormChange}
                    className="w-full bg-card border border-border rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Tipo de crédito</label>
                  <select
                    id="tipo"
                    value={formData.tipo}
                    onChange={handleFormChange}
                    className="w-full bg-card border border-border rounded px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Selecione o tipo de crédito</option>
                    <option value="Crédito Consignado">Crédito Consignado</option>
                    <option value="Portabilidade">Portabilidade</option>
                    <option value="Cartão Consignado">Cartão Consignado</option>
                    <option value="Refinanciamento">Refinanciamento</option>
                    <option value="Governo e Prefeitura">Governo e Prefeitura</option>
                    <option value="Antecipação de FGTS">Antecipação de FGTS</option>
                  </select>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="w-full btn-primary flex items-center justify-center gap-2 mt-6"
                >
                  <MessageCircle size={20} />
                  FALE COM O ESPECIALISTA
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/manus-storage/simulator-image_91564daa.jpg"
                alt="Pessoa comemorando"
                className="rounded-2xl shadow-2xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-card py-16 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <img src="/assets/logo.png" alt="ARYA" className="w-32 mb-4" />
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-accent">Endereço</h4>
              <a
                href="https://www.google.com/maps?q=Rua+Quixabeira,+237,+JardimSantaMaria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition text-sm"
              >
                Rua Quixabeira, 237<br />
                São Paulo, SP<br />
                CEP: 03574-080
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-accent">Contato</h4>
              <a href="tel:+551126149766" className="text-gray-300 hover:text-accent transition block text-sm mb-2">
                (11) 2783-2053
              </a>
              <a href="mailto:eduardomurtada@gmail.com" className="text-gray-300 hover:text-accent transition text-sm">
                eduardomurtada@gmail.com
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-accent">Siga-nos</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/people/Arya-Promotora/61578446504905/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/arya_promotora/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 ARYA PROMOTORA. Todos os direitos reservados. CNPJ: 55.217.867/0001-95</p>
            <a href="https://www.gov.br/mds/pt-br/acesso-a-informacao/privacidade-e-protecao-de-dados/lgpd" className="hover:text-accent transition mt-2 inline-block">
              Política de Privacidade / LGPD
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511976924871"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition transform hover:scale-110 z-40"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
