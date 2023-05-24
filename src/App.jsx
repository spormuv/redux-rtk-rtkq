import RecipeItem from './recipe-item/RecipeItem';

function App() {
  return (
    <div>
      <RecipeItem
        recipe={{
          id: 1,
          name: 'spagetti',
        }}
      />
      <RecipeItem
        recipe={{
          id: 2,
          name: 'potato',
        }}
      />
      <RecipeItem
        recipe={{
          id: 3,
          name: 'soup',
        }}
      />
    </div>
  );
}

export default App;
