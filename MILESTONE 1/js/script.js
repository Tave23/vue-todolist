const app = new Vue({

   el: '#app',

   data:{
   // lista delle cose da fare già impostate
       todos:[
            {
               consegna: "Lavare i piatti", 
               done: true,   
            },
            {
               consegna:"Gonfiare la bici",
               done: false,
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

      done:false,
   
   
     
   },

   mounted(){

      

   },

   methods:{

      removeTodo(indice){

         console.log(indice);
         
         // elimino un object al click
         this.todos.splice(indice,1);
      }

      
       
   }

})