import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-restoran1-блюда-l');
  this.route('i-i-s-restoran1-блюда-e',
  { path: 'i-i-s-restoran1-блюда-e/:id' });
  this.route('i-i-s-restoran1-блюда-e.new',
  { path: 'i-i-s-restoran1-блюда-e/new' });
  this.route('i-i-s-restoran1-бронь-l');
  this.route('i-i-s-restoran1-бронь-e',
  { path: 'i-i-s-restoran1-бронь-e/:id' });
  this.route('i-i-s-restoran1-бронь-e.new',
  { path: 'i-i-s-restoran1-бронь-e/new' });
  this.route('i-i-s-restoran1-гости-l');
  this.route('i-i-s-restoran1-гости-e',
  { path: 'i-i-s-restoran1-гости-e/:id' });
  this.route('i-i-s-restoran1-гости-e.new',
  { path: 'i-i-s-restoran1-гости-e/new' });
  this.route('i-i-s-restoran1-должность-l');
  this.route('i-i-s-restoran1-должность-e',
  { path: 'i-i-s-restoran1-должность-e/:id' });
  this.route('i-i-s-restoran1-должность-e.new',
  { path: 'i-i-s-restoran1-должность-e/new' });
  this.route('i-i-s-restoran1-напитки-l');
  this.route('i-i-s-restoran1-напитки-e',
  { path: 'i-i-s-restoran1-напитки-e/:id' });
  this.route('i-i-s-restoran1-напитки-e.new',
  { path: 'i-i-s-restoran1-напитки-e/new' });
  this.route('i-i-s-restoran1-продукты-l');
  this.route('i-i-s-restoran1-продукты-e',
  { path: 'i-i-s-restoran1-продукты-e/:id' });
  this.route('i-i-s-restoran1-продукты-e.new',
  { path: 'i-i-s-restoran1-продукты-e/new' });
  this.route('i-i-s-restoran1-ресторан-l');
  this.route('i-i-s-restoran1-ресторан-e',
  { path: 'i-i-s-restoran1-ресторан-e/:id' });
  this.route('i-i-s-restoran1-ресторан-e.new',
  { path: 'i-i-s-restoran1-ресторан-e/new' });
  this.route('i-i-s-restoran1-сотрудники-l');
  this.route('i-i-s-restoran1-сотрудники-e',
  { path: 'i-i-s-restoran1-сотрудники-e/:id' });
  this.route('i-i-s-restoran1-сотрудники-e.new',
  { path: 'i-i-s-restoran1-сотрудники-e/new' });
  this.route('i-i-s-restoran1-стол-l');
  this.route('i-i-s-restoran1-стол-e',
  { path: 'i-i-s-restoran1-стол-e/:id' });
  this.route('i-i-s-restoran1-стол-e.new',
  { path: 'i-i-s-restoran1-стол-e/new' });
});

export default Router;
