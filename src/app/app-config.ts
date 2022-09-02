import { MsalGuardConfiguration, MsalInterceptorConfiguration, ProtectedResourceScopes } from "@azure/msal-angular";
import { InteractionType } from "@azure/msal-browser";
import { Configuration } from "msal";


export const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_friend-music-client"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://clossman.b2clogin.com/clossman.onmicrosoft.com/B2C_1_friend-music-client"
        }
    }
}

export const apiConfig: { b2cScopes: string[], apiEndpoint: string } = {
    b2cScopes: ["https://clossman.onmicrosoft.com/friend-music-api/api.read"],
    apiEndpoint: "https://clossman.onmicrosoft.com/friend-music-api/api"
}


export const msalConfig: Configuration = {
    auth: {
       clientId: "9a4cc7d0-25f1-402c-945f-65f876d69c7a",
       authority: b2cPolicies.authorities.signUpSignIn.authority,
       redirectUri: "https://friendmusic.clossman.co",
       postLogoutRedirectUri: "https://friendmusic.clossman.co",
       navigateToLoginRequestUrl: true,
       validateAuthority: true,
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: isIE, // set to true for IE 11
    },
}


export const loginRequest: { scopes: string[] } = {
    scopes: ["openid", "profile"]
}

export const tokenRequest: { scopes: string[] } = {
    scopes: apiConfig.b2cScopes
}

export const protectedResourcesMap: [string, string[]][] = [
    [apiConfig.apiEndpoint, apiConfig.b2cScopes]
];

export const msalAngularConfig: {} = {
    popUp: !isIE,
    consentScopes: [
        ...loginRequest.scopes,
        ...tokenRequest.scopes,
    ],
    unprotectedResources: [],
    protectedResourcesMap,
    extraQueryParameters: {}
}


export const guardConfig: MsalGuardConfiguration = {
    interactionType: InteractionType.Redirect
}

export const interceptConfig: MsalInterceptorConfiguration = {
    interactionType: InteractionType.Redirect,
    protectedResourceMap: new Map([
        ['https://graph.microsoft.com/v1.0/me', ['user.read']]
    ])
}