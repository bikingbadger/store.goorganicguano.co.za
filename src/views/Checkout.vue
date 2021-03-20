<template>
  <v-container>
    <v-row>
      <v-col sm="6" offset="3">
        <v-stepper v-model="step">
          <v-stepper-header>
            <v-stepper-step step="1" :complete="step > 1"
              >Contact Info</v-stepper-step
            >
            <v-divider />
            <v-stepper-step step="2" :complete="step > 2"
              >Address Info</v-stepper-step
            >
            <v-divider />
            <v-stepper-step step="3">Validate</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <contact-info :data="data.contact" :rules="rules" :next="next" />
            <shipping-info
              :data="data.shipping"
              :rules="rules"
              :next="next"
              :previous="previous"
            />
            <validate-order
              :data="data"
              :rules="rules"
              :submitOrder="submitOrder"
              :previous="previous"
            />
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContactInfo from '@/components/checkout/ContactInfo.vue'
import ShippingInfo from '@/components/checkout/ShippingInfo.vue'
import ValidateOrder from '@/components/checkout/ValidateOrder'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { ContactInfo, ShippingInfo, ValidateOrder },
  data() {
    return {
      step: 1,
      data: {
        contact: { email: '', name: '', phone: '' },
        shipping: { street: '', city: '', postcode: '' }
      },
      rules: {
        required: value => !!value || 'Required.',
        zip: value => value.length === 5 || 'Must be five characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        phone: value => {
          const pattern = /\d{10}/
          return pattern.test(value) || 'Invalid phone number.'
        }
      }
    }
  },

  computed: {
    ...mapGetters('cart', ['getCartItems', 'getCartCount', 'getCartTotal'])
  },
  methods: {
    ...mapActions('cart', ['checkout']),
    next() {
      this.step += 1
    },
    previous() {
      this.step -= 1
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    async submitOrder() {
      try {
        await fetch('/.netlify/functions/sendgrid', {
          method: 'POST',
          message: {
            'form-name': 'order'
            // contact: { ...this.data },
            // items: { ...this.getCartItems }
          }
        })
        alert('Thank you, your message was sent successfully!')
      } catch (e) {
        console.error(e)
        alert('Error:  Your message could not be sent')
      }
      // })
      //   .then(() => {
      //     this.$router.push('thankyou')
      //   })
      //   .catch(err => {
      //     console.log(err)
      //     // this.$router.push('404')
      //   })
    }
  }
}
</script>
