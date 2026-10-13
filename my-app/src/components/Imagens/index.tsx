import imgQuadrado from "../../img/quadrado.png";

export default function Imagens() {
  return (
    <div>
        
        <figure>
          <img
            src="https://placehold.co/300x200/0000FF/FFFFFF/png"
            alt="Figure de demonstração"
          />
          <figcaption>Imagem Externa</figcaption>
        </figure>
        
        <figure>
          <img src={imgQuadrado} alt="Figure de demonstração" />
            <figcaption>Imagem Interna</figcaption>
        </figure>

        <figure>
          <img src="/image/quadrado-b.png" alt="Figure de demonstração" />
            <figcaption>Imagem Estática</figcaption>
        </figure>
    </div>
  )
}
