package educanet;

import java.util.Scanner;

public class Cara {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Jak dlouhou caru chces vykreslit?");

        int x = sc.nextInt();

        for(int i = 0; i < x; i++){
            System.out.print(".");
        }
    }
}
