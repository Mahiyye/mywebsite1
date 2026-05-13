function searchArticles() {

    let input = document.getElementById("searchInput").value.toLowerCase();
    let articles = document.getElementsByClassName("article");

    for (let i = 0; i < articles.length; i++) {

        let text = articles[i].innerText.toLowerCase();

        if (text.includes(input)) {
            articles[i].style.display = "block";
        } else {
            articles[i].style.display = "none";
        }
    }
}