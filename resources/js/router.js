import Vue from "vue";
import Router from "vue-router";

import LandingPage from "./views/mobile/LandingPage.vue";
import AppManager from "./views/mobile/AppManager.vue";

Vue.use(Router);

const RestaurantPage = () => import('./views/mobile/RestaurantPage.vue');
const MobileCart = () => import('./views/mobile/Cart.vue');
const SetLocation = () => import('./views/mobile/SetLocation.vue');
const SetLocationManual = () => import('./views/mobile/SetLocationManual.vue');
const ConfirmGpsLocation = () => import('./views/mobile/ConfirmGpsLocation.vue');
const AddMobileNumber = () => import('./views/mobile/AddMobileNumber.vue');
const Payment = () => import("./views/mobile/Payment.vue");
const ConfirmOrder = () => import("./views/mobile/ConfirmOrder.vue");
const Account = () => import("./views/mobile/Account.vue");
const Orders = () => import("./views/mobile/Orders.vue");
const Search = () => import("./views/mobile/Search.vue");
const DiscountCoupons = () => import("./views/mobile/DiscountCoupons.vue");

import TestComp from "./views/TestComp.vue";

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/spa/test",
            component: () => import('./components/Test.vue')
        },
        {
            path: "/app/manager",
            component: AppManager
        },
        {
            path: "/app/set_location",
            component: SetLocation
        },
        {
            path: "/app/set_location/manual",
            component: SetLocationManual
        },
        {
            path: "/app/confirm_gps_location",
            component: ConfirmGpsLocation
        },
        {
            path: "/app/landing_page",
            name: "landing_page",
            component: LandingPage
        },
        {
            path: "/restaurants/:id/page",
            props: true,
            component: RestaurantPage
        },
        {
            path: "/mobile/cart",
            name: "mobile_cart",
            component: MobileCart
        },
        {
            path: "/fakkad/test",
            component: TestComp
        },
        {
            path: "/app/add_mobile_number",
            component: AddMobileNumber
        },
        {
            path: "/app/payment",
            component: Payment
        },
        {
            path: "/app/confirm_order",
            component: ConfirmOrder
        },
        {
            path: "/app/account",
            component: Account
        },
        {
            path: "/app/orders",
            component: Orders
        },
        {
            path: "/app/search",
            component: Search
        },

        {
            path: "/app/discount_coupons",
            component: DiscountCoupons
        },


        {
            path: "/delivery/manager",
            component: () => import('./views/delivery/Manager.vue')
        },

        {
            path: "/delivery/login",
            component: () => import('./views/delivery/Login.vue')
        },

        {
            path: "/delivery/dashboard",
            component: () => import('./views/delivery/Dashboard.vue')
        },

        {
            path: "/delivery/orders",
            component: () => import('./views/delivery/Orders.vue')
        },

        {
            path: "/delivery/order/details/:id",
            props: true,
            component: () => import('./views/delivery/OrderDetails.vue')
        },

        {
            path: "/delivery/issue_discount",
            component: () => import('./views/delivery/IssueDiscount.vue')
        }
    ]
});