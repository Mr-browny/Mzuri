<template>
    <div>
        <div class="business">
            <div class="header">
                <div class="title">Business</div>
                <div>
                    <a href="#" title="Add Business" @click="business_modal_action('business_modal', 'Add', '')"> 
                      <i class="fa fa-plus-circle primary add_icon"></i>
                      Add Business 
                    </a>
                </div>
            </div>
            <div class="registered_business">
              <b-container fluid> 
                <b-row  >
                  <b-col cols="12" sm="6" v-for="bus in registered_business" :key="bus.id" @click="business_modal_action('business_modal', 'Edit', bus)"> 
                    <div class="business_card">
                      <h4 class="business_name">{{ bus.name }}</h4>
                      <h5 class="business_number">{{ bus.RC_number }}</h5>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </div>
        </div>


        <!-- Modal Section -->

        <!-- Add New Business Section -->
        <!-- New and Edit Business Modal -->
        <div>
          <b-modal ref="business_modal" >
              <template  #modal-title>
                  <div > {{ business_modal_action_value }} Business </div>
              </template>
            <div class="text-center note">
                <h1 class="img">BC 
                <i class="fa fa-camera camera_icon"></i>
                </h1>
              <div class="primary brand_title">
                Boldseams Couture
              </div>
            </div>
              <b-form ref="add_new_business_form">
                <b-container fluid>
                  <b-row>
                    <b-col cols="12">
                      <b-form-group>
                          <b-form-input v-model="business.name" type="text" required placeholder="Business Name" ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col cols="6">
                      <b-form-group>
                          <b-form-input v-model="business.number" type="text" required placeholder="Phone Number" ></b-form-input>
                      </b-form-group>
                    </b-col> 
                    <b-col cols="6">
                      <b-form-select v-model="business.business_type" :options="business_type_list" value-field="item" text-field="name" disabled-field="notEnabled" ></b-form-select>
                    </b-col>
                    <b-col cols="6">
                      <b-form-group>
                          <b-form-input v-model="business.email" type="email" required placeholder="Email" ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col cols="6">
                      <b-form-select v-model="business.business_industry" :options="business_industry_list" value-field="item" text-field="name" disabled-field="notEnabled" ></b-form-select>
                    </b-col>
                    <b-col cols="6">
                      <b-form-select v-model="business.selected_country" :options="country_list" value-field="item" text-field="name" disabled-field="notEnabled" ></b-form-select>
                    </b-col>
                    <b-col cols="6">
                      <b-form-group>
                          <b-form-input v-model="business.RC_number" type="text" required placeholder="RC Number" ></b-form-input>
                      </b-form-group>
                    </b-col>
                    <b-col cols="6">
                      <b-form-select v-model="business.selected_state" :options="state_list" value-field="item" text-field="name" disabled-field="notEnabled" ></b-form-select>
                    </b-col>
                    <b-col cols="6">
                      <b-form-select v-model="business.selected_LGA" :options="LGA_list" value-field="item" text-field="name" disabled-field="notEnabled" ></b-form-select>
                    </b-col><br><br>
                    <b-col cols="12">
                      <b-form-group>
                          <b-form-input v-model="business.address" type="text" required placeholder="Business Address" ></b-form-input>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-container>
                   
              </b-form>
              <template #modal-footer>
                  <b-button class="btn btn-block" variant="primary" @click="add_new_business('business_modal')" v-if="business_modal_action_value == 'Add'">
                    <div v-if="!save_btn">
                      Add
                    </div>
                    <div v-else>
                      <b-spinner type="grow" label="Loading..."></b-spinner>
                    </div>
                  </b-button>
                  <b-button class="btn btn-block" variant="primary" @click="save_edited_business()" v-else>
                    <div v-if="!save_btn">
                      Save
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


<style scoped>
.business{ 
    padding: 20px 70px;
    border: 1px solid rgba(218, 215, 215, 0.568);
    border-radius: 5px;
    background-color: #fff;
}
.business .header .title{
    font-size: 16px;
    color: grey;  
    margin-bottom: 15px;
}
.business .header  a{
    text-decoration: none !important; 
    margin-left: 20px;
}
.business .header  a .add_icon{
  font-size: 15px; 
}
.registered_business .business_card{
  border: 1px solid rgba(212, 208, 208, 0.596);
  padding: 10px 20px;
  margin-bottom: 10px;
  cursor: pointer;
}
.registered_business .business_card h4{
  color: #007bff !important;
}
.registered_business .business_card h5{
  color: grey;
}

@media  (max-width: 572px) {
    .business{
         padding: 20px;
    }
}

/* .registered_business */
 
</style>

<script>
import { mapState, mapActions } from "vuex";
export default {
    name: 'Business_Component',
    data(){
        return{
            business_modal_action_value: 'Add',
            // NB Both country and state would be fetched from an API
            // State would be populated according to the Country selected down to the Local council
            business_type_list: [
              { item: 'A', name: 'Select Business Type' },
              { item: 'B', name: 'Sole Proprietorship' },
              { item: 'c', name: 'Option B' }, 
            ],
            business_industry_list: [
              { item: 'A', name: 'Industry' },
              { item: 'B', name: 'Fashion Design' },
              { item: 'C', name: 'Option B' }, 
            ],
            country_list: [
              { item: 'A', name: 'Country' },
              { item: 'B', name: 'Nigeria' },
              { item: 'C', name: 'Option B' }, 
            ],
            state_list: [
              { item: 'A', name: 'State' },
              { item: 'B', name: 'Lagos' },
              { item: 'C', name: 'Option B' }, 
            ],
            LGA_list: [
              { item: 'A', name: 'Local Council' },
              { item: 'B', name: 'ijaye' },
              { item: 'C', name: 'Option B' }, 
            ],
            business: {
              name: '',
              number: '',
              business_type: 'A',
              email: '',
              business_industry: 'A',
              selected_country: 'A',
              RC_number: '',
              selected_state: 'A',
              selected_LGA: 'A',
              address: '',
            },
            save_btn: false
        }
    },
    computed: {
      ...mapState(['registered_business']),
    },
    methods: {
      ...mapActions(['add_business']),
      ...mapActions(['edit_business']),
      add_new_business(modal){
        const _ = this;
        _.save_btn = true

        // Simulating Network
        setTimeout( ()=> {
          _.add_business(_.business)
          _.$refs.add_new_business_form.reset()
          _.save_btn = false
          _.$refs[modal].toggle('#toggle-btn')
        }, 3000)
      },
      save_edited_business(){
        const _ = this;
        _.save_btn = true

        // Simulating Network
        setTimeout( () => {
          _.edit_business(_.business)
          _.save_btn = false
          _.$refs['business_modal'].hide()
        }, 2000)
      },
      business_modal_action(modal, action, business){
        const _ = this;
        _.$refs[modal].toggle('#toggle-btn')
        _.business_modal_action_value = action

        if (action == 'Add') { 
          _.business = { name: '', number: '', business_type: 'A', email: '', business_industry: 'A', selected_country: 'A', RC_number: '', selected_state: 'A', selected_LGA: 'A', address: '', }
        }else if (action == 'Edit') {
          _.business = business
        }
 
      }
    }
}
</script>