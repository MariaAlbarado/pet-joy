import { Link } from "react-router-dom";

import {
  FaPaw,
  FaSearch,
  FaShoppingCart,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import styles from "./HomePage.module.css";

import bannerPetJoy from "../../assets/pet-banner.png";
import caminha from "../../assets/caminha.png";
import bolinha from "../../assets/bolinha.png";
import shampoo from "../../assets/shampoo.png";
import racaoGolden from "../../assets/racaoGolden.png";

function HomePage() {
  const produtosDestaque = [
    {
      id: 1,
      categoria: "Ração",
      nome: "Ração Golden Adultos",
      preco: 89.9,
      imagem: racaoGolden,
    },
    {
      id: 2,
      categoria: "Brinquedos",
      nome: "Bola de Borracha",
      preco: 19.9,
      imagem: bolinha,
    },
    {
      id: 3,
      categoria: "Camas",
      nome: "Cama Pet Conforto",
      preco: 79.9,
      imagem: caminha,
    },
    {
      id: 4,
      categoria: "Higiene",
      nome: "Shampoo Neutro 500ml",
      preco: 29.9,
      imagem: shampoo,
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <FaPaw className={styles.paw} />

          <h1>
            <span className={styles.pet}>Pet</span>
            <span className={styles.joy}>Joy</span>
          </h1>
        </div>

        <nav className={styles.menu}>
          <Link to="/">Início</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/carrinho">Carrinho</Link>
        </nav>

        <div className={styles.headerRight}>
          <div className={styles.search}>
            <FaSearch />
            <input type="text" placeholder="O que seu pet precisa hoje?" />
          </div>

          <div className={styles.cart}>
            <FaShoppingCart />
            <span>0</span>
          </div>
        </div>
      </header>

      <main
        className={styles.main}
        style={{ backgroundImage: `url(${bannerPetJoy})` }}
      >
        <div className={styles.bannerText}>
          <h2>
            Pets mais felizes,
            <br />
            todos os dias!
          </h2>

          <p>
            Rações, acessórios, brinquedos e muito mais
            <br />
            para o seu melhor amigo.
          </p>

          <button>Ver produtos</button>
        </div>
      </main>

      <section className={styles.produtosSection}>
        <h2>Produtos em destaque</h2>
        <p>O que seu pet precisa, você encontra aqui!</p>

        <div className={styles.produtosGrid}>
          {produtosDestaque.map((produto) => (
            <div className={styles.produtoCard} key={produto.id}>
              <img
                className={styles.produtoImagem}
                src={produto.imagem}
                alt={produto.nome}
              />

              <p>{produto.categoria}</p>

              <h3>{produto.nome}</h3>

              <strong>R$ {produto.preco.toFixed(2)}</strong>

              <button>
                <FaShoppingCart />
                Adicionar ao carrinho
              </button>
            </div>
          ))}
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <FaPaw />

          <h2>
            <span>Pet</span>Joy
          </h2>
        </div>

        <div className={styles.footerLinks}>
          <Link to="/">Início</Link>
          <span>|</span>

          <Link to="/produtos">Produtos</Link>
          <span>|</span>

          <Link to="/carrinho">Carrinho</Link>
          <span>|</span>

          <a href="#">Contato</a>
        </div>

        <div className={styles.footerSocial}>
          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaFacebookF />
          </a>

          <a href="#">
            <FaYoutube />
          </a>
        </div>

        <div className={styles.footerCopyright}>
          <p>PetJoy © 2026</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
