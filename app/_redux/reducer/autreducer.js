// import * as AUTH from '../../redux/auth/authConstant';

const authLogin = {
  id: null,
  username: '',
  password: '',
  versi: '1.0.0',
  latitude: '',
  longitude: '',
  accuracy: '4',
  action: '',
};

export const authReducers = (state = authLogin, action) => {
  switch (action.type) {
    case 'LOGIN':
      return state;
  }
};
