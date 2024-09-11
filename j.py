import pyautogui
import time

# List of tab coordinates (replace with actual coordinates from your screen)
# You can find these using pyautogui.position() while hovering over each tab
tabs_coordinates = [
    (100, 50),  # Coordinates for the first tab
    (200, 50),  # Coordinates for the second tab
    (300, 50),  # Coordinates for the third tab
    # Add more tab coordinates if needed
]

# Give yourself time to set up the screen
time.sleep(5)

# Loop through tabs and switch every 5 seconds
for i in range(10):  # Adjust the range for the number of loops you want
    for tab in tabs_coordinates:
        # Click on the tab using the coordinates
        pyautogui.click(tab[0], tab[1])
        print(f"Switched to tab at {tab}")
        
        # Wait for 5 seconds before switching to the next tab
        time.sleep(5)

        # Scroll down after clicking the tab (optional)
        pyautogui.scroll(-100)
        time.sleep(2)
        
        # Scroll up (optional)
        pyautogui.scroll(100)
        time.sleep(2)
