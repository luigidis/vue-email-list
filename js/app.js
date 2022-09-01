console.log('yo');

const app = new Vue ({
    el: '#app',
    data: {
        randomEmail: [],
    },
    beforeMount() {
        for (let i = 0; i < 10; i++) {
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.randomEmail.push(response.data.response)
            })
        }
    },
})
                
                
                