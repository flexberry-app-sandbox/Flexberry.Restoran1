import { Serializer as СтолSerializer } from
  '../mixins/regenerated/serializers/i-i-s-restoran1-стол';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СтолSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
