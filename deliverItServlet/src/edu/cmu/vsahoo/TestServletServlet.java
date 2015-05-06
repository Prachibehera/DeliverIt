package edu.cmu.vsahoo;

import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.URL;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.net.ssl.HttpsURLConnection;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class TestServletServlet extends HttpServlet {

	private String API_KEY = "AIzaSyCB3TeLDpH8QULyn6toVjo6vMjVRtgOZeA";
	private String Table_ID = "1d1Iz0WVqVzHBTBu6qUnpClgqCf8Z3p9cZTTxnbge";
	private String ACCESS_TOKEN = "ya29.YwGnkfmPXetWypgO8C044vSfixcy6e_AqJ7-3da-1gPqbjXtdQGgkrv2f24mQhS80TVq3dj3ykjrAg";

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		// get all the parameters
		String order_id = request.getParameter("order_id");
		String customer_name = request.getParameter("customer_name");
		String customer_location = request.getParameter("customer_location");
		String customer_phone = request.getParameter("customer_phone");
		String restaurant_name = request.getParameter("restaurant_name");
		String restaurant_location = request
				.getParameter("restaurant_location");

		PrintWriter pw = response.getWriter();

		String query = "INSERT%20INTO%201d1Iz0WVqVzHBTBu6qUnpClgqCf8Z3p9cZTTxnbge%20(order_id,customer_name,customer_location,customer_phone,restaurant_name,restaurant_location)%20VALUES("
				+ order_id
				+ ","
				+ customer_name
				+ ","
				+ customer_location
				+ ","
				+ customer_phone
				+ ","
				+ restaurant_name
				+ ","
				+ restaurant_location + ")";

		String urlString = "https://www.googleapis.com/fusiontables/v2/query?sql="
				+ query + "&access_token=" + ACCESS_TOKEN+"&key="+API_KEY;

		URL url = new URL(urlString);
		HttpsURLConnection con = null;
		try {
			con = (HttpsURLConnection) url.openConnection();
		} catch (IOException ex) {
			Logger.getLogger(TestServletServlet.class.getName()).log(
					Level.SEVERE, null, ex);
		}

		/**
		 * con.setRequestMethod("POST"); con.setRequestProperty("Authorization",
		 * "ya29.YwGnkfmPXetWypgO8C044vSfixcy6e_AqJ7-3da-1gPqbjXtdQGgkrv2f24mQhS80TVq3dj3ykjrAg"
		 * ); 
		 **/
		//con.setRequestProperty("Access-Control-Allow-Origin", "chrome-extension://fdmmgilgnpjigdojojpjoooidkmcomcm");
		con.setRequestMethod("POST");
		con.setRequestProperty("Content-Type", "application/json");
		con.setRequestProperty("Access-Control-Allow-Credentials", "true");
		con.setDoInput(true);
		con.setDoOutput(true);

		pw.write(con.getResponseCode());
		pw.close();

	}
}
