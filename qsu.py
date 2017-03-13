import subprocess

def install_homebrew():
    output_1 = subprocess.check_output("brew --version")
    print output_1 
    
install_homebrew()
