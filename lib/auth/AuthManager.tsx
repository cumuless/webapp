'use client';

import {
  getErrorMessage,
  goto,
  log,
  logError,
  logSuccess,
  logUnkownIssue,
  logWarning,
  tokenSafeString,
} from '@utils';
import {
  confirmSignIn,
  fetchUserAttributes,
  getCurrentUser,
  resendSignUpCode,
  signIn,
  signOut,
} from 'aws-amplify/auth';
import { ReactNode, useEffect, useState } from 'react';
import { fetchAuthSession } from 'aws-amplify/auth';
import { APP_HOME_PATH, LOGIN_PATH } from '@lib/constants';
import { Amplify, ResourcesConfig } from 'aws-amplify';
import { redirect, useSelectedLayoutSegment } from 'next/navigation';
import { setName, showErrorPopup, showInfoPopup } from '@lib/store';
import { makeApiCall } from '@lib/api/api';

type LoginData = {
  name?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
};

export async function isAuthenticated() {
  let { tokens } = await fetchAuthSession();
  if (tokens?.accessToken?.toString()) {
    logSuccess(
      `User is Authenticated with token ${tokenSafeString(tokens?.accessToken?.toString())}`
    );
    return true;
  }
  logWarning('User Not Authenticated.');
  return false;
}

export async function getAuthToken() {
  let { tokens } = await fetchAuthSession();
  return tokens?.accessToken?.toString();
}

export async function getUserID() {
  const { userId } = await getCurrentUser();
  return userId;
}

export async function logIn(creds: LoginData): Promise<string | boolean> {
  try {
    const {
      nextStep: { signInStep },
      isSignedIn,
    } = await signIn({ username: creds.email || '', password: creds.password || '' });
    logSuccess(`Logged in with status: ${isSignedIn} and next step ${signInStep}`);

    if (signInStep === 'DONE') goto(APP_HOME_PATH);
    else if (signInStep === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED')
      return 'PASSWORD_RESET_REQUIRED';
    else {
      logUnkownIssue(signInStep, 'when trying to log in as success');
      return `Unkown Response: ${signInStep}`;
    }
    // @ts-expect-error no error type
  } catch (e: { name: string }) {
    switch (e.name) {
      case 'EmptySignInUsername':
        showErrorPopup('Email Field Is Empty');
        break;
      case 'EmptySignInPassword':
        showErrorPopup('Password Field Is Empty');
        break;
      case 'NotAuthorizedException':
        showErrorPopup('Incorrect Email or Password');
        break;
      default:
        logUnkownIssue(e.name, 'when trying to log in as an error');
        showErrorPopup('Unknown Error Occurred with code ' + e.name);
    }
  }
  return true;
}

export async function logOut() {
  log(`Signing user out.`);
  await signOut();
  goto(LOGIN_PATH);
}

export async function setUserPassword(creds: LoginData) {
  try {
    let {
      nextStep: { signInStep },
      isSignedIn,
    } = await confirmSignIn({
      challengeResponse: creds.password ?? '',
      options: { userAttributes: { name: creds.name ?? '' } },
    });
    logSuccess(`Logged in with status: ${isSignedIn} and next step ${signInStep}`);
    await makeApiCall('/new_user', 'POST', { email: creds.email || '' });

    if (signInStep === 'DONE') goto(APP_HOME_PATH);
    else {
      logUnkownIssue(signInStep, 'when trying to set password on log in as success');
      return `Unkown Response: ${signInStep}`;
    }

    // @ts-expect-error no error type
  } catch (e: { name: string }) {
    logError(e);
    switch (e.name) {
      case 'InvalidParameterException':
        showErrorPopup('Name Cannot Be Empty');
        break;
      case 'EmptyChallengeResponse':
      case 'InvalidPasswordException':
        showErrorPopup(
          'Password must be >7 characters with >1 number, special character, uppercase, and lowercase letter'
        );
        break;
      default:
        logUnkownIssue(e.name, 'when trying to set password on log in as an error');
        showErrorPopup('Unknown Error Occurred with code ' + e.name);
    }
  }
}

export async function fetchName() {
  // let { name } = await fetchUserAttributes();
  let name = 'Ameen';

  log('Retrieved Users Name: ' + name);
  setName(name ?? '');
}

interface Props {
  children?: ReactNode;
}
export default function AuthManager({ children }: Props) {
  let authConfig: ResourcesConfig['Auth'] = {
    Cognito: {
      userPoolId: String(process.env.NEXT_PUBLIC_USER_POOL_ID),
      userPoolClientId: String(process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID),
    },
  };
  Amplify.configure({ Auth: authConfig }, { ssr: true });

  const layout = useSelectedLayoutSegment();
  const [authResolved, setAuthResolved] = useState(true);

  useEffect(() => {
    isAuthenticated().then((authenticated) => {
      if (['(auth)', null].includes(layout)) goto(APP_HOME_PATH);
    });
  }, []);

  return <>{authResolved && children}</>;
}
