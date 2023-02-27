import SearchBar from '../components/SearchBar';

function Imprimes() {
  return (
    <div>
      <h3 style={{ textAlign: 'center', marginTop: '10px' }}>
        Recherche dans la liste des imprimés
      </h3>
      <hr />
      <SearchBar />
      Visualizer
    </div>
  );
}

export default Imprimes;
