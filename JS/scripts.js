

function Placeorder(size,crust,topping,number){
    this.size=pizzasize;
    this.crust=pizzacrust;
    this.topping=pizzatopping;
    this.number=pizzanumber;
};

Placeorder.prototype.summary=function(){
    return "size" +this.size + "crust" + this.crust +"topping" + this.topping + "number" + this.number;
}

//User Interface

$(document).ready(function(){

    $("form#fom").on("submit",function(){
        event.preventDefault();
        
        var pizsize=$("#saiz").value();
        var pizcrust=$("#crust").value();

        var newOrder = new Placeorder(pizsize,pizcrust);

        $("ul#your-order").append("<li><span>" + newOrder.size + newOrder.crust +"</span></li>");


    });

    $("#button").on("click",function(){
        alert("You can choose your pizza be delivered at home at a cost 500/= or come pick it free!")
        prompt("Do you want delivery to your home?"); 
    });


})