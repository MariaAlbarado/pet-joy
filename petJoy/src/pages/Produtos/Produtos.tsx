import { useEffect, useState } from "react";
import styles from "./Produtos.module.css";
import racaoGolden from "../../assets/racaoGolden.png";

type Produto = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
};

function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const resposta = await fetch("http://localhost:8888/produtos");

        const dados = await resposta.json();

        setProdutos(dados);
      } catch (erro) {
        console.error("Erro ao buscar produtos:", erro);
      }
    }

    buscarProdutos();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Produtos</h1>

      <div className={styles.grid}>
        {produtos.map((produto) => (
          <div className={styles.card} key={produto.id}>
            <img
              src={racaoGolden}
              alt={produto.nome}
              className={styles.imagem}
            />

            <h2 className={styles.nome}>{produto.nome}</h2>

            <p className={styles.categoria}>{produto.categoria}</p>

            <p className={styles.preco}>
              R$ {Number(produto.preco).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
