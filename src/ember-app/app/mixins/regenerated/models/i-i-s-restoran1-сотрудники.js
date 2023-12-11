import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('date'),
  кодСотрудника: DS.attr('number'),
  фИО: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-restoran1-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-restoran1-сотрудники.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодСотрудника: {
    descriptionKey: 'models.i-i-s-restoran1-сотрудники.validations.кодСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-restoran1-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-restoran1-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-restoran1-сотрудники', {
    кодСотрудника: attr('Код сотрудника', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    датаРождения: attr('Дата рождения', { index: 2 }),
    должность: belongsTo('i-i-s-restoran1-должность', 'Должность', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-restoran1-сотрудники', {
    кодСотрудника: attr('Код сотрудника', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    датаРождения: attr('Дата рождения', { index: 2 }),
    должность: belongsTo('i-i-s-restoran1-должность', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
