import React from "react";
import "./HowTo.css";
import passo11 from "../../assets/svg/passo11.svg";
import { ReactComponent as Passo11 } from "../../assets/svg/passo11.svg";
import { ReactComponent as Passo12 } from "../../assets/svg/passo12.svg";
import { ReactComponent as Passo21 } from "../../assets/svg/passo21.svg";
import { ReactComponent as Passo31 } from "../../assets/svg/passo31.svg";

export class HowToUse extends React.Component {
  render() {
    return (
      <div className="howto">
        <div className="container row">
          <Passo11 className="passos"></Passo11>
          <i className="material-icons seta">arrow_right_alt</i>
          <Passo12 className="passos"></Passo12>
          <div className="texto passos">
            <h1>Passo 1</h1>
            <p>
              Caso a Kurisu não esteja sendo listada nos App’s do slack, clicar
              em apps e procurar ela no seu workspace e clicar em ver.
            </p>
          </div>
        </div>
        <div className="container row division">
          <Passo21 className="passos"></Passo21>
          <div className="texto passos">
            <h1>Passo 2</h1>
            <p>
              Ao falar com ela, vão haver as opções de abrir e editar dúvida.
            </p>
          </div>
        </div>
        <div className="container row division">
          <Passo31 className="passos"></Passo31>
          <div className="texto passos">
            <h1>Passo 3</h1>
            <p>
              Ao clicar em abrir dúvida, surgirá uma caixa de dialogo em que é
              possível selecionar uma categoria para a dúvida e descrever-la.
            </p>
          </div>
          <i className="material-icons seta">arrow_right_alt</i>
          <div className="texto passos">
            <h1>Passo 4</h1>
            <p>
              Pronto, após isso sua dúvida será lançada anonimamente no canal de
              dúvidas, caso alguem a responda e você quiser fazer outro
              questionamento na mesma thread basta clicar em editar dúvidas ao
              falar com a Kurisu.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
