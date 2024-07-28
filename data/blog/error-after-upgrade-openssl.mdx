---
title: 'Fix [dyld: Library not loaded: /usr/local/opt/openssl/lib/libcrypto.1.0.0.dylib] error after upgrading openssl on OSX'
date: '2020-04-06 12:11:08'
tags: ['debugging']
draft: false
summary: On the weekend I played around with small data-sciency stuff on my laptop. It was just a small project, and I need to install something on my machine, it requires me to run a command to update my homebrew. But I accidentally run `brew upgrade` instead of `brew update`. That prior command turns out upgrade all of the homebrew formula and packages installed on my laptop to the latest version.
images:
  [
    'https://res.cloudinary.com/martin-labs/image/upload/q_auto/v1591788098/Blog/error-on-osx-cover.jpg',
  ]
layout: PostLayout
---

On the weekend I played around with small data-sciency stuff on my laptop. It was just a small project, and I need to install something on my machine, it requires me to run a command to update my homebrew. But I accidentally run `brew upgrade` instead of `brew update`. That prior command turns out upgrade all of the homebrew formula and packages installed on my laptop to the latest version. At first I thought it was fine, until I encountered this error `dyld: Library not loaded: /usr/local/opt/openssl/lib/libcrypto.1.0.0.dylib`, then it starts my frustration.

After searching for the solution endlessly through the internet database, these are the articles / so thread that I found helpful.

- https://stackoverflow.com/questions/59006602/dyld-library-not-loaded-usr-local-opt-openssl-lib-libssl-1-0-0-dylib
- https://www.reddit.com/r/learnprogramming/comments/230cmf/downloaded_mysql_and_unable_to_run_dyld_error_osx/
- https://stackoverflow.com/questions/19168842/library-not-loaded-opt-local-lib-libssl-1-0-0-dylib-loaderror
- https://stackoverflow.com/questions/44125147/dyld-library-not-loaded-usr-local-opt-openssl-lib-libcrypto-1-0-0-dylib

After reading through all of the articles and trial-and-error to fix it, these are the things that I learned from it.

- When you update openssl package from homebrew it will update it to the latest package openssl@1.1
- That version is a breaking change, hence all of other packages that still rely on openssl@1.0 will fail and you may get this error `dyld: Library not loaded: /usr/local/opt/openssl/lib/libcrypto.1.0.0.dylib`
- That ruin everything that you need to run from the command line that has dependencies to openssl.
- This is how I fix it. I run brew install https://raw.githubusercontent.com/Homebrew/homebrew-core/30fd2b68feb458656c2da2b91e577960b11c42f4/Formula/openssl.rb . That command will install the openssl@1.0
- Then run brew switch openssl 1.0.2t will restore the openssl to the 1.0 version

Hopefully, that explanation above can help me in the future or everyone who also encountered the same error.
