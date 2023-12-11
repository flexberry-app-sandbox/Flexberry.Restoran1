import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодГостя: DS.attr('number'),
  телефон: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  кодГостя: {
    descriptionKey: 'models.i-i-s-restoran1-гости.validations.кодГостя.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-restoran1-гости.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-restoran1-гости.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГостиE', 'i-i-s-restoran1-гости', {
    кодГостя: attr('Код гостя', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    телефон: attr('Телефон', { index: 2 })
  });

  modelClass.defineProjection('ГостиL', 'i-i-s-restoran1-гости', {
    кодГостя: attr('Код гостя', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    телефон: attr('Телефон', { index: 2 })
  });
};
