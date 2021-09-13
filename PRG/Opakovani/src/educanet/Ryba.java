package educanet;

import java.util.Scanner;

public class Ryba {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Kolik ryb si date k veceri?");

        int x = sc.nextInt();

        for(int i = 0; i < x; i++){
            System.out.println("<° )))-<");
        }
    }
}