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

    public boolean exec(boolean isSu) {
        String sudo;
        if(isSu)
           sudo = "sudo ";
        else
           sudo = "";
    	try {
            Process process = Runtime.getRuntime().exec(sudo+scripts);
            BufferedReader output = getOutput(process);
            BufferedReader error = getError(process);
            String line = "";

            while ((line = output.readLine()) != null)
                Log.print(line, "debug");

            while ((line = error.readLine()) != null)
                Log.print(line, "debug");

            process.waitFor();
            return true;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        } catch (InterruptedException e) {
            e.printStackTrace();
            return false;
        }
    }
}
