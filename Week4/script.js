function createLink(url, text){
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = url;
    link.text = text;
    link.classList = 'footer_a';
    link.target = '_blank';
    div.appendChild(link);
    return div;
}

let footer = document.querySelector("#BottomFooter");
let linkedin = createLink("https://www.linkedin.com/in/joshuaochsankehl/", "LinkedIn");
let github = createLink('https://github.com/eternity336', 'GitHub');
footer.appendChild(linkedin);
footer.appendChild(github);
