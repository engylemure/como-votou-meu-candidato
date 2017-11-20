import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <button>Incluir navbar</button>
    </Link>
    <h1>Como votou meu candidato?</h1>
    <p>
      Esse projeto tem como objetivo mostrar como os atuais deputados do Espírito Santo agiram em diferentes situações.
    </p>
  </div>
);

export default Index;
