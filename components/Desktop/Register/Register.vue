<template>
    <div class="register">
        <h3>ثبت نام</h3>
        <!-- v-model="this.$v.firstName.$model" -->
        <form class="register__form" @submit.prevent="submit">
            <div>
                <input type="text" name="firstname" placeholder="نام" v-model.trim.lazy="firstName" >
                <div class="errorcontainer">
                    <p v-if="!$v.firstName.required" >is required</p>

                </div>
                <!-- <div v-if="v.$error">
                    <div v-if="!v.required">Email is required</div>
                    <div v-if="!v.minLength">Email should not be a Gmail one</div>
                    <div v-if="!v.maxLength">Email is not available (less than 10 char)</div>
                </div> -->
            </div>
            <div>
                <input type="text" name="lastname" placeholder="نام خانوادگی" v-model.trim.lazy="lastName" >
                <div class="errorcontainer">

                </div>
                <!-- <div v-if="v.$error">
                    <div v-if="!v.required">Email is required</div>
                    <div v-if="!v.minLength">Email should not be a Gmail one</div>
                    <div v-if="!v.maxLength">Email is not available (less than 10 char)</div>
                </div> -->
            </div>
            <div>
                <input type="email" name="email" placeholder="ایمیل" v-model.trim.lazy="email" >
                <div class="errorcontainer">

                </div>
                <!-- <div v-if="v.$error">
                    <div v-if="!v.required">Email is required</div>
                    <div v-if="!v.email">Email is not a properly formatted email address</div>
                </div> -->
            </div>
            <button class="btn" @click.prevent="submitForm">ایجاد حساب کاربری</button>
        
        </form>
    </div>
</template>

<script>
import { required, minLength, maxLength , email } from 'vuelidate/lib/validators'

export default {
    data () {
        return {
            firstName : '',
            lastName : '',
            email : ''
        }
    },
    validations : {
        firstName : {
            required,
            minLength: minLength(3),
            maxLength : maxLength(12)

        },
        lastName : {
            required,
            minLength: minLength(3),
            maxLength : maxLength(20)

        },
        email : {
              required,
              email
        }

    },
    methods : {
        submitForm () {

        }
    },
    updated () {
        console.log(this.$v)
    }

}
</script>

<style lang="scss">

.register {
    height: 100vh;
    width: 100%;
    background-color: #cd9945;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > * {
        transform: translateY(-100px);
    }
    h3 {
        color: white;
        font-size: 33px;
        font-family: iranyekan
    }

    &__form {
        height: 50vh;
        width: 700PX;
        background-color: #fed269;
        border-radius: 48px;
        direction: rtl;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        div {



            input {
                background-color: rgba(0, 0, 0, 0.7);
                width: 350px;
                height: 3.5vh;
                opacity: 0.8;
                font-family: iranyekan;
                font-size: 18px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.72;
                letter-spacing: -0.9px;
                text-align: center;
                border: none;
                outline: none;
                color: rgba(255, 255, 255, 0.7);
                border-radius: 48px;

        }

        }



        button {
            width: 240px;
            height: 5vh;
            background-color: #cd9945;
            padding: 0;
            margin: 0;
            outline: none;
            border: none;
            font-family: iranyekan;
            font-size: 20px;
            border-radius: 20px;


        }
    }
}

.error {
  color: red; 
  font-size: 12px;
  position: absolute;
  text-transform: uppercase;}
</style>