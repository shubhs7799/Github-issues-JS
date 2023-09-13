let page_no = 1
let issue_list = document.getElementById("list")
let page_title = document.getElementById("page_title")


function get_Issue(page){
    let url = `https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`;

    fetch(url).then((response) => response.json()).then(
        data => {
            issue_list.innerHTML = ""
            data.forEach(issue => {
                console.log(issue)
                let list_iteams = document.createElement('li')
                list_iteams.textContent = issue.title
                issue_list.appendChild(list_iteams)
            });
            console.log(data)
            page_title.innerHTML = `Page Number ${page}`
        }
    ).catch( e => console.error(e))
}

get_Issue(page_no)

function prevLoad(){
    if(page_no >1){
        page_no --
    }
    get_Issue(page_no)
}

function nextLoad(){
    page_no ++
    get_Issue(page_no)

}