import './App.css';
import CategoriesSection from './sections/CategoriesSection';
import DescritptionSection from './sections/DescritptionSection';
import HomeSection from './sections/HomeSection';
import RecommendationSection from './sections/RecommendationSection';

function App() {
  return (
    <main className="main">
      <HomeSection />
      <DescritptionSection />
      <CategoriesSection />
      <RecommendationSection />
    </main>
  );
}

export default App;
