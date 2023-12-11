import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СтолMixin
} from '../mixins/regenerated/models/i-i-s-restoran1-стол';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СтолMixin, Validations, {
});

defineProjections(Model);

export default Model;
