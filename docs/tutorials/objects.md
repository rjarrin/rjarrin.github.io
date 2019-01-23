## Object files
---

### What are object files?
*In the most basic sense, object files are the end result of a compiled set of .c and .h files in machine-readable format.* 
<br/>

If that is still too confusing/too intimidating to wrap your head around, then understand this;  
When we used the command line to run a compiliation command, the computer uses several tools (called a tool chain)
to transform our .c files (and .h files) into an executable. <br/>
The tool chain consists of:
* C Preprocessor
* C Compiler
* Assembler
* Linker
* Loader (used for dynamic libraries)

### What does each tool chain component do?
The whole purpose of the tool chain is to convert our human-readable code (.c files) into machine-ready executables, so we
can actually associate the process to the analogy of creating a toy robot. <br/><br/>
**C Proprocessor**
