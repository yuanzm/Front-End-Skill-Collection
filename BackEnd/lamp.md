# lamp config in ubuntu 12.04

```ruby
# version
cat /proc/version

# set locale
echo "export LC_ALL=C" >> /root/.bashrc
source /root/.bashrc

# install apache2
apt-get install apache2

# install mysql
apt-get install mysql-server mysql-client

# install php5.5
apt-get install python-software-properties
add-apt-repository ppa:ondrej/php5
apt-get update
apt-get install php5

# install php dependency
apt-get install libapache2-mod-php5
apt-cache search php5
apt-get install php5-mysql php5-curl php5-gd php5-mcrypt

# install swoole
apt-get install php5-dev
git clone https://github.com/swoole/swoole-src.git
cd swoole-src
phpize
./configure
make && make install
# add extension=swoole.so to php.ini
php -m

# install redis-server
apt-get install redis-server

# install phpredis
git clone https://github.com/phpredis/phpredis.git
cd phpredis
phpize
./configure [--enable-redis-igbinary]
make && make install
# add extension=redis.so to php.ini
```

#### Config the websocket server

```ruby
# 1. Edit the websocket server host is public/src/components/chat/chat.coffee
#   replace ws://127.0.0.1 to ws://112.74.92.150 or ws://domain

# 2. grunt
cd public
grunt

# 3. Install [supervisor](http://supervisord.org/installing.html)
apt-get install python-setuptools
easy_install supervisor
echo_supervisord_conf
echo_supervisord_conf > /etc/supervisord.conf

# 4. Use supervisor to control the server.php in websocket dir
vim /etc/supervisord.conf
### config start
[program:congcong_chat]
command=/root/cong/websocket/server.php --port=9501
process_name=%(program_name)s-9501
numprocs=1
directory=/root/cong/websocket
autostart=true
autorestart=true
user=root
redirect_stderr=true
stdout_logfile=/root/cong/websocket/chat_log
### config end

supervisord
supervisorctl reload
```
