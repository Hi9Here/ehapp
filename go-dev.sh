gulp && rsync -a ./dist/ root@dev.essentialhotels.co.uk:/var/www/sites/dev2.essentialhotels.co.uk/ --exclude index.json --exclude .htaccess
