const A = "/assets";

const links = {
  linkedin: "https://ar.linkedin.com/in/leonel-abud-7b1606440",
  sirenaLinkedin: "https://www.linkedin.com/company/sirena-ai-arg",
  sirenaInstagram: "https://www.instagram.com/sirena.ai_arg/",
};

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`eyebrow${light ? " eyebrow-light" : ""}`}>{children}</p>;
}

function ArrowLink({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      className={`arrow-link${primary ? " arrow-link-primary" : ""}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <strong>LA</strong>
          <i />
          <span>
            <b>LEONEL ABUD</b>
            <small>PORTFOLIO / 2026</small>
          </span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#recorrido">Recorrido</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#voley">Vóley</a>
          <a className="nav-contact" href="#contacto">
            Contacto <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero dark-section" id="inicio">
        <div className="hero-copy">
          <Eyebrow light>DESARROLLO / INTELIGENCIA ARTIFICIAL / DEPORTE</Eyebrow>
          <h1>
            LEONEL <em>ABUD.</em>
          </h1>
          <h2>
            Tecnología con propósito.
            <br />
            Mentalidad de equipo.
          </h2>
          <p className="hero-intro">
            Estudiante de 5.º año en ORT · TIC. Desarrollo inteligencia artificial en Sirena AI y
            juego al vóley de líbero en el club Harrods Gath &amp; Chaves.
          </p>
          <div className="hero-actions">
            <a className="button button-yellow" href="#proyectos">
              Explorar mis proyectos <span>↓</span>
            </a>
            <a className="button button-outline" href="#voley">
              Mi lado deportivo <span>↗</span>
            </a>
          </div>
          <Eyebrow light>APRENDER. CONSTRUIR. VOLVER A INTENTAR.</Eyebrow>
        </div>
        <div className="hero-gallery">
          <figure className="hero-main">
            <img src={`${A}/9636c.png`} alt="Espacio de trabajo con computadoras y código" />
            <figcaption>ORT / 5.º AÑO</figcaption>
          </figure>
          <img src={`${A}/e3b9a.png`} alt="Leonel jugando al vóley" />
          <img src={`${A}/3d135.png`} alt="Pelota de vóley en juego" />
        </div>
      </section>

      <div className="pillars" aria-label="Ejes del portfolio">
        <strong>IDEAS ÚTILES</strong>
        <span>01</span>
        <strong>DATOS CON PROPÓSITO</strong>
        <span>02</span>
        <strong>JUEGO EN EQUIPO</strong>
      </div>

      <section className="journey section" id="recorrido">
        <div className="section-grid">
          <div>
            <Eyebrow>01 / MI RECORRIDO</Eyebrow>
            <h2>Siempre tuve curiosidad y ganas de hacer.</h2>
          </div>
          <div className="journey-lead">
            <p>
              Desde chico me interesan la programación y la tecnología. Lo que me mueve es construir
              cosas útiles que resuelvan problemas reales.
            </p>
            <p>Convertir las necesidades en proyectos que tengan impacto.</p>
          </div>
        </div>
        <div className="timeline">
          <article>
            <Eyebrow>3.º</Eyebrow>
            <h3>Mercado Libro</h3>
            <p>Una plataforma para publicar y vender libros escolares usados.</p>
          </article>
          <article>
            <Eyebrow>4.º → 5.º</Eyebrow>
            <h3>Sirena AI</h3>
            <p>Desarrollo de IA para anticiparse a las inundaciones.</p>
          </article>
          <article>
            <Eyebrow>HOY</Eyebrow>
            <h3>Harrods Gath &amp; Chaves</h3>
            <p>Vóley · Líbero. Recibir, defender y sostener al equipo.</p>
          </article>
        </div>
      </section>

      <section className="projects-heading" id="proyectos">
        <Eyebrow>02 / PROYECTOS SELECCIONADOS</Eyebrow>
        <span>RESOLVER ALGO REAL</span>
        <h2>Dos desafíos. Una misma intención.</h2>
      </section>

      <section className="project mercado">
        <div className="project-kicker">
          <Eyebrow>01 / DESARROLLO DE PRODUCTO</Eyebrow>
          <span>3.º AÑO</span>
        </div>
        <div className="project-title">
          <div>
            <h2>MERCADO LIBRO</h2>
            <h3>
              Una segunda vida para
              <br />
              los libros escolares.
            </h3>
          </div>
          <div className="mercado-logo">
            <img src={`${A}/a87bb.png`} alt="Mercado Libro" />
          </div>
        </div>
        <div className="project-content">
          <div>
            <p>
              Conseguir libros usados al empezar el año era difícil. Desarrollé junto a mi equipo
              una plataforma para que cualquier estudiante pudiera publicar los que ya no usa y
              otros pudieran encontrarlos con más facilidad.
            </p>
            <Eyebrow>MI ROL</Eyebrow>
            <strong>Fullstack developer · 3.º año</strong>
            <Eyebrow>PARA QUIÉN</Eyebrow>
            <p>Estudiantes que venden libros y estudiantes que los buscan.</p>
          </div>
          <figure className="product-shot">
            <img
              src={`${A}/da789.png`}
              alt="Página principal de Mercado Libro con artículos publicados"
            />
            <figcaption>PÁGINA PRINCIPAL / ARTÍCULOS PUBLICADOS</figcaption>
          </figure>
        </div>
        <div className="steps">
          {[
            ["01", "Publicar", "Cualquier estudiante sube sus libros usados escolares."],
            ["02", "Vender", "Define la venta y deja el libro disponible."],
            ["03", "Encontrar", "Otro estudiante lo consigue más fácil al empezar el año."],
          ].map(([n, title, text]) => (
            <article key={n}>
              <span>{n}</span>
              <div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="project sirena">
        <div className="project-kicker">
          <Eyebrow>02 / INTELIGENCIA ARTIFICIAL</Eyebrow>
          <span>4.º Y 5.º AÑO</span>
        </div>
        <div className="sirena-title">
          <div>
            <h2>SIRENA AI</h2>
            <h3>
              Datos para anticiparse
              <br />a una inundación.
            </h3>
          </div>
          <div className="sirena-mark">
            <img src={`${A}/d8852.svg`} alt="Sirena AI" />
          </div>
        </div>
        <div className="sirena-grid">
          <div className="sirena-copy">
            <p>
              En 4.º formamos el equipo. Yo comencé como desarrollador de la IA y en 5.º sigo en ese
              rol. El proyecto dejó de ser simplemente una materia a aprobar, y pasó a tener un
              impacto mucho más importante en nuestras vidas.
            </p>
            <p>
              Las imágenes de radar permiten ver a través de las nubes y detectar cuánta agua hay en
              cada hectárea. El modelo estima la probabilidad de inundación y avisa por mail cuando
              el riesgo sube.
            </p>
          </div>
          <div>
            <div className="stat">
              <strong>12</strong>
              <div>
                <Eyebrow light>DÍAS</Eyebrow>
                <p>
                  Horizonte de predicción
                  <br />
                  del riesgo de inundación
                </p>
              </div>
              <small>IMÁGENES SATELITALES DE RADAR + IA</small>
            </div>
            <div className="evolution">
              <Eyebrow>EVOLUCIÓN DEL MODELO</Eyebrow>
              <p>4.º — Predicción muy general, por partido</p>
              <p>Comienzos de 5.º — Por hectárea</p>
              <strong>Hoy — Predicción con resolución de 10m × 10m</strong>
            </div>
          </div>
        </div>
        <div className="photo-row">
          {[
            ["18c2e.png", "Presentando Sirena en el Parque de Innovación"],
            ["32ef0.png", "Sirena en 9 de Julio"],
            ["ea7ad.png", "Presentando Sirena en 9 de Julio"],
            ["e73eb.png", "Sirena en MVP Experience"],
          ].map(([src, caption]) => (
            <figure key={src}>
              <img src={`${A}/${src}`} alt={caption} />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="takeaway">
          <Eyebrow>LO QUE ME LLEVO</Eyebrow>
          <p>Seguir iterando hasta que funcione, y es importantísimo trabajar en equipo.</p>
        </div>
      </section>

      <section className="volley dark-section" id="voley">
        <div className="volley-top">
          <Eyebrow light>03 / FUERA DE LA COMPU</Eyebrow>
          <Eyebrow light>HARRODS GATH &amp; CHAVES</Eyebrow>
        </div>
        <div className="volley-title">
          <div>
            <h2>
              EL EQUIPO <em>PRIMERO.</em>
            </h2>
            <p>
              Juego de líbero. Recibo, defiendo y me tiro
              <br />
              para que el equipo siga jugando.
            </p>
          </div>
          <div className="club-logo">
            <img src={`${A}/60086.svg`} alt="" />
            <img src={`${A}/7f261.png`} alt="Escudo de Harrods Gath & Chaves" />
          </div>
        </div>
        <div className="volley-gallery">
          <figure className="volley-feature">
            <img src={`${A}/e3b9a.png`} alt="Leonel en acción durante un partido" />
            <figcaption>LEONEL ABUD / LÍBERO</figcaption>
          </figure>
          <div className="volley-side">
            <img src={`${A}/734da.png`} alt="Leonel recibiendo la pelota" />
            <img src={`${A}/3d135.png`} alt="Pelota sobre la red" />
            <Eyebrow light>RECIBIR. DEFENDER. SEGUIR.</Eyebrow>
            <p>
              Vóley
              <br />
              Harrods Gath &amp; Chaves
            </p>
          </div>
        </div>
        <div className="values">
          {[
            "Leer el juego antes de que pase.",
            "Hacer el trabajo que no se ve.",
            "Volver después de un error.",
            "Apoyarme en el equipo.",
          ].map((v, i) => (
            <div key={v}>
              <Eyebrow light>0{i + 1}</Eyebrow>
              <p>{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="method section">
        <div className="section-grid">
          <div>
            <Eyebrow>04 / LO QUE CONECTA TODO</Eyebrow>
            <h2>
              Construir, aprender
              <br />y seguir jugando.
            </h2>
          </div>
          <p>
            Desde chico supe que me gustaba programar; con los años entendí que además quería que
            eso que construyo resuelva algo real.
          </p>
        </div>
        <div className="method-grid">
          <article>
            <Eyebrow>01 / ESCUCHAR</Eyebrow>
            <h3>Primero, las personas.</h3>
            <p>Mercado Libro me enseñó a partir de una necesidad cercana.</p>
          </article>
          <article>
            <Eyebrow>02 / ITERAR</Eyebrow>
            <h3>Mejorar con cada intento.</h3>
            <p>En Sirena AI, los buenos datos y el trabajo en equipo hacen la diferencia.</p>
          </article>
          <article>
            <Eyebrow>03 / SOSTENER</Eyebrow>
            <h3>El resultado es del equipo.</h3>
            <p>En la cancha, aportar también es hacer el trabajo que no se ve.</p>
          </article>
        </div>
      </section>

      <footer className="contact dark-section" id="contacto">
        <Eyebrow light>05 / SIGAMOS EN CONTACTO</Eyebrow>
        <h2>HABLEMOS.</h2>
        <div className="contact-intro">
          <p>
            Sigo aprendiendo. Quiero seguir construyendo
            <br />
            cosas útiles para problemas reales.
          </p>
          <div>
            <Eyebrow light>TEMAS PARA CONVERSAR</Eyebrow>
            <p>
              Mercado Libro / Sirena AI
              <br />
              Vóley / Nuevas ideas
            </p>
          </div>
        </div>
        <div className="contact-grid">
          <div>
            <Eyebrow light>EMAIL</Eyebrow>
            <a className="email" href="mailto:leonel.abud.16@gmail.com">
              leonel.abud.16@gmail.com
            </a>
            <p>Tecnología, proyectos y nuevas ideas.</p>
          </div>
          <div className="socials">
            <Eyebrow light>ENCONTRAME TAMBIÉN EN</Eyebrow>
            <ArrowLink href={links.linkedin} primary>
              Mi LinkedIn
            </ArrowLink>
            <ArrowLink href={links.sirenaLinkedin}>Sirena AI · LinkedIn</ArrowLink>
            <ArrowLink href={links.sirenaInstagram}>Sirena AI · Instagram</ArrowLink>
          </div>
        </div>
        <div className="footer-line">
          <span>Leonel Abud · Portfolio</span>
          <span>TECNOLOGÍA × DEPORTE / 2026</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
