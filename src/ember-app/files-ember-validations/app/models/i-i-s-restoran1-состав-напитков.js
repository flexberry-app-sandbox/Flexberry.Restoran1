import {
  defineNamespace,
  defineProjections,
  Model as СоставНапитковMixin
} from '../mixins/regenerated/models/i-i-s-restoran1-состав-напитков';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СоставНапитковMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
