

var cy;
function mycy(){
 cy = cytoscape({
      	container: document.getElementById('cy'),
        layout: { name: 'preset' }
  	
	});

    
    $.ajax({ 	url: 'data.json',
		 async: false, 
		dataType: 'json'} 
	).success(function(data){
		cy.add (data.data);
        }).error(function(e){ alert("error:"+ e); });

}
