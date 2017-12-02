import { Model as PersonMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-disney-person';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, PersonMixin, {

});
defineProjections(Model);
export default Model;
