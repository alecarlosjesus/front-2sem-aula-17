import {  useState } from "react";
import { useNavigate } from "react-router";
import type { TipoProduto } from "../../types/types";

export default function CadProduto() {
 document.title = "Cadastrar Produtos"

  const navigate = useNavigate();

  //Recipiente onde irei guardar a lista de produtos
  const [produto, setProduto] = useState<TipoProduto>({ id: "", nome: "", preco: 0, estoque: 0 });


  const handleSubmit = async () => {
    try {

      const response = await fetch(`http://localhost:3001/produtos/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
      });

      if (!response.ok) {
        throw new Error(`Ocorreu um erro no cadastro do produto: ${response.status} - ${response.statusText}`)
      }

      //SUCESSO
      alert("Produto cadastrado com sucesso!");
      //REDIRECT
      navigate("/produtos");

    } catch (error) {
      console.error(error);
    }
  }


  return (
    <main>
      <h2>Cadastrar Produtos</h2>
      <div>
        <form>
          <fieldset>
            <legend>Dados do Produto</legend>
            <div>
              <label htmlFor="nome">Nome do Produto </label>
              <input type="text" name="nome" id="nome" value={produto.nome} onChange={(e) => setProduto({ ...produto, nome: e.target.value })} />
            </div>
            <div>
              <label htmlFor="preco">Preço do Produto </label>
              <input type="number" step={0.1} name="preco" id="preco" value={produto.preco} onChange={(e) => setProduto({ ...produto, preco: parseFloat(e.target.value) })} />
            </div>
            <div>
              <label htmlFor="estoque">Estoque do Produto </label>
              <input type="number" step={1} name="estqoue" id="estoque" value={produto.estoque} onChange={(e) => setProduto({ ...produto, estoque: parseInt(e.target.value) })} />
            </div>
            <div>
              <button type="button" onClick={handleSubmit}>CADASTRAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  )
}