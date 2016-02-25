public class Core {
    public static void main(String[] args) {
        System.out.println("Début du programme");
        Script script = new Script("./coucou.sh");
        script.exec();
        TCPServer server = new TCPServer();
        System.out.println("Fin du programme");
    }
}