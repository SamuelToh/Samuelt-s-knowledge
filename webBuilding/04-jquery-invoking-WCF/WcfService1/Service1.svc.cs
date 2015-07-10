using System;
using System.ServiceModel.Activation;
using Newtonsoft.Json;

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
    ///  This include the actual project name and namespaces.
    ///
    /// </summary>
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
    public class Service1 : IService1
    {
        public string CreateSubscriber(string tenantName, string subscriberName)
        {
            try
            {
                /*************************************************
                 * The actual coding here has been censored away.
                 ************************************************/
                return "CUSTOMER CREATED!";
            }
            catch (Exception e)
            {
                return JsonConvert.SerializeObject(e, Formatting.Indented); 
            }
        }

        public string DeployCatalog(string tenantName)
        {
            try
            {
                /*************************************************
                 * The actual coding here has been censored away.
                 ************************************************/
                return "CATALOG DEPLOYED!";
            }
            catch (Exception e)
            {
                return JsonConvert.SerializeObject(e, Formatting.Indented); 
            }
        }

        public string SellProducts(string tenantName, string accountName, string svc1Name, string svc2Name)
        {
            try
            {
                /*************************************************
                 * The actual coding here has been censored away.
                 ************************************************/
                return "PRODUCT HAS BEEN SOLD!";
            }
            catch (Exception e)
            {
                return JsonConvert.SerializeObject(e, Formatting.Indented); 
            }
        }

        public string BillSubscriber(string tenantName)
        {
            string billrunMessage = string.Empty;
            try
            {
                /*************************************************
                 * The actual coding here has been censored away.
                 ************************************************/
                return "BILLING API INVOKED!";
            }
            catch (Exception e)
            {
                billrunMessage += "\nError!";
                billrunMessage += JsonConvert.SerializeObject(e, Formatting.Indented);
            }
            return billrunMessage;
        }

        public string GetAccountBalance(string tenantName, string accountName)
        {
            try
            {
                /*************************************************
                 * The actual coding here has been censored away.
                 ************************************************/
                return "ACCOUNT BALANCE API INVOKED!";
            }
            catch (Exception e)
            {
                return JsonConvert.SerializeObject(e, Formatting.Indented);
            }
        }

        public string GetAccountDetails(string tenantName, string accountName)
        {   
            try
            {
                /*************************************************
                 * The actual coding here has been censored away.
                 ************************************************/
                return "ACCOUNT DETAILS API INVOKED!";
            }
            catch (Exception e)
            {
                return JsonConvert.SerializeObject(e, Formatting.Indented);
            }
        }

        /*************************************************
         * The actual coding here has been censored away.
         ************************************************/

    }
}
