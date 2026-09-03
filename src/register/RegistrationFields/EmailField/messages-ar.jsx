import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'empty.email.field.error': {
    id: 'empty.email.field.error',
    defaultMessage: 'أدخل بريدك الإلكتروني',
    description: 'Error message for empty email field',
  },
  'email.invalid.format.error': {
    id: 'email.invalid.format.error',
    defaultMessage: 'أدخل عنوان بريد إلكتروني صحيح',
    description: 'Validation error for invalid email address',
  },
  'email.do.not.match': {
    id: 'email.do.not.match',
    defaultMessage: 'عناوين البريد الإلكتروني لا تتطابق.',
    description: 'Email not match to confirm email',
  },
});

export default messages;
