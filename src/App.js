import { Book } from "./components/Book";
import FormBook from "./Pages/FormBook";



function App() {

let livros = [
  {id: 1, title: 'O Senhor dos Anéis'},
  {id: 2, title: 'O Poderoso Chefão'},
  {id: 3, title: 'Carrie, a Estranha'},
  {id: 4, title: 'platoon'},
  {id: 5, title: 'Alien'}
 
]
  return (
    <div>
      <FormBook />

      <h1>Livros</h1>

      <div>
       {livros.map(i => <Book key={i.id} id={i.id} title={i.title} />)}
       
      </div>
    </div>
  );
}



export default App;
