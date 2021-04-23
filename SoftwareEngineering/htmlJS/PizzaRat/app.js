


let getData = () =>{
    let limit = document.getElementById('input').value;
    if(!limit){
        limit =10
    }

    let borough = event.target.innerHTML.toUpperCase()
    fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough="+ borough + "&$limit=" + limit)
    .then((dataSet)=> dataSet.json())
    .then((data)=> displayData(data))
}



let displayData = (data) =>{
    let output = '';

    
    for(x in data) {
        let descriptor = data[x].descriptor
        let resolution = data[x].resolution_description;
        
        output += `
        <div class="police">
        <h3>${descriptor}</h3>
            <td> 
        <details class="complaintD"><summary>What did the police do?</summary>
        ${resolution}
        </details>
        
            </td>
        </div>
        `
     document.getElementById('results').innerHTML = output
    }



}

