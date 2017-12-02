import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-disney-person-l');
  this.route('i-i-s-disney-person-e',
  { path: 'i-i-s-disney-person-e/:id' });
  this.route('i-i-s-disney-person-e.new',
  { path: 'i-i-s-disney-person-e/new' });
  this.route('i-i-s-disney-ticket-l');
  this.route('i-i-s-disney-ticket-e',
  { path: 'i-i-s-disney-ticket-e/:id' });
  this.route('i-i-s-disney-ticket-e.new',
  { path: 'i-i-s-disney-ticket-e/new' });
});

export default Router;
