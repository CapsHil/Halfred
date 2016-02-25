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

                System.out.println("Connection from : "+socketClient.getInetAddress());

                BufferedReader in = new BufferedReader(new InputStreamReader(socketClient.getInputStream()));
                PrintStream out = new PrintStream(socketClient.getOutputStream());
                message = in.readLine();
                out.println(message);

                System.out.println(message);
                socketClient.close();
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}