import java.net.*;
import java.io.*;

public class TCPServer {

    final static int port = 9632;

    public TCPServer() {
        try {
            ServerSocket socketServeur = new ServerSocket(port);
            System.out.println("Starting server");

            while (true) {
                Socket socketClient = socketServeur.accept();
                String message = "";
                String response = "";

                System.out.println("Connection from : "+socketClient.getInetAddress());

                BufferedReader in = new BufferedReader(new InputStreamReader(socketClient.getInputStream()));
                PrintStream out = new PrintStream(socketClient.getOutputStream());
                message = in.readLine();
                

                if(message.equals("switchOn_1")){
                    response = "Switch 1 On";
                    System.out.println("Switch 1 on");
                }
                else {
                    response = "Unknown command";
                }
                out.println(response);
                //System.out.println(message);
                
                socketClient.close();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
