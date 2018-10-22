---
title: Running multiple PHP versions is so easy with FastCGI
published: 2009-08-27
---

# Running multiple PHP versions is so easy with FastCGI

In this little tutorial, I will show you how to install multiple versions (or just different configurations) of PHP and run them on a single web server. I will use PHP 5.2.10 and 5.3.0 here, but you can use any version. I will use Nginx (pronounced Engine X) as the web server, but any sever that supports FastCGI should be sufficient.

Download the sources and patch them with PHP-FPM
------------------------------------------------

First of all we'll just make a directory. I like having the whole web server stack in a single directory, I'll use /webstack here. Do the following as root.

    mkdir /webstack
    chown angel333:users /webstack

**Note:** 'angel333' is my username - change it accordingly.

From here, you shouldn't need to do anything as root - actually you should do the rest of this tutorial as a non-root user - it's much safer.

Because FastCGI will be used to connect Nginx to these PHPs, we'll have to **patch the sources** with PHP-FPM. First, download the sources and unpack them, then download appropriate patches and patch the sources with them.


    cd /webstack
    mkdir src
    cd src

    wget http://cz2.php.net/get/php-5.2.10.tar.bz2/from/this/mirror
    wget http://cz2.php.net/get/php-5.3.0.tar.bz2/from/this/mirror
    tar xjf php-5.2.10.tar.bz2
    tar xjf php-5.3.0.tar.bz2

    wget http://php-fpm.org/downloads/php-5.2.10-fpm-0.5.13.diff.gz
    wget http://php-fpm.org/downloads/php-5.3.0-fpm-0.5.12.diff.gz
    gzip -cd php-5.2.10-fpm-0.5.13.diff.gz | patch -d php-5.2.10 -p1
    gzip -cd php-5.3.0-fpm-0.5.12.diff.gz | patch -d php-5.3.0 -p1


Building the first PHP (5.2.10)
-------------------------------

    cd /webstack/src/php-5.2.10

The following command will show you the options, so you can decide which features you want to enable and which not.

    ./configure --help | less

The only important options are **--prefix**, **--enable-fpm**, **--enable-fastcgi** and also **--without-pear**, because you probably won't be able to use Pear. I prefer the following configuration, but I recommend you to customize it to fit **your** needs:

    ./configure --prefix=/webstack/php-5.2.10 --enable-mbstring --enable-fpm --enable-fastcgi --without-pear \
        --without-sqlite --without-pdo-sqlite --with-mysql=shared --with-mysqli=shared --with-pdo-mysql=shared \
        --with-gd=shared --with-mhash

Now let's compile it and install it..

    make && make install

Building the second PHP (5.3.0)
-------------------------------

Compiling PHP 5.3.0 is almost the same as the previous one - only 'configure' is slightly different - there is no **--enable-fastcgi** (only --enable-fpm).

    cd /webstack/src/php-5.3.0<br/><br/>
    ./configure --prefix=/webstack/php-5.3.0 --enable-mbstring --enable-fpm --without-pear \
        --without-sqlite --without-sqlite3 --without-pdo-sqlite --with-mysql=shared --with-mysqli=shared \
        --with-pdo-mysql=shared --with-gd=shared --with-mhash
    make && make install

Making symbolic links
---------------------

Now you can make some useful links - you don't have to, but life is sometimes easier with them. I prefer these:

    cd /webstack
    mkdir bin

    ln -s /webstack/php-5.2.10/lib/php.ini etc/php-5.2.10.ini
    ln -s /webstack/php-5.2.10/sbin/php-fpm sbin/php-fpm-5.2.10
    ln -s /webstack/php-5.2.10/etc/php-fpm.conf etc/php-fpm-5.2.10.conf
    ln -s /webstack/php-5.2.10/bin/php bin/php-5.2.10
    ln -s /webstack/php-5.2.10/bin/phpize bin/phpize-5.2.10
    ln -s /webstack/php-5.2.10/bin/php-cgi bin/php-cgi-5.2.10
    ln -s /webstack/php-5.2.10/bin/php-config bin/php-config-5.2.10

    ln -s /webstack/php-5.3.0/lib/php.ini etc/php-5.3.0.ini
    ln -s /webstack/php-5.3.0/sbin/php-fpm sbin/php-fpm-5.3.0
    ln -s /webstack/php-5.3.0/etc/php-fpm.conf etc/php-fpm-5.3.0.conf
    ln -s /webstack/php-5.3.0/bin/php bin/php-5.3.0
    ln -s /webstack/php-5.3.0/bin/phpize bin/phpize-5.3.0
    ln -s /webstack/php-5.3.0/bin/php-cgi bin/php-cgi-5.3.0
    ln -s /webstack/php-5.3.0/bin/php-config bin/php-config-5.3.0

