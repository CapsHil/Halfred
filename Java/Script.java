import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Script {

	private String scripts;

	private static BufferedReader getOutput(Process p) {
        return new BufferedReader(new InputStreamReader(p.getInputStream()));
    }

    private static BufferedReader getError(Process p) {
        return new BufferedReader(new InputStreamReader(p.getErrorStream()));
    }

    public Script(String scripts) {
    	this.scripts = scripts;
    }

    public void exec() {
    	try {
            Process process = Runtime.getRuntime().exec(scripts);
            BufferedReader output = getOutput(process);
            BufferedReader error = getError(process);
            String line = "";

            while ((line = output.readLine()) != null)
                System.out.println(line);

            while ((line = error.readLine()) != null)
                System.out.println(line);

            process.waitFor();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    public void sudoExec() {
        try {
            Process process = Runtime.getRuntime().exec("sudo "+scripts);
            BufferedReader output = getOutput(process);
            BufferedReader error = getError(process);
            String line = "";

            while ((line = output.readLine()) != null)
                System.out.println(line);

            while ((line = error.readLine()) != null)
                System.out.println(line);

            process.waitFor();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

}