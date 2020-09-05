import React, {Fragment} from 'react';
import CookieAlert from '../Cookie-Alert';

const NotFound = () => (
  <Fragment>
    <CookieAlert/>
    <h2 className='notFound'>404 NotFound</h2>
    <a className='report-problem' href="mailto:contact@yoanndelattre.com">
      Report a Problem
    </a>
  </Fragment>
);

export default NotFound;
