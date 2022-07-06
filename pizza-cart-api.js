document.addEventListener('alpine:init', () => {

    // alert("Alpine loaded...")

    Alpine.data('pizzaCartWithAPIWidget', function () {
        return {
            init() {
                // alert('pizza cart loading...')
                // call the API to getall the pizzas
                // set this.pizzas 

                axios
                    .get('https://pizza-cart-api.herokuapp.com/api/pizzas')
                    .then((result) => {
                        // console.log();
                        this.pizzas = result.data.pizzas
                    })

            },

            message : 'Eating pizzas',

            pizzas : [],

            add(pizza){
                alert(pizza.flavour + " = " + pizza.size )
            }


        }
    });
})