
fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`)
.then(function(res){
   res.json()
    .then(function(res){

        console.log(res)
    })
})

.catch(function(err){
    console.log(err)
})


function append(data){
    data.forEach(function(e){
        console.log(e)
        let div=document.getElementById('voucher_list');

        div.append(e)
    })
}