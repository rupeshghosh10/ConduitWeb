export const saveUser = (response, setUser) => {
  const user = { ...response, isSignedIn: true };
  localStorage.setItem('userState', JSON.stringify(user));
  setUser(user);
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem('userState'));
}

export const removeUser = setUser => {
  localStorage.removeItem('userState');
  setUser({
    email: '',
    username: '',
    token: '',
    isSignedIn: false
  });
}
