import Card from "../../components/CardsDestino/Cards";
import "../Carrosel/carrossel.css";
import Barraca from "../../components/Carrosel/Imagem/Barraca.jpg";
import Mochila from "../../components/Carrosel/Imagem/Mochila.jpg";
import Passeios from "../../components/Carrosel/Imagem/Passeios.jpg";


function carrosel() {
  return (

    <div className="Home">

      <Card foto={Barraca}
        titulo="BARRACAS"
        texto="Se você vai viajar sozinho ou em grupo, temos barracas de todos os tamanhos."
        valor={3.587}
        textopromocao="R$"
        valorpromocao={1.905} />
      <Card foto={Mochila}
        titulo="Kit Acampamento"
        texto="Se você vai viajar sozinho ou em grupo, temos barracas de todos os tamanhos."
        valor={3.587}
        textopromocao="R$"
        valorpromocao={1.905} />
      <Card foto={Passeios}
        titulo="Passeios"
        texto="Se você vai viajar sozinho ou em grupo, temos barracas de todos os tamanhos."
        valor={3.587}
        textopromocao="R$"
        valorpromocao={1.905} />

    </div>
  );
}
export default carrosel;


