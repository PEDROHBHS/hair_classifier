function pingItjs(ipAddress) { 
    var oShell = new ActiveXObject("wscript.shell");  
    oShell.Run("cmd.exe /k ping" + ipAddress);  
    } 