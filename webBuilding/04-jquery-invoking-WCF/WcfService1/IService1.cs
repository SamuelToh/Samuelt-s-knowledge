using System.ServiceModel;
using System.ServiceModel.Web;

namespace WcfService1
{
    /// <summary>
    /// Reason for building this:
    /// 
    /// 1) For the purpose of learning responsive web building. 
    /// 
    /// 2) I'm hoping to spice up my agile team's sprint demonstration meeting by building a MOCK UI
    ///    that can better show case my team's feature work to the project managers and stakeholders. on what my team was
    ///    intending to deliver the entire PI.
    /// 
    /// ** This work was built during my own spare time **
    /// 
    /// This actual coding for this WCF service are linked up with CSGI's product APIs as I do not own any
    /// rights to those libraries I have therefore censored / removed away all codes that are relevant to CSGI's product. 
    /// 
    /// This include the actual project name and namespaces.
    /// </summary>
    [ServiceContract]
    public interface IService1
    {
        [OperationContract]
        [WebInvoke(Method = "POST", 
            RequestFormat = WebMessageFormat.Json, 
            ResponseFormat = WebMessageFormat.Json,
            UriTemplate = "demoSubscriber/Subscriber?tenantName={tenantName}&subscriberName={subscriberName}"
            )]
        string CreateSubscriber(string tenantName, string subscriberName);

        [OperationContract]
        [WebInvoke(Method = "POST", 
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
            UriTemplate = "deployCatalog/Tenant?Name={tenantName}")]
        string DeployCatalog(string tenantName);

        [OperationContract]
        [WebInvoke(Method = "POST", 
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
            UriTemplate = "orderActivation/Order?TenantName={tenantName}&Account={accountName}&Service1={svc1Name}&Service2={svc2Name}")]
        string SellProducts(string tenantName, string accountName, string svc1Name, string svc2Name);

        [OperationContract]
        [WebInvoke(Method = "POST", 
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
            UriTemplate = "billing/Tenant?Name={tenantName}")]
        string BillSubscriber(string tenantName);

        [OperationContract]
        [WebInvoke( 
            Method = "GET", 
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
            UriTemplate = "balance/Tenant?Name={tenantName}&accountName={accountName}")]
        string GetAccountBalance(string tenantName, string accountName);

        [OperationContract]
        [WebInvoke(Method = "GET", 
            RequestFormat = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json,
            UriTemplate = "details/Tenant?Name={tenantName}&accountName={accountName}")]
        string GetAccountDetails(string tenantName, string accountName);
    }
}
