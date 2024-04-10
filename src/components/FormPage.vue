<template>
    <form @submit.prevent="submitForm">
        <table>
            <tr>
                <td>Name:</td>
                <td><input type="text" name="name" v-model="name" /></td>
            </tr>
            <tr>
                <td>Email:</td>
                <td><input type="email" name="email" v-model="email" /></td>
            </tr>
            <tr>
                <td>Name:</td>
                <td><textarea name="message" v-model="message"> </textarea></td>
            </tr>
            <tr>
                <td></td>
                <td><button type="submit"> Send Message</button></td>
            </tr>
        </table>
    </form>
</template>

<script>
const WEB3FORMS_ACCESS_KEY = "Rayfi@123"
export default{
    data(){
        return{
            name:"",
            email:"",
            message:""
        }
    },
    methods: {
        async submitForm(){
            const response = await fetch("https://api.web3forms.com/submit",{
                method: "POST",
                headers: {
                    "Content-Type": "application/JSON",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: this.name,
                    email: this.email,
                    message: this.message
                })
            })
            const result = await response.json();
            if(result.success){
                console.log(result);
            }
        }
    }

}
</script>
