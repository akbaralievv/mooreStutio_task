import arrow from '../assets/icons/arrowCards.svg';

export default function LinkButton({ borderRadius, title, width }) {
  return (
    <a style={{ borderRadius, width }} className="link_button">
      {title}{' '}
      <div style={{ borderRadius }}>
        <img src={arrow} alt="arrow" />
      </div>
    </a>
  );
}
