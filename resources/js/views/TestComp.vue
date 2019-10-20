<template>
    <div>
        <div>
            <input type="text" v-model="message" placeholder="message"><br>
            <input type="text" v-model="btnTxt" placeholder="button text"><br>
            <v-btn color="green" dark @click="showDialog()">Show Dialog</v-btn>
        </div>
        <div>
            <span>{{version}}</span>
            <v-btn color="red" dark @click="showVersion()">Show Version</v-btn>
        </div>
        <div>
            <v-btn color="primary" dark @click="update()">Update</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'testComp',
    data: function() {
        return {
            android_data: "nothing so far",
            message: "",
            btnTxt: "",
            version: "",
            link: "https://play.google.com/store/apps/details?id=com.foodyla.app"
        }
    },

    methods: {
        xxx: function(data) {
            this.android_data = data;
        },

        showDialog() {
            try {
                Android.showDialog(this.message, this.btnTxt)
            } catch (error) {
                
            }
        },

        showVersion() {
            try {
                var ver = Android.getVersion();
            } catch (error) {
                
            } finally {
                this.version = ver;
            }
        },

        update() {
            try {
                Android.openLink(this.link);
            } catch (error) {
                
            }
        }
    }
}
</script>

