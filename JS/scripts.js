

function Placeorder(type,size,crust,topping,number){
    this.pizzatype=type;
    this.pizzasize=size;
    this.pizzacrust=crust;
    this.pizzatopping=topping;
    this.pizzanumber=number;
};

Placeorder.prototype.summary=function(){
    return "type:" +this.pizzatype + "  " +"size:" +this.pizzasize + "  " +"crust:" + this.pizzacrust + "  " + "topping:" + this.pizzatopping + "  " + "number:" + this.pizzanumber;
}

//User Interface

$(document).ready(function(){

    $("form#fom").on("submit",function(){
        event.preventDefault();
        
        var piztype=$("#taip").val();
        var pizsize=$("#saiz").val();
        var pizcrust=$("#crust").val();

        var newOrder = new Placeorder(pizsize,pizcrust);

        $("ul#your-order").append("<li><span>" + newOrder.summary() +"</span></li>");


    });

    $("#button").on("click",function(){
        alert("You can choose your pizza be delivered at home at a cost 500/= or come pick it free!")
        confirm("Do you want delivery to your home?"); 
        prompt("Enter Your address")
    });


})