const { createApp } = Vue

createApp({
    data(){
        return{
            message: '',
            shoppingList: ['pane', 'biscotti', 'latte'],
            cssClassesList: 'red title', 
            image: 'https://image.shutterstock.com/image-vector/digital-noise-50x50-color-squares-260nw-1936482712.jpg'
        }
    }, 
    methods:{
        greetings(){
            return 'Ciao';
        }, 
        prova2(){
            alert('saluta')
        }, 
        changeMessage(){
            this.message = 'Franco';
        }, 
        addElement(){
            if( this.shoppingList.lenght < 5 && this.message !== ''){
                this.shoppingList.push(this.message);
                this.message = '';
            }
        }
    }
}).mount('#app');