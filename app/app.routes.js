"use strict";
var router_1 = require('@angular/router');
var card_list_component_1 = require('./card-list.component');
var board_component_1 = require("./board.component");
var card_detail_component_1 = require("./card-detail.component");
var routes = [
    {
        path: 'card-list',
        component: card_list_component_1.CardListComponent
    },
    {
        path: 'board',
        component: board_component_1.BoardComponent
    },
    {
        path: '',
        redirectTo: '/card-list',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: card_detail_component_1.CardDetailComponent
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map