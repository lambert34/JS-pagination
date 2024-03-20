async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json()
    return data
}

async function main() {
    const postData = await getData();
    let currentPage = 1;
    let rows = 10;

    function displayList() {}
    function displayPagination() {}
    function displayPaginationBtn() {}

}

main();