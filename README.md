 Training project (HTML-CSS & DOCPAD)


## Getting Started 
 sudo apt-get install git
 git clone git@asoft.git:training/tamtran-training.git
 cd ~/tamtran-training/practice

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
  ```

## NOTES
HTML-CSS/ Practice
Docpad/ Example


Training project javascript
####1. javascript(/javascript)

All practice in javascript training