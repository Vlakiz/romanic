import React from 'react';
import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, Tiktok, Youtube, Telephone, Envelope } from 'react-bootstrap-icons';
import BookBlock from '../BookBlock/BookBlock';

const AppFooter = () => {
  const { t } = useTranslation('footer');

  return (
    <footer className='mt-5'>
      <hr/>
      <div id="footer-wrapper" className='position-absolute w-100 start-0 py-5'>
        <div className="container px-lg-5">
          <div className="row pb-4">
            <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">
              <div className='footer-block mb-5 px-3 px-md-0'>
                <h5 className='text-uppercase fw-semibold mb-3'>
                  {t('openHours')}
                </h5>
                <div className='row my-2'>
                  <div className="col-5">
                    {t('workingDays')}
                  </div>
                  <div className="col-7 text-end">
                    10:00 - 18:00
                  </div>
                </div>
                <div className='row my-2'>
                  <div className="col-5">
                    {t('saturday')}
                  </div>
                  <div className="col-7 text-end">
                    10:00 - 16:00
                  </div>
                </div>
                <div className='row my-2'>
                  <div className="col-6">
                    {t('nonworkingDays')}
                  </div>
                  <div className="col-6 text-end">
                    {t('closed')}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 offset-md-1 offset-xl-2 mb-4 mb-lg-0">
              <div className='footer-block px-3 px-md-0'>
                <h5 className='text-uppercase fw-semibold'>
                  {t('location')}
                </h5>
                <p>
                  Salon "SHE"
                  <br/>
                  Śląska 50, 81-310, Gdynia
                </p>
              </div>
              <div className='footer-block mt-5 px-3 px-md-0'>
                <h5 className='text-uppercase fw-semibold'>
                  {t('contacts')}
                </h5>
                <p>
                  <a href="tel:+48576140447" className='nav-link my-2'>
                    <Telephone className='me-2' />
                    +48 576-140-447
                  </a>
                  <a href="mailto:evgenialis884@gmail.com" className='nav-link my-2'>
                    <Envelope className='me-2' />
                    evgenialis884@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-3 px-3 px-md-0">
              <div className='footer-block text-center text-lg-end'>
                <BookBlock/>
              </div>
            </div>
          </div>
          <div className="fs-3 text-secondary d-flex justify-content-center pb-3">
            <div className="social-link mx-3">
              <a href='https://www.instagram.com/evgenia_romanyuk_/' className='nav-link'>
                <Instagram/>
              </a>
            </div>

            <div className="social-link mx-3">
              <a href='#' className='nav-link'>
                <Facebook/>
              </a>
            </div>

            <div className="social-link mx-3">
              <a href='#' className='nav-link'>
                <Tiktok/>
              </a>
            </div>

            <div className="social-link mx-3">
              <a href='#' className='nav-link'>
                <Youtube/>
              </a>
            </div>
          </div>
          <hr/>
          <div id='copyright-rules' className='text-center text-body-tertiary mt-4'>
            <span>
              Copyright © 2025 Yevheniia Romaniuk
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;