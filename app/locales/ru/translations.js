import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Disney',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Disney',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Disney',
          title: 'Disney'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        disney: {
          caption: 'Disney',
          title: 'Disney',
          'i-i-s-disney-ticket-l': {
            caption: 'Ticket',
            title: '',

          },
          'i-i-s-disney-person-l': {
            caption: 'Person',
            title: '',

          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-disney-person-l': IISDisneyPersonLForm,
    'i-i-s-disney-ticket-l': IISDisneyTicketLForm,
    'i-i-s-disney-person-e': IISDisneyPersonEForm,
    'i-i-s-disney-ticket-e': IISDisneyTicketEForm,
  },

});

export default translations;
