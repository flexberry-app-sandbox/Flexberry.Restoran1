import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колвоМест: DS.attr('number'),
  номерСтола: DS.attr('number'),
  статус: DS.attr('i-i-s-restoran1-статусы')
});

export let ValidationRules = {
  колвоМест: {
    descriptionKey: 'models.i-i-s-restoran1-стол.validations.колвоМест.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерСтола: {
    descriptionKey: 'models.i-i-s-restoran1-стол.validations.номерСтола.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-restoran1-стол.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтолE', 'i-i-s-restoran1-стол', {
    номерСтола: attr('Номер стола', { index: 0 }),
    колвоМест: attr('Колво мест', { index: 1 }),
    статус: attr('Статус', { index: 2 })
  });

  modelClass.defineProjection('СтолL', 'i-i-s-restoran1-стол', {
    номерСтола: attr('Номер стола', { index: 0 }),
    колвоМест: attr('Колво мест', { index: 1 }),
    статус: attr('Статус', { index: 2 })
  });
};
