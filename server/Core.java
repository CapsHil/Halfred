public class Core {

	public final static String version = "0.1";
	public final static String lastVersionInfo = "Allow to control switch trough TCP socket";
	public static String logLevel = "mute";

    public static void main(String[] args) {
    	if(args.length > 0) {
    		for(int i=0; i<args.length; i++) {
    			if(args[i].equals("-v")) {
    				Log.print("Halfred Core - version "+version);
    				Log.print(lastVersionInfo+"\n");
			        Runtime.getRuntime().exit(0);
    			}
    			else if(args[i].equals("--verbose"))
    				logLevel = "verbose";
    			else if(args[i].equals("--debug"))
    				logLevel = "debug";
    			else if(args[i].equals("-h")) {
    				printHelpMessage();
    				Runtime.getRuntime().exit(0);
				}
			}
    	}
        printWelcomeMessage();
        TCPServer server = new TCPServer();
    }

    private static void printWelcomeMessage() {
    	Log.printDate();
    	Log.print("*****");
    	Log.print("Halfred Core");
    	Log.print("version "+version);
    }

    private static void printHelpMessage() {
    	Log.print(" Halfred Core - version "+version);
    	Log.print("\n-h : print help\n");
    	Log.print("-v : print version\n");
    	Log.print("--verbose : set log level to verbose\n");
    	Log.print("--debug : set log level to debug\n");
    }
}
