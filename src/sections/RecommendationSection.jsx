import LinkButton from '../components/LinkButton';
import SliderRecommendation from '../components/SliderRecommendation';

function RecommendationSection() {
  return (
    <section className="recommendation_section" id="catalog">
      <div className="container">
        <div className="inner">
          <span>Вам могут понравиться</span>
          <div className="title">
            <h2>Рекомендуемые товары</h2>
            <LinkButton borderRadius="100px" width="157px" title="Все товары" />
          </div>
          <div className="content">
            <SliderRecommendation />
          </div>
          <LinkButton borderRadius="100px" width="157px" title="Все товары" />
        </div>
      </div>
    </section>
  );
}

export default RecommendationSection;
