import forgotPasswordMessages from '../forgot-password/messages-ar';
import loginMessages from '../login/messages-ar';
import registerMessages from '../register/messages-ar';
import countryFieldMessages from '../register/RegistrationFields/CountryField/messages-ar';
import emailFieldMessages from '../register/RegistrationFields/EmailField/messages-ar';
import honorCodeFieldMessages from '../register/RegistrationFields/HonorCodeField/messages-ar';
import nameFieldMessages from '../register/RegistrationFields/NameField/messages-ar';
import termsOfServiceFieldMessages from '../register/RegistrationFields/TermsOfServiceField/messages-ar';
import usernameFieldMessages from '../register/RegistrationFields/UsernameField/messages-ar';
import resetPasswordMessages from '../reset-password/messages-ar';

// Merge all Arabic messages into a single object
const arabicMessages = {
  ...registerMessages,
  ...loginMessages,
  ...forgotPasswordMessages,
  ...resetPasswordMessages,
  ...emailFieldMessages,
  ...nameFieldMessages,
  ...usernameFieldMessages,
  ...countryFieldMessages,
  ...termsOfServiceFieldMessages,
  ...honorCodeFieldMessages,
};

export default [
  {
    locale: 'ar',
    messages: arabicMessages,
  },
];
