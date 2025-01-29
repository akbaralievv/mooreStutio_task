import LinkButton from '../components/LinkButton';
import Header from '../layouts/Header';

function HomeSection() {
  return (
    <section className="homeSection" id="home">
      <div className="container">
        <div className="inner">
          <Header />
          <div className="content">
            <h1>Ваш путеводитель в области сырья</h1>
            <div className="form">
              <input type="text" name="" id="" className="searchInput" placeholder="Найти..." />
              <LinkButton borderRadius="16px" title="Заказать звонок" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
