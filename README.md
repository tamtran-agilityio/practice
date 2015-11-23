#Overview
1. [Javascript]
2. [Docpad and Gulp]
3. [Vagrant]

#Structure Folder
1. /javascript-training:
  * Animation example:
      * [Example-Bitters] Do example use Bitters
      * [Example-Bourbon] Do example use Bourbon
      * [Example-Foundation] Do example use Foundation
      * [Example-MUI] Do example use MUI
      * [Example-Materializecss] Do example use Materializecss
  * Animation practice:
      * [Soanecapital] Do practice use Materializecss
  * Javascript Example:
      * [Parallax-Scrolling] Do example parallax scrolling
      * [Example-Lodash] Do example use Plugin Lodash
  * Javascript Practice:
      * [Todo-list] Do practice use javascript
      * [User-Manager] Do practice use jquery
      * [Sparks-Scroll] Do practice about parallax scrolling
  * Responsive Advance practice:
      * [Foodsense-Gulp_Slush] Do practice Foodsense use Gulp Slush  
      * [Foodsense-Gulp_Yeoman] Do practice Foodsense use Gulp Yeoman
2. /vagrant:
 * Vagrantfile
        - Use box hashicorp/precise32
        - Synced folders to /javascript
        - Network of docpad is 9000
        - Provision shell script bootstrap.sh
    * bootstrap.sh
        * Install Node Version Manager
        * Install global modules: docpad, gulp, bower
  
#Run practice on vagrant
  - cd /vagrant
  - vagrant up
  - vagrant ssh
  - cd / folder container practice

#Run practice on machine
  - cd / folder container practice
**Folder /javascript contain all practice.**

###If practice run with docpad use command line:
  - npm install
  - bower install
  - docpad run
  - Run on browser with address : localhost:9778
###If practice run with gulp use command line:
  - npm install
  - bower install
  - gulp
  - Run on browser with address : localhost:9000
