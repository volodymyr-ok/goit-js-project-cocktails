import { storage } from "./yuras"

export function checkLocalStorage(id){
    if (storage.includes(id)){
        console.log('here is idd============')
        
       return `<button id="${id}" class="button-test">Remove from favorite</button>`
    }else{
        console.log('we didnt find anything')
        return `<button id="${id}" class="button-test">Add to favorite</button>`
    }
}