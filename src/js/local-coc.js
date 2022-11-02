console.log('parapam')
// import { storage } from "./yuras"
const cocList = document.querySelector('.favorite-cocktails')
console.log(cocList)

let storag = []
let myCoc =[]
console.log(typeof(storag))
reload()
function reload() {
    let userr = localStorage.getItem('drinksId');
    if (userr) {
      let ara = userr.split(',');
      ara.forEach(el => storag.push(el));
    }
  }
   console.log(storag)
getMurkupCoc()
 function getMurkupCoc(){

   storag.map( async el=>{
        json = await searchCocById(el)
        console.log(json)
        let result =  json.drinks[0]
        console.log(result)
        myCoc.push(result)
        
    })

    
}
setTimeout(()=>{
    letMarkupMyCoc()
    console.log(myCoc)
},2000)

async function searchCocById(el) {
    try {
      return await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${el}`).then(
        response => response.json()
      );
    } catch (error) {
      console.log('Помилка при ФЕТЧІ ===> ', error);
    }
  }

//   function letMarkupMyCoc (){
//      cocList.innerHTML= ``
//   }