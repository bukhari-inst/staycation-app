import React from 'react';
// import ImageHero from 'assets/images/img-hero.jpg';
// import ImageHero_ from 'assets/images/img-hero-frame.jpg';
// import IconCities from 'assets/images/icons/IconCities.svg';
// import IconTraveler from 'assets/images/icons/IconTraveler.svg';
// import IconTreasure from 'assets/images/icons/IconTreasure.svg';
import Button from 'elements/Button';

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo();
  }
  return (
    <section className="container pt-4">
      <div className="row align-item-center">
        <div className="col-auto pr-5" style={{ width: 422 }}>
          <h1 className="h2 font-weight-bold line-height-1 mb-3">
            Forget The Busy Work, <br />
            Start Your Next Vacation
          </h1>
          <p className="mb-5 font-weight-light text-gray-500 w-75">
            We prvide what you need to enjoy you holiday with family
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
        </div>
      </div>
    </section>
  );
}
