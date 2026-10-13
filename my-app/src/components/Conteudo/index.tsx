import imgQuadrado from "../../img/quadrado.png"

export default function Conteudo() {
    return(
        <main>
            <section>
                <h2>Conteudo</h2>

                <figure>
                    <img src="https://placehold.co/600x400/0000FF/FFFFFF/png" alt="Imagem ilustrativa conteúdo"/>
                <figcaption>Imagem Externa</figcaption>
                </figure>

                <figure>
                    <img src={imgQuadrado} alt="Figura de demonstração" />
                    <figcaption>Imagem Interna</figcaption>
                </figure>
                    <img src="/image/quadrado-b.png" alt="Figura de demonstração" />
                    <figcaption>Imagem Estática</figcaption>
                <figure>

                </figure>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perspiciatis exercitationem enim maiores vel illum ipsum ducimus nemo velit debitis. Alias fuga, dolor accusamus quidem officia cumque repellendus vero voluptate.</p>
            </section>
        </main>
    );
}