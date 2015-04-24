package com.server.servercode;

import java.io.IOException;

import java.io.PrintWriter;
import java.util.HashMap;

import javax.servlet.http.*;

@SuppressWarnings("serial")
public class DeliverITServerServlet extends HttpServlet {

	private HashMap<String, Login> loginDetails = new HashMap<String, Login>();
	private HashMap<String, Restaurant> restaurantDetails = new HashMap<String, Restaurant>();
	private HashMap<String, Agent> agentDetails = new HashMap<String, Agent>();

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		// resp.setContentType("text/plain");
		// resp.getWriter().println("Hello, world");

		String userID = request.getParameter("UserID");
		String password = request.getParameter("Password");

		if (loginDetails.containsKey(userID)) {
			Login loginObj = loginDetails.get(userID);
			if (loginObj.getPassword().equals(password)) {

				response.setContentType("text/xml");
				PrintWriter pw = response.getWriter();
				pw.write(loginObj.loginXML());
				pw.close();

			}

			else {

				response.setStatus(405);
			}

		}
	}

	public void doPut(HttpServletRequest request, HttpServletResponse response)
			throws IOException {

		int flag = Integer.parseInt(request.getParameter("loginAs"));

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

		}

	}

}
