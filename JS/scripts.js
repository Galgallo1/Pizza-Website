

function Placeorder(type,size,crust){
    this.pizzatype=type;
    this.pizzasize=size;
    this.pizzacrust=crust;
};

Placeorder.prototype.summary=function(){
    return "Type:" +this.pizzatype + "  " +"Size:" +this.pizzasize + "  " +"Crust:" + this.pizzacrust + "  " ;
}

Placeorder.prototype

//User Interface

$(document).ready(function(){

    $("form#fom").on("submit",function(){
        event.preventDefault();
        
        var piztype=$("#taip option:selected").text();
        var pizsize=$("#saiz option:selected").text();
        var pizcrust=$("#crust option:selected").text();

        var newOrder = new Placeorder(piztype,pizsize,pizcrust);

        $("ul#your-order").append("<li><span>" + newOrder.summary() + "</span></li>");


    });

    $("#button").on("click",function(){
        alert("You can choose your pizza be delivered at home at a cost 500/= or come pick it free!")
        confirm("Do you want delivery to your home?"); 
        prompt("Enter Your address")
    });


})