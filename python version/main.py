import random

def main_screen():
    print("Welcome to the multiplication table game!")
    print("Please select a level:")
    print("1. Level 1: Count the boxes")
    print("2. Level 2: Let's go on an Multiplication adventure")
    print("3. Level 3: Ultimate Test for Multiplication Table")
    print("4. Exit")

    user_input = input("Enter your choice: ")

    if user_input == "1":
        level_one()
    elif user_input == "2":
        level_two()
    elif user_input == "3":
        level_three()
    elif user_input == "4":
        print("Goodbye!")
        print("Exiting the program...")

def level_one():
    # Ask total of ten questions to the user

    counter = 0

    for i in range(10):

        # Generate a random number for the first number from the range 1 to 10
        first_number = random.randint(1, 10)
        # Generate a random number for the second number from the range 1 to 10
        second_number = random.randint(1, 10)

        # Calculate the answer
        answer = first_number * second_number

        # Print the question
        print(f"There are {first_number} boxes horizontally and {second_number} boxes vertically. How many boxes are there in total?")
        
        # Draw the boxes for first_number amount horizontally and second_number amount vertically
        for j in range(second_number):
            for k in range(first_number):
                print("[]", end="")
            print()
        
        # Get the user input
        user_input = int(input("Answer: "))

        # Check if the user input is correct
        if user_input == answer:
            counter += 1
            print("Correct!")
        else:
            print("Incorrect!")
    
    print(f"You got {counter} out of 10 questions correct!")

    # Ask the user if they want to play again
    play_again = input("Do you want to play again? (yes/no): ")

    if play_again == "yes":
        level_three()
    else:
        print("Goodbye!")
        # Go back to the main screen
        main_screen()


def level_two():
    # Generate a board that goes from 1 to 200.
    # The user will start at 1 and will have to reach 200 by only moving horizontally. 
    # The user can get a role of dice if they get the multiplication right.
    # If the user get an incorrect answer, they will role a dice and the amount will go backwards.

    # Explain the story to the user
    print("Welcome to the Multiplication Adventure!")
    print("You are at position 1 and you need to reach 200.")
    print("In order to move, you need to answer the multiplication question correctly.")
    print("If you answer correctly, you will roll a dice and move that many steps.")
    print("If you answer incorrectly, you will roll a dice and move backwards that many steps.")
    print("Good luck!")

    # Start the user at 1
    user_position = 1

    while user_position < 200:
        # Generate a random number for the first number from the range 1 to 10
        first_number = random.randint(1, 10)
        # Generate a random number for the second number from the range 1 to 10
        second_number = random.randint(1, 10)

        # Calculate the answer
        answer = first_number * second_number

        # Print the question
        print(f"You are at position {user_position}.")
        print(f"{first_number} * {second_number} = ?")

        # Get the user input
        user_input = int(input("Answer: "))

        # Check if the user input is correct
        if user_input == answer:
            print("Correct!")
            dice_roll = random.randint(1, 6)
            print(f"You rolled a {dice_roll}.")
            user_position += dice_roll
        else:
            print("Incorrect!")
            print("Rolling the dice...")
            dice_roll = random.randint(1, 6)
            print(f"You rolled a {dice_roll}.")
            user_position -= dice_roll
    
    print("Congratulations! You reached 200!")

    # Ask the user if they want to play again
    play_again = input("Do you want to play again? (yes/no): ")

    if play_again == "yes":
        level_two()
    else:
        print("Goodbye!")
        # Go back to the main screen
        main_screen()


def level_three():

    # Ask total of ten questions to the user

    counter = 0

    for i in range(10):
    
        # Generate a random number for the first number from the range 1 to 10
        first_number = random.randint(1, 10)
        # Generate a random number for the second number from the range 1 to 10
        second_number = random.randint(1, 10)

        # Calculate the answer
        answer = first_number * second_number

        # Print the question
        print(f"{first_number} * {second_number} = ?")

        # Get the user input
        user_input = int(input("Answer: "))

        # Check if the user input is correct
        if user_input == answer:
            counter += 1
            print("Correct!")
        else:
            print("Incorrect!")
    
    print(f"You got {counter} out of 10 questions correct!")

    # Ask the user if they want to play again
    play_again = input("Do you want to play again? (yes/no): ")

    if play_again == "yes":
        level_three()
    else:
        print("Goodbye!")
        # Go back to the main screen
        main_screen()
    

if __name__ == "__main__":
    main_screen()