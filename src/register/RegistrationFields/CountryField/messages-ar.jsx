import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'empty.country.field.error': {
    id: 'empty.country.field.error',
    defaultMessage: 'اختر دولتك أو منطقة إقامتك',
    description: 'Error message when no country/region is selected',
  },
  'invalid.country.field.error': {
    id: 'invalid.country.field.error',
    defaultMessage: 'يجب أن تتطابق الدولة مع أحد الخيارات المتاحة في القائمة المنسدلة.',
    description: 'Error message when country is invalid',
  },
  'registration.country.label': {
    id: 'registration.country.label',
    defaultMessage: 'الدولة/المنطقة',
    description: 'Placeholder for the country options dropdown.',
  },
});

export default messages;
