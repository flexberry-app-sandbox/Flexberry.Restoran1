import { Serializer as БлюдаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-restoran1-блюда';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БлюдаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
