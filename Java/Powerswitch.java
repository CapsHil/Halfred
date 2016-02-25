public class Powerswitch {

	private String name, id;
	private Script script;
    	final static String path = "RPi_utils/";
	private String switch4Off = "1119508";
	private String switch4On = "1119505";

	public Powerswitch(String name, String id) {
		this.name = name;
		this.id = id;
	}

	public void on() {
		System.out.println(name+" is now on");
		script = new Script(path+"codesend "+switch4On);
		script.sudoExec();
	}

	public void off() {
		System.out.println(name+" is now off");
		script = new Script(path+"codesend "+switch4Off);
		script.sudoExec();
	}
}
