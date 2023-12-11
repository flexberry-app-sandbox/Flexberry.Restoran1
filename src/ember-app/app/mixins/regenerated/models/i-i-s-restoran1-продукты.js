import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодПродукта: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  кодПродукта: {
    descriptionKey: 'models.i-i-s-restoran1-продукты.validations.кодПродукта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-restoran1-продукты.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПродуктыE', 'i-i-s-restoran1-продукты', {
    кодПродукта: attr('Код продукта', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });

  modelClass.defineProjection('ПродуктыL', 'i-i-s-restoran1-продукты', {
    кодПродукта: attr('Код продукта', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });
};
