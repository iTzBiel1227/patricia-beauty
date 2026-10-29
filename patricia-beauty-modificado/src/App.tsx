import { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, Check, Menu, MessageCircle,
  Sparkles, X, Instagram, GraduationCap, Asterisk
} from 'lucide-react'
import { INSTAGRAM_URL, whatsappLink } from './config'

const photos = {
  hero: '/images/patricia-17.jpeg',
  portrait: '/images/patricia-16.jpeg',
  brows: '/images/patricia-10.jpeg',
  beauty: '/images/patricia-11.jpeg',
  academy: '/images/patricia-13.jpeg',
  detail: '/images/patricia-12.jpeg',
  beforeAfter: '/images/patricia-04.jpeg',
  studio: '/images/patricia-09.jpeg',
}

const services = [
  { number: '01', title: 'Design de sobrancelhas', desc: 'Design personalizado para valorizar seus traços e respeitar a beleza natural do seu olhar.', image: photos.brows },
  { number: '02', title: 'Resultados reais', desc: 'Detalhes de trabalhos realizados, com atenção à simetria, ao formato e à naturalidade.', image: photos.beauty },
  { number: '03', title: 'Beleza e cuidado', desc: 'Um atendimento atencioso, com análise individual e cuidado em cada etapa.', image: photos.detail },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [contactType, setContactType] = useState('procedimento')

  const openContact = (type: string) => {
    setContactType(type)
    setContactOpen(true)
  }

  const navLinks = [
    ['Início', '#inicio'], ['Sobre', '#sobre'], ['Procedimentos', '#procedimentos'],
    ['Cursos', '#academy'], ['Resultados', '#resultados'],
  ]

  return (
    <div className="site-shell">
      <div className="announcement"><span>BELEZA COM INTENÇÃO. TÉCNICA COM PROPÓSITO.</span><span className="announcement-right">BEAUTY & ACADEMY <span>✳</span></span></div>
      <header className="header">
        <a href="#inicio" className="brand" aria-label="Patricia Leonardo - início">
          <span className="brand-monogram">PL</span>
          <span className="brand-copy"><strong>PATRICIA LEONARDO</strong><small>BEAUTY <i>&</i> ACADEMY</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <button className="button button-dark header-cta" onClick={() => openContact('procedimento')}>Agendar horário <ArrowRight size={15} /></button>
        <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {menuOpen && <nav className="mobile-nav">{navLinks.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<button className="button button-dark" onClick={() => { setMenuOpen(false); openContact('procedimento') }}>Agendar horário <ArrowRight size={15} /></button></nav>}

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> BELEZA • TÉCNICA • IDENTIDADE</div>
            <h1>Realce sua beleza.<br /><em>Revele sua essência.</em></h1>
            <p className="hero-description">Sobrancelhas que valorizam quem você é. Uma experiência de cuidado, técnica e beleza pensada nos detalhes.</p>
            <div className="hero-actions">
              <button className="button button-dark" onClick={() => openContact('procedimento')}>Agende seu momento <ArrowRight size={16} /></button>
              <a className="text-link" href="#sobre">Conheça a Patricia <ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-note"><span className="note-star"><Asterisk size={22} /></span><span>Atendimento personalizado<br /><b>Curso de Design de Sobrancelhas</b></span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap"><img src={photos.hero} alt="Patricia Leonardo em retrato profissional" /><div className="image-shade" /></div>
            <div className="hero-stamp"><span>BEAUTY</span><span className="stamp-symbol"><Asterisk size={22} /></span><span>IN EVERY DETAIL</span></div>
            <div className="hero-side-label">PATRICIA LEONARDO · BEAUTY & ACADEMY</div>
            <div className="hero-caption"><span>01 / 03</span><span>O cuidado começa no olhar.</span></div>
          </div>
          <div className="hero-bottom-line"><span>BELEZA QUE RESPEITA SUA ESSÊNCIA</span><span>DESLIZE PARA DESCOBRIR ↓</span></div>
        </section>

        <section className="intro section-wrap" id="sobre">
          <div className="intro-image"><img src={photos.portrait} alt="Retrato profissional de Patricia Leonardo" /><div className="image-label">CUIDADO EM CADA DETALHE</div></div>
          <div className="intro-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> UM OLHAR, UMA HISTÓRIA</div>
            <h2>Beleza não é<br />mudar quem você é.<br /><em>É revelar.</em></h2>
            <p>Sou Patricia Leonardo, especialista em design de sobrancelhas e fundadora da Patricia Leonardo Beauty & Academy.</p>
            <p>Acredito que sobrancelhas bem estruturadas não transformam apenas o olhar — transformam a autoestima.</p>
            <p>Meu trabalho une técnica, visagismo e posicionamento profissional, oferecendo um atendimento cuidadoso, personalizado e de alto padrão. Além de atender clientes que buscam excelência, formo profissionais que desejam se destacar com segurança e autoridade no mercado da beleza.</p>
            <div className="signature">Patricia Leonardo <span>Beauty artist & Educator</span></div>
          </div>
          <div className="intro-deco">PL<span>✳</span></div>
        </section>

        <section className="services-section" id="procedimentos">
          <div className="section-wrap">
            <div className="section-heading">
              <div><div className="eyebrow"><span className="eyebrow-line" /> SEU MOMENTO DE CUIDADO</div><h2>Detalhes que fazem<br /><em>toda a diferença.</em></h2></div>
              <p>Cada rosto tem sua própria beleza. Cada atendimento começa com escuta, análise e um olhar atento ao que faz você ser única.</p>
            </div>
            <div className="service-grid">
              {services.map(service => <article className="service-card" key={service.number}>
                <div className="service-image"><img src={service.image} alt={`Imagem demonstrativa: ${service.title}`} /><span className="service-number">{service.number}</span><button className="circle-arrow" aria-label={`Consultar ${service.title}`} onClick={() => openContact(service.title)}><ArrowUpRightIcon /></button></div>
                <div className="service-info"><h3>{service.title}</h3><p>{service.desc}</p><button className="service-link" onClick={() => openContact(service.title)}>Consultar pelo WhatsApp <ArrowRight size={14} /></button></div>
              </article>)}
            </div>
            <div className="services-footer"><span>VALORES E DISPONIBILIDADE SOB CONSULTA</span><button className="button button-outline" onClick={() => openContact('procedimento')}>Consultar procedimentos <ArrowRight size={15} /></button></div>
          </div>
        </section>

        <section className="academy-section" id="academy">
          <div className="academy-image"><img src={photos.academy} alt="Patricia Leonardo em retrato profissional para apresentar sua academia" /><div className="academy-image-caption">CONHECIMENTO QUE TRANSFORMA</div></div>
          <div className="academy-copy">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> PATRICIA LEONARDO ACADEMY</div>
            <h2>Seu talento merece<br />um próximo nível.<br /><em>Comece aqui.</em></h2>
            <p>Patricia também é educadora: oferece curso de Design de Sobrancelhas para quem deseja aprender a técnica, desenvolver segurança e dar os primeiros passos ou evoluir profissionalmente na área da beleza.</p>
            <div className="academy-course-card"><span className="academy-course-icon"><GraduationCap size={21} /></span><div><strong>Curso de Design de Sobrancelhas</strong><p>Informações sobre conteúdo, formato, próximas turmas e investimento diretamente com a Patricia.</p></div></div><div className="academy-benefits"><div><Check size={16} /><span>Orientação e aprendizado personalizado</span></div><div><Check size={16} /><span>Desenvolvimento de técnica e confiança</span></div><div><Check size={16} /><span>Consulte datas e disponibilidade</span></div></div>
            <button className="button button-cream" onClick={() => openContact('curso presencial')}>Quero saber sobre o curso <ArrowRight size={16} /></button>
            <span className="academy-small">TURMAS E INVESTIMENTO SOB CONSULTA</span>
          </div>
          <div className="academy-mark">ACADEMY <span>✳</span></div>
        </section>

        <section className="results-section section-wrap" id="resultados">
          <div className="results-heading"><div className="eyebrow"><span className="eyebrow-line" /> BELEZA NOS DETALHES</div><h2>Um trabalho feito<br /><em>para valorizar você.</em></h2><p>Um espaço para conhecer de perto o cuidado e a intenção por trás de cada resultado.</p></div>
          <div className="results-gallery">
            <div className="gallery-item gallery-large"><img src={photos.beforeAfter} alt="Comparação de sobrancelhas antes e depois do atendimento" /><span>01 — TRANSFORMAÇÃO</span></div>
            <div className="gallery-item gallery-small"><img src={photos.detail} alt="Resultado de design de sobrancelhas em cliente" /><span>02 — DETALHES</span></div>
            <div className="gallery-item gallery-tall"><img src={photos.beauty} alt="Resultado de design de sobrancelhas em cliente" /><span>03 — NATURALIDADE</span></div>
          </div>
          <div className="gallery-note"><Sparkles size={16} /><span>Imagens selecionadas do material enviado. Os resultados podem variar conforme cada pessoa.</span></div>
        </section>

        <section className="quote-section quote-section-photo">
          <div className="quote-photo-shade" />
          <div className="quote-content">
            <div className="quote-ornament">“</div>
            <p>“Beleza com propósito<br /><em>e excelência em cada detalhe.</em>”</p>
            <span>PATRICIA LEONARDO · BEAUTY & ACADEMY</span>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contato">
          <div className="contact-copy"><div className="eyebrow"><span className="eyebrow-line" /> VAMOS CONVERSAR?</div><h2>Seu próximo momento<br />começa com <em>uma mensagem.</em></h2><p>Quer agendar um procedimento ou saber mais sobre os cursos presenciais? Entre em contato e vamos encontrar a melhor opção para você.</p></div>
          <div className="contact-actions"><button className="button button-dark button-large" onClick={() => openContact('procedimento')}><MessageCircle size={18} /> Falar pelo WhatsApp <ArrowRight size={17} /></button><a className="social-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><Instagram size={18} /> Acompanhe no Instagram <ArrowRight size={15} /></a><span className="contact-footnote">RESPOSTA E DISPONIBILIDADE A CONFIRMAR</span></div>
        </section>
      </main>

      <footer className="footer">
        <a href="#inicio" className="brand footer-brand"><span className="brand-monogram">PL</span><span className="brand-copy"><strong>PATRICIA LEONARDO</strong><small>BEAUTY <i>&</i> ACADEMY</small></span></a>
        <span className="footer-center">BELEZA COM INTENÇÃO. TÉCNICA COM PROPÓSITO.</span>
        <a href="#inicio" className="back-top">VOLTAR AO TOPO ↑</a>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Patricia Leonardo Beauty & Academy</span><span>ATENDIMENTOS E FORMAÇÃO EM DESIGN DE SOBRANCELHAS</span></div>
      </footer>

      {contactOpen && <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) setContactOpen(false) }}>
        <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button className="modal-close" aria-label="Fechar" onClick={() => setContactOpen(false)}><X size={20} /></button>
          <span className="modal-icon"><MessageCircle size={23} /></span><div className="eyebrow"><span className="eyebrow-line" /> CONTATO PERSONALIZADO</div>
          <h2 id="modal-title">Vamos conversar?</h2><p>Conte à Patricia o que você procura e continue a conversa pelo WhatsApp.</p>
          <div className="contact-choice"><span>ASSUNTO DA MENSAGEM</span><strong>{contactType === 'procedimento' ? 'Agendamento de procedimento' : contactType === 'curso presencial' ? 'Curso de Design de Sobrancelhas' : `Interesse: ${contactType}`}</strong></div>
          <button className="button button-dark button-large modal-whatsapp" onClick={() => window.open(whatsappLink(`Olá, Patricia! Vim pelo seu site e gostaria de ${contactType === 'curso presencial' ? 'receber informações sobre o curso de Design de Sobrancelhas' : contactType === 'procedimento' ? 'consultar horários e valores dos procedimentos' : `saber mais sobre ${contactType}`}. Pode me ajudar?`), '_blank', 'noopener,noreferrer')}>Continuar no WhatsApp <ArrowRight size={16} /></button>
          <small>Você será direcionado para o WhatsApp. Nenhum dado é armazenado neste site.</small>
        </div>
      </div>}
      <a className="floating-whatsapp" href={whatsappLink('Olá, Patricia! Vim pelo site e gostaria de mais informações.')} target="_blank" rel="noreferrer" aria-label="Falar com Patricia pelo WhatsApp"><MessageCircle size={22} /></a>
    </div>
  )
}

function ArrowUpRightIcon() {
  return <ArrowRight size={17} />
}

export default App