PHP configuration
-----------------

The initial PHP ini file can be the same for both versions.

    vim /webstack/etc/php-5.2.10.ini

**Note:** You can use any editor if you are not familiar with vim. You can use e.g. nano, joe or mcedit - they will do exactly the same work as vim.

Write there something like the following and save it. Then write the same into **/etc/php-5.3.0.ini**.

    extension=gd.so
    extension=mysql.so
    extension=mysqli.so
    extension=pdo_mysql.so

PHP-FPM configuration
---------------------

At least you'll have to change the **port** the FastCGI will be listening on. I'll leave **the default port at 5.2.10's** PHP-FPM and will **change it at 5.3.0's**.

    vim etc/php-fpm-5.3.0.conf

Find the option **"listen_address"** and change the port to.. Let's say **9001**.. Than save and close the file. Now you can finally start both proxies:

    /webstack/sbin/php-fpm-5.2.10 start
    /webstack/sbin/php-fpm-5.3.0 start

Nginx installation
------------------

**Note:** If you don't want to compile Nginx, you don't have to. You can just install it from your packaging system (apt, pacman, yum, ...) and skip this part. But compiling from sources is easy and so fun :o).

    cd /webstack/src<br/>
    wget http://sysoev.ru/nginx/nginx-0.8.10.tar.gz
    tar xzf nginx-0.8.10.tar.gz
    cd nginx-0.8.10

	./configure \
		--prefix=/webstack \
		--conf-path=/webstack/etc/nginx/nginx.conf \
		--http-client-body-temp-path=/webstack/tmp/nginx_client_body_temp \
		--http-proxy-temp-path=/webstack/tmp/nginx_proxy_temp \
		--http-fastcgi-temp-path=/webstack/tmp/nginx_fastcgi_temp \
		--without-mail_pop3_module \
		--without-mail_imap_module \
		--without-mail_smtp_module

    make && make install
    mkdir /webstack/tmp

You can also delete everything that's not needed:

	cd /webstack
	rm html/* etc/nginx/koi-* etc/nginx/win-utf etc/nginx/*.default

Configuring Nginx
-----------------

	vim /webstack/etc/nginx/nginx.conf

The following configuration file will cause <b>*.php</b> files to be processed using **PHP 5.2.10** and <b>*.php2</b> files using **PHP 5.3.0**. But this is just an example - you can actually have e.g. different PHPs for different locations ([see Nginx documentation](http://wiki.nginx.org)). I've also changed the **port to 8080**, so a non-root user can run the server.

	worker_processes  1;
	events {
		worker_connections  1024;
	}

	http {
		include       mime.types;
		default_type  application/octet-stream;
		sendfile        on;
		keepalive_timeout  65;
		#gzip  on;

		server {
			listen       8080;
			server_name  localhost;

			root   html;

			location / {
				index  index.php index.php2;
			}

			location ~ \.php$ {
				fastcgi_pass   127.0.0.1:9000;
				fastcgi_index  index.php;
				fastcgi_param  SCRIPT_FILENAME  "${document_root}${fastcgi_script_name}";
				include        fastcgi_params;
			}

			location ~ \.php2$ {
				fastcgi_pass   127.0.0.1:9001;
				fastcgi_index  index.php;
				fastcgi_param  SCRIPT_FILENAME  "${document_root}${fastcgi_script_name}";
				include        fastcgi_params;
			}
		}
	}

Now just run the webserver..

	/webstack/sbin/nginx

Testing it
----------

Make some files with phpinfo() to verify if everything works..

	echo '<?phpinfo();' > /webstack/html/phpinfo.php
	echo '<?phpinfo();' > /webstack/html/phpinfo.php2

Now you should see a PHP 5.2.10 phpinfo() at <a href="http://localhost:8080/phpinfo.php">http://localhost:8080/phpinfo.php</a> while at <a href="http://localhost:8080/phpinfo.php2">http://localhost:8080/phpinfo.php2</a> should be phpinfo() of PHP 5.3.0.

This way you can run as many versions and/or configurations of PHP as you want, very easily. I hope you enjoyed the tutorial - if you have any questions, ideas, or anything else, feel free to leave a comment.
