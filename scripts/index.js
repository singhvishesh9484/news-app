// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

//https://masai-mock-api.herokuapp.com/news?q={query}



import {navbar} from "../components/navbar.js";

let n=document.getElementById("navbar");
n.innerHTML=navbar();

 const url= "https://masai-mock-api.herokuapp.com/news?q=tesla&twitter"

 import { searchNews,append} from "../scripts/fetch.js";

let search= (e)=>{
    if(e.key==="Enter"){
        let value= document.getElementById("query").value;
        searchNews(url,value).then((data)=>{
            console.log(data);

            let results=document.getElementById("results");
            results.innerHTML=null;
            append(data.results,results);

        });
    }
}

document.getElementById("query").addEventListener("keydown",search);

let categories=document.getElementById("sidebar").children;

console.log(categories);

function cSearch(){
    console.log(this.id);
    searchNews(url,this.id).then((data)=>{
        console.log(data);

        let results= document.getElementById("results");
        results.innerHTML=null;

        append(data.results,results);
    })
}

for(let el of categories){
    el.addEventListener("click",cSearch);
}

