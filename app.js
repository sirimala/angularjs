(function() {
var app = angular.module("store", []);

app.controller("StoreController", function(){
	this.products = gems;
});

var gems = [
	{
		name: "Dodecahendron",
		price: "2.95",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit tempore optio quae expedita maiores error repellendus ipsam, accusamus necessitatibus voluptas molestiae ipsum quas ducimus? Perspiciatis, sapiente temporibus vitae ex tempore!",
		canPurchase: true,
		soldOut: false,
	},
	{
		name: "Pentagonal Gem",
		price: "5.95",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit tempore optio quae expedita maiores error repellendus ipsam, accusamus necessitatibus voluptas molestiae ipsum quas ducimus? Perspiciatis, sapiente temporibus vitae ex tempore!",
		canPurchase: false,
		soldOut: false,
	}
];

})();