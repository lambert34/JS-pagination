async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json()
    return data
}

async function main() {
    const postData = await getData();
    let currentPage = 1;
    let rows = 10;

    function displayList(arrData, rowPerPage, page) {
        const postsEl = document.querySelector('.posts');

        const start = rowPerPage * page;
        const end = start + rowPerPage;
        const paginatedData = arrData.slice(start, end);

        paginatedData.forEach((el) => {
            const postEl = document.createElement("div");
            postEl.classList.add("post");
            postEl.innerText = `${el.title}`;
            postsEl.appendChild(postEl);
        })
        
    }
    function displayPagination() {}
    function displayPaginationBtn() {}

}

main();