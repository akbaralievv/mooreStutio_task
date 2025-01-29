import minus from '../assets/icons/minus.svg';
import plus from '../assets/icons/plus.svg';

import LinkButton from './LinkButton';

function RecommendationCard({ image, key }) {
  return (
    <div className="recommendation_card" key={key}>
      <img src={image} alt="" />
      <p>Шпатель кондитерский пластиковый 254мм 50 SG250B</p>
      <span>Вес : 150 кг</span>
      <div>
        <h3>
          550 <span>c</span>
        </h3>
        <div className="counter">
          <div>
            <img src={minus} alt="" />
          </div>
          1
          <div>
            <img src={plus} alt="" />
          </div>
        </div>
      </div>
      <LinkButton borderRadius="100px" title="В корзину" />
    </div>
  );
}

export default RecommendationCard;
