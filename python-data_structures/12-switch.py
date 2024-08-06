#!/usr/bin/python3
def append_after(filename="", search_string="", new_string=""):
    """Inserts a line of text to a file, after each line containing a specific string.
    Args:
        filename (str): The name of the file to append to.
        search_string (str): The string to search for.
        new_string (str): The string to append.
    """
    with open(filename, 'r+') as f:
        lines = f.readlines()
        f.seek(0)
        for i, line in enumerate(lines):
            f.write(line)
            if search_string in line:
                f.write(new_string)
        f.truncate()
