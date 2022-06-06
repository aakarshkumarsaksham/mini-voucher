
function sub()
{
    event.preventDefault();
    let arr= JSON.parse(localStorage.getItem('user')) || [];
    let n = document.getElementById('name').value;
    let e = document.getElementById('email').value;
    let a = document.getElementById('address').value;
    let w = document.getElementById('amount').value;
    let user={
        name:n,
        email:e,
        address:a,
        wallet:w
        
    }

    arr.push(user);
    
    localStorage.setItem('user',JSON.stringify(arr))

    




}