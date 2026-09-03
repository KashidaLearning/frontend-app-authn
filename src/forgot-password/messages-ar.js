import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'forgot.password.page.title': {
    id: 'forgot.password.page.title',
    defaultMessage: 'إعادة تعيين كلمة المرور | {siteName}',
    description: 'forgot password page title',
  },
  'forgot.password.page.heading': {
    id: 'forgot.password.page.heading',
    defaultMessage: 'إعادة تعيين كلمة المرور',
    description: 'The page heading for the forgot password page.',
  },
  'forgot.password.page.instructions': {
    id: 'forgot.password.page.instructions',
    defaultMessage: 'يرجى إدخال عنوان بريدك الإلكتروني أدناه وسنرسل لك بريداً إلكترونياً يحتوي على تعليمات حول كيفية إعادة تعيين كلمة المرور الخاصة بك.',
    description: 'Instructions message for forgot password page.',
  },
  'forgot.password.page.invalid.email.message': {
    id: 'forgot.password.page.invalid.email.message',
    defaultMessage: 'أدخل عنوان بريد إلكتروني صحيح',
    description: 'Invalid email address message for input field.',
  },
  'forgot.password.page.email.field.label': {
    id: 'forgot.password.page.email.field.label',
    defaultMessage: 'البريد الإلكتروني',
    description: 'Email field label for the forgot password page.',
  },
  'forgot.password.page.submit.button': {
    id: 'forgot.password.page.submit.button',
    defaultMessage: 'إرسال',
    description: 'Submit button text for the forgot password page.',
  },
  'forgot.password.error.alert.title': {
    id: 'forgot.password.error.alert.title.',
    defaultMessage: 'لم نتمكن من الاتصال بك.',
    description: 'Failed to send password recovery email.',
  },
  'forgot.password.error.message.title': {
    id: 'forgot.password.error.message.title',
    defaultMessage: 'حدث خطأ.',
    description: 'Title for message that appears when error occurs for password assistance page',
  },
  'forgot.password.request.in.progress.message': {
    id: 'forgot.password.request.in.progress.message',
    defaultMessage: 'طلبك السابق قيد المعالجة، يرجى المحاولة مرة أخرى بعد قليل.',
    description: 'Message displayed when previous password reset request is still in progress.',
  },
  'forgot.password.empty.email.field.error': {
    id: 'forgot.password.empty.email.field.error',
    defaultMessage: 'أدخل بريدك الإلكتروني',
    description: 'Error message that appears when user tries to submit empty email field',
  },
  'forgot.password.email.help.text': {
    id: 'forgot.password.email.help.text',
    defaultMessage: 'عنوان البريد الإلكتروني الذي استخدمته للتسجيل مع {platformName}',
    description: 'text help for the email',
  },
  // Confirmation Alert Message
  'confirmation.message.title': {
    id: 'confirmation.message.title',
    defaultMessage: 'تحقق من بريدك الإلكتروني',
    description: 'Forgot password confirmation message title',
  },
  'confirmation.support.link': {
    id: 'confirmation.support.link',
    defaultMessage: 'التواصل مع الدعم الفني',
    description: 'Technical support link text',
  },
  'need.help.sign.in.text': {
    id: 'need.help.sign.in.text',
    defaultMessage: 'هل تحتاج إلى مساعدة في تسجيل الدخول؟',
    description: 'Sign in help link on forgot password page',
  },
  'additional.help.text': {
    id: 'additional.help.text',
    defaultMessage: 'للحصول على مساعدة إضافية، اتصل بدعم {platformName} على ',
    description: 'additional help text on forgot password page',
  },
  'sign.in.text': {
    id: 'sign.in.text',
    defaultMessage: 'تسجيل الدخول',
    description: 'login page link on password page',
  },
  'extend.field.errors': {
    id: 'extend.field.errors',
    defaultMessage: '{emailError} أدناه.',
    description: 'extends the field error for alert message',
  },
  // Reset password token validation failure
  'invalid.token.heading': {
    id: 'invalid.token.heading',
    defaultMessage: 'رابط إعادة تعيين كلمة المرور غير صحيح',
    description: 'Alert heading when reset password link is invalid',
  },
  'invalid.token.error.message': {
    id: 'invalid.token.error.message',
    defaultMessage: 'رابط إعادة تعيين كلمة المرور هذا غير صحيح. قد يكون قد تم استخدامه بالفعل. أدخل بريدك الإلكتروني أدناه لتلقي رابط جديد.',
    description: 'Alert message when reset password link has expired or is invalid',
  },
  'token.validation.rate.limit.error.heading': {
    id: 'token.validation.rate.limit.error.heading',
    defaultMessage: 'عدد كبير جداً من الطلبات',
    description: 'Too many request at server end point',
  },
  'token.validation.rate.limit.error': {
    id: 'token.validation.rate.limit.error',
    defaultMessage: 'حدث خطأ بسبب عدد كبير جداً من الطلبات. يرجى المحاولة مرة أخرى بعد بعض الوقت.',
    description: 'Error message that appears when server responds with 429 error code',
  },
  'token.validation.internal.sever.error.heading': {
    id: 'token.validation.internal.sever.error.heading',
    defaultMessage: 'فشل التحقق من الرمز',
    description: 'Failed to validate reset password token error message.',
  },
  'token.validation.internal.sever.error': {
    id: 'token.validation.internal.sever.error',
    defaultMessage: 'حدث خطأ. حاول تحديث الصفحة، أو تحقق من اتصالك بالإنترنت.',
    description: 'Error message that appears when server responds with 500 error code',
  },
  // Error messages
  'internal.server.error': {
    id: 'internal.server.error',
    defaultMessage: 'حدث خطأ. حاول تحديث الصفحة، أو تحقق من اتصالك بالإنترنت.',
    description: 'Error message that appears when server responds with 500 error code',
  },
});
export default messages;
