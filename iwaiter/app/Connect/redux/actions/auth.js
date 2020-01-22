export const login = (data) => {
  console.log('login: ', data)
  return {
    type: 'LOGIN',
    action: {
      ...data
    }
  };
};


export const logout = () => {
  console.log('LOGOUT: ')
  return {
    type: 'LOGOUT'
  };
};