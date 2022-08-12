package group.agile.tech.bdddemo.common.cucumberforjava;

public class Checkout {
  private int runningTotal = 0;

  public final void add(final int count, final int price) {
    runningTotal += (count * price);
  }

  public final int total() {
    return runningTotal;
  }
}
