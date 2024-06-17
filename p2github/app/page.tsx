import Link from "next/link";

const Home = async ({}) => {
  return (
    <main className="h-screen">
      <h1 className="text-2xl sm:text-4xl font-black tracking-wide text-center pt-6 pb-10 sm:pb-24">
        Home page
      </h1>
      <h3>Esta aplicaçao tem como objetivo o cadastro, edição e remoção de produtos de uma lista salva em banco de dados, 
        além de login e autenticação de usuários registrados através de JWT.</h3>
      <Link href={'./login'}><h3 className="font-black tracking-wide text-center pt-6 pb-10 sm:pb-24">Login</h3></Link>
    </main>
  );
};

export default Home;