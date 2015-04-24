package com.server.servercode;

public class Login 
{
    private String password;
    private int flag;
    
    public Login(String password,int flag)
    {
    	this.password = password;
    	this.flag = flag;
    	
    }

	public String getPassword() {
		return password;
	}

	public int  getFlag() {
		return flag;
	}
    
	public String loginXML() {
        
		StringBuffer xml = new StringBuffer();

        xml.append("<Login>");
        xml.append("\n");
        xml.append("<Message>" + "Success" + "</Message>");
        xml.append("\n");
        xml.append("<Flag>" + flag + "</Flag>");
        xml.append("</Login>");
        return xml.toString();

    }
}
