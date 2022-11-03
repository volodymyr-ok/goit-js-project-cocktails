import { storageIngr } from "./yuras-m"

export function checkLocalStorageIngr(a){

    if (storageIngr.includes(a)){
        console.log('here is idd============')
        
       return  `<button  id='${a}' class="button-testt">Remove from favorite</button>`
    }else{
        console.log('we didnt find anything')
        return `<button  id='${a}' class="button-testt">Add to favorite</button>`
    }
}