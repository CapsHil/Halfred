import java.net.*;
import java.io.*;

public class TCPServer {

    final static int port = 9632;

    public TCPServer() {
        try {
            ServerSocket socketServeur = new ServerSocket(port);
            Log.print("Starting server", "verbose");
            String response = "";
            Powerswitch switch4 = new Powerswitch("Bureau", 4);

            while (true) {
                Socket socketClient = socketServeur.accept();
                String message = "";

                Log.print("Connection from : "+socketClient.getInetAddress(), "debug");

                BufferedReader in = new BufferedReader(new InputStreamReader(socketClient.getInputStream()));
                PrintStream out = new PrintStream(socketClient.getOutputStream());
                message = in.readLine();
                
                if(message.equals("switchOn_4")) {
                    response = "Switch 4 On";
                    switch4.on();
                } else if(message.equals("switchOff_4")) {
                    response = "Switch 4 Off";
                    switch4.off();
                } else
                    response = "Unknown command";
                out.println(response);
                Log.print(message, "debug");
                
                socketClient.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
