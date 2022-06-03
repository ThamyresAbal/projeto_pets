import type { NextPage } from 'next'

function MeuComponente(){
  return <div>Treina web</div>
}
const Home: NextPage = () => {
  return (
    <div >
     <MeuComponente/>
     <MeuComponente/>
     <MeuComponente/>
    </div>
  )
}

export default Home
