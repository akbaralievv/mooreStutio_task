import chocolate from '../assets/images/chocolate.png';
import milk from '../assets/images/milk.png';
import ingredients from '../assets/images/ingredients.png';
import fillers from '../assets/images/fillers.png';
import CategoriesCard from '../components/CategoriesCard';

const cards = [chocolate, milk, ingredients, fillers];

function CategoriesSection() {
  return (
    <section className="categories_section" id="news">
      <div className="container">
        <div className="inner">
          <h2>
            Просмотр товаров по <span>категориям</span>
          </h2>
          <ul className="content">
            {cards.map((item, id) => (
              <CategoriesCard image={item} key={id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
