import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'register.page.title': {
    id: 'register.page.title',
    defaultMessage: 'تسجيل | {siteName}',
    description: 'register page title',
  },
  // Field labels
  'registration.fullname.label': {
    id: 'registration.fullname.label',
    defaultMessage: 'الاسم الكامل',
    description: 'Label that appears above fullname field',
  },
  'registration.email.label': {
    id: 'registration.email.label',
    defaultMessage: 'البريد الإلكتروني',
    description: 'Label that appears above email field on register page',
  },
  'registration.username.label': {
    id: 'registration.username.label',
    defaultMessage: 'اسم المستخدم العام',
    description: 'Label that appears above username field',
  },
  'registration.password.label': {
    id: 'registration.password.label',
    defaultMessage: 'كلمة المرور',
    description: 'Label that appears above password field',
  },
  'registration.country.label': {
    id: 'registration.country.label',
    defaultMessage: 'الدولة/المنطقة',
    description: 'Placeholder for the country options dropdown.',
  },
  'registration.opt.in.label': {
    id: 'registration.opt.in.label',
    defaultMessage: 'أوافق على أن يرسل {siteName} لي رسائل تسويقية.',
    description: 'Text for opt in option on register page.',
  },
  // Help text
  'help.text.name': {
    id: 'help.text.name',
    defaultMessage: 'سيتم استخدام هذا الاسم في أي شهادات تحصل عليها.',
    description: 'Help text for fullname field on registration page',
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
  'help.text.email': {
    id: 'help.text.email',
    defaultMessage: 'لتفعيل الحساب والتحديثات المهمة',
    description: 'Help text for email field on registration page',
  },
  // Form buttons
  'create.account.for.free.button': {
    id: 'create.account.for.free.button',
    defaultMessage: 'إنشاء حساب مجاني',
    description: 'Label text for registration form submission button',
  },
  'create.account.cta.button': {
    id: 'create.account.cta.button',
    defaultMessage: '{label}',
    description: 'Label text for registration form submission button for those users who are landing through redirections',
  },
  // Institution login
  'register.institution.login.page.title': {
    id: 'register.institution.login.page.title',
    defaultMessage: 'التسجيل باستخدام بيانات المؤسسة/الحرم الجامعي',
    description: 'Heading of institution page',
  },
  // Validation messages
  'empty.name.field.error': {
    id: 'empty.name.field.error',
    defaultMessage: 'أدخل اسمك الكامل',
    description: 'Error message for empty fullname field',
  },
  'empty.email.field.error': {
    id: 'empty.email.field.error',
    defaultMessage: 'أدخل بريدك الإلكتروني',
    description: 'Error message for empty email field',
  },
  'empty.username.field.error': {
    id: 'empty.username.field.error',
    defaultMessage: 'يجب أن يكون اسم المستخدم بين 2 و 30 حرفاً',
    description: 'Error message for empty username field',
  },
  'empty.password.field.error': {
    id: 'empty.password.field.error',
    defaultMessage: 'كلمة المرور لم تستوفِ المعايير',
    description: 'Error message for empty password field',
  },
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
  'email.do.not.match': {
    id: 'email.do.not.match',
    defaultMessage: 'عناوين البريد الإلكتروني لا تتطابق.',
    description: 'Email not match to confirm email',
  },
  'email.invalid.format.error': {
    id: 'email.invalid.format.error',
    defaultMessage: 'أدخل عنوان بريد إلكتروني صحيح',
    description: 'Validation error for invalid email address',
  },
  'username.validation.message': {
    id: 'username.validation.message',
    defaultMessage: 'يجب أن يكون اسم المستخدم بين 2 و 30 حرفاً',
    description: 'Error message for empty username field',
  },
  'name.validation.message': {
    id: 'name.validation.message',
    defaultMessage: 'أدخل اسماً صحيحاً',
    description: 'Validation message that appears when fullname contain URL',
  },
  'password.validation.message': {
    id: 'password.validation.message',
    defaultMessage: 'كلمة المرور لم تستوفِ المعايير',
    description: 'Error message for empty or invalid password',
  },
  'username.format.validation.message': {
    id: 'username.format.validation.message',
    defaultMessage: 'يمكن لأسماء المستخدمين أن تحتوي على أحرف (A-Z, a-z)، أرقام (0-9)، شرطات سفلية (_)، وواصلات (-) فقط. لا يمكن أن تحتوي على مسافات',
    description: 'Validation message that appears when username format is invalid',
  },
  // Error messages
  'registration.request.failure.header': {
    id: 'registration.request.failure.header',
    defaultMessage: 'لم نتمكن من إنشاء حسابك.',
    description: 'error message when registration failure.',
  },
  'registration.empty.form.submission.error': {
    id: 'registration.empty.form.submission.error',
    defaultMessage: 'يرجى التحقق من ردودك والمحاولة مرة أخرى.',
    description: 'Error message that appears on top of the form when empty form is submitted',
  },
  'registration.request.server.error': {
    id: 'registration.request.server.error',
    defaultMessage: 'حدث خطأ. حاول تحديث الصفحة، أو تحقق من اتصالك بالإنترنت.',
    description: 'Error message for internal server error.',
  },
  'registration.rate.limit.error': {
    id: 'registration.rate.limit.error',
    defaultMessage: 'عدد كبير جداً من محاولات التسجيل الفاشلة. حاول لاحقاً.',
    description: 'Error message that appears when an anonymous user has made too many failed registration attempts',
  },
  'registration.tpa.session.expired': {
    id: 'registration.tpa.session.expired',
    defaultMessage: 'انتهت جلسة التسجيل باستخدام {provider}.',
    description: '',
  },
  'registration.forbidden.username': {
    id: 'registration.forbidden.username',
    defaultMessage: 'لا يمكن لأسماء المستخدمين أن تتضمن كلمات قد يتم الخلط بينها وبين أدوار الدورات. يرجى اختيار اسم مستخدم مختلف.',
    description: '',
  },
  'registration.tpa.authentication.failure': {
    id: 'registration.tpa.authentication.failure',
    defaultMessage: 'نعتذر، أنت غير مصرح بالوصول إلى {platform_name} عبر هذه القناة. '
        + 'يرجى الاتصال بمسؤول التعلم الخاص بك أو مديرك للوصول إلى {platform_name}.'
        + '{lineBreak}{lineBreak}تفاصيل الخطأ:{lineBreak}{errorMessage}',
    description: 'Error message third party authentication pipeline fails',
  },
  // Terms of Service and Honor Code
  'terms.of.service.and.honor.code': {
    id: 'terms.of.service.and.honor.code',
    defaultMessage: 'شروط الخدمة وقانون الشرف',
    description: 'Text for the hyperlink that redirects user to terms of service and honor code',
  },
  'privacy.policy': {
    id: 'privacy.policy',
    defaultMessage: 'سياسة الخصوصية',
    description: 'Text for the hyperlink that redirects user to privacy policy',
  },
  'honor.code': {
    id: 'honor.code',
    defaultMessage: 'قانون الشرف',
    description: 'Text for the hyperlink that redirects user to the honor code',
  },
  'terms.of.service': {
    id: 'terms.of.service',
    defaultMessage: 'شروط الخدمة',
    description: 'Text for the hyperlink that redirects user to the terms of service',
  },
  // miscellaneous strings
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
