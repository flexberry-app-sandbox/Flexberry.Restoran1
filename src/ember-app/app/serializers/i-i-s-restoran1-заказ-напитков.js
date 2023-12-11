import { Serializer as ЗаказНапитковSerializer } from
  '../mixins/regenerated/serializers/i-i-s-restoran1-заказ-напитков';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаказНапитковSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
