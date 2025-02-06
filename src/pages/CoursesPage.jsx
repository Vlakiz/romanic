import React from 'react';
import CourseBlock from 'src/components/features/CourseBlock';

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
            <CourseBlock
              heading="«PRO MASTER»"
              description="для тех, кто хочет усвоить укрепление гелевой системы"
              period="1 день - 1 модель"
              price={1500}
              mb
            />
            <CourseBlock
              heading="«PRO +»"
              description="для тех, кто хочет освоить укрепление и наращивание ногтей"
              period="1 день - 2 модели"
              price={2000}
            />
          </div>
        </article>
        <article className='border-bottom mb-5 pb-3'>
          <h3 className='text-uppercase text-center mb-5 fs-2'>
            Курсы для новичков
          </h3>
          <div className="row">
            <CourseBlock
              heading="«BASE» Экспресс"
              description="для новичка, который хочет быстро освоить профессию c нуля"
              period="2 дня - 2 модели"
              price={2500}
              mb
            />
            <CourseBlock
              heading="«BASE-VIP»"
              description="для новичка, больше практики"
              period="3 дня - 4 модели"
              price={3100}
            />
          </div>
        </article>
        <article>
          <div className="row justify-content-center">
            <CourseBlock
              heading="Наращивание ногтей курс"
              description="Курс для тех, кто работал мастером от 6 месяцев"
              price={1200}
              className="col-md-8 col-lg-6"
            />
          </div>
        </article>
      </section>
    </div>
  );
};

export default CoursesPage;