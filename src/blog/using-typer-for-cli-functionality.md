---
layout: layouts/single-post.html
title: "Adding CLI functionality for your Python script using Typer"
date: 2024-04-02
tags: ["post", "python"]
postID: 2
---

# {{title}}

![](/assets/images/postID-2-01.png)

Command line interface (CLI) tools are programs that can be executed from a terminal or a shell, and allow users to interact with the system or other applications through text commands and arguments. CLI tools are useful for automation, scripting, testing, and performing various tasks without a graphical user interface.

However, writing CLI tools in Python can be challenging and tedious, especially when dealing with complex arguments, options, help messages, and error handling. Fortunately, Python saves the date. In this case, we will use Python programming language to easily create CLI tools using the library typer. Typer is a library for building powerful and elegant CLI tools in the easiest way possible.

Below are the features and benefits of using typer in creating your CLI tools:

- Intuitive to write: Typer uses type hints to declare the parameters and options of the CLI tool, and automatically infers the type, name, and help message of each argument.
- Easy to use: Typer generates automatic help and automatic completion for all the shells, making it easy for the users to learn and use the CLI tool. Typer also handles errors and validations gracefully and displays informative and colorful messages on the terminal.
- Short and expressive: Typer minimizes code duplication and boilerplate and allows multiple features from each parameter declaration.
- Flexible and extensible: Typer is compatible with Click and can use any of its features and plugins, however, for this case, we will only be exploring using flags.

### Installation

To install Typer, we need to have Python 3.6 or higher installed on our system. We can use pip to install Typer and its optional dependencies, such as Rich, a library for displaying rich and beautiful output on the terminal. To install Typer with all the optional dependencies, we can run the following command:

`pip install typer`

### Creating a simple Typer app

To create a Typer app, we need to import Typer and create an instance of the Typer class. This instance will be our main app, and we can use it to define the commands and options of our CLI tool. For example, we can create a file called hello.py with the following code:

```
import typer

app = typer.Typer()
```

### Defining a command

To define a command for our Typer app, we can use the app.command() decorator on a function. The function name will be the name of the command, and the function parameters will be the arguments and options of the command. We can use type hints to specify the type of each parameter, and Typer will automatically infer the name and help message of each argument. For example, we can define a function called hello_user to print a basic command “hello there” to an argument called user.

```
import typer

app = typer.Typer()

@app.command()
def hello_user(user: str ):
print("Hello there", user)

if **name** == "**main**":
app()
```

To run the python script:

`python hello.py`

This will show an error since an argument is required in the function `hello_user`.

![](/assets/images/postID-2-02.png)
Error from the python file

Automatically, the typer library creates a help functionality on your program and guides the user on how to access or use your script and also on how to use the `--help` flag. If the user of the script will use the `--help` flag, this will use a detailed way on how to use the python script or program that you have created.

![](/assets/images/postID-2-03.png)
Output from running the — help flag

Now, by following the `--help` flag command and running the script python `hello.py User`, it will output the `Hello there, User` in the terminal.

Here’s a sample implementation on the deletion of files and folder script that I created in an earlier post.

```
import os
import time
import typer
import shutil

app = typer.Typer()

@app.command()
def del_downloads(days_old: int = 100):
file_count = 0
folder_count = 0

    user = os.getlogin()
    now = time.time()
    folder_path = f'C:/Users/{user}/Downloads/'

    for item in os.listdir(folder_path):
        item_path = os.path.join(folder_path, item)
        item_modified_time = os.stat(item_path).st_mtime
        if item_modified_time < now - (days_old * 86400):
            if os.path.isfile(item_path):
                os.remove(item_path)
                file_count += 1
                print(f"Deleted file: {item}")
            elif os.path.isdir(item_path):
                shutil.rmtree(item_path)
                folder_count += 1
                print(f"Deleted folder: {item}")
    print("\n___Files and Folders Deletion Summary___\n")
    print(f"Deleted files count: {file_count}")
    print(f"Deleted folder count: {folder_count}\n")

if **name** == "**main**":
    app()
```

The code above has a default argument of 100 days so I can run as `python <name of the file>` and it will run in the default argument. However, if I want to specify the --days-old of the files that will be deleted, it goes like this `python <name of the file> --days-old <argument>`.

That’s it for this simple tutorial and have fun with the typer library/module. Let me know what scripts or programs you want to implement using this library.

Cheers!
