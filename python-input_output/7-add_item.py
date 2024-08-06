#!/usr/bin/python3
import sys
import os

import json

def load_from_json_file(filename):
    """Loads a Python object from a file using JSON representation."""
    with open(filename, 'r') as f:
        return json.load(f)

import json

def save_to_json_file(my_obj, filename):
    """Saves a Python object to a file using JSON representation."""
    with open(filename, 'w') as f:
        json.dump(my_obj, f)


# Import the necessary functions
save_to_json_file = __import__('5-save_to_json_file').save_to_json_file
load_from_json_file = __import__('6-load_from_json_file').load_from_json_file

filename = "add_item.json"

# Load the existing data if the file exists, otherwise create an empty list
if os.path.exists(filename):
    items = load_from_json_file(filename)
else:
    items = []

# Add all arguments to the list
items.extend(sys.argv[1:])

# Save the updated list back to the file
save_to_json_file(items, filename)
