<template>
    <div class="login">
        <h3>ورود به صفحه کاربری</h3>
        <client-only>
        <form class="login__form" @submit.prevent="submit">
            <div>
                <input type="text" name="email" placeholder="ایمیل" v-model.trim="email.title" 
                @input="CheckValidity($event ,'email')">
            
            </div>
            <div>
                <input type="password" name="password" placeholder="رمز عبور" v-model.trim="password.title" 
                @input="CheckValidity($event ,'password')">
                <div class="errorcontainer">

                </div>
            </div>
            <button class="btn" @click.prevent="submitForm" :disabled="formValid" >وارد شدن</button>
        </form>
        </client-only>
    </div>
</template>

<script>

export default {
    data () {
        return {
            errors : [],
            formValid : false,
            password : {
                title : '',
                isValidate: false,
                rules : {
                    required : true,
                    maxlength : 15,
                }

            },
            email : {
                title : '',
                isValidate: false,
                rules : {
                    required : true,
                    maxlength : 15,
                    pattern : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                }

            }
        }
    },
    methods : {
        submitForm () {

        },
        CheckValidity (event , nameOfInput) {
           let rules =  this.$data[nameOfInput].rules
           let validity = []

           if(rules.required) {
               if(this.$data[nameOfInput].title.length > 0) {
                   validity[0] = 1
                   this.$data.errors 
               }else {
                     validity[0] = 0
               }
           }

           if (rules.maxlength) {

               if(this.$data[nameOfInput].title.length < rules.maxlength ) {
                   validity[1] = 1
                
               }else {
                   validity[1] = 0

               }
           }


           if(rules.pattern) {
               if(rules.pattern.test(this.$data[nameOfInput].title)){
                   validity[2] = 1

               }
               else {
                   validity[2] = 0
               }
           }

            
           let final = validity.every(el => {
                return el === 1
            })

           this.$data[nameOfInput].isValidate = final
         
        },
        CheckAllValidity () {

        }
    },
    computed : {},
    updated () {
        let x = Object.values(this.$data).filter (el => {
            return el.isValidate == false
            }).every (el => {
                return el.isValidate
            })
            console.log(x)
            this.formValid = !x;
    } ,

}
</script>

<style lang="scss">

.login {
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