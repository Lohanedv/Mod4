import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import FamiliaSouza from "../../Paginas/Experiencias/Fotos/FamiliaSouza.jpg";
import Lariza from "../../Paginas/Experiencias/Fotos/Lariza.jpg";
import Todrigo from "../../Paginas/Experiencias/Fotos/Todrigo.jpg";
import Druilho from "../../Paginas/Experiencias/Fotos/Druilho.jpg";
import React from "react";
import "./Experiencias.css";


export default () => {
    return (
        <>
            <NavBar />
            <div classNameName="Fundo container">
                <h1 className="Titulo">O que dizem os amigos que viajam conosco? ...</h1>
                <div className="card mb-3" style={{ mw: "540px;" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={FamiliaSouza} className="img-fluid rounded-start" alt="Loaging" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Familia Souza</h5>
                                <p className="card-text">A CampingTur realmente cumpre o que promete, deram todo o apoio necessário que eu minha familia prescisávamos para acampar, eles nos proporcionaram momentos unicos na nossa viagem, agora, eu faço parte da familia CT.
                                    <hr/>
                                    <h6>CampingTour</h6>
                                    <h7>O Destino escolhido foi as PEDREIRAS DE MAUÁ, fornecemos todo o material necessário para o acampamento e também a locomoção com um trailher com infraestrtura caso não seja possivel dormir nas barracas, em 4 dias de viajem fizemos 7 passeios pra conhecer as trilhas locais, pôr do sol de 3 lugares diferentes e as 2 cachoeiras escondidas entre as grutas de Mauá.</h7>
                                    <h5>Para conhecer as PEDREIRAS DE MAUÁ, acesse a aba <a href="http://localhost:3000/Destino" > Destinos</a></h5>
                                </p>
                                <p className="card-text"><small className="text-muted">Postado há 15 dias</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={{ mw: "540px;" }}>
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Lariza Campos</h5>
                            <p className="card-text">Fiz uma viajem maravilhosa pra ver o pôr do sol do Ribeiro Sul, o lugar é lindo, e mesmo sendo uma viajem com aventura e natureza, a CampingTur me proporcionou segurança e acessibilidade, voltarei em breve.
                            <hr/>
                                <h6>CampingTour</h6>
                                <h7>O Largo do Ribeiro Sul tem a melhor vista de pôr do Sol de todo o Ribeiro, para aproveitar essa experiência os nossos guiam fazem uma trilha noturna sob as montanhas do Ribeiro e pernoitam no acampamento.</h7>
                                <h5>Para conhecer o PÔR DO SOL DO LARGO DO RIBEIRO, acesse a aba <a href="http://localhost:3000/Destino" >Destinos</a></h5>
                            </p>
                            <p className="card-text"><small className="text-muted">Postado há 30 dias</small></p>
                        </div>
                    </div>
                        <div className="col-md-4">
                            <img src={Lariza} className="img-fluid rounded-start " alt="..." />
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={{ mw: "540px;" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Todrigo} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Todrigo Reis</h5>
                                <p className="card-text">Visitei a Beira do Céu Azul, e presenciei um espetáculo natural da transformação da noite em dia, visitei as grutas da Beira do Céu e pude recarregar as minhas energias, foi maravilhoso.
                                <hr/>
                                    <h6>CampingTour</h6>
                                    <h7>Essa é uma viagem muito requisitada na nossa comunidade, nós temos mais de 20 acampamentos disponíveis na Beira do Céu, e como o espetáculo da noitem em dia ocorre poucas vezes no ano, pra esse evento específico realizamos as locações das barracas e guias com antecedência</h7>
                                    <h5>Verifique a disponibilidade em  <a href="http://localhost:3000/Destino" >Destino</a></h5>
                                </p>
                                <p className="card-text"><small className="text-muted">Postado há 4 meses</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3" style={{ mw: "540px;" }}>
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Druilho Rios</h5>
                                <p className="card-text">Fui na melhor viagem da minha vida, a montanha do Sol Pelado, sentir a energia da natureza é incrível, obrigada CampingTur por me proporcionar essa experiência incrível!
                                <hr/>
                                    <h6>CampingTour</h6>
                                    <h7>A montanha do Sol Pelado é uma viagem incrível, nos hospedamos num hotel local no pé da montanha da Cidade, e na primeira hora da manhã subimos a trilha em direção ao Sol Pelado, é uma trilha de 3 horas e passamos por 3 cavernas na montanha e toda subida tem uma surpresa da natureza diferente.</h7>
                                    <h5>Venha conferir essa Experiência na aba <a href="http://localhost:3000/Destino" >Destino</a></h5>
                                </p>
                                <p className="card-text"><small className="text-muted">Postado há 4 meses</small></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={Druilho} className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
}