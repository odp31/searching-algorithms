// technique used to map keys to indicies in a hash table
// allows for efficient retrieval of elements based on their keys

import java.util.HashMap;
import java.util.Map;

public class HashingExample {
  public static void main(String[] args) {
    Map<String, Integer> phonebook = new HashMap<>();
    phonebook.put("Alice", 123456);
    phonebook.put("Bob", 789012);
    phonebook.put("Charlie", 345678);
    // search for a phone number
    String name = "Bob";
    Integer phoneNumber = phonebook.get(name);

    if(phoneNumber != null) {
      System.out.println("phone number for" + name + ":" + phoneNumber);
    } else {
      System.out.println("name not found");
    }
  }
}
