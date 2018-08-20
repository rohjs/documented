cd out
rm -Rf .git
touch .nojekyll
touch CNAME
echo "www.rohwoohyeon.com" >> CNAME
git init
git add -A
git commit -a -m "Deployed at $(date)"
git remote add origin https://github.com/whroh/whroh.github.io.git
git push -f origin master