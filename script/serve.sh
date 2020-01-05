echo Starting build!
yarn build
echo Installing serve!
yarn global add serve
echo Serving!
serve -s build
