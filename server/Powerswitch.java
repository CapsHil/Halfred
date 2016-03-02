import java.util.ArrayList;

public class Powerswitch {

	private String name;
	private int id;
	private Script script;
    final static String path = "RPi_utils/";
	private ArrayList<String> switchIdOn, switchIdOff;

	public Powerswitch(String name, int id) {
		this.name = name;
		this.id = id;
		switchIdOn = new ArrayList<String>();
		switchIdOff = new ArrayList<String>();
		switchIdOn.add("on1");
		switchIdOn.add("on2");
		switchIdOn.add("on3");
		switchIdOn.add("1119505");
		switchIdOff.add("off1");
		switchIdOff.add("off2");
		switchIdOff.add("off3");
		switchIdOff.add("1119508");
	}

	public void on() {
		script = new Script(path+"codesend "+switchIdOn.get(this.id-1));
		if(script.sudoExec())
			Log.print(name+" is now on", "verbose");
		else
			Log.print("Failure", "verboses");
	}

	public void off() {
		script = new Script(path+"codesend "+switchIdOff.get(this.id-1));
		if(script.sudoExec())
			Log.print(name+" is now off", "verbose");
		else
			Log.print("Failure", "verboses");
	}
}
