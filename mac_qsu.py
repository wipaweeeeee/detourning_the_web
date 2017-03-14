from subprocess import check_output
import os

def cprint(msg):
    print "[QSU] %s" % msg
    
    
def is_homebrew_installed():
    out = check_output(["brew", "--version"])
    if "<insert proof that homebrew is installed here>" in out:
        return True # Homebrew is installed
    else:
        return False
    
def install_homebrew():
    cprint("Installing Homebrew...")
    check_output('/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"')

def check_homebrew():    
    if is_homebrew_installed() == False:
        install_homebrew()
    else:
        cprint("Homebrew is installed. Updating Homebrew now...")
        check_output(["brew", "update"])
        
        
def is_emacs_installed():
    out = check_output(["ls", "/usr/bin/emacs"])
    if out == "<insert output here>": # just "/usr/bin/emacs"?
        return True
    else: 
        return False
    
def delete_old_emacs():
    # "It's suggested you to remove that older Emacs version to avoid conflicts with the new one"
    cprint("Deleting old emacs...")
    check_output(["sudo", "rm", "/usr/bin/emacs"])
    check_output(["sudo", "rm", "-rf", "/usr/share/emacs"])

def install_emacs():
    cprint("Installing emacs...")
    check_output(["brew", "install", "emacs", "--with-cocoa"])
    check_output(["brew", "linkapps", "emacs"])
    
def check_emacs():
    if is_emacs_installed() == True:
        delete_old_emacs()
        isntall_emacs()
    else:
        install_emacs()
        
        
def is_git_installed():
    out = check_output (["git" "--version"])
    if "not found" in out:
        return False
    else:
        return True
    
def install_git():
    cprint("Installing git")
    check_output(["brew", "install", "git"])
    
def check_git():
    if is_git_installed == False:
        install_git()        
    
        
def main():
    check_homebrew()
    check_emacs()
    check_git()
        
        
 if __name__ == "__main__":
    main()
