import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISDisneyPersonLForm from './forms/i-i-s-disney-person-l';
import IISDisneyTicketLForm from './forms/i-i-s-disney-ticket-l';
import IISDisneyPersonEForm from './forms/i-i-s-disney-person-e';
import IISDisneyTicketEForm from './forms/i-i-s-disney-ticket-e';
import IISDisneyPersonModel from './models/i-i-s-disney-person';
import IISDisneyTicketModel from './models/i-i-s-disney-ticket';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'i-i-s-disney-person': IISDisneyPersonModel,
    'i-i-s-disney-ticket': IISDisneyTicketModel,
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        disney: {
          caption: 'disney',
          title: 'disney',
          'i-i-s-disney-ticket-l': {
            caption: 'i-i-s-disney-ticket-l',
            title: 'i-i-s-disney-ticket-l',

          },
          'i-i-s-disney-person-l': {
            caption: 'i-i-s-disney-person-l',
            title: 'i-i-s-disney-person-l',

          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-disney-person-l': IISDisneyPersonLForm,
    'i-i-s-disney-ticket-l': IISDisneyTicketLForm,
    'i-i-s-disney-person-e': IISDisneyPersonEForm,
    'i-i-s-disney-ticket-e': IISDisneyTicketEForm,
  },

});

export default translations;
