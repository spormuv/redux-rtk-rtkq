import Header from './header/Header';
import RecipeItem from './recipe-item/RecipeItem';

function App() {
  return (
    <section>
      <Header />
      <div>
        <RecipeItem
          recipe={{
            id: 1,
            name: 'pasta',
          }}
        />
        <RecipeItem
          recipe={{
            id: 2,
            name: 'salad',
          }}
        />
        <RecipeItem
          recipe={{
            id: 3,
            name: 'soup',
          }}
        />
      </div>
    </section>
  );
}

export default App;
