const newJob = () =>  {
    let  name = document.getElementById('name').value
    let  date = document.getElementById('date').value
    let  jobName = document.getElementById('jobName').value
    let  start = document.getElementById('start').value
    let  end = document.getElementById('end').value
    let  jobCode = document.getElementById('jobCode').value
    
    
    let  node = document.createElement('li')
    let textNode = document.createTextNode(`Employee: ${name} 
    Date: ${date} 
    Job Name:${jobName} 
    Start Time:${start} 
    End Time:${end} 
    Job Code:${jobCode}` )
    node.appendChild(textNode)
    document.getElementById('results').appendChild(node)
    console.log(name)
}