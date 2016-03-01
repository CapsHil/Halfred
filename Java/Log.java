import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class Log {

	public static void print(String log, String level) {

		Calendar cal = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");

		if(Core.logLevel.equals(level) || Core.logLevel.equals("debug"))
			System.out.println(sdf.format(cal.getTime())+": "+log);
	}

	public static void print(String log) {
		System.out.println(log);
	}

	public static void printDate() {
		Date time = new Date();
		System.out.println(time);
	}
}