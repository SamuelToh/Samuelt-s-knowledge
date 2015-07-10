$(document).ready(function() {
    $('#demoSubscriberBtn').click(function () {
        $('#svSubscriberTxtArea').val("");  
        $('.demoTenantName').val($('#TenantName').val());
        $.ajax({  
            type: "POST",    
            url: "http://localhost:56496/Service1.svc/demoSubscriber/Subscriber?tenantName="  + $('#TenantName').val() + "&subscriberName=" + $('#SubscriberName').val(),  
            contentType: 'application/json; charset=utf-8', 
            dataType: "json",
            success: function (data) {
                $('#svSubscriberTxtArea').val(data);
                var jsonObj = $.parseJSON(data);
                var subscriber = jsonObj.Subscriber;
                //$('#SubscriberId').val(subscriber.ExternalReferenceId);
                $('.demoSubAccountName').val(subscriber.ExternalReferenceId);
            },
            error: function (xhr) {  
                alert('oops! error:' + JSON.stringify(xhr));  
            }  
        }); 
    });
    // Catalog demo
    $('#demoCatalogBtn').click(function () {
        $('#svCatalogTxtArea').val("");        
        $.ajax({  
            type: "POST",    
            url: "http://localhost:56496/Service1.svc/deployCatalog/Tenant?Name="  + $('.demoTenantName').val(),  
            contentType: 'application/json; charset=utf-8', 
            dataType: "json",
            success: function (data) {
                $('#svCatalogTxtArea').val(data);
            },
            error: function (xhr) {  
                alert('oops! error:' + JSON.stringify(xhr));  
            }  
        }); 
    });
    // Order demo
    $('#demoOrderBtn').click(function () {
        $('#svOrderTxtArea').val("");
        $.ajax({  
            type: "POST",    
            url: "http://localhost:56496/Service1.svc/orderActivation/Order?TenantName="  + $('.demoTenantName').val() 
            + "&Account=" + $('.demoSubAccountName').val() + '&Service1=' + $('.demoService1Name').val() +
              '&Service2=' + $('.demoService3Name').val(),  
            contentType: 'application/json; charset=utf-8', 
            dataType: "json",
            success: function (data) {
                $('#svOrderTxtArea').val(data);
                var jsonObj = $.parseJSON(data);
                var services = jsonObj.Services;
                var service1 = services[0];
                $('#txtBaseProdInstance').val(service1.ExternalReferenceId);
            },
            error: function (xhr) {  
                alert('oops! error:' + JSON.stringify(xhr));  
            }  
        }); 
    });
    // Billing demo
    $('#demoBillingBtn').click(function () {
        $('#svBillTxtArea').val("");
        $.ajax({  
            type: "POST",    
            url: "http://localhost:56496/Service1.svc/billing/Tenant?Name="  + $('.demoTenantName').val(),
            contentType: 'application/json; charset=utf-8', 
            dataType: "json",
            success: function (data) {
                $('#svBillTxtArea').val(data);
            },
            error: function (xhr) {  
                alert('oops! error:' + JSON.stringify(xhr));  
            }  
        }); 
    });
    // Account balance demo
    $('#demoAccBalanceBtn').click(function () {
        $('#svAccountBalanceTxtArea').val("");
        alert('e');
        $.ajax({  
            type: "GET",    
            url: "http://localhost:56496/Service1.svc/balance/Tenant?Name="  + $('.demoTenantName').val() + '&accountName=' + $('.demoSubAccountName').val(),
            contentType: 'application/json; charset=utf-8', 
            dataType: "json",
            success: function (data) {
                $('#svAccountBalanceTxtArea').val(data);
                var jsonObj = $.parseJSON(data);
                $('#FetchedTotal').val(jsonObj.Total);
                $('#FetchedBalance').val(jsonObj.Balance);
                $('#FetchedPastDue').val(jsonObj.PastDue);
                $('#FetchedDelinqA').val(jsonObj.DelinquencyAmount);
                $('#FetchedDelinqD').val(jsonObj.DelinquencyDays);
                $('#FetchedNextDue').val(jsonObj.DueDate);
            },
            error: function (xhr) {  
                alert('oops! error:' + JSON.stringify(xhr));  
            }  
        }); 
    });
    // Account detail demo
    $('#demoAccDetailBtn').click(function () {
        $('#svAccountDetailsTxtArea').val("");
        $.ajax({  
            type: "GET",    
            url: "http://localhost:56496/Service1.svc/details/Tenant?Name="  + $('.demoTenantName').val() + '&accountName=' + $('.demoSubAccountName').val(),
            contentType: 'application/json; charset=utf-8', 
            dataType: "json",
            success: function (data) {
                $('#svAccountDetailsTxtArea').val(data);
                var jsonObj = $.parseJSON(data);

            },
            error: function (xhr) {  
                alert('oops! error:' + JSON.stringify(xhr));  
            }  
        }); 
    });

    /* pre load jqtree for catalog*/
    var data = 
      [ 
        {  "label":"Disney Phone Bundle",
           "children":[ 
              {
                "label": "Mickey Mouse Mobile",
                "type" : "mobileSvc",
                "children":[
                    { "label" : "Unlimited Use", "type": "unlimitedPlan", 
                      "children": [ { "label": "bbbbbbbb-bbbb-cccc-dddd-ff1234567891", "type":"recurringBRC" }]
                    },
                    { "label" : "Saver Plan", "type": "saverPlan",
                      "children": [ { "label": "bbbbbbbb-bbbb-cccc-dddd-ff1234567893", "type":"recurringBRC" }]
                    }
                ]
              },
              {
                "label": "Disney Cable",
                "type": "cableTV",
                "children":[
                    { "label" : "Disney Super Cartoons", "type": "disneyCartoonOP",
                       "children": [ { "label": "bbbbbbbb-bbbb-cccc-dddd-ff1234567892", "type":"recurringBRC" }] 
                    }
                ]
              }]
        }
      ];
    $('#productCatalogTree').tree({
        data: data,
        onCreateLi: function(node, $li) {
            var image = "./images/product.png";
            
            if (node.type === "cableTV") 
                image = "./images/tv-clipart-television.png";
            else if (node.type === "mobileSvc")
                image = "./images/mobilePhone.png"
            else if (node.type ==="disneyCartoonOP")
                image = "./images/disney.png"
            else if (node.type ==="saverPlan")
                image = "./images/saverPlan.png"
            else if (node.type ==="unlimitedPlan")
                image = "./images/serviceItem.png"
            else if (node.type ==="usageBRC")
                image = "./images/usage.png"
            else if (node.type ==="recurringBRC")
                image = "./images/recurring.png"

            $li.find('.jqtree-element').prepend("<img src=\"" + image + "\">");
        }
    });

    /* pre-load jqtree for selected offering tree */
    var selectedOfferingData = 
      [ 
        {  "label":"Disney Phone Bundle",
           "children":[ 
              {
                "label": "Mickey Mouse Mobile",
                "type" : "mobileSvc",
                "children":[
                    { "label" : "Unlimited Use", "type": "unlimitedPlan", 
                    },
                    { "label" : "Saver Plan", "type": "saverPlan",
                    }
                ]
              },
              {
                "label": "Disney Cable",
                "type": "cableTV",
                "children":[
                    { "label" : "Disney Super Cartoons", "type": "disneyCartoonOP",
                    }
                ]
              }]
        }
      ];
      $('#selectedOfferingTree').tree({
        data: selectedOfferingData,
        onCreateLi: function(node, $li) {
            var image = "./images/product.png";
            
            if (node.type === "cableTV") 
                image = "./images/tv-clipart-television.png";
            else if (node.type === "mobileSvc")
                image = "./images/mobilePhone.png"
            else if (node.type ==="disneyCartoonOP")
                image = "./images/disney.png"
            else if (node.type ==="saverPlan")
                image = "./images/saverPlan.png"
            else if (node.type ==="unlimitedPlan")
                image = "./images/serviceItem.png"
            else if (node.type ==="usageBRC")
                image = "./images/usage.png"
            else if (node.type ==="recurringBRC")
                image = "./images/recurring.png"

            $li.find('.jqtree-element').prepend("<img src=\"" + image + "\">");
        }
    });
    /* pre load jqtree for account detail*/
    var data = 
      [ 
        {  "label":"Disney Phone Bundle",
           "children":[ 
              {
                "label": "Mickey Mouse Mobile (81234567891)",
                "type" : "mobileSvc",
                "children":[
                    { "label" : "Unlimited Use 50$ (aaaaaaaa-bbbb-cccc-dddd-ff1234567891)", "type": "unlimitedPlan"},
                    { "label" : "Saver Plan", "type": "saverPlan" }
                ]
              },
              {
                "label": "Disney Cable (81234567892)",
                "type": "cableTV",
                "children":[
                    { "label" : "Disney Super Cartoons 2$ (aaaaaa-bbb-cccc-dddd-ff1234567893)", "type": "disneyCartoonOP" }
                ]
              }]
        }
      ];
    $('#productCatalogTreeInAccDetail').tree({
        data: data,
        onCreateLi: function(node, $li) {
            var image = "./images/product.png";
            
            if (node.type === "cableTV") 
                image = "./images/tv-clipart-television.png";
            else if (node.type === "mobileSvc")
                image = "./images/mobilePhone.png"
            else if (node.type ==="disneyCartoonOP")
                image = "./images/disney.png"
            else if (node.type ==="saverPlan")
                image = "./images/saverPlan.png"
            else if (node.type ==="unlimitedPlan")
                image = "./images/serviceItem.png"
            else if (node.type ==="usageBRC")
                image = "./images/usage.png"
            else if (node.type ==="recurringBRC")
                image = "./images/recurring.png"

            $li.find('.jqtree-element').prepend("<img src=\"" + image + "\">");
        }
    });
});