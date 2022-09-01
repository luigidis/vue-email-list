console.log('yo');

const app = new Vue ({
    el: '#app',
    data: {
        randomEmail: '',
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response)
                console.log(response.data.response)
                this.randomEmail = response.data.response
            })
    },
})