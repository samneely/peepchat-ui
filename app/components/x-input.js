import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['input-field'],
  type: 'text',

  _errorMessages: computed('errors.[]', function() {
    return (this.get('errors') || []).join(', ');
  })
});
