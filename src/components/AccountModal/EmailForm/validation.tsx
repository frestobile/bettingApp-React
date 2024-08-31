import JoiBase from 'joi';
import { joiPasswordExtendCore } from 'joi-password';

const JoiPassword = JoiBase.extend(joiPasswordExtendCore);

const validation = JoiBase.object({
  useremail: JoiBase.string()
    .email({ tlds: { allow: false } })
    .messages({
      'string.empty': `Please enter a valid email. Example: example@email.com`,
      'string.email': `Please enter a valid email. Example: example@email.com`
    }),
  newemail: JoiPassword.string().min(8).messages({
    'string.empty': `Please enter a valid email. Example: example@email.com`,
    'string.email': `Please enter a valid email. Example: example@email.com`
  }),
  newemail2: JoiPassword.string().min(8).valid(JoiBase.ref('newemail')).messages({
    'string.empty': `Please enter a valid email. Example: example@email.com`,
    'string.email': `Please enter a valid email. Example: example@email.com`,
    'any.only': 'New emails do not match'
  })
});

export { validation };
