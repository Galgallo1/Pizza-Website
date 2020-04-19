//Business Logic

function Placeorder(type,size,crust,number){
    this.pizzatype=type;
    this.pizzasize=size;
    this.pizzacrust=crust;
    this.pizzanumber=number;
};

Placeorder.prototype.summary=function(){
    return "Type:" +this.pizzatype + "  " +"Size:" +this.pizzasize + "  " +"Crust:" + this.pizzacrust + "  " + "Number:" + this.pizzanumber ;
}

Placeorder.prototype

//User Interface

$(document).ready(function(){

    $("form#fom").on("submit",function(){
        event.preventDefault();
        
        var piztype=$("#taip option:selected").text();
        var pizsize=$("#saiz option:selected").text();
        var pizcrust=$("#crust option:selected").text();
        var piznumber=$("#quantity").val();

        var newOrder = new Placeorder(piztype,pizsize,pizcrust,piznumber);

        var pizsizeprice=$("#saiz option:selected").val();
        var pizcrustprice=$("#crust option:selected").val();
        var quantity=$("#quantity").val();

        var Grandtotal=(parseInt(pizsizeprice) + parseInt(pizcrustprice))*quantity;

        $("ul#your-order").append("<li><span>" + newOrder.summary() + "</span></li>" + "<li><span>" + "Grand Total Price:" +Grandtotal + "</span></li>");


    });

    $("#baton").on("click",function(){
        alert("You can choose your pizza be delivered at home at a cost 500/= or come pick it free!")
        confirm("Do you want delivery to your home?"); 
        prompt("Enter Your address")
        alert("You pizza will be delivered in an hour to your address. Thank for shopping with us")
    });


})