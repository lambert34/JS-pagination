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
        postEl.innerHTML = '';
        page--;

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
    function displayPagination(arrData, rowPerPage) {
        const paginationEl = document.querySelector('.pagination');
        const pagesCount = Math.ceil(arrData.length / rowPerPage);
        const ulEl = document.createElement("ul");
        ulEl.classList.add("pagination__list");

        for (let i = 0; i < pagesCount; i++) {
            const liEl = displayPaginationBtn(i + 1);
            ulEl.appendChild(liEl);
        }
        paginationEl.appendChild(ulEl);
    }
    function displayPaginationBtn() {
        const liEl = document.createElement('li');
        liEl.classList.add('pagination__item');
        liEl.innerText = page;

        liEl.addEventListener('click', () => {
            currentPage = page;
            displayList(postData, rows, currentPage);
        })
        return liEl;
    }

    displayList(postData, rows, currentPage);
    displayPagination(postData, rows);
}

main();