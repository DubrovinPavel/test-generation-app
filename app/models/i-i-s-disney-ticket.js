import { Model as TicketMixin, defineProjections } from
  '../mixins/regenerated/models/i-i-s-disney-ticket';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, TicketMixin, {

});
defineProjections(Model);
export default Model;
