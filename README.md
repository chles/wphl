# wphl
Wordpress Headless with React

On this project we will work with [**wp-cli**](https://make.wordpress.org/cli/handbook/installing/) and **MAMP**.

*Install wp-cli if you don't have it already ():*
```
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp
```
*To prevent MySQL errors caused by MAMP and the PHP version used (https://make.wordpress.org/cli/handbook/installing/#using-a-custom-php-binary) (you need to do this each time you install a project):*
```
PHP_VERSION=$(ls /Applications/MAMP/bin/php/ | sort -n | tail -1)
export PATH=/Applications/MAMP/bin/php/${PHP_VERSION}/bin:$PATH
export PATH=$PATH:/Applications/MAMP/Library/bin/
```

## Launch project

1. Create a local folder which will get all sources for this project
2. Set MAMP "Document Root" targeting this folder
3. Install Wordpress with wp-cli
```
    wp core download
    // wp core version : to check if version >= 4.7
    wp config create --dbname=wphless --dbuser=root --dbpass=root --dbhost=localhost --dbprefix=wphl // set user and pass in regards of your local environment
    wp db create
    wp core install --url=localhost --title=wphl --admin_user=admin --admin_password=admin --admin_email=your@adress.mail
```
4. Go to theme directory and clone the repository :
```
    cd wp-content/themes/
    git clone https://github.com/chles/wphl.git
```
5. Import .sql (dump is in the repo). Few optionnal commands here :
```
    // wp theme activate wphless (already active with sql import)
    // wp theme delete twentyfifteen/twentysixteen/twentyseventeen
```
6. Save permalinks (Settings > Permalinks > Post Name > Save changes) in the wordpress admin (it will flush database)
   
 
*You're ready :+1: Have a look to your localhost.*

 
 ### Logs
 - User: admin
 - Pwd : admin


## Read more

- [WP-CLI](https://developer.wordpress.org/cli/commands/)
- [React APP](https://github.com/facebook/create-react-app)


## Todo

- scaffold all wp-cli commands
- create an auto and cleaner file index.php in regards of build folder generated
- set a global config with URLS and endpoints




## How I create the project

I install wordpress locally as described previously but instead of clone a repo I create an app folder. 
```
npx create-react-app wphl
cd wphl
 ```
This one is my new theme. To be considered by WP I add an index and a stylesheet.
When my theme was ready I create the post-type 'movie'
`wp scaffold post-type movie --theme=wphl // default values : non-hierarchical and show_api_rest to TRUE`
To include this to my theme I require the new post type in the functions.php file.
I was able to create posts `wp post generate --count=20 --post_type=movie`
Then, I add a custom endpoint to the REST API to load just what I need.
I launch the app `npm run start` and work on this webserver.
I add a [react router](https://reacttraining.com/react-router/) to provide some custom urls to details posts.
Finally I build the project `npm run build` and add sources to the index.
