<%@ WebHandler Language="C#" Class="RequestHandler" %>

public class RequestHandler : System.Web.IHttpHandler
{
  public bool IsReusable
  {
    get { return false; }
  }

  public void ProcessRequest(System.Web.HttpContext context)
  {
    TwitterProxy.TwitterOAuthHandler parser = new TwitterProxy.TwitterOAuthHandler();
    parser.ProcessRequest(context);
    parser = null;
  }
}
