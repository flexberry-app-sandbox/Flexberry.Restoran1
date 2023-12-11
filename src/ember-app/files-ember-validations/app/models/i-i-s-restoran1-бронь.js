import {
  defineNamespace,
  defineProjections,
  Model as БроньMixin
} from '../mixins/regenerated/models/i-i-s-restoran1-бронь';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БроньMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
