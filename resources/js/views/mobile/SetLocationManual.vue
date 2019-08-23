<template>
    <div class="main grey lighten-2">
        <div class="title white">
            <v-container>
                <v-progress-circular
                    v-if="processing"
                    indeterminate
                    color="amber"
                ></v-progress-circular>
                <v-btn v-else color="success" class="white--text" @click="askForGpsLocation()" block>
                    <v-icon left dark>my_location</v-icon>
                    USE GPS TO SET LOCATION
                </v-btn>
            </v-container>
        </div>
        <div class="options white">
            <div class="option">
                <v-select :items="indian_states" label="Select State" v-model="state"></v-select>
            </div>
            <div class="option" v-if="districts.length > 0">
                <v-select :items="districts" label="Select District" v-model="district"></v-select>
            </div>
            <div class="option" v-if="areas.length > 0">
                <v-select :items="areas" label="Select Area" v-model="area"></v-select>
            </div>
            <div class="option">
                <v-textarea label="Add Description" v-model="description">

                </v-textarea>
            </div>
            <div class="option" v-if="error != ''">
                <div class="error white--text">{{error}}</div>
            </div>
        </div>
        <div class="msg white">
            <v-container>
                <v-btn color="warning" :disabled="disabled" class="white--text" block 
                @click="saveManualLocation()">
                    {{button_msg}}
                </v-btn>
            </v-container>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AppConst from '../../AppConst';

export default {
    data: function() {
        return {
            processing: false,
            indian_states: ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu & Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Tripura','Uttarakhand','Uttar Pradesh','West Bengal'],
            button_msg: "SET AS DELIVERY LOCATION",
            error: "",
            mp_district: ['Bhopal','Raisen','Rajgarh','Sehore','Vidisha','Morena','Sheopur','Bhind','Gwalior','Ashoknagar','Shivpuri','Datia','Guna','Alirajpur','Barwani','Burhanpur','Indore','Dhar','Jhabua','Khandwa','Khargone','Balaghat','Chhindwara','Jabalpur','Katni','Mandla','Narsinghpur','Seoni','Dindori','Betul','Harda','Hoshangabad','Rewa','Satna','Sidhi','Singrauli','Chhatarpur','Damoh','Panna','Sagar','Tikamgarh','Niwari','Anuppur','Shahdol','Umaria','Agar Malwa','Dewas','Mandsaur','Neemuch','Ratlam','Shajapur','Ujjain',],
            state: null,
            district: null,
            area: null,
            districts: [],
            areas: [],
            description: ""
        }
    },

    methods: {
        askForGpsLocation: function() {

            try {
                Android.requestLocationSetting();
            } catch (error) {
                
            }

            if(this.$store.getters.gps_permission) {
                this.getLocationByGps();
            } else {
                this.$store.dispatch('setAndroidResponse', 'waiting');
                this.requestGpsPermission();
            }
        },

        getLocationByGps: function() {
            navigator.geolocation.getCurrentPosition(this.setPosition);
            this.processing = true;
        },

        setPosition: function(position) {
            var value = {lat: position.coords.latitude, long: position.coords.longitude};
            this.$store.dispatch('setLatLong', value).then(()=>{
                // send coordinates for reverse geo encoding
                axios.get(AppConst.get_location, {
                    params: {
                        latlng: value.lat+","+value.long,
                        key: "AIzaSyCbZnPgGn9-uDMQW4uP89ctM7MXsD4kysE"
                    }
                }).then(response => {
                    if(response.status == '200') {
                        this.processing = false;
                        this.$store.dispatch('emptyRestaurants');
                        this.$store.dispatch('setCurrentLocation', 
                            response.data.results[0].formatted_address);
                        this.$router.push("/app/confirm_gps_location");
                    }
                });
            });
        },

        requestGpsPermission: function() {
            Android.requestGpsPermission();
        },

        saveManualLocation: function() {
            var location = [];
            location.push(this.area);
            location.push(this.district);
            location.push(this.state);
            location = location.join(",");
            
            this.$store.dispatch('setCurrentLocation', location);
            this.$store.dispatch('setLocationDescription', this.description);
            localStorage.setItem("current_location", this.$store.state.current_location);
            localStorage.setItem("location_description", this.description);
            localStorage.setItem("latlong", null);
            this.$store.dispatch('emptyRestaurants');
            this.$router.push("/app/landing_page");
        }
    },

    computed: {
        androidResponse: function() {
            return this.$store.getters.android_response;
        },

        disabled: function() {
            return this.state == null || this.district == null || this.area == null 
            || this.description == "";
        }
    },

    created: function() {
        this.$store.dispatch('showBottomNav', false);
    },

    watch: {
        androidResponse: function(newVal, oldVal) {
            if(oldVal === 'waiting' && newVal === 'done') {
                if(this.$store.getters.gps_permission) {
                    this.getLocationByGps();
                }
            }
        },

        state: function(nv, ov) {
            this.district = null;
            if(nv == "Madhya Pradesh") {
                this.districts = this.mp_district;
                this.error = "";
            } else {
                this.districts = [];
                this.error = "Soory service not available in "+nv;
            }
        },

        district: function(nv, ov) {
            this.area = null;
            if(nv == "Bhind") {
                this.areas = ['Meera Colony', 'Nawada', 'Housing Colony', 'Mahaveer Ganj'];
                this.error = "";
            } else {
                this.areas = [];
                this.error = "Sorry service not available in "+nv;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
div.main {
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;
}

div.main > div {
    width: 95%;
    margin: 10px 0px;
    min-height: 50px;
}


div.options {
    flex-grow: 1;
}

div.option {
    margin: 10px 0px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}

</style>
