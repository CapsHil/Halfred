import java.util.Date;
import java.util.Calendar;
import java.util.GregorianCalendar;

public class Clock {
   
   private int minute = 0;
   private int hour = 0;

   public Clock(int hour, int minute) {
      set(hour, minute);
   }

   public void set(int hour, int minute) {
      setMinute(minute);
      setHour(hour);
   }

   private void setMinute(int minute) {
      this.minute = minute;
   }

   private void setHour(int hour) {
      this.hour = hour;
   }

   public boolean isRinging() {
      Date date = new Date();
      Calendar calendar = GregorianCalendar.getInstance();
      calendar.setTime(date);
      int currentHour = calendar.get(Calendar.HOUR_OF_DAY);
      int currentMinute = calendar.get(Calendar.MINUTE);
      if(currentHour == hour) {
         if(currentMinute == minute) {
            return true;
         }
      }
      return false;
   }
}
