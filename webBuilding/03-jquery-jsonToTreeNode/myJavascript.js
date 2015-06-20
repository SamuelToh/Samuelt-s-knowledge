$(document).ready(function() {
    var data = [
    {
        label: 'XYZ Cable, Home Phone & Mobile Package ', id: 1,
        children: [
            { 
            	label: 'Cable', id: 2, type: 'tv',
                children: [ 
                    { label: 'Premium Channels', id: 3, type: 'tv' },
                    { label: 'Basic 5 Channels', id: 4, type: 'tv' },
                    { label: 'The Silver Channels', id: 4, type: 'tv' },
                    { label: 'The Ultimate Channels', id: 5, type: 'tv' }
                ]
            },
            { 
            	label: 'Home Phone', id: 6, type: 'phone',
                children : [
                    { label: 'Unlimited Talks', id: 7, type: 'phone', },
                    { label: 'Basic talks', id: 8, type: 'phone', }
                ]
            }
        ]
    },
    {
        label: 'node2', id: 4,
        children: [
            { label: 'child3', id: 5 }
        ]
    }];

    $('#tree1').tree({
        data: data,
        onCreateLi: function(node, $li) {
        	var image = "product.png";
        	if (node.type === "tv") 
        		image = "tv-clipart-television.png";
        	else if (node.type === "phone")
                image = "phone.png"
        	$li.find('.jqtree-element').prepend("<img src=\"" + image + "\">");
        }
    });
});