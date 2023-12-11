import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.бронь.caption'),
          title: i18n.t('forms.application.sitemap.бронь.title'),
          children: [{
            link: 'i-i-s-restoran1-бронь-l',
            caption: i18n.t('forms.application.sitemap.бронь.i-i-s-restoran1-бронь-l.caption'),
            title: i18n.t('forms.application.sitemap.бронь.i-i-s-restoran1-бронь-l.title'),
            icon: 'folder',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.стол.caption'),
          title: i18n.t('forms.application.sitemap.стол.title'),
          children: [{
            link: 'i-i-s-restoran1-стол-l',
            caption: i18n.t('forms.application.sitemap.стол.i-i-s-restoran1-стол-l.caption'),
            title: i18n.t('forms.application.sitemap.стол.i-i-s-restoran1-стол-l.title'),
            icon: 'file',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-restoran1-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-restoran1-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-restoran1-сотрудники-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-restoran1-должность-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-restoran1-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-restoran1-должность-l.title'),
            icon: 'edit',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.меню.caption'),
          title: i18n.t('forms.application.sitemap.меню.title'),
          children: [{
            link: 'i-i-s-restoran1-напитки-l',
            caption: i18n.t('forms.application.sitemap.меню.i-i-s-restoran1-напитки-l.caption'),
            title: i18n.t('forms.application.sitemap.меню.i-i-s-restoran1-напитки-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-restoran1-блюда-l',
            caption: i18n.t('forms.application.sitemap.меню.i-i-s-restoran1-блюда-l.caption'),
            title: i18n.t('forms.application.sitemap.меню.i-i-s-restoran1-блюда-l.title'),
            icon: 'list',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.ресторан.caption'),
          title: i18n.t('forms.application.sitemap.ресторан.title'),
          children: [{
            link: 'i-i-s-restoran1-ресторан-l',
            caption: i18n.t('forms.application.sitemap.ресторан.i-i-s-restoran1-ресторан-l.caption'),
            title: i18n.t('forms.application.sitemap.ресторан.i-i-s-restoran1-ресторан-l.title'),
            icon: 'calendar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.продукты.caption'),
          title: i18n.t('forms.application.sitemap.продукты.title'),
          children: [{
            link: 'i-i-s-restoran1-продукты-l',
            caption: i18n.t('forms.application.sitemap.продукты.i-i-s-restoran1-продукты-l.caption'),
            title: i18n.t('forms.application.sitemap.продукты.i-i-s-restoran1-продукты-l.title'),
            icon: 'table',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.гость.caption'),
          title: i18n.t('forms.application.sitemap.гость.title'),
          children: [{
            link: 'i-i-s-restoran1-гости-l',
            caption: i18n.t('forms.application.sitemap.гость.i-i-s-restoran1-гости-l.caption'),
            title: i18n.t('forms.application.sitemap.гость.i-i-s-restoran1-гости-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})