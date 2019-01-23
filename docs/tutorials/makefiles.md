## Makefiles
---

# What are makefiles?
Makefiles are special plaintext files used to faciltate the whole command line process in programming.  
It achieves this by assigning keywords to a sequence of commands defined by the user.

Let's start with a simple example. Consider a simple *Hello World* program
```c
// hello.c
#include <stdio.h>

int main()
{
  printf("Hello World!\n");
  return 0;
}
```
After creating this programming C file, the user needs to compile the code into an executable, then run that executable via the command line. Under normal circumstances, the user would need to type out two commands: <br/> <br/>
*gcc -Wall -std=c99 hello.c -o hello* <br/>
*./hello* <br/> <br/>
By using the following makefile, the user would actually be able to run both commands by simply typing *make*
```make
# Our makefile

all:
  gcc -Wall -std=c99 hello.c -o hello
  ./hello
```

# When to use makefiles
When doing something simple like the above example, a makefile isn't necessarily required (after all, the example only simplifies two lines of code into one).   
Then it stands to reason that makefiles really shine with more complex examples. Let's consider the following folder. 
``` 
* include
    |-- encounter.h
    |-- item.h
    |-- level.h
    |-- monster.h
    |-- player.h
    |-- file.h
    |-- game.h
    |-- room.h
    |-- scripts.h
* makefile
* src
    |-- encounter.c
    |-- item.c
    |-- level.c
    |-- main.c
    |-- monster.c
    |-- player.c
    |-- file.c
    |-- room.c
```

Here, we have multiple .c files that need to be compiled. For the user to **only create the executable**, they need to run:<br/> <br/>
*gcc ./src/encounter.c ./src/item.c ./src/level.c ./src/main.c ./src/monster.c ./src/player.c ./src/file.c ./src/room.c -Wall -srd=c99 -I./include/ -o game* <br/> <br/>
And keep in mind every time a change/update is made to any of the .c files, this command needs to be typed and run again. <br/>

Via a makefile, we can reduce the amount of time we spend on typing out commands and optimize the compilation performance.
```make
CC = gcc
CFLAGS = -std=c99 -Wall -I$(IDIR)

IDIR = ./include/
SOURCES = ./src/*.c

all: game

game:
  $(CC) $(SOURCES) $(CFLAGS) -o game
```
By writing a few lines of code, we can reduce our previous command to *make* and it will run the exact same command as above.  
**Note:** To further optimize the make process, we can include object file (.o) dependencies to check if any code is missing or was modified since the last time make was run. We will look further into this in an 'Object Files' tutorial.<br/><br/>
# Makefile Structure (How to write a makefile)
[TeachingFile: Makefiles](https://rjarrin.github.io/files/makefile.pdf)
