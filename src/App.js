import { Book } from "./components/Book";

function App() {

  let livros = [
    { id: 1, title: 'O Senhor dos Anéis' },
    { id: 2, title: 'O Poderoso Chefão' },
    { id: 3, title: 'Carrie, a Estranha' },
    { id: 4, title: 'Platoon' },
    { id: 5, title: 'Alien' },
  ]


  return (
    <div>
      <h1>Livros</h1>

      <div>
        {livros.map(i => <Book key={i.id} title={i.title} />)}
        {/* <Book title="O Senhor dos Anéis" />
        <Book title="O Poderoso Chefão" />
        <Book title="Carrie, a Estranha" />
        <Book title="Platoon" />
        <Book title="Alien" /> */}

      </div>
    </div>
  );
}



export default App;
