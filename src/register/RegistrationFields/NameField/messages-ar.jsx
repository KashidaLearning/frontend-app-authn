import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'empty.name.field.error': {
    id: 'empty.name.field.error',
    defaultMessage: 'أدخل اسمك الكامل',
    description: 'Error message for empty fullname field',
  },
  'name.validation.message': {
    id: 'name.validation.message',
    defaultMessage: 'أدخل اسماً صحيحاً',
    description: 'Validation message that appears when fullname contain URL',
  },
  'help.text.name': {
    id: 'help.text.name',
    defaultMessage: 'سيتم استخدام هذا الاسم في أي شهادات تحصل عليها.',
    description: 'Help text for fullname field on registration page',
  },
});

export default messages;
