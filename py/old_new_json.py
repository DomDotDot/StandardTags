import json
import os

def convert_tags_format(input_filepath, output_filepath=None):
    """Converts the old tags data format to the new format with IDs and slaveTags."""

    try:
        with open(input_filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Error reading or parsing input file: {e}")
        input("Continue")
        return

    new_tags = []
    tag_id_counter = 1
    name_to_id = {}

    # First pass: Assign IDs and create the main tag structure
    for tag in data['tags']:
        new_tag = {
            "id": tag_id_counter,
            "name": tag["name"],
            "description": tag.get("description", ""),  # Handle missing descriptions
            "category": tag.get("category", ""),       # Handle missing categories
            "status": tag.get("status", 1),          # Default status to 1 if missing
            "comment": tag.get("comment", None),      # Handle missing comments
            "aliases": tag.get("aliases", []),       # Handle missing aliases
            "slaveTags": []
        }
        new_tags.append(new_tag)
        name_to_id[tag["name"]] = tag_id_counter
        tag_id_counter += 1
    
    # Second pass (if slaveTags exist in the original data): populate slaveTags using name_to_id
    if any("slaveTags" in tag for tag in data['tags']):
         for tag in new_tags:
                if "slaveTags" in tag:  #Check if slaveTags exist
                    slave_tag_ids = []
                    for slave_tag_name in tag['slaveTags']:
                         if slave_tag_name in name_to_id:
                             slave_tag_ids.append(name_to_id[slave_tag_name])
                    tag['slaveTags'] = slave_tag_ids


    new_data = {"tags": new_tags}

    if output_filepath is None:
        output_filepath = os.path.splitext(input_filepath)[0] + "_converted.json"

    try:
        with open(output_filepath, 'w', encoding='utf-8') as f:
            json.dump(new_data, f, indent=4)  # Use indent for pretty printing
        print(f"Converted data written to: {output_filepath}")
    except IOError as e:
        print(f"Error writing output file: {e}")
        input("Continue")



if __name__ == "__main__":
    import tkinter as tk
    from tkinter import filedialog

    root = tk.Tk()
    root.withdraw()  # Hide the main window

    input_file = filedialog.askopenfilename(title="Select JSON file to convert", filetypes=[("JSON files", "*.json")])
    if input_file:
        convert_tags_format(input_file)
    else:
        print("No file selected.")
        input("Continue")

