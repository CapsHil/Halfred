import java.net.*;
import java.io.*;

public class TCPClient {

    final static int port = 9632;

    public static void main(String[] args) {

        Socket socket;
        DataInputStream userInput;
        PrintStream theOutputStream;

        try {
            InetAddress serveur = InetAddress.getByName(args[0]);
            socket = new Socket(serveur, port);

            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintStream out = new PrintStream(socket.getOutputStream());

            out.println(args[1]);
            Log.print(in.readLine());

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}