import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISRestoran1БлюдаLForm from './forms/i-i-s-restoran1-блюда-l';
import IISRestoran1БроньLForm from './forms/i-i-s-restoran1-бронь-l';
import IISRestoran1ГостиLForm from './forms/i-i-s-restoran1-гости-l';
import IISRestoran1ДолжностьLForm from './forms/i-i-s-restoran1-должность-l';
import IISRestoran1НапиткиLForm from './forms/i-i-s-restoran1-напитки-l';
import IISRestoran1ПродуктыLForm from './forms/i-i-s-restoran1-продукты-l';
import IISRestoran1РесторанLForm from './forms/i-i-s-restoran1-ресторан-l';
import IISRestoran1СотрудникиLForm from './forms/i-i-s-restoran1-сотрудники-l';
import IISRestoran1СтолLForm from './forms/i-i-s-restoran1-стол-l';
import IISRestoran1БлюдаEForm from './forms/i-i-s-restoran1-блюда-e';
import IISRestoran1БроньEForm from './forms/i-i-s-restoran1-бронь-e';
import IISRestoran1ГостиEForm from './forms/i-i-s-restoran1-гости-e';
import IISRestoran1ДолжностьEForm from './forms/i-i-s-restoran1-должность-e';
import IISRestoran1НапиткиEForm from './forms/i-i-s-restoran1-напитки-e';
import IISRestoran1ПродуктыEForm from './forms/i-i-s-restoran1-продукты-e';
import IISRestoran1РесторанEForm from './forms/i-i-s-restoran1-ресторан-e';
import IISRestoran1СотрудникиEForm from './forms/i-i-s-restoran1-сотрудники-e';
import IISRestoran1СтолEForm from './forms/i-i-s-restoran1-стол-e';
import IISRestoran1БлюдаModel from './models/i-i-s-restoran1-блюда';
import IISRestoran1БроньModel from './models/i-i-s-restoran1-бронь';
import IISRestoran1ГостиModel from './models/i-i-s-restoran1-гости';
import IISRestoran1ДолжностьModel from './models/i-i-s-restoran1-должность';
import IISRestoran1ЗаказБлюдаModel from './models/i-i-s-restoran1-заказ-блюда';
import IISRestoran1ЗаказНапитковModel from './models/i-i-s-restoran1-заказ-напитков';
import IISRestoran1ЗаписьModel from './models/i-i-s-restoran1-запись';
import IISRestoran1НапиткиModel from './models/i-i-s-restoran1-напитки';
import IISRestoran1ПродуктыModel from './models/i-i-s-restoran1-продукты';
import IISRestoran1РесторанModel from './models/i-i-s-restoran1-ресторан';
import IISRestoran1СоставБлюдаModel from './models/i-i-s-restoran1-состав-блюда';
import IISRestoran1СоставНапитковModel from './models/i-i-s-restoran1-состав-напитков';
import IISRestoran1СотрудникиModel from './models/i-i-s-restoran1-сотрудники';
import IISRestoran1СтолModel from './models/i-i-s-restoran1-стол';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-restoran1-блюда': IISRestoran1БлюдаModel,
    'i-i-s-restoran1-бронь': IISRestoran1БроньModel,
    'i-i-s-restoran1-гости': IISRestoran1ГостиModel,
    'i-i-s-restoran1-должность': IISRestoran1ДолжностьModel,
    'i-i-s-restoran1-заказ-блюда': IISRestoran1ЗаказБлюдаModel,
    'i-i-s-restoran1-заказ-напитков': IISRestoran1ЗаказНапитковModel,
    'i-i-s-restoran1-запись': IISRestoran1ЗаписьModel,
    'i-i-s-restoran1-напитки': IISRestoran1НапиткиModel,
    'i-i-s-restoran1-продукты': IISRestoran1ПродуктыModel,
    'i-i-s-restoran1-ресторан': IISRestoran1РесторанModel,
    'i-i-s-restoran1-состав-блюда': IISRestoran1СоставБлюдаModel,
    'i-i-s-restoran1-состав-напитков': IISRestoran1СоставНапитковModel,
    'i-i-s-restoran1-сотрудники': IISRestoran1СотрудникиModel,
    'i-i-s-restoran1-стол': IISRestoran1СтолModel
  },

  'application-name': 'Restoran1',

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
        'application-name': 'Restoran1',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Restoran1',
          title: 'Restoran1'
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
        бронь: {
          caption: 'Бронь',
          title: 'Бронь',
          'i-i-s-restoran1-бронь-l': {
            caption: 'Бронь',
            title: ''
          }
        },
        стол: {
          caption: 'Стол',
          title: 'Стол',
          'i-i-s-restoran1-стол-l': {
            caption: 'Стол',
            title: 'Стол'
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-restoran1-сотрудники-l': {
            caption: 'Сотрудники',
            title: 'Сотрудники'
          },
          'i-i-s-restoran1-должность-l': {
            caption: 'Должность',
            title: 'Должность'
          }
        },
        меню: {
          caption: 'Меню',
          title: 'Меню',
          'i-i-s-restoran1-напитки-l': {
            caption: 'Напитки',
            title: 'Напитки'
          },
          'i-i-s-restoran1-блюда-l': {
            caption: 'Блюда',
            title: 'Блюда'
          }
        },
        ресторан: {
          caption: 'Ресторан',
          title: 'Ресторан',
          'i-i-s-restoran1-ресторан-l': {
            caption: 'Ресторан',
            title: 'Ресторан'
          }
        },
        продукты: {
          caption: 'Продукты',
          title: 'Продукты',
          'i-i-s-restoran1-продукты-l': {
            caption: 'Продукты',
            title: 'Продукты'
          }
        }
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
    'i-i-s-restoran1-блюда-l': IISRestoran1БлюдаLForm,
    'i-i-s-restoran1-бронь-l': IISRestoran1БроньLForm,
    'i-i-s-restoran1-гости-l': IISRestoran1ГостиLForm,
    'i-i-s-restoran1-должность-l': IISRestoran1ДолжностьLForm,
    'i-i-s-restoran1-напитки-l': IISRestoran1НапиткиLForm,
    'i-i-s-restoran1-продукты-l': IISRestoran1ПродуктыLForm,
    'i-i-s-restoran1-ресторан-l': IISRestoran1РесторанLForm,
    'i-i-s-restoran1-сотрудники-l': IISRestoran1СотрудникиLForm,
    'i-i-s-restoran1-стол-l': IISRestoran1СтолLForm,
    'i-i-s-restoran1-блюда-e': IISRestoran1БлюдаEForm,
    'i-i-s-restoran1-бронь-e': IISRestoran1БроньEForm,
    'i-i-s-restoran1-гости-e': IISRestoran1ГостиEForm,
    'i-i-s-restoran1-должность-e': IISRestoran1ДолжностьEForm,
    'i-i-s-restoran1-напитки-e': IISRestoran1НапиткиEForm,
    'i-i-s-restoran1-продукты-e': IISRestoran1ПродуктыEForm,
    'i-i-s-restoran1-ресторан-e': IISRestoran1РесторанEForm,
    'i-i-s-restoran1-сотрудники-e': IISRestoran1СотрудникиEForm,
    'i-i-s-restoran1-стол-e': IISRestoran1СтолEForm
  },

});

export default translations;
