import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Promocoes.css";
import Card from "../../components/CardsDestino/Cards";
import Promo from "../Promocoes/ImagensPromo/Promo.jpg";
import Promo1 from "../Promocoes/ImagensPromo/Promo1.jpg";
import Promo2 from "../Promocoes/ImagensPromo/Promo2.jpg";
import Promo3 from "../Promocoes/ImagensPromo/Promo3.jpg";

function Promocoes() {
  return (
    <>
      <NavBar />
      <h1 className="Titulo">Aproveite Nossas Promoçoes</h1>
      <div className="Promocoes">
        <Card foto={Promo}
          titulo="Maldivas de Grajau"
          texto="Venha desfrutar dessa incível experiência nas Maldivas do Grajaú, pacote com uma barraca e todo o kit camping + locomoção e guia, por apenas 250,00 R$ á vista.
                
                  Alimentação não incluso"

          valor={3.587}
          textopromocao="R$"
          valorpromocao={1.905} />
        <Card foto={Promo1}
          titulo="Morro de Carapicuiba"
          texto="Esse fenômeno Paulista fica escondido após uma trilha de 2 horas na capital, e somente nesse mês de março, á diária em grupo está por 80,00R$ Sábado ou Domingo, á diária inclui aluguel da barraca, guia e locomoção.
                
                  Alimentação não inclusa."
          valor={4.569}
          textopromocao="R$"
          valorpromocao={2.205} />
        <Card foto={Promo2}
          titulo="Campos de Holambra"
          texto="Essa incrível experiência ocorre apenas 3 vezes ao ano, além de apreciar esse campo de rosas curandeiras, você ainda assiste á queda das estrelas cadentes, o final de semana inclui alugeul da barraca, guia turistico, locomoção e alimentação. Tudo isso por apenas 380,00 R$.
                
                  Passeio com quantidade de vagas limitada."
          textovalor="R$"
          valor={2.355}
          textopromocao="R$"
          valorpromocao={999} />
        <Card foto={Promo3}
          titulo="Floresta do Sol Vermelho"
          texto="Esse fenômeno Paulista fica escondido após uma trilha de 2 horas na capital, e somente nesse mês de março, á diária em grupo está por 80,00R$ Sábado ou Domingo, á diária inclui aluguel da barraca, guia e locomoção.
                
                  Alimentação não inclusa."
          textovalor="R$"
          valor={2.355}
          textopromocao="R$"
          valorpromocao={999} />
        <Card foto={Promo3}
          titulo="Floresta do Sol Vermelho"
          texto="Esse fenômeno Paulista fica escondido após uma trilha de 2 horas na capital, e somente nesse mês de março, á diária em grupo está por 80,00R$ Sábado ou Domingo, á diária inclui aluguel da barraca, guia e locomoção.
                
                  Alimentação não inclusa."
          textovalor="R$"
          valor={2.355}
          textopromocao="R$"
          valorpromocao={999} />
        <Card foto={Promo3}
          titulo="Floresta do Sol Vermelho"
          texto="Esse fenômeno Paulista fica escondido após uma trilha de 2 horas na capital, e somente nesse mês de março, á diária em grupo está por 80,00R$ Sábado ou Domingo, á diária inclui aluguel da barraca, guia e locomoção.
                
                  Alimentação não inclusa."
          textovalor="R$"
          valor={2.355}
          textopromocao="R$"
          valorpromocao={999} />
      </div>
      <Footer />
    </>
  );
}
export default Promocoes;