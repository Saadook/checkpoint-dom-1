document.addEventListener(domcontenetLoaded,())=>{
    var cartcontainer= document.querySelector('.cart-container')
    var totalPriceElemnt=document.querySelector('.total-price')

    function TotalPrice(){
        let total = 0
        var cartItems=document.querySelectorAll('.cart-item')
        cartItems.forEach(item =>{
         var price=parseFloat(item.getAttribute('data-price'))
         var quantity=parseInt(item.querySelector('quantity'))
         total+=price*quantity
        })
      
    }
}