window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://getresumevisitor.azurewebsites.net/api/GetResumeCounter?code=cG9j5iqD1sj5c9d0Lgo1Ja_xyIeybwNFnS7CwHNphlM_AzFuVcJuuA==';
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function Api.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log('Error: ' + error);
    });
    return count;
}