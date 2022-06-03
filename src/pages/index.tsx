import type { NextPage } from "next";
import Lista from "../ui/components/Lista/Lista";
import Titulo from "../ui/components/Titulo/Titulo";

function MeuComponente() {
  return <div>Treina web</div>;
}
const Home: NextPage = () => {
  return (
    <div>
      <Titulo
        titulo={"teste"}
        subtitulo={
          <span>
            Com um pequeno valor mensal, você
            <br />
            pode <strong>adotar um pet virtualmente!</strong>
          </span>
        }
      />
      <Lista/>
    </div>
  );
};

export default Home;
