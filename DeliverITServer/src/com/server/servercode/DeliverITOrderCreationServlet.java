package com.server.servercode;

import java.io.IOException;


import java.io.PrintWriter;
import java.util.HashMap;

import javax.servlet.http.*;

@SuppressWarnings("serial")
public class DeliverITOrderCreationServlet extends HttpServlet {

	private HashMap<String, Login> orderDetails = new HashMap<String, Login>();
	

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		// resp.setContentType("text/plain");
		// resp.getWriter().println("Hello, world");
        
		
	}

	public void doPut(HttpServletRequest request, HttpServletResponse response)
			throws IOException {

		

	}

}
