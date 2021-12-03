import {MutationTree} from 'vuex';
import {ExampleStateInterface} from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  setLoginState(state, value: boolean) {
    state.isLoginState = value;
  },
};

export default mutation;
