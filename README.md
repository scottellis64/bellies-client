
Had some trouble 

1 - rhc ssh proyect-name
2 - cd nodejs
3 - npm install bower
4 - cd ..
5 - export HOME=$HOME/app-root/runtime/repo
6 - cd app-root/repo
7 - bower install

git remote add openshift -f ssh://56620ad37628e1dd790000f4@belliesbanglesapp-jsellis.rhcloud.com/~/git/belliesbanglesapp.git/
git merge openshift/master -s recursive -X ours
git push openshift HEAD


// This one costs money, but not for a small site with under 7000 users and provides for 2 social identity providers (Facebook and someone else)
For authentication, look at Auth0 - https://auth0.com/
Here is a sample project for using Auth0 in a nodejs application: https://github.com/auth0/nodejs-jwt-authentication-sample
And a blog post about adding authentication to a React Flux application: https://auth0.com/blog/2015/04/09/adding-authentication-to-your-react-flux-app/


// This one is for doing it yourself
Blog post: https://iamalivingcontradiction.wordpress.com/2015/09/21/how-to-use-facebook-login-with-react-and-babel/
The github that contains the code: https://github.com/supalogix/react-facebook-login-poc

