cd out
rm -Rf .git
touch out/.nojekyll
touch out/CNAME
echo \"www.rohjs.com\" >> out/CNAME
git init
git add -A
git commit -a -m "Deployed at $(date)"
git remote add origin https://github.com/rohjs/rohjs.github.io.git
git push -f origin master