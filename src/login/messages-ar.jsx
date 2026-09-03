import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'login.page.title': {
    id: 'login.page.title',
    defaultMessage: 'تسجيل الدخول | {siteName}',
    description: 'login page title',
  },
  // Login labels
  'login.user.identity.label': {
    id: 'login.user.identity.label',
    defaultMessage: 'اسم المستخدم أو البريد الإلكتروني',
    description: 'Label for user identity field to enter either username or email to login',
  },
  'login.password.label': {
    id: 'login.password.label',
    defaultMessage: 'كلمة المرور',
    description: 'Label for password field',
  },
  'sign.in.button': {
    id: 'sign.in.button',
    defaultMessage: 'تسجيل الدخول',
    description: 'Sign in button label that appears on login page',
  },
  'forgot.password': {
    id: 'forgot.password',
    defaultMessage: 'هل نسيت كلمة المرور؟',
    description: 'Button text for forgot password',
  },
  'institution.login.button': {
    id: 'institution.login.button',
    defaultMessage: 'بيانات المؤسسة/الحرم الجامعي',
    description: 'shows institutions list',
  },
  'institution.login.page.title': {
    id: 'institution.login.page.title',
    defaultMessage: 'تسجيل الدخول باستخدام بيانات المؤسسة/الحرم الجامعي',
    description: 'Heading of institution page',
  },
  'institution.login.page.sub.heading': {
    id: 'institution.login.page.sub.heading',
    defaultMessage: 'اختر مؤسستك من القائمة أدناه',
    description: 'Heading of the institutions list',
  },
  'non.compliant.password.title': {
    id: 'non.compliant.password.title',
    defaultMessage: 'لقد غيرنا متطلبات كلمة المرور مؤخراً',
    description: 'A title that appears in bold before error message for non-compliant password',
  },
  'non.compliant.password.message': {
    id: 'non.compliant.password.message',
    defaultMessage: 'كلمة المرور الحالية لا تلبي متطلبات الأمان الجديدة. '
                    + 'لقد أرسلنا رسالة إعادة تعيين كلمة المرور إلى عنوان البريد الإلكتروني المرتبط بهذا الحساب. '
                    + 'شكراً لمساعدتك لنا في الحفاظ على أمان بياناتك.',
    description: 'Error message for non-compliant password',
  },
  'account.locked.out.message.1': {
    id: 'account.locked.out.message.1',
    defaultMessage: 'لحماية حسابك، تم قفله مؤقتاً. حاول مرة أخرى بعد 30 دقيقة.',
    description: 'Part of message for when user account has been locked out after multiple failed login attempts',
  },
  'username.or.email.format.validation.less.chars.message': {
    id: 'username.or.email.format.validation.less.chars.message',
    defaultMessage: 'يجب أن يحتوي اسم المستخدم أو البريد الإلكتروني على 2 حرف على الأقل.',
    description: 'Validation message that appears when username or email address is less than 2 characters',
  },
  'email.validation.message': {
    id: 'email.validation.message',
    defaultMessage: 'أدخل اسم المستخدم أو بريدك الإلكتروني',
    description: 'Validation message that appears when email is empty',
  },
  'password.validation.message': {
    id: 'password.validation.message',
    defaultMessage: 'أدخل كلمة المرور الخاصة بك',
    description: 'Validation message that appears when password is empty',
  },
  // Account Activation Strings
  'account.activation.success.message.title': {
    id: 'account.activation.success.message.title',
    defaultMessage: 'نجح! لقد قمت بتفعيل حسابك.',
    description: 'Account Activation success message title',
  },
  'account.activation.success.message': {
    id: 'account.activation.success.message',
    defaultMessage: 'ستتلقى الآن تحديثات رسائل بريد إلكترونية ونبهات منا تتعلق بالدورات المسجلة فيها. قم بتسجيل الدخول للمتابعة.',
    description: 'Message show to learners when their account has been activated successfully',
  },
  'account.activation.info.message': {
    id: 'account.activation.info.message',
    defaultMessage: 'تم تفعيل هذا الحساب بالفعل.',
    description: 'Message shown when learner account has already been activated',
  },
  'account.activation.error.message.title': {
    id: 'account.activation.error.message.title',
    defaultMessage: 'لم يتمكن من تفعيل حسابك',
    description: 'Account Activation error message title',
  },
  'account.activation.support.link': {
    id: 'account.activation.support.link',
    defaultMessage: 'التواصل مع الدعم',
    description: 'Link text used in account activation error message to go to learner help center',
  },
  // Email Confirmation Strings
  'account.confirmation.success.message.title': {
    id: 'account.confirmation.success.message.title',
    defaultMessage: 'نجح! لقد قمت بتأكيد بريدك الإلكتروني.',
    description: 'Account verification success message title',
  },
  'account.confirmation.success.message': {
    id: 'account.confirmation.success.message',
    defaultMessage: 'قم بتسجيل الدخول للمتابعة.',
    description: 'Message show to learners when their account has been activated successfully',
  },
  'account.confirmation.info.message': {
    id: 'account.confirmation.info.message',
    defaultMessage: 'تم تأكيد هذا البريد الإلكتروني بالفعل.',
    description: 'Message shown when learner account has already been verified',
  },
  'account.confirmation.error.message.title': {
    id: 'account.confirmation.error.message.title',
    defaultMessage: 'لم يتمكن من تأكيد بريدك الإلكتروني',
    description: 'Account verification error message title',
  },
  'tpa.account.link': {
    id: 'tpa.account.link',
    defaultMessage: 'حساب {provider}',
    description: 'Link text error message used to go to SSO when staff user try to login through password.',
  },
  'internal.server.error.message': {
    id: 'internal.server.error.message',
    defaultMessage: 'حدث خطأ. حاول تحديث الصفحة، أو تحقق من اتصالك بالإنترنت.',
    description: 'Error message that appears when server responds with 500 error code',
  },
  'login.rate.limit.reached.message': {
    id: 'login.rate.limit.reached.message',
    defaultMessage: 'عدد كبير جداً من محاولات تسجيل الدخول الفاشلة. حاول لاحقاً.',
    description: 'Error message that appears when an anonymous user has made too many failed login attempts',
  },
  'login.failure.header.title': {
    id: 'login.failure.header.title',
    defaultMessage: 'لم نتمكن من تسجيل دخولك.',
    description: 'Login failure header message.',
  },
  'contact.support.link': {
    id: 'contact.support.link',
    defaultMessage: 'التواصل مع دعم {platformName}',
    description: 'Link text used in inactive user error message to go to learner help center',
  },
  'login.incorrect.credentials.error': {
    id: 'login.incorrect.credentials.error',
    defaultMessage: 'اسم المستخدم أو البريد الإلكتروني أو كلمة المرور التي أدخلتها غير صحيحة. يرجى المحاولة مرة أخرى.',
    description: 'Error message for incorrect email or password',
  },
  'login.form.invalid.error.message': {
    id: 'login.form.invalid.error.message',
    defaultMessage: 'يرجى ملء الحقول أدناه.',
    description: 'Login form empty input user message',
  },
  'login.incorrect.credentials.error.reset.link.text': {
    id: 'login.incorrect.credentials.error.reset.link.text',
    defaultMessage: 'إعادة تعيين كلمة المرور الخاصة بك',
    description: 'Reset password link text for incorrect email or password credentials',
  },
  'login.incorrect.credentials.error.before.account.blocked.text': {
    id: 'login.incorrect.credentials.error.before.account.blocked.text',
    defaultMessage: 'انقر هنا لإعادة تعيينها.',
    description: 'Reset password link text for incorrect email or password credentials before blocking account',
  },
  // Vulnerable password change prompt
  'password.security.nudge.title': {
    id: 'password.security.nudge.title',
    defaultMessage: 'أمان كلمة المرور',
    description: 'Title for prompt that nudges user to change their vulnerable password',
  },
  'password.security.block.title': {
    id: 'password.security.block.title',
    defaultMessage: 'تغيير كلمة المرور مطلوب',
    description: 'Title for prompt that asks user to change their vulnerable password',
  },
  'password.security.nudge.body': {
    id: 'password.security.nudge.body',
    defaultMessage: 'كشف نظامنا أن كلمة المرور الخاصة بك عرضة للخطر. '
                    + 'نوصيك بتغييرها حتى يبقى حسابك آمناً.',
    description: 'Message copy for prompt that nudges user to change their vulnerable password',
  },
  'password.security.block.body': {
    id: 'password.security.block.body',
    defaultMessage: 'كشف نظامنا أن كلمة المرور الخاصة بك عرضة للخطر. '
                    + 'غيّر كلمة المرور الخاصة بك حتى يبقى حسابك آمناً.',
    description: 'Message copy for prompt that asks user to change their vulnerable password',
  },
  'password.security.close.button': {
    id: 'password.security.close.button',
    defaultMessage: 'إغلاق',
    description: 'Button to close popup',
  },
  'password.security.redirect.to.reset.password.button': {
    id: 'password.security.redirect.to.reset.password.button',
    defaultMessage: 'إعادة تعيين كلمة المرور الخاصة بك',
    description: 'Button to redirect users to Reset Password page',
  },
  'login.tpa.authentication.failure': {
    id: 'login.tpa.authentication.failure',
    defaultMessage: 'نعتذر، أنت غير مصرح بالوصول إلى {platform_name} عبر هذه القناة. '
        + 'يرجى الاتصال بمسؤول التعلم الخاص بك أو مديرك للوصول إلى {platform_name}.'
        + '{lineBreak}{lineBreak}تفاصيل الخطأ:{lineBreak}{errorMessage}',
    description: 'Error message third party authentication pipeline fails',
  },
});

export default messages;
