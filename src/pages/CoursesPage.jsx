import React from 'react';

const CoursesPage = () => {
  return (
    <div id='courses-page' className='text-white'>
      <section id ="beauty-packages" className='px-5 mx-0 mx-lg-3 mx-xl-5'>
        <div className="section-heading text-center mb-5">
          <div className="d-inline-block">
            <h1 className='text-uppercase section-heading fw-light'>
              Beauty packages
            </h1>
            <h2 className='text-end section-subheading'>
              and pricing
            </h2>
          </div>
        </div>
        <article className='border-bottom mb-5 pb-3'>
          <h3 className='text-uppercase text-center mb-5 fs-2'>
            Повышение квалификации
          </h3>
          <div className="row">
            <div className="col-12 col-md-6 text-center mb-2 mb-lg-0">
              <h4 className='mb-3 fs-2 text-uppercase'>
                «PRO MASTER»
              </h4>
              <p className='beauty-desc'>
                для тех, кто хочет усвоить укрепление гелевой системы
              </p>
              <p className='beauty-desc'>
                1 день - 1 модель
              </p>
              <p className='text-uppercase beauty-price'>
                1500 zł
              </p>
            </div>
            <div className="col-12 col-md-6 text-center">
              <h4 className='mb-3 fs-2 text-uppercase'>
                «PRO +»
              </h4>
              <p className='beauty-desc'>
                для тех, кто хочет освоить укрепление и наращивание ногтей
              </p>
              <p className='beauty-desc'>
                1 день - 2 модели
              </p>
              <p className='text-uppercase beauty-price'>
                2000 zł
              </p>
            </div>
          </div>
        </article>
        <article className='border-bottom mb-5 pb-3'>
          <h3 className='text-uppercase text-center mb-5 fs-2'>
            Курсы для новичков
          </h3>
          <div className="row">
            <div className="col-12 col-md-6 text-center mb-2 mb-lg-0">
              <h4 className='mb-3 fs-2 text-uppercase'>
                «BASE» Экспресс
              </h4>
              <p className='beauty-desc'>
                для новичка, который хочет быстро освоить профессию с нуля
              </p>
              <p className='beauty-desc'>
                2 дня - 2 модели
              </p>
              <p className='text-uppercase beauty-price'>
                2500 zł
              </p>
            </div>
            <div className="col-12 col-md-6 text-center">
              <h4 className='mb-3 fs-2 text-uppercase'>
                «BASE-VIP»
              </h4>
              <p className='beauty-desc'>
                для новичка, больше практики
              </p>
              <p className='beauty-desc'>
                3 дня - 4 модели
              </p>
              <p className='text-uppercase beauty-price'>
                3100 zł
              </p>
            </div>
          </div>
        </article>
        <article>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              <h4 className='text-uppercase mb-4 fs-2 text-uppercase'>
                Наращивание ногтей курс
              </h4>
              <p className='beauty-desc'>
                Курс для тех, кто работал мастером от 6 месяцев
              </p>
              <p className='text-uppercase beauty-price'>
                1200 zł
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default CoursesPage;