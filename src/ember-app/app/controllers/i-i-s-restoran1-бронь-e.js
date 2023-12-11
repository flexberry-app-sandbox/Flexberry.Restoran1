import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-restoran1-бронь-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-restoran1-запись+гости':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фИО',
            required: true,
            relationName: 'гости',
            projection: 'ГостиL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-restoran1-заказ-блюда+блюда':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'блюда',
            projection: 'БлюдаL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-restoran1-заказ-напитков+напитки':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'напитки',
            projection: 'НапиткиL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
