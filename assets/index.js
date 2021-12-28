const app = Vue.createApp({
    data(){
        return {
            message: "Hello world",
            images: [
                // "https://images.unsplash.com/photo-1520444451380-ebe0f7b9cfd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                // "https://images.unsplash.com/photo-1506780789966-15774276e069?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80",
                // "https://images.unsplash.com/photo-1520095972714-909e91b038e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                // "https://images.unsplash.com/photo-1602896499531-c90b13ec4f06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
              ],
              timer: null,
              currentNumber: 0
        };
    },  
})

app.mount("#index")