const app=new Vue({
    el:"#app",
    data:{
        text:'asdsa',
       gav:{name:"", url:""},
        nuevoPokemon:{name:'', url:''},
        datos:[],
        url:'',
        name:'',
        number:150
    },
   
    async created(){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+this.number)
        const res = await response.json()

        const response2 = await fetch('https://pokeapi.co/api/v2/pokemon')

        const res2=await response2.json()

        const pokemonsdata=res.sprites.other.dream_world.front_default
        const pokemonname=res.name

        this.url=pokemonsdata
        this.name=pokemonname

        this.datos=res2.results

        console.log(res2)
        
        
     

    },
    methods:{
      async  agregarPokemon(){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon-form/'+this.number)
        const res = await response.json()

        const pokemonsdata=res.sprites.front_default
        const pokemonname=res.name

        this.url=pokemonsdata
        this.name=pokemonname

        var json=JSON.stringify(pokemonname)
        
        const nombre =json
        
        
        console.log(pokemonname)
        }
    }
})

