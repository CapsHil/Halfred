public class ClockThread extends Thread {

   private Clock clock;

   public ClockThread(Clock clock) {
      this.clock = clock;
   }

   public void run() {
      System.out.println("Clock enabled");
      while(true) {
         if(clock.isRinging()) {
            System.out.println("ALERT !");
            Audio alarm = new Audio("file.wma");
            alarm.run();
         }
         else 
            System.out.println("...");
         try {
            Thread.sleep(60000);
         } catch(Exception e) {
            System.out.println(e);
         }

      }
   }
}
