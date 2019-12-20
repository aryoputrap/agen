import * as AUTH from './authConstant';

const authInitialState = {
  otpToken: '',
  otpPhone: '',
  createIDToken: '',
  loginError: null,
  registerError: null,
  referalError: null,
  otpError: null,
  otpResendError: null,
  createIDError: null,
  action: '',
};

export const authReducers = (state = authInitialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.LOGIN_FAILED:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.REFERAL:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.REFERAL_SUCCESS:
      return {
        ...state,
        otpToken: action.payload.otpToken || null,
        otpPhone: action.payload.otpPhone || null,
        referalError: null,
        action: action.type,
      };
    case AUTH.REFERAL_FAILED:
      return {
        ...state,
        otpPhone: null,
        referalError: action.payload,
        action: action.type,
      };
    case AUTH.REGISTER:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.REGISTER_SUCCESS:
      return {
        ...state,
        otpToken: action.payload.otpToken || null,
        otpPhone: action.payload.otpPhone || null,
        action: action.type,
      };
    case AUTH.REGISTER_FAILED:
      return {
        ...state,
        otpPhone: null,
        registerError: action.payload,
        action: action.type,
      };
    case AUTH.OTP:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.OTP_SUCCESS:
      return {
        ...state,
        createIDToken: action.payload.createIDToken || null,
        otpError: null,
        action: action.type,
      };
    case AUTH.OTP_FAILED:
      return {
        ...state,
        otpError: action.payload,
        action: action.type,
      };
    case AUTH.OTPRESEND:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.OTPRESEND_SUCCESS:
      return {
        ...state,
        otpToken: action.payload.otpToken || null,
        otpResendError: null,
        action: action.type,
      };
    case AUTH.OTPRESEND_FAILED:
      return {
        ...state,
        otpResendError: action.payload,
        action: action.type,
      };
    case AUTH.CREATEID:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.CREATEID_SUCCESS:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.CREATEID_FAILED:
      return {
        ...state,
        createIDError: action.payload,
        action: action.type,
      };
    case AUTH.CREATEID_SET_TOKEN:
      return {
        ...state,
        createIDToken: action.payload,
        action: action.type,
      };
    case AUTH.LOGOUT:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.LOGOUT_SUCCESS:
      return {
        ...state,
        action: action.type,
      };
    case AUTH.LOGOUT_FAILED:
      return {
        ...state,
        action: action.type,
      };
    default:
      return state;
  }
};

const sessionInitialState = {
  userData: {
    id: '',
    name: '',
    token: '',
    refreshToken: '',
  },
  isSeeLanding: 0,
  lang: 'en-EN',
  // deviceId: null,
  action: '',
};

export const sessionReducers = (state = sessionInitialState, action) => {
  switch (action.type) {
    case AUTH.SET_AUTH:
      return {
        ...state,
        userData: action.payload.userData,
        action: action.type,
      };
    case AUTH.CLEAR_AUTH:
      return {
        ...state,
        userData: {
          id: '',
          name: '',
          email: '',
          token: '',
          refreshToken: '',
        },
        action: action.type,
      };
    // case AUTH.SET_DEVICE_ID:
    //   return {
    //     ...state,
    //     deviceId: action.payload,
    //     action: action.type,
    //   };
    case AUTH.SET_SEE_LANDING:
      return {
        ...state,
        isSeeLanding: 1,
        action: action.type,
      };
    default:
      return state;
  }
};
