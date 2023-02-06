/*
I'm using this as another notes page just cause it was already here XOxo... Gossip Girl

How I made this folder submit-ready for GitHub
    && then How I submitted to GitHub



//https://stackoverflow.com/questions/69346535/how-to-create-a-file-in-the-terminal-of-vsc
//https://unix.stackexchange.com/questions/421219/how-to-redirect-all-the-content-of-one-file-to-another-file



$$$$$$$$$ Terminal


PS C:\Users\user\OneDrive\Documents\GitHub\FFC\Backend> touch --help
touch : The term 'touch' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try 
again.
At line:1 char:1
+ touch --help
+ ~~~~~
    + CategoryInfo          : ObjectNotFound: (touch:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
 
PS C:\Users\user\OneDrive\Documents\GitHub\FFC\Backend> ls


    Directory: C:\Users\user\OneDrive\Documents\GitHub\FFC\Backend


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
da---l         1/29/2023   4:06 PM                boilerplate-express
-a---l          2/5/2023   7:30 PM          44359 ZZ_Notes.txt


PS C:\Users\user\OneDrive\Documents\GitHub\FFC\Backend> echo > "myNotesApp.js"

cmdlet Write-Output at command pipeline position 1
Supply values for the following parameters:
InputObject[0]:
PS C:\Users\user\OneDrive\Documents\GitHub\FFC\Backend> cp myApp.js myNotesApp.js
cp : Cannot find path 'C:\Users\user\OneDrive\Documents\GitHub\FFC\Backend\myApp.js' because it does not exist.
At line:1 char:1
+ cp myApp.js myNotesApp.js
+ ~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\Users\user\O...ackend\myApp.js:String) [Copy-Item], ItemNotFoundException
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.CopyItemCommand

PS C:\Users\user\OneDrive\Documents\GitHub\FFC\Backend> cat myApp.js > myNotesApp.js
cat : Cannot find path 'C:\Users\user\OneDrive\Documents\GitHub\FFC\Backend\myApp.js' because it does not exist.
At line:1 char:1
+ cat myApp.js > myNotesApp.js
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\Users\user\O...ackend\myApp.js:String) [Get-Content], ItemNotFoundException
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.GetContentCommand

PS C:\Users\user\OneDrive\Documents\GitHub\FFC\Backend> cd boilerplate-express
PS C:\Users\user\OneDrive\Documents\GitHub\FFC\Backend\boilerplate-express> cp myApp.js myNotesApp.js


---------   MADE A NOTE HERE    ---------


PS C:\Users\user\OneDrive\Documents\GitHub\FFC\Backend\boilerplate-express> The myNotesApp.js I made earlier was outside of this folder BUT myApp.js was in here!!!
The : The term 'The' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.
At line:1 char:1
+ The myNotesApp.js I made earlier was outside of this folder BUT myApp ...
+ ~~~
    + CategoryInfo          : ObjectNotFound: (The:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\Users\user\OneDrive\Documents\GitHub\FFC\Backend\boilerplate-express>
*/