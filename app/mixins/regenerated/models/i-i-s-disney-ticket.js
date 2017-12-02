import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  number: DS.attr('number'),
  person: DS.belongsTo('i-i-s-disney-person', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});
export let defineProjections = function (modelClass) {
  modelClass.defineProjection('TicketE', 'i-i-s-disney-ticket', {
    number: Projection.attr('Number'),
    person: Projection.belongsTo('i-i-s-disney-person', 'Person', {
      name: Projection.attr('Name')
    })
  });
  modelClass.defineProjection('TicketL', 'i-i-s-disney-ticket', {
    number: Projection.attr('Number'),
    person: Projection.belongsTo('i-i-s-disney-person', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true })
  });
};
