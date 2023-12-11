import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  датаЗаписи: DS.attr('date'),
  гости: DS.belongsTo('i-i-s-restoran1-гости', { inverse: null, async: false }),
  бронь: DS.belongsTo('i-i-s-restoran1-бронь', { inverse: 'запись', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-restoran1-запись.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаЗаписи: {
    descriptionKey: 'models.i-i-s-restoran1-запись.validations.датаЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  гости: {
    descriptionKey: 'models.i-i-s-restoran1-запись.validations.гости.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  бронь: {
    descriptionKey: 'models.i-i-s-restoran1-запись.validations.бронь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьE', 'i-i-s-restoran1-запись', {
    датаЗаписи: attr('Дата записи', { index: 0 }),
    время: attr('Время', { index: 1 }),
    гости: belongsTo('i-i-s-restoran1-гости', 'Гости', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' })
  });
};
