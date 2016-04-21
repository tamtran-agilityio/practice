#!/usr/bin/env bash

echo '### Updating system ...'
sudo rm -f /etc/resolv.conf
sudo sh -c "echo nameserver 8.8.8.8 > /etc/resolv.conf"
sudo apt-get update -y
sudo apt-get install -y build-essential curl vim libqtwebkit-dev git

echo '### Install Ruby Version Manager ...'
gpg --keyserver hkp://keys.gnupg.net --recv-keys D39DC0E3
curl -L get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
rvm requirements
rvm install -global
rvm rubygems current

echo '### Install Node Version Manager'
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh
source ~/.nvm/nvm.sh
# nvm install 5.6.0 && nvm alias default 5.6.0
sudo apt-get install npm

echo '### Install global modules ...'
npm install --global gulp
npm install -g bower

echo '### Install Docpad ...'
npm install -g

echo '### Install Sass and Compass'
gem install sass
gem install compass

echo 'source ~/.nvm/nvm.sh' >> ~/.bashrc
touch ~/.bash_profile
echo 'echo "### Sets up helper scripts"' >> ~/.bash_profile
echo 'export PATH="/scripts:$PATH"' >> ~/.bash_profile