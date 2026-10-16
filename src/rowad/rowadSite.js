import { getConfig } from '@edx/frontend-platform';
import { getLocale } from '@edx/frontend-platform/i18n';

// Rowad public website. The LMS and MFEs send people back here.
export const ROWAD_SITE = 'https://rowadjourney.com';

const isArabic = () => String(getLocale() || '').toLowerCase().startsWith('ar');

export const rowadHomeUrl = () => (isArabic() ? `${ROWAD_SITE}/` : `${ROWAD_SITE}/en`);

export const rowadDashboardUrl = () => (
  isArabic() ? `${ROWAD_SITE}/${encodeURIComponent('مساحاتي')}` : `${ROWAD_SITE}/en/dashboard`
);

// After sign in / registration the LMS sends people to its default dashboard
// unless they asked for a specific page (e.g. a course). Only that default
// destination is replaced with the Rowad website dashboard.
export const rowadPostLoginUrl = (redirectUrl) => {
  try {
    const lmsBase = getConfig().LMS_BASE_URL;
    const target = new URL(redirectUrl || '/dashboard', lmsBase);
    const path = target.pathname.replace(/\/+$/, '');
    const isLmsDefault = target.host === new URL(lmsBase).host && (path === '' || path === '/dashboard');
    const isLearnerHome = path === '/learner-dashboard';
    return (isLmsDefault || isLearnerHome) ? rowadDashboardUrl() : redirectUrl;
  } catch (e) {
    return redirectUrl;
  }
};
