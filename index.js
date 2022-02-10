$(document).ready(function() {
			

	$.get('test.csv', function(csv) {
			$('#container').highcharts({
					chart: {
						type: 'column'
					},
					data: {
							csv: csv
					},
					title: {
				text: 'Fruit Consumption'
			},
			yAxis: {
				title: {
					text: 'Units'
				}
			}
			});
	});
	
	
}); 


