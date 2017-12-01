import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('person', 'Persons');
inflector.irregular('ticket', 'Tickets');

export default {};
