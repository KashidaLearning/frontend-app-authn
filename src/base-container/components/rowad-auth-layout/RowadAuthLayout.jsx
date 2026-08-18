import React from 'react';

import PropTypes from 'prop-types';
import './index.scss';

const ROWAD_WEBSITE_URL = 'https://d1p65zue2xzvrm.cloudfront.net/';
const ROWAD_ARABIC_LOGO_URL = '/authn/images/rowad-logo-ar-light.png';
const RowadAuthLayout = ({ children }) => (
  <div className="rowad-auth-layout" dir="rtl">
    <main className="rowad-auth-layout__form-panel">
      <div className="rowad-auth-layout__glass-card">
        {children}
      </div>
    </main>

    <aside className="rowad-auth-layout__brand" aria-label="Rowad">
      <a href={ROWAD_WEBSITE_URL} className="rowad-auth-layout__brand-link">
        <img
          src={ROWAD_ARABIC_LOGO_URL}
          alt="رواد"
          className="rowad-auth-layout__logo"
        />
      </a>
    </aside>
  </div>
);

RowadAuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default RowadAuthLayout;
