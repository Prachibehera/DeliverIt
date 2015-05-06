package edu.cmu.deliverit;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.FilterOperator;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

@SuppressWarnings("serial")
public class DeliverItAgentServlet extends HttpServlet {

	private String API_KEY = "AIzaSyCB3TeLDpH8QULyn6toVjo6vMjVRtgOZeA";
	private String Table_ID = "1d1Iz0WVqVzHBTBu6qUnpClgqCf8Z3p9cZTTxnbge";
	private String reponseString;

	public void doGet(HttpServletRequest request, HttpServletResponse resp)
			throws IOException {

		String query = "SELECT*FROM%201d1Iz0WVqVzHBTBu6qUnpClgqCf8Z3p9cZTTxnbge";

		String urlString = "https://www.googleapis.com/fusiontables/v2/query?sql="
				+ query + "&key=" + API_KEY;

		resp.setContentType("text/json");

		
		try {

			PrintWriter pr = resp.getWriter();
			org.json.JSONObject json = JsonParser.readJsonFromUrl(urlString);

			JSONArray jsonMainArr = (JSONArray) json.get("rows");
			JSONObject finaljson = new JSONObject();

			finaljson.put("page", "pageValues");
			JSONArray jarr = new JSONArray();

			for (int i = 0; i < jsonMainArr.length(); i++) {

				JSONArray elements = (JSONArray) jsonMainArr.get(i);
				String order_id = (String) elements.get(0);
				String customer_name = (String) elements.get(1);
				String customer_location = (String) elements.get(2);
				String customer_phone = (String) elements.get(3);
				String restaurant_name = (String) elements.get(4);
				String restaurant_location = (String) elements.get(5);
				JSONObject obj = new JSONObject();
				obj.put("order_id", order_id);
				obj.put("customer_name", customer_name);
				obj.put("customer_location", customer_location);
				obj.put("customer_phone", customer_phone);
				obj.put("restaurant_name", restaurant_name);
				obj.put("restaurant_location", restaurant_location);
				
				jarr.put(obj);

			}

			finaljson.put("results", jarr);

			pr.write(finaljson.toString());
			pr.flush();

		} catch (JSONException e) {
			e.printStackTrace();
		}

	}
}
