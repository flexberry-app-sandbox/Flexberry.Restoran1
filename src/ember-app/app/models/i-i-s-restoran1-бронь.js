import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as БроньMixin
} from '../mixins/regenerated/models/i-i-s-restoran1-бронь';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(БроньMixin, Validations, {
});

defineProjections(Model);

export default Model;
