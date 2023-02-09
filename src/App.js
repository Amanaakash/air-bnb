
import ImageGrid from './components/ImageGrid';
import NavBar from './components/NavBar';
import Head from './components/Head';
import Text from './components/Text';
import Card from './components/Card';
import data from './data'
function App() {
  const card = data.map(item =>{
    return (
      <Card  
      img ={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
      />
    )
  })
  return (
    <div className="App">
      <NavBar />
      <section className='hero'>
      <ImageGrid />
      <Head />
      <Text />
      </section>
      <div className='cards-list'>
      {card}
      </div>
    </div>
  );
}

export default App;
