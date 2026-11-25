import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";

const phoneNumber = "931838552";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

function Brand({ footer = false }) {
  return (
    <Link
      aria-label="VyroBP — página inicial"
      className={`brand${footer ? " brand-footer" : ""}`}
      to="/"
    >
      <span className="brand-mark" aria-hidden="true">
        V
      </span>
      <span className="brand-name">
        <span className="brand-word">
          Vyro<span>BP</span>
        </span>
        <small>YOUR BUSINESS. YOUR PLATFORM.</small>
      </span>
    </Link>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Brand />
        <nav aria-label="Navegação principal" className="main-nav">
          <NavLink end to="/">
            Apresentação
          </NavLink>
          <NavLink to="/contatos">Contactos</NavLink>
        </nav>
        <a className="header-contact" href={`tel:${phoneNumber}`}>
          Fala connosco <ArrowIcon />
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <Brand footer />
        <p>O teu próximo passo começa com uma ideia.</p>
        <span>© {new Date().getFullYear()} VyroBP</span>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="status-dot" /> O TEU NEGÓCIO. A TUA PLATAFORMA.
            </span>
            <h1>
              Tens uma ideia?
              <br />
              <span>Começa a vender</span> online.
            </h1>
            <p className="hero-description">
              Dá os primeiros passos no mundo digital sem precisares de ter
              produtos em stock. A VyroBP ajuda-te a descobrir por onde começar.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contatos">
                Vamos conversar <ArrowIcon />
              </Link>
              <a className="text-link" href={`tel:${phoneNumber}`}>
                Liga {phoneNumber}
              </a>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              Uma forma mais simples de dar vida à tua ideia.
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-glow" />
            <img
              alt="Exemplo visual de uma loja online da Vyro em vários dispositivos"
              className="store-image"
              src="/vyro-store.png"
            />
            <div className="visual-caption">
              <span className="caption-dot" />
              O teu negócio pode começar aqui
            </div>
          </div>
        </div>
        <div className="hero-grid" aria-hidden="true" />
      </section>

      <section className="intro-section">
        <div className="container intro-layout">
          <div>
            <span className="eyebrow">NEGÓCIO ONLINE, SEM COMPLICAÇÕES</span>
            <h2>
              Não tens produtos?
              <br />
              <span>Não precisas de esperar.</span>
            </h2>
          </div>
          <p>
            Começar um negócio online pode parecer difícil quando não sabes o
            que vender ou como dar o primeiro passo. A VyroBP apresenta-te uma
            alternativa: explorar um modelo de venda sem stock próprio, como o
            dropshipping, e começar a construir a tua presença online.
          </p>
        </div>
      </section>

      <section className="steps-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">O CAMINHO COMEÇA AQUI</span>
            <h2>Uma ideia. Três primeiros passos.</h2>
            <p>Sem precisares de ter tudo decidido para começar.</p>
          </div>
          <div className="steps-grid">
            <article className="step-card">
              <span className="step-number">01</span>
              <h3>Descobre o modelo</h3>
              <p>
                Percebe como funciona vender online sem manter produtos em
                stock.
              </p>
            </article>
            <article className="step-card">
              <span className="step-number">02</span>
              <h3>Escolhe o teu caminho</h3>
              <p>
                Pensa no tipo de negócio e nos produtos que fazem sentido para
                ti.
              </p>
            </article>
            <article className="step-card">
              <span className="step-number">03</span>
              <h3>Começa a construir</h3>
              <p>
                Dá forma à tua presença digital e avança passo a passo com a
                VyroBP.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="container closing-card">
          <div>
            <span className="eyebrow">O PRÓXIMO PASSO É TEU</span>
            <h2>A tua ideia merece sair do papel.</h2>
            <p>Fala connosco e descobre como começar.</p>
          </div>
          <Link className="button button-primary" to="/contatos">
            Contactar a VyroBP <ArrowIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container contact-layout">
          <div className="contact-copy">
            <span className="eyebrow">
              <span className="status-dot" /> ESTAMOS AQUI PARA TI
            </span>
            <h1>
              Vamos falar sobre
              <br />
              <span>a tua ideia.</span>
            </h1>
            <p>
              Queres saber mais sobre a VyroBP ou dar o primeiro passo no teu
              negócio online? Liga-nos. Será um prazer conversar contigo.
            </p>
          </div>
          <div className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M7.2 3.8h2.5l1.2 4.1-1.8 1.5a15 15 0 0 0 5.5 5.5l1.5-1.8 4.1 1.2v2.5a2 2 0 0 1-2.2 2A15.8 15.8 0 0 1 5.2 6a2 2 0 0 1 2-2.2Z" />
              </svg>
            </span>
            <span className="contact-label">LIGA-NOS</span>
            <a className="phone-number" href={`tel:${phoneNumber}`}>
              {phoneNumber}
            </a>
            <p>Estamos disponíveis para responder às tuas questões.</p>
            <a className="button button-primary contact-button" href={`tel:${phoneNumber}`}>
              Ligar agora <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
      <section className="contact-bottom">
        <div className="container contact-bottom-content">
          <span className="eyebrow">VYROBP</span>
          <p>O teu negócio. A tua plataforma. O teu próximo passo.</p>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contatos" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}
