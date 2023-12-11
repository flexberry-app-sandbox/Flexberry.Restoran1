import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  кодРест: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-restoran1-ресторан.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодРест: {
    descriptionKey: 'models.i-i-s-restoran1-ресторан.validations.кодРест.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-restoran1-ресторан.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РесторанE', 'i-i-s-restoran1-ресторан', {
    кодРест: attr('Код ресторана', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    адрес: attr('Адрес', { index: 2 })
  });

  modelClass.defineProjection('РесторанL', 'i-i-s-restoran1-ресторан', {
    кодРест: attr('Код ресторана', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    адрес: attr('Адрес', { index: 2 })
  });
};
