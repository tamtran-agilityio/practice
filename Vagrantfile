# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "ubuntu/trusty64"

  # The url from where the 'config.vm.box' box will be fetched if it
  # doesn't already exist on the user's system.
  # config.vm.box_url = "https://atlas.hashicorp.com/ubuntu/boxes/trusty64/versions/20151005.0.0/providers/virtualbox.box"

  # Default box IP address
  # This is the IP address that your host will communicate to the guest
  # through. Change if you're already on the `192.168.33.x` subnet.
  config.vm.network :forwarded_port, guest: 80, host: 8000
  config.vm.network :forwarded_port, guest: 30, host: 3000
  config.vm.network :forwarded_port, guest: 90, host: 9000
  config.vm.network :forwarded_port, guest: 40, host: 4000
  private_ip = "192.168.32.99"
  config.vm.hostname = "shopping.com.vn"

  # Enable agent forwarding on vagrant ssh commands. This allows you to use
  # identities established on the host machine inside the guest. See the manual
  # for `ssh-add`
  config.ssh.forward_agent = true
  config.ssh.forward_x11   = true

  # config.vm.hostname = "codeigniter.example"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network(:private_network, :ip => private_ip)

  config.vm.provider "virtualbox" do |vb|
    # vb.gui = true
    vb.customize(["modifyvm", :id, "--natdnshostresolver1", "off"  ])
    vb.customize(["modifyvm", :id, "--natdnsproxy1",        "off"  ])
    vb.customize(["modifyvm", :id, "--memory",              "1024" ])
  end

  # Setup synced folder
  config.vm.synced_folder ".", "/javascript-training", :mount_options => ['dmode=777','fmode=777']

  # Shell provisioner
  config.vm.provision :shell, path: "provisions/bootstrap.sh", :privileged => false

end