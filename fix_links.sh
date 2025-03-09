#!/bin/bash

# Define directories and their respective index.html files
directories=("about" "services" "contact")

# Loop through each directory
for dir in "${directories[@]}"; do
  # Check if the directory exists
  if [ ! -d "$dir" ]; then
    echo "Directory $dir does not exist. Creating it..."
    mkdir "$dir"
  fi

  # Check if index.html exists in the directory
  if [ ! -f "$dir/index.html" ]; then
    echo "index.html does not exist in $dir. Creating it..."
    echo "<!DOCTYPE html>
<html>
<head>
    <title>${dir^}</title>
</head>
<body>
    <h1>${dir^} Page</h1>
</body>
</html>" > "$dir/index.html"
  fi
done

echo "All directories and files have been checked and created if necessary."