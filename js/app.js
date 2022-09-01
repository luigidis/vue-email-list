console.log('yo');

const app = new Vue ({
    el: '#app',
    data: {
        randomEmail: [],
    },
    mounted() {
        for (let i = 0; i < 10; i++)
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response)
                console.log(response.data.response)
                this.randomEmail.push(response.data.response)
                console.log(this.randomEmail)
            })
    },
})