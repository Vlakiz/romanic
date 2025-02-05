import React from 'react';
import { useTranslation } from 'react-i18next';
import { Telephone, Envelope } from 'react-bootstrap-icons';

import BookBlock from './BookBlock';
import SocialLinks from './SocialLinks';
import WorkingDay from './WorkingDay';
import FooterItem from './FooterItem';

const AppFooter = () => {
  const { t } = useTranslation('footer');

  return (
    <footer className='mt-5 container'>
      <hr/>
      <div id="footer-wrapper" className='position-absolute w-100 start-0 py-5'>
        <div className="container px-lg-5">
          <div className="row pb-4">
            <div className="col-10 col-sm-6 col-md-5 col-lg-4 col-xl-3">
              <FooterItem heading={t('openHours')}>
                <WorkingDay daysOfWeek={t('workingDays')} workingHours="10:00 - 18:00" />
                <WorkingDay daysOfWeek={t('saturday')} workingHours="10:00 - 16:00" />
                <WorkingDay daysOfWeek={t('nonworkingDays')} workingHours={t('closed')} cols={[6,6]} />
              </FooterItem>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 offset-md-1 offset-xl-2 mb-4 mb-lg-0">
              <FooterItem heading={t('location')}>
                <div className='my-2'>
                  Salon &quot;SHE&quot;
                </div>
                <div className='my-2'>
                  Śląska 50, 81-310, Gdynia
                </div>
              </FooterItem>
              <FooterItem heading={t('contacts')}>
                <a href="tel:+48576140447" className='nav-link my-2'>
                  <Telephone className='me-2' />
                  +48 576-140-447
                </a>
                <a href="mailto:evgenialis884@gmail.com" className='nav-link my-2'>
                  <Envelope className='me-2' />
                  evgenialis884@gmail.com
                </a>
              </FooterItem>
            </div>
            <div className="col-12 col-lg-3 px-3 px-md-0">
              <FooterItem className='text-center text-lg-end'>
                <BookBlock/>
              </FooterItem>
            </div>
          </div>
          <SocialLinks/>
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