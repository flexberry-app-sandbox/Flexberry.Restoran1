import {
  defineNamespace,
  defineProjections,
  Model as ЗаказБлюдаMixin
} from '../mixins/regenerated/models/i-i-s-restoran1-заказ-блюда';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаказБлюдаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
