import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { ExampleStateInterface } from './state';
import getters from './getters';
import mutations from './mutations';

const userAuth: Module<ExampleStateInterface, StateInterface> = {
  namespaced: true,
  getters,
  mutations,
  state
};

export default userAuth;
