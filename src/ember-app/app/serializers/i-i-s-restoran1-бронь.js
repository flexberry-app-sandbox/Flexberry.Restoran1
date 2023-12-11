import { Serializer as БроньSerializer } from
  '../mixins/regenerated/serializers/i-i-s-restoran1-бронь';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БроньSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
