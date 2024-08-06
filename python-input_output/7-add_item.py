#!/usr/bin/python3
def append_after(filename="", search_string="", new_string=""):
    """Inserts a line of text to a file, after each line containing a specific string.
    Args:
        filename (str): The name of the file.
        search_string (str): The string to search for.
        new_string (str): The string to insert.
    """
    with open(filename, 'r') as f:
        lines = f.readlines()
    with open(filename, 'w') as f:
        for i, line in enumerate(lines):
            f.write(line)
            if search_string in line:
                f.write(new_string)
