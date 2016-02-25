public class Powerswitch {

	private String name, id;
	private Script script;

	public Powerswitch(String name, String id) {
		this.name = name;
		this.id = id;
	}

	public void on() {
		script = new Script("./power.sh "+id+" 1");
	}

	public void off() {
		script = new Script("./power.sh "+id+" 0");
	}
}