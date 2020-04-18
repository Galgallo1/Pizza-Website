

function Placeorder(size,crust,topping,number){
    this.pizzasize=size;
    this.pizzacrust=crust;
    this.pizzatopping=topping;
    this.pizzanumber=number;
};

Placeorder.prototype.summary=function(){
    return "size" +this.size + "crust" + this.crust +"topping" + this.topping + "number" + this.number;
}

//User Interface

$(document).ready(function(){

    $("form#fom").on("submit",function(){
        event.preventDefault();
        
        var pizsize=$("#saiz").val();
        var pizcrust=$("#crust").val();

        var newOrder = new Placeorder(pizsize,pizcrust);

        $("ul#your-order").append("<li><span>" + newOrder.pizzasize + newOrder.pizzacrust +"</span></li>");


    });

    $("#button").on("click",function(){
        alert("You can choose your pizza be delivered at home at a cost 500/= or come pick it free!")
        confirm("Do you want delivery to your home?"); 
        prompt("Enter Your address")
    });


})