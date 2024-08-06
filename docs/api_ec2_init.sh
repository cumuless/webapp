mkdir v1.0
cd v1.0

sudo apt-get update
sudo apt-get install python3 python3-venv python3-pip
sudo apt install nodejs npm -y
sudo apt install certbot

python3 -m venv venv
source venv/bin/activate
pip install boto3

npm init -y
npm install express https fs
touch index.js
