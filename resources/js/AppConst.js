const RootUrl = "https://www.foodyla.com/api";
const UserIdUrl = RootUrl+"/user";
const RestaurantPerPage = 6;
const RestaurantsUrl = RootUrl+"/restaurants";
const RestaurantPage = RootUrl+"/restaurants/page/";
const ConfirmOrder = RootUrl+"/app/confirm_order";
const OrderStatus = RootUrl+"/order_status";
const ConfirmMobileNumber = RootUrl+"/app/confirm_mobile_number";
const ConfirmOtp = RootUrl+"/app/confirm_otp";
const GetLocation = "https://maps.googleapis.com/maps/api/geocode/json";

export default {
    root_url: RootUrl,
    user_id_url: UserIdUrl,
    restaurant_per_load: RestaurantPerPage,
    restaurants_url: RestaurantsUrl,
    restaurant_page: RestaurantPage,
    confirm_order: ConfirmOrder,
    order_status: OrderStatus,
    confirm_mobile_number: ConfirmMobileNumber,
    confirm_otp: ConfirmOtp,
    get_location: GetLocation
}