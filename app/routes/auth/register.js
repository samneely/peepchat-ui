import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doRegister() {
      alert('register attempted');
    }
  },

  model() {
    return this.store.createRecord('user');
  }
});
