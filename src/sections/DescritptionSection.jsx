import LinkButton from '../components/LinkButton';

function DescritptionSection() {
  return (
    <section className="descritption_section" id="about">
      <div className="container">
        <div className="inner">
          <h2>
            Мы помогаем местным кондитерам и шеф-поварам претворять в жизнь свои самые смелые
            кулинарные задумки
          </h2>
          <div className="content">
            <div className="description">
              <p>
                - Мы предлагаем вам не росто сырье, а экспертность и индивидуальный подход: всегда
                готовы помочь найти альтернативу, закрыть срочную потребность или предложить
                уникальное решение.
              </p>
            </div>
            <div className="image">
              <LinkButton borderRadius="100px" width="170px" title="Читать далее" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescritptionSection;
