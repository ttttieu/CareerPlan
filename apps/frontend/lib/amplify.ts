// lib/amplify.ts
import { Amplify } from '@aws-amplify/core';
import { cognitoConfig } from './cognito-config';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: cognitoConfig.userPoolId,
      userPoolClientId: cognitoConfig.userPoolWebClientId,      
    },
  },
});
