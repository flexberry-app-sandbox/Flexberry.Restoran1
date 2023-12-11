import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодБрони: DS.attr('number'),
  типОплаты: DS.attr('i-i-s-restoran1-тип-оплаты'),
  ресторан: DS.belongsTo('i-i-s-restoran1-ресторан', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-restoran1-сотрудники', { inverse: null, async: false }),
  стол: DS.belongsTo('i-i-s-restoran1-стол', { inverse: null, async: false }),
  запись: DS.hasMany('i-i-s-restoran1-запись', { inverse: 'бронь', async: false }),
  заказБлюда: DS.hasMany('i-i-s-restoran1-заказ-блюда', { inverse: 'бронь', async: false }),
  заказНапитков: DS.hasMany('i-i-s-restoran1-заказ-напитков', { inverse: 'бронь', async: false })
});

export let ValidationRules = {
  кодБрони: {
    descriptionKey: 'models.i-i-s-restoran1-бронь.validations.кодБрони.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типОплаты: {
    descriptionKey: 'models.i-i-s-restoran1-бронь.validations.типОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ресторан: {
    descriptionKey: 'models.i-i-s-restoran1-бронь.validations.ресторан.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-restoran1-бронь.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  стол: {
    descriptionKey: 'models.i-i-s-restoran1-бронь.validations.стол.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  запись: {
    descriptionKey: 'models.i-i-s-restoran1-бронь.validations.запись.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  заказБлюда: {
    descriptionKey: 'models.i-i-s-restoran1-бронь.validations.заказБлюда.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  заказНапитков: {
    descriptionKey: 'models.i-i-s-restoran1-бронь.validations.заказНапитков.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БроньE', 'i-i-s-restoran1-бронь', {
    кодБрони: attr('Код брони', { index: 0 }),
    типОплаты: attr('Тип оплаты', { index: 1 }),
    стол: belongsTo('i-i-s-restoran1-стол', 'Стол', {
      номерСтола: attr('Номер стола', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'номерСтола' }),
    сотрудники: belongsTo('i-i-s-restoran1-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' }),
    ресторан: belongsTo('i-i-s-restoran1-ресторан', 'Ресторан', {
      наименование: attr('Наименование', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' }),
    запись: hasMany('i-i-s-restoran1-запись', 'Запись', {
      датаЗаписи: attr('Дата записи', { index: 0 }),
      время: attr('Время', { index: 1 }),
      гости: belongsTo('i-i-s-restoran1-гости', 'Гости', {
        фИО: attr('ФИО', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'фИО' })
    }),
    заказБлюда: hasMany('i-i-s-restoran1-заказ-блюда', 'Заказ блюда', {
      комментарий: attr('Комментарий', { index: 0 }),
      блюда: belongsTo('i-i-s-restoran1-блюда', 'Блюда', {
        наименование: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'наименование' })
    }),
    заказНапитков: hasMany('i-i-s-restoran1-заказ-напитков', 'Заказ напитков', {
      комментраий: attr('Комментраий', { index: 0 }),
      напитки: belongsTo('i-i-s-restoran1-напитки', 'Напитки', {
        наименование: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('БроньL', 'i-i-s-restoran1-бронь', {
    кодБрони: attr('Код брони', { index: 0 }),
    типОплаты: attr('Тип оплаты', { index: 1 }),
    стол: belongsTo('i-i-s-restoran1-стол', 'Номер стола', {
      номерСтола: attr('Номер стола', { index: 2 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-restoran1-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true }),
    ресторан: belongsTo('i-i-s-restoran1-ресторан', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
