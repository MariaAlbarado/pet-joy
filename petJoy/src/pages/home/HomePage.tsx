import { Link } from "react-router-dom";
import { FaPaw, FaSearch, FaShoppingCart } from "react-icons/fa";
import styles from "./HomePage.module.css";

import bannerPetJoy from "../../assets/pet-banner.png";

function HomePage() {
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
    </div>
  );
}

export default HomePage;
