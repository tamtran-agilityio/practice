#!/usr/bin/env bash

# Update Ubuntu
sudo apt-get update

# Set up Apache
sudo apt-get install -y apache2

# Install php5
sudo apt-get -y update
sudo add-apt-repository ppa:ondrej/php5-5.6
sudo apt-get -y update
sudo apt-get -y install php5 php5-mhash php5-mcrypt php5-curl php5-cli php5-mysql php5-gd php5-intl php5-xsl

# Install MySQL with PHP 5, set password to 'root'
echo "mysql-server-5.1 mysql-server/root_password password root" | sudo debconf-set-selections
echo "mysql-server-5.1 mysql-server/root_password_again password root" | sudo debconf-set-selections
sudo apt-get install -y mysql-server libapache2-mod-auth-mysql php5-mysql

# Install PHP5-mcrypt lib
sudo apt-get install -y php5-mcrypt

# Install PHP5-GD lib
sudo apt-get install -y php5-gd

# Install Git
sudo apt-get install -y git-core

# Install Curl
sudo apt-get install -y curl

# Install Composer
sudo curl -sS https://getcomposer.org/installer | php
# Make Composer available globally
sudo mv composer.phar /usr/local/bin/composer

# Install nodejs and npm from nodesource's repo
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install -y nodejs

# Drop database example_db if it already exist
echo "Droping database example_db if it already exists."
mysql -uroot -proot -e "DROP DATABASE IF EXISTS example_db"

# Create database example_db
echo "Create database with name 'example_db'"
mysql -uroot -proot -e "create database example_db"

# Remove /var/www default
sudo rm -rf /var/www

# Symlink public folder to /var/www
sudo ln -fs /javascript-training/php_basic/ /var/www

# Enable sudo a2enmod rewrite
sudo a2enmod rewrite

# Change apache config for apache 2.4
if [ -f /etc/apache2/sites-available/000-default ]; then
  sudo cp /javascript-training/provisions/000-default /etc/apache2/sites-available/000-default
fi

if [ -f /etc/apache2/sites-available/000-default.conf ]; then
  sudo cp /javascript-training/provisions/000-default /etc/apache2/sites-available/000-default.conf
fi

# Restart Apache
sudo service apache2 restart