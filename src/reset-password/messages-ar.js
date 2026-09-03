import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'sign.in': {
    id: 'sign.in',
    defaultMessage: 'تسجيل الدخول',
    description: 'Sign in toggle text',
  },
  'reset.password.page.title': {
    id: 'reset.password.page.title',
    defaultMessage: 'إعادة تعيين كلمة المرور | {siteName}',
    description: 'page title',
  },
  'reset.password': {
    id: 'reset.password',
    defaultMessage: 'إعادة تعيين كلمة المرور',
    description: 'The page heading and button text for reset password page.',
  },
  'reset.password.page.instructions': {
    id: 'reset.password.page.instructions',
    defaultMessage: 'أدخل وأكد كلمة المرور الجديدة الخاصة بك.',
    description: 'Instructions message for reset password page.',
  },
  'new.password.label': {
    id: 'new.password.label',
    defaultMessage: 'كلمة المرور الجديدة',
    description: 'New password field label for the reset password page.',
  },
  'confirm.password.label': {
    id: 'confirm.password.label',
    defaultMessage: 'تأكيد كلمة المرور',
    description: 'Confirm password field label for the reset password page.',
  },
  // validation errors
  'password.validation.message': {
    id: 'password.validation.message',
    defaultMessage: 'كلمة المرور لم تستوفِ المعايير',
    description: 'Error message for empty or invalid password',
  },
  'passwords.do.not.match': {
    id: 'passwords.do.not.match',
    defaultMessage: 'كلمات المرور غير متطابقة',
    description: 'Password format error.',
  },
  'confirm.your.password': {
    id: 'confirm.your.password',
    defaultMessage: 'أكد كلمة المرور الخاصة بك',
    description: 'Field validation message when confirm password is empty',
  },
  // alert banner strings
  'reset.password.failure.heading': {
    id: 'reset.password.failure.heading',
    defaultMessage: 'لم نتمكن من إعادة تعيين كلمة المرور الخاصة بك.',
    description: 'Heading for reset password request failure',
  },
  'reset.password.form.submission.error': {
    id: 'reset.password.form.submission.error',
    defaultMessage: 'يرجى التحقق من ردودك والمحاولة مرة أخرى.',
    description: 'Error message for reset password page',
  },
  'reset.server.rate.limit.error': {
    id: 'reset.server.rate.limit.error',
    defaultMessage: 'عدد كبير جداً من الطلبات.',
    description: 'Too many request at server end point',
  },
  'reset.password.success.heading': {
    id: 'reset.password.success.heading',
    defaultMessage: 'تم إعادة تعيين كلمة المرور بنجاح.',
    description: 'Heading for alert box when reset password is successful',
  },
  'reset.password.success': {
    id: 'reset.password.success',
    defaultMessage: 'تم إعادة تعيين كلمة المرور الخاصة بك. قم بتسجيل الدخول إلى حسابك.',
    description: 'Reset password success message',
  },
  'internal.server.error': {
    id: 'internal.server.error',
    defaultMessage: 'حدث خطأ. حاول تحديث الصفحة، أو تحقق من اتصالك بالإنترنت.',
    description: 'Error message that appears when server responds with 500 error code',
  },
  'rate.limit.error': {
    id: 'rate.limit.error',
    defaultMessage: 'حدث خطأ بسبب عدد كبير جداً من الطلبات. يرجى المحاولة مرة أخرى بعد بعض الوقت.',
    description: 'Error message that appears when server responds with 429 error code',
  },
});
export default messages;
