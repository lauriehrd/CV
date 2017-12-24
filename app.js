var td = (function(){


	var items;

	function doScroll(){

		console.log(this);
		var cible, elementCible;
		cible = this.getAttribute ("data-target");
		elementCible = document.getElementById(cible);
		window.smoothScroll(elementCible, 500);
	}


	function ecouterClicks(){

		var i;
		for ( i= 0; i< items.length; i +=1){
			items[i].onclick = doScroll;
			}
		}


	window.onload = function(){

		items = document.querySelectorAll("#nav .item");
		console.log(items);
		ecouterClicks();
	};
}());