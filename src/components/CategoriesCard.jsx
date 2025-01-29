import LinkButton from './LinkButton';

export default function CategoriesCard({ image }) {
  return (
    <li className="categories_card" style={{ backgroundImage: `url(${image})` }}>
      <p>Шоколад и какао продукты</p>
      <LinkButton borderRadius="100px" title="Подробнее" />
    </li>
  );
}
