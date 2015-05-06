package edu.cmu.vsahoo;

import javax.servlet.http.HttpServlet;

import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.HashMap;

import javax.servlet.http.*;

@SuppressWarnings("serial")
public class LogInServlet extends HttpServlet {

	private HashMap<String, Login> loginDetails = new HashMap<String, Login>();
	private HashMap<String, Restaurant> restaurantDetails = new HashMap<String, Restaurant>();
	private HashMap<String, Agent> agentDetails = new HashMap<String, Agent>();

	Login restaurant_1 = new Login("yuva", 1);
	Login restaurant_2 = new Login("mint", 1);
	Login agent_1 = new Login("vsahoo", 0);
	Login agent_2 = new Login("dparames", 0);

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws IOException {

		loginDetails.put("yuva@deliverit.com", restaurant_1);
		loginDetails.put("mint@deliverit.com", restaurant_2);
		loginDetails.put("vsahoo@deliverit.com", agent_1);
		loginDetails.put("dparames@deliverit.com", agent_2);

		String userID = request.getParameter("email");
		String password = request.getParameter("password");

		PrintWriter pw = response.getWriter();

		if (loginDetails.containsKey(userID)) {

			Login loginObj = loginDetails.get(userID);

			if (loginObj.getPassword().equals(password))

			{
				response.setContentType("text/plain");
				pw.write(String.valueOf(loginObj.getFlag()));
				pw.close();
			}

			else {

				response.setContentType("text/plain");
				pw.write("Wrong Password");
				pw.close();
			}

		}

		response.setContentType("text/plain");
		pw.write("User Not Found");
		pw.close();
	}


	
	public void doPUT(HttpServletRequest request, HttpServletResponse response)
			throws IOException {

		int flag = Integer.parseInt(request.getParameter("flag"));

		if (flag == 1) {

			String restaurantName = request.getParameter("restaurantName");
			String userID = request.getParameter("email");
			String password = request.getParameter("password");
			String address = request.getParameter("address");
			String phoneNumber = request.getParameter("phoneNumber");

			Restaurant restObj = new Restaurant(restaurantName, address,
					phoneNumber);
			Login loginObj = new Login(password, flag);
			loginDetails.put(userID, loginObj);
			restaurantDetails.put(userID, restObj);

			response.setContentType("text/plain");
			PrintWriter out = new PrintWriter(new OutputStreamWriter(
					response.getOutputStream()));
			try {
				out.print("Success");
				out.flush();
			} catch (Exception e) {
				e.printStackTrace();
				out.print("Failed");
				out.flush();
			}
		}

		else if (flag == 0) {

			String firstName = request.getParameter("firstName");
			String lastName = request.getParameter("lastName");
			String userID = request.getParameter("email");
			String password = request.getParameter("password");
			String address = request.getParameter("address");
			String phoneNumber = request.getParameter("phoneNumber");

			Agent agentObj = new Agent(firstName, lastName, address,
					phoneNumber);
			Login loginObj = new Login(password, flag);
			loginDetails.put(userID, loginObj);
			agentDetails.put(userID, agentObj);
			response.setContentType("text/plain");
			PrintWriter out = new PrintWriter(new OutputStreamWriter(
					response.getOutputStream()));
			try {
				out.print("Success");
				out.flush();
			} catch (Exception e) {
				e.printStackTrace();
				out.print("Failed");
				out.flush();
			}

		}

	} 

}
