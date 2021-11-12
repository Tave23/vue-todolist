const app = new Vue({

   el: '#app',

   data:{
   // lista delle cose da fare già impostate
       todos:[
            {
               consegna: "Lavare i piatti", 
               done: false,   
            },
            {
               consegna:"Gonfiare la bici",
               done: true,
            },
            {
               consegna:"Stendere i panni",
               done: false,
            },
            {
               consegna:"Comprare regalo",
               done: false,
            },         
      
      ],

      userString: '',

      errorMsg: false,
   
     
   },

   mounted(){

      

   },

   methods:{

      removeToDo(indice){

         // log della consegna eliminata
         console.log(indice);
         
         // elimino un object al click
         this.todos.splice(indice,1);
      },

      addToDo(){
         if(this.userString.length < 2) {
         // se il testo inserito è inferiore a 2 caratteri errorMsg=true
           this.errorMsg = true;
           console.log(this.errorMsg);
         //   faccio apparire il messaggio di errore per 5 secondi
           setTimeout(() =>{
             this.errorMsg = false;
           },5000);
         }else{
            // cosi aggiungo ciò che scrive l'utente all'array di object
            // essendoci un object però devo fare in questo modo
            this.todos.push({ consegna: this.userString, done: false });

            this.userString = '';
         }
      },
   }

})