import { Amplify } from 'aws-amplify'
import { cognitoConfig } from './cognito-config'

Amplify.configure({
  Auth: {
    CognitoUserPoolId: cognitoConfig.userPoolId,
    CognitoWebClientId: cognitoConfig.userPoolWebClientId,
    region: cognitoConfig.region,
    mandatorySignIn: true,
  } as any,
})
