import java.net.*;
import java.io.*;

public class TCPServer {

    final static int port = 9632;
    final static String path = "RPi_utils/";

    public TCPServer() {
        try {
            ServerSocket socketServeur = new ServerSocket(port);
            System.out.println("Starting server");
            String response = "";
            Script script;

            while (true) {
                Socket socketClient = socketServeur.accept();
                String message = "";

                System.out.println("Connection from : "+socketClient.getInetAddress());

                BufferedReader in = new BufferedReader(new InputStreamReader(socketClient.getInputStream()));
                PrintStream out = new PrintStream(socketClient.getOutputStream());
                message = in.readLine();
                

                if(message.equals("switchOff_4")){
                    response = "Switch 4 Off";
                    System.out.println("Switch 4 off");
                    script = new Script(path+"codesend 1119508");
                    script.sudoExec();
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
