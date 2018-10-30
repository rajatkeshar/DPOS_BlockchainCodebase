- - -

# Saffron

Saffron system is a decentralized application platform, which is designed to lower the threshold for developers, such as using JavaScript as develop language, supporting relational database to save transaction data, and making DAPP development be similar with traditional Web application. It is sure that these characteristics are very attractive to developers and SMEs. The ecosystem of the whole platform cannot be improved until developers make a huge progress on productivity. Also, Saffron platform is designed to be open for various fields, not limited to some particular parts such as finance, file storage, or copyright proof. It provides underlying and abstract API which can be combined freely to create different types of applications. In consensus mechanism, Saffron inherits and enhances DPOS algorithm, by which the possibility of forks and risk of duplicate payments would be significantly reduced. Furthermore, Saffron sidechain mode not only can mitigate the pressure of blockchain expansion, but also make DAPP more flexible and personal. Saffron system, as a proactive, low-cost and full stack solution, will surely be a next generation incubator of decentralized applications.


## System Dependency

- nodejs v8.0+
- npm 5.5+ (not cnpm)
- node-gyp v3.6.2+ (suggested)
- sqlite v3.8.2+
- g++
- libssl

## Installation for ubuntu 14.04.x or higher.

```
# Install dependency package
sudo apt-get install curl sqlite3 ntp wget git libssl-dev openssl make gcc g++ autoconf automake python build-essential -y
# libsodium for ubuntu 14.04
sudo apt-get install libtool -y
# libsodium for ubuntu 16.04
sudo apt-get install libtool libtool-bin -y

# Install nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
# This loads nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Install node and npm for current user.
nvm install v8
# check node version and it should be v8.x.x
node --version

# git clone sourece code
git clone https://github.com/salinsunny2/BlockchainCodebase && cd BlockchainCodebase && chmod u+x blockchain_manager.bash

# Install node packages
npm install
```

## Web Wallet

```
cd public/

npm install bower -g
npm install browserify -g
npm install gulp  -g

npm install
# angular chose "angular#~1.5.3 which resolved to 1.5.11 and is required by SRN"
bower install

npm run build
gulp build-test #This make the front-end files in public dir.
```

## Installation on docker.

[Please install Docker firstly](https://store.docker.com/search?offering=community&type=edition)

```
# pull BlockchainCodebase code docker image
docker pull saslinsunny2/BlockchainCodebase:v1.3.0
# run docker and BlockchainCodebase
docker run -i -t --name BlockchainCodebase1.3.0 -p 9305:9305 salinsunny2/BlockchainCodebase:v1.3.0 /bin/bash
root@e149b6732a48:/# cd /data/BlockchainCodebase && ./blockchain_manager.bash start
Blockchain server started as daemon ...
```

## Run

```
cd BlockchainCodebase && node app.js -c config.json
or
cd BlockchainCodebase && ./blockchain_manager.bash start
```
Then you can open ```http://localhost:9305``` in you browser.

## Usage

```
node app.js --help

  Usage: app [options]

  Options:

    -h, --help                 output usage information
    -V, --version              output the version number
    -c, --config <path>        Config file path
    -p, --port <port>          Listening port number
    -a, --address <ip>         Listening host name or ip
    -b, --blockchain <path>    Blockchain db path
    -g, --genesisblock <path>  Genesisblock path
    -x, --peers [peers...]     Peers list
    -l, --log <level>          Log level
    -d, --daemon               Run blockchain node as daemon
    --reindex                  Reindex blockchain
    --base <dir>               Base directory
```

## Default localnet genesis account

```
// This is the genesis account of localnet and twenty one hundred million XAS in it.
{
  "keypair": {
    "publicKey": "4600100dcf2ba6fcd4463c3bd8153302881ae048eb99720ef608629815576f1a",
    "privateKey": "a64af28537545301f66579604628b55c7a7a102752bbd8f0b0d152f9754e78d58065a105c785a08757727fded3a06f8f312e73ad40f1f3502e0232ea42e67efd"
  },
  "address": "AK9nkRQnfVWbSGvJLqAFyAPGzr2apsSfK8",
  "secret": "frozen hour curious thunder relief accuse soccer region resource marine juice chicken" // password
}
```

## Releated projects


## License

The MIT License (MIT)

Copyright (c) 2016-2018 SRN</br>
Copyright (c) 2015 Crypti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[Saffron-explorer]:https://explorer.saffron.io/
