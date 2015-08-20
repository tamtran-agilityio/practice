# practice
## Getting Started 
 sudo apt-get install git

## Setup
Install:

  1. Installing Virtualbox:
  ``` 
  $ sudo apt-get install virtualbox
  ```
  
  2. Installing Vagrant:
  ```
  $ sudo apt-get install vagrant
  ```

  3. Getting vagrant  machine up:
  ```
  $ vagrant box add hashicorp/precise32
  ```

  4. Configure Project:
  ```
  $ mkdir vagrant_project
  $ cd vagrant_project
  $ vagrant init
  ```

  5. Edit the Vagrantfile in this directory and replace
  ```
  config.vm.box = "hashicorp/precise32"
  ```


Start Server to run DOCPAD:
  ```
  vagrant ssh
  cd /docpad
  docpad run
  docpad install sass
  docpad install jade
  ```
