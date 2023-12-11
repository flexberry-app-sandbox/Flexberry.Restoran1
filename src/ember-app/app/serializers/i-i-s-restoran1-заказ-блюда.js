import { Serializer as ЗаказБлюдаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-restoran1-заказ-блюда';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаказБлюдаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
