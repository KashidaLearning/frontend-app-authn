import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'empty.username.field.error': {
    id: 'empty.username.field.error',
    defaultMessage: 'يجب أن يكون اسم المستخدم بين 2 و 30 حرفاً',
    description: 'Error message for empty username field',
  },
  'username.validation.message': {
    id: 'username.validation.message',
    defaultMessage: 'يجب أن يكون اسم المستخدم بين 2 و 30 حرفاً',
    description: 'Error message for empty username field',
  },
  'username.format.validation.message': {
    id: 'username.format.validation.message',
    defaultMessage: 'يمكن لأسماء المستخدمين أن تحتوي على أحرف (A-Z, a-z)، أرقام (0-9)، شرطات سفلية (_)، وواصلات (-) فقط. لا يمكن أن تحتوي على مسافات',
    description: 'Validation message that appears when username format is invalid',
  },
  'help.text.username.1': {
    id: 'help.text.username.1',
    defaultMessage: 'الاسم الذي سيعرفك به الآخرون في دوراتك.',
    description: 'Part of help text for username field on registration page',
  },
  'help.text.username.2': {
    id: 'help.text.username.2',
    defaultMessage: 'لا يمكن تغيير هذا لاحقاً.',
    description: 'Part of help text for username field on registration page',
  },
  'registration.username.suggestion.label': {
    id: 'registration.username.suggestion.label',
    defaultMessage: 'مقترح:',
    description: 'Suggested usernames label text.',
  },
  'did.you.mean.alert.text': {
    id: 'did.you.mean.alert.text',
    defaultMessage: 'هل تقصد',
    description: 'Did you mean alert suggestion',
  },
});

export default messages;
