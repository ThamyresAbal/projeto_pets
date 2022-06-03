import type { NextPage } from "next";
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
    </div>
  );
};

export default Home;
