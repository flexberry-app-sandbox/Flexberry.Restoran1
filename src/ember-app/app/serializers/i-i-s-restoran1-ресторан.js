import { Serializer as РесторанSerializer } from
  '../mixins/regenerated/serializers/i-i-s-restoran1-ресторан';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РесторанSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
