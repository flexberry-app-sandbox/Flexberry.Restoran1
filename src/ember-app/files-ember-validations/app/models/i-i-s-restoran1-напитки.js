import {
  defineNamespace,
  defineProjections,
  Model as НапиткиMixin
} from '../mixins/regenerated/models/i-i-s-restoran1-напитки';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НапиткиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
