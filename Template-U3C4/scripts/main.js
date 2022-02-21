async function apiCall(url) {
    //add api call logic here

    try {
        let res = await fetch(url);
        let articles = await res.json();
        return articles;
    } catch (error) {
        console.log("error",error);
    }
}
let arr;
function appendArticles(articles, main) {
    //add append logic here
    articles.forEach(element => {
        let div = document.createElement("div");
        let h3 = document.createElement("h3")
        h3.innerText = element.title;
        let image = document.createElement("img")
        image.src = element.urlToImage;
        let p = document.createElement("p")
        p.innerText = element.description;
        div.append(h3,image,p);
        div.setAttribute("class","main_child");
        main.append(div);

        div.addEventListener("click",()=>{
            arr = [];
            arr.push(element);
            localStorage.setItem("article",JSON.stringify(arr));
            window.location.href = "news.html"
        });

        
    });
    
}
export { apiCall, appendArticles }