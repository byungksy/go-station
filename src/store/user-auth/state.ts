export interface ExampleStateInterface {
  isLoginState: boolean;
  userName: string;
}

function state(): ExampleStateInterface {
  return {
    isLoginState: false,
    userName: '',
  };
}

export default state;
