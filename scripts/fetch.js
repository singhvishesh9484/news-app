
 let searchNews=async(url,value)=>{

    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=tesla&twitter`);

        let data=await res.json();
        console.log(data);
        return data;

    }catch(err){
        console.log(err)
    }
}

let append=(data,results)=>{

    data.map(({title})=>{
        console.log(title);
        let box=document.createElement("div");

        let t=document.createElement("h3");
        t.innerText=title;

        box.append(t);

        results.append(box);

    })

}

export {searchNews,append};
