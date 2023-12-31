import {
  defineNamespace,
  defineProjections,
  Model as СоставБлюдаMixin
} from '../mixins/regenerated/models/i-i-s-restoran1-состав-блюда';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СоставБлюдаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
