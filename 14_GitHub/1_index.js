/*

1. git --version --> es command se git ki version pata kar sakte hai

2. git status --> es command se pata chalta hai ki hum jis directory ya folder per kam kar rahe hai usper already git initialize hai ki nahi
    --> $ git status
            fatal: not a git repository (or any of the parent directories): .git

3. git init --> es command se kisi directory and folder ko as git initialize kar sakte hai, ye directory working directory kahlayega, es directory me hum jo bhi change karte hai wah git ko pata nahi hota hai ,
yadi hum chahte hai ki hamara change git ko pata chale uske liye hum 'git add' ka use karte hai esase sara file git ke staging area me chala jata hai, es area se git file ko track karna start kar deta hai, phir jab git commit karte hai to wah local repository me chala jata hai, aur jab usko push karenge to wah remote me chala jayega
        --> $ git init
                Initialized empty Git repository in C:/Users/Nirbhay Gupta/Desktop/thapagit/.git/

        --> $ git status
                On branch master

                No commits yet

                nothing to commit (create/copy files and use "git add" to track)


4. git config --global user.name "nirbhay2001" --> es command se user ka name globally set ho jayega, jab kabhi bhi kisi folder ko git initialize karte hai to uska name yahi wala set ho jayega, yadi kisi git folder ko special name set karna ho to usko locally set karna padega i.e git config user.name "thapa"

            --> $ git config --global user.name
                nirbhay2001


5. git config --global user.email "nirbhayggupta2001@gmail.com" --> es command se email ko globally set kar sakte hai

    --> $ git config --global user.email
        nirbhayggupta2001@gmail.com




6. // git add and git commit --> jab kisi project per akele kam karte hai to es do hi command se kam chala sakte hai

    --> touch index.html --> esase mere working directory ke ander ak file create ho jayega , jisme kuch write ya change karenge phir uske bad git status command chalayenge jisase pata chalega ki ye file untracked hai, esliye phir hum git add command ka use karenge jisase file staging area me chala jaye aur git ke doura es file ko track kiya jaye esliye 'git add index.html' command ka use karenge, jab es file me kuch bhi change karenge to phir se hme git add command ka use karna padega 

        git add . --> jab bahut sara file ko ak sath working directory se staging area me bhejna hoto hum esi command ka use karte hai

        jab staging area se file ko local repository me bhejna hota hai to hum git commit command ka use karte hai, 'git commit -m "first commit, index file added" es command se sara staging area ka file local repository me chala jayega

        git log --> jab kabhi bhi commit kerne ke bad yadi pata karna ho ki commit huaa hai ki nahi to ham esi command se pata karte hai




7. // How to add local repository in online git(repository)

        git remote add origin https://github.com/nirbhay2001/demoyoutube.git --> es command se local repository ka sara file online demoyoutube nam ke repository me chala jayega, eske bad jab push command chalte hai tab jata hai, origin yaha per 'https://github.com/nirbhay2001/demoyoutube.git' url ko represent kar raha hai jab kabhi bhi es link ko likhana hoga to kewal origin likhenge

        git push -u origin master --> finally es command se local repo ka sara file online repo me chala jata hai, yaha per -u as tracking ka kam kar raha hai local repo aur online repo ke bich me

        git remote --> ye command online repo ke alias name ko show karta hai




8. // Branch in git --> A branch will allow to make a "copy" while not affecting the original branch.

        git branch --> es command ki help se branche ko dekh sakte hai
        
        git branch localthapa --> es command ki help se branch ko create kar sakte hai, esme localthapa nam ka branch create huaa hai


        git checkout localthapa --> es command ki help se ak branch se dusre branch me switch kar sakte hai

        git push -u origin localthapa --> es command se local repo se online repo ke localthapa nam ke branch me file ko send kar rahe hai

        git merge localthapa --> es command se master branch aur local branch ko merge karte hai



9. // git clone --> git clone is used to create a local copy of a remote repository.

When to use ?
    --> No local repository is there

    git clone https://github.com/codemistic/web-Development.git --> es command se kisi bhi online repo ka project ko clone kar sakte hai, https://github.com/codemistic/web-Development.git ye us online repo ka url hai jiska project clone kiya hai


  
10. gitIgnore in git --> yadi hum online repo ke kuchh file ko nahi dikhana chahte hai to eska use karte hai

        touch .gitignore --> es command se ak .gitignore nam ka file ban jayega yadi jis - jis file ko hidden karna hai uska name esme likh denge







*/