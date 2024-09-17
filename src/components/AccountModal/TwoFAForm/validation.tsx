import JoiBase from 'joi';
import { joiPasswordExtendCore } from 'joi-password';

const JoiPassword = JoiBase.extend(joiPasswordExtendCore);

const validation = JoiBase.object({
  userpass: JoiPassword.string().min(8).messages({
    'string.empty': `Your Password needs to be at least 8 symbols. We recommend a\nmixture of symbols and numbers.`,
    'string.min':
      'Your Password needs to be at least 8 symbols. We recommend a\nmixture of symbols and numbers.'
  }),
  twofacode: JoiPassword.string().min(2).messages({
    'string.empty': `Please enter the 2FA code`,
    'string.min': 'Please enter the proper 2FA code.'
  })
});

export { validation };
