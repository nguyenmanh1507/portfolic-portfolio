jQuery(document).ready(function($) {
	
	// owlcarousel
	$('#slideshow').owlCarousel({
		navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    navigationText: ['<i class="fa fa-angle-left fa-5x"></i>','<i class="fa fa-angle-right fa-5x"></i>']
	});

	// Filter portfolio
	$container = $('.portfolios');
	$container.isotope({
		itemSelector: '.filter-item'
	});

	var $filterButton = $('.filter-button');

	$filterButton.on('click', 'a', function(e){
		e.preventDefault();
		var $this = $(this);
		$filterButton.find('a').removeClass('active');
		$this.addClass('active');
		var filterValue = $this.data('filter');
  	$container.isotope({ filter: filterValue });
	});

});