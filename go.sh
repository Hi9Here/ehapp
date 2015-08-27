gulp && rsync -a ./dist/ root@essentialhotels.co.uk:/var/www/vhost/essentialhotels.co.uk/ --exclude index.json --exclude .htaccess
