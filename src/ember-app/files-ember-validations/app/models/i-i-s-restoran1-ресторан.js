import {
  defineNamespace,
  defineProjections,
  Model as РесторанMixin
} from '../mixins/regenerated/models/i-i-s-restoran1-ресторан';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РесторанMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
