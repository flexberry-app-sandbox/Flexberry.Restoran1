import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      ресторан: { serialize: 'odata-id', deserialize: 'records' },
      сотрудники: { serialize: 'odata-id', deserialize: 'records' },
      стол: { serialize: 'odata-id', deserialize: 'records' },
      запись: { serialize: false, deserialize: 'records' },
      заказБлюда: { serialize: false, deserialize: 'records' },
      заказНапитков: { serialize: false, deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
