import {
  defineNamespace,
  defineProjections,
  Model as СтолMixin
} from '../mixins/regenerated/models/i-i-s-restoran1-стол';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СтолMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
