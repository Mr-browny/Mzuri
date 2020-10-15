<template>
    <div>
        <div class="profile">
            <div class="header">
                <div class="title">My Profile</div>
                <div>
                    <a href="#" title="Change Password" v-b-modal.change_pwd> Change password </a>
                    <a href="#" title="Edit"  @click="toggleModal('edit_profile_modal')"> Edit </a>
                </div>
            </div>
            <b-form > 
                <b-row>
                    <b-col cols="12" sm="6">
                        <b-form-group id="input-group-2" label="Name:" label-for="input-2">
                            <b-form-input id="input-2" v-model="user_profile.first_name" required placeholder="Name" ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" sm="6">
                        <b-form-group id="input-group-1" label="Email:" label-for="input-1">
                            <b-form-input id="input-1" v-model="user_profile.email" type="email" required placeholder="Email" ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="12" sm="6">
                        <b-form-group id="input-group-3" label="Phone Number:" label-for="input-3">
                            <b-form-input id="input-3" v-model="user_profile.number" required placeholder="Phone Number" ></b-form-input>
                        </b-form-group>   
                    </b-col>
                </b-row>
            </b-form>
        </div>

        <!-- Modal Section -->

        <!-- Password Modal -->
        <div>
            <b-modal ref="change_pwd_modal" id="change_pwd" content-class="">
                <template  #modal-title>
                    <div > Change Password </div>
                </template>
               <b-form >
                    <b-form-group>
                        <b-form-input type="password" required placeholder="Old Password" ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input type="password" required placeholder="New Password" ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input type="password" required placeholder="Confirm Password" ></b-form-input>
                    </b-form-group> 
                </b-form>
                 <template #modal-footer>
                    <b-button class="btn btn-block" variant="primary" @click="switch_modal('change_pwd_modal','otp_modal')" >Save</b-button>
                </template>
            </b-modal>
        </div>

        <!-- OTP Modal -->
        <div>
            <b-modal ref="otp_modal" id="otp" content-class="">
                <template  #modal-title>
                    <div > OTP Verification </div>
                </template>
               <div>
                   <div class="note text-center">
                       An <abbr title="One Time Password">OTP</abbr> code was sent to your phone and email, <br> kindly input the code below.
                   </div>

                   <form>
                       <b-container>
                           <b-row>
                               <b-col v-for="i in 4" :key="i">
                                   <input type="number" v-model="otp_code[i]" class="otp_code" />
                               </b-col> 
                           </b-row>
                       </b-container> 
                   </form>
               </div>
                 <template #modal-footer>
                    <b-button class="btn btn-block" variant="primary" @click="switch_modal('otp_modal', 'success_modal')">Save</b-button>
                </template>
            </b-modal>
        </div>

        <!-- Success Modal -->
        <div>
            <b-modal ref="success_modal" content-class="">
                <template  #modal-title>
                    <div > Success </div>
                </template>
               <div>
                   <div class="note text-center">
                       <i class="fa fa-5x fa-handshake"></i>
                       <br>
                       Congratulations!
                       <br>
                       Your Password has been changed successfully.
                   </div>
               </div>
                 <template #modal-footer>
                    <b-button class="btn btn-block" variant="primary" @click="toggleModal('success_modal')">Continue</b-button>
                </template>
            </b-modal>
        </div>

        <!-- Edit Profile Modal -->
        <div>
            <b-modal ref="edit_profile_modal" id="edit_profile" content-class="">
                <template  #modal-title>
                    <div > Edit Profile Details </div>
                </template>
               <b-form >
                    <b-form-group>
                        <b-form-input v-model="edit_user_profile.first_name" type="text" required placeholder="First Name" ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input v-model="edit_user_profile.last_name" type="text" required placeholder="Last Name" ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-input v-model="edit_user_profile.email" type="email" required placeholder="Email" ></b-form-input>
                    </b-form-group> 
                    <b-form-group>
                        <b-form-input v-model="edit_user_profile.number" type="text" required placeholder="Phone Number" ></b-form-input>
                    </b-form-group> 
                </b-form>
                 <template #modal-footer>
                    <b-button class="btn btn-block" variant="primary" @click="save_profile('edit_profile_modal')" >
                        <div v-if="!save_btn">
                        {{  save_status  }}
                        </div>
                        <div v-else>
                        <b-spinner type="grow" label="Loading..."></b-spinner>
                        </div>
                  </b-button>
                </template>
            </b-modal>
        </div>
    </div>
</template>

<style>
.modal-header{
   background-color: #007bff;
   color: #fff !important;
}
.note{
    margin-bottom: 30px;
}

</style>

<style scoped>
.profile{ 
    padding: 20px 70px;
    border: 1px solid rgba(218, 215, 215, 0.568);
    border-radius: 5px;
    background-color: #fff;
}
.profile .header .title{
    font-size: 16px;
    color: grey;  
    margin-bottom: 15px;
}
.profile .header  a{
    text-decoration: none !important;
    border-bottom: 1px solid #007bff;
    margin-left: 20px;
} 
.profile input[type=text],
.profile input[type=email]{
    border: 0;
    border-bottom: 1px solid grey;
} 
form input[type=number]{
    padding: 10px;
    width: 100%;
    border: 1px solid rgba(209, 200, 200, 0.897);
    border-radius: 5px;

}
@media  (max-width: 572px) {
    .profile{
         padding: 20px;
    }
}
</style>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: 'My_profile_component',
    data(){
        return{ 
            edit_user_profile: {
                first_name: '',
                last_name: '',
                email: '',
                number: '',
            },
            otp_code: {
                1: '',
                2: '',
                3: '',
                4: ''
            },
            save_status: 'save',
            save_btn: false
        }
    },
    mounted() {
        const _ = this;
        _.edit_user_profile = _.user_profile
    },
    computed: {
      ...mapState(['user_profile']),
    },
    methods: {
        ...mapActions(['update_user']),
        switch_modal(old_modal, new_modal){
            const _ = this;
            _.hideModal(old_modal) ;
            _.showModal(new_modal)
        },
        showModal(modal) { 
            this.$refs[modal].show()
        },
        hideModal(modal) { 
            this.$refs[modal].hide()
        },
        toggleModal(modal) { 
            this.$refs[modal].toggle('#toggle-btn')
        },
        save_profile(modal){
            const _ = this;
            // THis will be sent to Vuex 
            _.save_btn = true

            setTimeout( ()=> {
                _.update_user(_.edit_user_profile)
                _.save_btn = false 
                _.toggleModal(modal)
        }, 3000)
        }
    }
}
</script>